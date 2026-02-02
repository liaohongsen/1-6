
import React from 'react';

export const CompetitionSection: React.FC = () => {
  const pricing = [
    { h: "10", s: "1,000", sn: "1,300" },
    { h: "30", s: "950", sn: "1,200" },
    { h: "50", s: "900", sn: "1,100" },
    { h: "100", s: "850", sn: "1,000" }
  ];

  return (
    <section className="p-3 bg-[#fcfcfc] space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-1 h-4 bg-brand-orange rounded-full"></div>
        <h3 className="text-base font-black text-gray-800 tracking-tight">为什么参加医学竞赛？</h3>
      </div>

      <div className="bg-white rounded-[24px] shadow-md border border-gray-100 p-4">
        <p className="text-[11px] text-gray-600 leading-relaxed text-justify mb-3">
          医学院看重学术潜力与真实兴趣。竞赛是区分“成绩好”和“适合学医”的关键依据。
        </p>
        
        <div className="bg-[#fff7f0] p-3 rounded-xl border border-orange-50">
          <p className="text-[8px] font-black text-brand-orange mb-2 uppercase tracking-widest">常见医学&心理学竞赛</p>
          <div className="flex flex-wrap gap-1">
            {['BBO', 'USABO', 'UKChO', 'EPQ', 'John Locke'].map(t => (
              <span key={t} className="text-[8px] font-black px-2 py-0.5 bg-white text-brand-orange rounded-full border border-orange-100 shadow-sm">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 bg-brand-orange rounded-full"></div>
          <h3 className="text-base font-black text-gray-800 tracking-tight">1v1 竞赛辅导价格表</h3>
        </div>
        
        <div className="bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-lg">
          <div className="grid grid-cols-3 bg-brand-orange text-[8px] font-black text-white text-center py-2.5 uppercase tracking-widest">
            <div>课时</div>
            <div>标准导师</div>
            <div>资深导师</div>
          </div>
          {pricing.map((r, i) => (
            <div key={i} className={`grid grid-cols-3 text-[11px] text-center py-2 border-b border-gray-50 last:border-0 ${i % 2 === 1 ? 'bg-orange-50/5' : ''}`}>
              <div className="font-black text-gray-400">{r.h} 课时</div>
              <div className="text-gray-500 font-bold">¥{r.s}</div>
              <div className="font-black text-brand-orange">¥{r.sn}</div>
            </div>
          ))}
        </div>
        <p className="text-[8px] text-center text-gray-400 font-medium italic">（辅导范围涵盖主流医学竞赛）</p>
      </div>
    </section>
  );
};
