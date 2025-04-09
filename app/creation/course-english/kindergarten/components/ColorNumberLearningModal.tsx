"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TextToSpeech } from '@/components/ui/utils/text-to-speech';
import { Button } from '@/components/ui/general/Button';

interface ColorNumberLearningModalProps {
  isOpen: boolean;
  onClose: () => void;
  voiceSettings: {
    isMale: boolean;
    rate: number;
  };
}

interface ColorItem {
  name: string;
  color: string;
  emoji: string;
}

interface NumberItem {
  number: number;
  emoji: string;
}

const ColorNumberLearningModal: React.FC<ColorNumberLearningModalProps> = ({ isOpen, onClose, voiceSettings }) => {
  const [activeTab, setActiveTab] = useState<'colors' | 'numbers'>('colors');
  
  // 颜色数据
  const colors: ColorItem[] = [
    { name: 'Red', color: 'bg-red-500', emoji: '🔴' },
    { name: 'Blue', color: 'bg-blue-500', emoji: '🔵' },
    { name: 'Green', color: 'bg-green-500', emoji: '🟢' },
    { name: 'Yellow', color: 'bg-yellow-500', emoji: '🟡' },
    { name: 'Purple', color: 'bg-purple-500', emoji: '🟣' },
    { name: 'Orange', color: 'bg-orange-500', emoji: '🟠' },
    { name: 'Pink', color: 'bg-pink-500', emoji: '💗' },
    { name: 'Brown', color: 'bg-amber-700', emoji: '🟤' },
    { name: 'Black', color: 'bg-gray-900', emoji: '⚫' },
    { name: 'White', color: 'bg-gray-100', emoji: '⚪' },
    { name: 'Gray', color: 'bg-gray-500', emoji: '🔘' },
    { name: 'Gold', color: 'bg-yellow-400', emoji: '🌟' },
    { name: 'Silver', color: 'bg-gray-300', emoji: '✨' },
    { name: 'Cyan', color: 'bg-cyan-500', emoji: '💠' },
    { name: 'Magenta', color: 'bg-fuchsia-500', emoji: '💜' }
  ];

  // 数字数据
  const numbers: NumberItem[] = [
    { number: 1, emoji: '1️⃣' },
    { number: 2, emoji: '2️⃣' },
    { number: 3, emoji: '3️⃣' },
    { number: 4, emoji: '4️⃣' },
    { number: 5, emoji: '5️⃣' },
    { number: 6, emoji: '6️⃣' },
    { number: 7, emoji: '7️⃣' },
    { number: 8, emoji: '8️⃣' },
    { number: 9, emoji: '9️⃣' },
    { number: 10, emoji: '🔟' },
    { number: 11, emoji: '1️⃣1️⃣' },
    { number: 12, emoji: '1️⃣2️⃣' },
    { number: 13, emoji: '1️⃣3️⃣' },
    { number: 14, emoji: '1️⃣4️⃣' },
    { number: 15, emoji: '1️⃣5️⃣' },
    { number: 16, emoji: '1️⃣6️⃣' },
    { number: 17, emoji: '1️⃣7️⃣' },
    { number: 18, emoji: '1️⃣8️⃣' },
    { number: 19, emoji: '1️⃣9️⃣' },
    { number: 20, emoji: '2️⃣0️⃣' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                颜色和数字学习
              </h2>
              <Button
                buttonStyle={7}
                className="p-2"
                onClick={onClose}
              >
                ✕
              </Button>
            </div>
            
            {/* 标签切换 */}
            <div className="flex mb-4 border-b border-gray-200 dark:border-gray-700">
              <button
                className={`px-4 py-2 font-medium ${
                  activeTab === 'colors'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('colors')}
              >
                颜色
              </button>
              <button
                className={`px-4 py-2 font-medium ${
                  activeTab === 'numbers'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('numbers')}
              >
                数字
              </button>
            </div>
            
            {/* 内容区域 */}
            <div className="flex-1 overflow-y-auto">
              {activeTab === 'colors' ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {colors.map((color, index) => (
                    <TextToSpeech
                      key={index}
                      text={color.name}
                      rate={voiceSettings.rate}
                      voice={voiceSettings.isMale ? 'male' : 'female'}
                    >
                      <motion.div
                        className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md flex flex-col items-center cursor-pointer"
                      >
                        <div className={`w-16 h-16 ${color.color} rounded-full mb-2 flex items-center justify-center`}>
                          <span className="text-2xl">{color.emoji}</span>
                        </div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">{color.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">🔊</p>
                      </motion.div>
                    </TextToSpeech>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {numbers.map((num, index) => (
                    <TextToSpeech
                      key={index}
                      text={num.number.toString()}
                      rate={voiceSettings.rate}
                      voice={voiceSettings.isMale ? 'male' : 'female'}
                    >
                      <motion.div
                        className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md flex flex-col items-center cursor-pointer"
                      >
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-2 flex items-center justify-center">
                          <span className="text-2xl">{num.emoji}</span>
                        </div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">{num.number}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">🔊</p>
                      </motion.div>
                    </TextToSpeech>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ColorNumberLearningModal; 