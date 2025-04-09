import React from 'react';
import { englishCourseStages } from '../data';
import Link from 'next/link';
import { Button } from '@/components/ui/general/Button';

// 定义类型
interface ResourceItem {
  name: string;
  url: string;
}

interface Section {
  title: string;
  content: ResourceItem[];
}

// 获取大学阶段的数据
const universityData = englishCourseStages.find(stage => stage.id === '大学阶段');

export default function UniversityPage() {
  if (!universityData) {
    return <div>未找到大学阶段的数据</div>;
  }

  return (
    <div className="min-h-screen pt-32 relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      {/* 动态背景图案 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] bg-repeat opacity-20"></div>
      </div>

      {/* 返回按钮 */}
      <div className="container mx-auto px-4 mb-8">
        <Link href="/creation/course-english">
          <Button 
            buttonStyle={7} 
            className="flex items-center bg-amber-500/80 hover:bg-amber-600 text-white backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            返回课程主页
          </Button>
        </Link>
      </div>

      {/* 标题区域 */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl md:leading-[60px] font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
            {universityData.title}
          </h1>
          <p className="text-lg text-amber-800/80 dark:text-amber-200/80 max-w-3xl mx-auto">
            {universityData.description}
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(universityData.sections as Section[]).map((section, index) => (
            <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/50 dark:border-amber-900/50 h-full flex flex-col transform hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl text-amber-600 dark:text-amber-400">📚</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                  {section.title}
                </h2>
              </div>
              <ul className="mb-6 flex-grow space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-amber-800/80 dark:text-amber-200/80 flex items-start">
                    <span className="text-amber-500 mr-2">✦</span>
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-800 hover:underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
