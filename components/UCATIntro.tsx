
import React from 'react';

export const UCATIntro: React.FC = () => {
  return (
    <section className="p-3 bg-orange-50/10 space-y-2.5">
      <div className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden">
        <div className="bg-brand-orange px-3 py-1">
          <h2 className="text-[11px] font-bold text-white tracking-tight">什么是 UCAT?</h2>
        </div>
        
        <div className="p-2.5 space-y-1.5">
          <p className="text-[10px] text-gray-600 leading-relaxed">
            UCAT 是评估医学潜力与临床思维能力的测评。考察逻辑推理、数据分析、快速决策与情境判断，是英联邦医学院筛选的重要依据。
          </p>

          <div className="p-2 bg-gray-50/50 rounded-lg border border-gray-100">
            <p className="text-[9px] font-bold text-brand-orange mb-0.5">中国学生难点：</p>
            <p className="text-[9px] text-gray-500 leading-snug">
              对多数中国学生而言，UCAT 的难点不在“学不会”，而在于不了解考试逻辑、训练方式错误、缺乏有效反馈机制。所以，UCAT 更考验系统训练与策略管理，而非临时刷题。
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden">
        <div className="bg-brand-orange px-3 py-1">
          <h2 className="text-[11px] font-bold text-white tracking-tight">准备周期建议</h2>
        </div>
        
        <div className="p-2.5 space-y-2">
          <p className="text-[10px] text-gray-600 leading-relaxed">
            {/* 建议预留 <span className="text-brand-orange font-black">6-10 周</span> 系统周期，结合专项练习与模考。 */}
            根据学生基础与目标分数不同，建议预留 6–10 周的系统备考周期。多数学生在备考阶段，每周安排 1–2 次针对性训练，并结合课后专项练习与模考复盘，效果更为稳定。如果需要同时兼顾校内课程或竞赛，越早开始准备，越能降低时间压力与试错风险。
          </p>
          {/* <div className="bg-brand-orange/5 text-brand-orange p-1.5 rounded-lg text-center border border-brand-orange/10">
             <p className="text-[9px] font-bold italic tracking-tight">越早准备，时间压力与试错风险越低。</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};
