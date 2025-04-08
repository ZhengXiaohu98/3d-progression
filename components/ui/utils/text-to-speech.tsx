"use client";
import React, { useState, useEffect, useRef } from 'react';

interface TextToSpeechProps {
  text: string;
  rate?: number; // 语速，范围0.1-10，默认为1
  pitch?: number; // 音高，范围0-2，默认为1
  voice?: string; // 声音类型，可选值：'male' | 'female'
  children: React.ReactNode;
  className?: string;
}

export const TextToSpeech: React.FC<TextToSpeechProps> = ({
  text,
  rate = 1,
  pitch = 1,
  voice = 'female',
  children,
  className = '',
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [error, setError] = useState<string | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // 获取可用的声音列表
  useEffect(() => {
    const speechSynthesis = window.speechSynthesis;
    
    // 检查浏览器是否支持语音合成
    if (!speechSynthesis) {
      setError("您的浏览器不支持语音合成功能");
      return;
    }

    const loadVoices = () => {
      try {
        const voices = speechSynthesis.getVoices();
        console.log("可用语音列表:", voices.map(v => `${v.name} (${v.lang})`));
        setAvailableVoices(voices);
      } catch (err) {
        console.error("加载语音列表失败:", err);
        setError("加载语音列表失败");
      }
    };

    // 某些浏览器需要等待voices加载
    if (speechSynthesis.getVoices().length) {
      loadVoices();
    } else {
      speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      speechSynthesis.onvoiceschanged = null;
    };
  }, [voice]);

  // 根据voice参数选择合适的声音
  const getVoice = () => {
    if (!availableVoices.length) {
      console.log("没有可用的语音");
      return null;
    }
    
    // 检查文本是否为纯数字或英文
    const isEnglishContent = /^[0-9A-Za-z\s.,!?]+$/.test(text);
    
    // 优先使用英语语音
    const englishVoices = availableVoices.filter(v => 
      v.lang.includes('en') || v.lang.includes('en-US') || v.lang.includes('en-GB')
    );
    
    if (englishVoices.length > 0) {
      // 根据性别筛选英语语音
      const filteredEnglishVoices = englishVoices.filter(v => {
        if (voice === 'male') {
          return v.name.toLowerCase().includes('male') || 
                 v.name.toLowerCase().includes('man') || 
                 v.name.toLowerCase().includes('boy');
        } else {
          return v.name.toLowerCase().includes('female') || 
                 v.name.toLowerCase().includes('woman') || 
                 v.name.toLowerCase().includes('girl');
        }
      });
      
      if (filteredEnglishVoices.length > 0) {
        console.log("使用英语语音:", filteredEnglishVoices[0].name);
        return filteredEnglishVoices[0];
      }
      
      console.log("使用默认英语语音:", englishVoices[0].name);
      return englishVoices[0];
    }
    
    // 如果没有英语语音，尝试使用中文语音
    const chineseVoices = availableVoices.filter(v => 
      v.lang.includes('zh') || v.lang.includes('cmn')
    );
    
    if (chineseVoices.length > 0) {
      console.log("使用中文语音:", chineseVoices[0].name);
      return chineseVoices[0];
    }
    
    // 根据性别筛选声音
    const filteredVoices = availableVoices.filter(v => {
      if (voice === 'male') {
        return v.name.toLowerCase().includes('male') || 
               v.name.toLowerCase().includes('man') || 
               v.name.toLowerCase().includes('boy');
      } else {
        return v.name.toLowerCase().includes('female') || 
               v.name.toLowerCase().includes('woman') || 
               v.name.toLowerCase().includes('girl');
      }
    });

    if (filteredVoices.length > 0) {
      console.log("使用筛选后的语音:", filteredVoices[0].name);
      return filteredVoices[0];
    }
    
    // 如果没有找到合适的语音，使用第一个可用的语音
    console.log("使用默认语音:", availableVoices[0].name);
    return availableVoices[0];
  };

  const speak = () => {
    try {
      // 如果正在播放，先停止
      if (isSpeaking) {
        speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }

      // 创建新的语音实例
      const utterance = new SpeechSynthesisUtterance(text);
      utteranceRef.current = utterance;
      
      // 设置语音参数
      utterance.rate = rate;
      utterance.pitch = pitch;
      
      // 设置声音
      const selectedVoice = getVoice();
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      // 事件处理
      utterance.onstart = () => {
        console.log("开始播放语音");
        setIsSpeaking(true);
        setError(null);
      };
      
      utterance.onend = () => {
        console.log("语音播放结束");
        setIsSpeaking(false);
      };
      
      utterance.onerror = (event) => {
        console.error("语音播放错误:", event);
        setIsSpeaking(false);
        setError("语音播放失败");
      };

      // 开始播放
      speechSynthesis.speak(utterance);
    } catch (err) {
      console.error("语音播放异常:", err);
      setError("语音播放异常");
      setIsSpeaking(false);
    }
  };

  // 组件卸载时停止播放
  useEffect(() => {
    return () => {
      if (isSpeaking) {
        speechSynthesis.cancel();
      }
    };
  }, [isSpeaking]);

  return (
    <div 
      className={`cursor-pointer ${className}`} 
      onClick={speak}
      title={isSpeaking ? "点击停止" : "点击播放"}
    >
      {children}
    </div>
  );
};
