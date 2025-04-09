"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TextToSpeech } from '@/components/ui/utils/text-to-speech';
import { Button } from '@/components/ui/general/Button';
import Image from 'next/image';

interface AnimalLearningModalProps {
  isOpen: boolean;
  onClose: () => void;
  voiceSettings: {
    isMale: boolean;
    rate: number;
  };
}

interface Animal {
  name: string;
  image: string;
  emoji: string;
}

const AnimalLearningModal: React.FC<AnimalLearningModalProps> = ({ isOpen, onClose, voiceSettings }) => {
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imageError, setImageError] = useState<Record<string, boolean>>({});
  
  // 静态动物数据 - 增加到50个
  const animals: Animal[] = [
    { name: 'Lion', image: '/images/animals/lion.png', emoji: '🦁' },
    { name: 'Tiger', image: '/images/animals/tiger.png', emoji: '🐯' },
    { name: 'Elephant', image: '/images/animals/elephant.png', emoji: '🐘' },
    { name: 'Giraffe', image: '/images/animals/giraffe.png', emoji: '🦒' },
    { name: 'Zebra', image: '/images/animals/zebra.png', emoji: '🦓' },
    { name: 'Kangaroo', image: '/images/animals/kangaroo.png', emoji: '🦘' },
    { name: 'Koala', image: '/images/animals/koala.png', emoji: '🐨' },
    { name: 'Panda', image: '/images/animals/panda.png', emoji: '🐼' },
    { name: 'Penguin', image: '/images/animals/penguin.png', emoji: '🐧' },
    { name: 'Dolphin', image: '/images/animals/dolphin.png', emoji: '🐬' },
    { name: 'Whale', image: '/images/animals/whale.png', emoji: '🐋' },
    { name: 'Shark', image: '/images/animals/shark.png', emoji: '🦈' },
    { name: 'Octopus', image: '/images/animals/octopus.png', emoji: '🐙' },
    { name: 'Butterfly', image: '/images/animals/butterfly.png', emoji: '🦋' },
    { name: 'Eagle', image: '/images/animals/eagle.png', emoji: '🦅' },
    { name: 'Owl', image: '/images/animals/owl.png', emoji: '🦉' },
    { name: 'Parrot', image: '/images/animals/parrot.png', emoji: '🦜' },
    { name: 'Frog', image: '/images/animals/frog.png', emoji: '🐸' },
    { name: 'Turtle', image: '/images/animals/turtle.png', emoji: '🐢' },
    { name: 'Snake', image: '/images/animals/snake.png', emoji: '🐍' },
    { name: 'Crocodile', image: '/images/animals/crocodile.png', emoji: '🐊' },
    { name: 'Hippo', image: '/images/animals/hippo.png', emoji: '🦛' },
    { name: 'Rhino', image: '/images/animals/rhino.png', emoji: '🦏' },
    { name: 'Gorilla', image: '/images/animals/gorilla.png', emoji: '🦍' },
    { name: 'Chimpanzee', image: '/images/animals/chimpanzee.png', emoji: '🐵' },
    { name: 'Cheetah', image: '/images/animals/cheetah.png', emoji: '🐆' },
    { name: 'Leopard', image: '/images/animals/leopard.png', emoji: '🐆' },
    { name: 'Wolf', image: '/images/animals/wolf.png', emoji: '🐺' },
    { name: 'Fox', image: '/images/animals/fox.png', emoji: '🦊' },
    { name: 'Bear', image: '/images/animals/bear.png', emoji: '🐻' },
    { name: 'Monkey', image: '/images/animals/monkey.png', emoji: '🐒' },
    { name: 'Rabbit', image: '/images/animals/rabbit.png', emoji: '🐰' },
    { name: 'Hedgehog', image: '/images/animals/hedgehog.png', emoji: '🦔' },
    { name: 'Squirrel', image: '/images/animals/squirrel.png', emoji: '🐿️' },
    { name: 'Deer', image: '/images/animals/deer.png', emoji: '🦌' },
    { name: 'Horse', image: '/images/animals/horse.png', emoji: '🐎' },
    { name: 'Cow', image: '/images/animals/cow.png', emoji: '🐄' },
    { name: 'Pig', image: '/images/animals/pig.png', emoji: '🐖' },
    { name: 'Sheep', image: '/images/animals/sheep.png', emoji: '🐑' },
    { name: 'Goat', image: '/images/animals/goat.png', emoji: '🐐' },
    { name: 'Chicken', image: '/images/animals/chicken.png', emoji: '🐔' },
    { name: 'Duck', image: '/images/animals/duck.png', emoji: '🦆' },
    { name: 'Turkey', image: '/images/animals/turkey.png', emoji: '🦃' },
    { name: 'Peacock', image: '/images/animals/peacock.png', emoji: '🦚' },
    { name: 'Flamingo', image: '/images/animals/flamingo.png', emoji: '🦩' },
    { name: 'Bat', image: '/images/animals/bat.png', emoji: '🦇' },
    { name: 'Bee', image: '/images/animals/bee.png', emoji: '🐝' },
    { name: 'Ant', image: '/images/animals/ant.png', emoji: '🐜' },
    { name: 'Ladybug', image: '/images/animals/ladybug.png', emoji: '🐞' },
    { name: 'Spider', image: '/images/animals/spider.png', emoji: '🕷️' },
    { name: 'Scorpion', image: '/images/animals/scorpion.png', emoji: '🦂' },
    { name: 'Crab', image: '/images/animals/crab.png', emoji: '🦀' },
    { name: 'Lobster', image: '/images/animals/lobster.png', emoji: '🦞' },
    { name: 'Shrimp', image: '/images/animals/shrimp.png', emoji: '🦐' },
    { name: 'Fish', image: '/images/animals/fish.png', emoji: '🐟' },
    { name: 'Tropical Fish', image: '/images/animals/tropical-fish.png', emoji: '🐠' },
    { name: 'Blowfish', image: '/images/animals/blowfish.png', emoji: '🐡' },
    { name: 'Turtle', image: '/images/animals/turtle.png', emoji: '🐢' },
    { name: 'Lizard', image: '/images/animals/lizard.png', emoji: '🦎' },
    { name: 'Dragon', image: '/images/animals/dragon.png', emoji: '🐉' },
    { name: 'Unicorn', image: '/images/animals/unicorn.png', emoji: '🦄' },
    { name: 'Dinosaur', image: '/images/animals/dinosaur.png', emoji: '🦕' },
    { name: 'T-Rex', image: '/images/animals/t-rex.png', emoji: '🦖' }
  ];

  // 检测移动设备
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // 选择动物
  const handleSelectAnimal = (animal: Animal) => {
    setSelectedAnimal(animal);
  };

  // 处理图片加载错误
  const handleImageError = (animalName: string) => {
    setImageError(prev => ({
      ...prev,
      [animalName]: true
    }));
  };

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
                学习更多动物
              </h2>
              <Button
                buttonStyle={7}
                className="p-2"
                onClick={onClose}
              >
                ✕
              </Button>
            </div>
            
            <div className={`flex flex-1 overflow-hidden ${isMobile ? 'flex-col' : 'flex-row'}`}>
              {/* 动物列表 */}
              <div className={`${isMobile ? 'w-full mb-4 border-b border-gray-200 dark:border-gray-700 pb-4' : 'w-1/3 pr-4 border-r border-gray-200 dark:border-gray-700'} overflow-y-auto`}>
                <div className={`grid ${isMobile ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-1'} gap-2`}>
                  {animals.map((animal, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedAnimal?.name === animal.name
                          ? 'bg-blue-100 dark:bg-blue-900'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                      onClick={() => handleSelectAnimal(animal)}
                    >
                      <TextToSpeech
                        text={animal.name}
                        rate={voiceSettings.rate}
                        voice={voiceSettings.isMale ? 'male' : 'female'}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{animal.name}</span>
                          <span className="text-blue-500">🔊</span>
                        </div>
                      </TextToSpeech>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 动物详情 */}
              <div className={`${isMobile ? 'w-full' : 'w-2/3 pl-4'} flex flex-col`}>
                {selectedAnimal ? (
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <h3 className="text-3xl font-bold mb-6">{selectedAnimal.name}</h3>
                    
                    <div className="mb-6">
                      {imageError[selectedAnimal.name] ? (
                        <div className="text-9xl mb-4">{selectedAnimal.emoji}</div>
                      ) : (
                        <Image 
                          src={selectedAnimal.image} 
                          alt={selectedAnimal.name}
                          width={400}
                          height={400}
                          className="max-w-full max-h-[400px] rounded-lg shadow-lg"
                          onError={() => handleImageError(selectedAnimal.name)}
                        />
                      )}
                    </div>
                    
                    <TextToSpeech
                      text={selectedAnimal.name}
                      rate={voiceSettings.rate}
                      voice={voiceSettings.isMale ? 'male' : 'female'}
                    >
                      <Button
                        buttonStyle={7}
                        className="mt-4"
                      >
                        🔊 听发音
                      </Button>
                    </TextToSpeech>
                  </div>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    请从左侧选择一个动物
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AnimalLearningModal; 