
import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <section className="p-4 bg-white border-b border-orange-50/30 relative">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1 h-3.5 bg-brand-orange rounded-full shadow-sm"></div>
        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">关于我们｜ABOUT US</h3>
      </div>

      <div className="space-y-3">
        <p className="text-[11px] text-gray-600 leading-relaxed text-justify">
          <span className="font-black text-gray-900 border-b border-orange-200">YUSHI 留学教育</span> 始于英国，团队形成“海外一线信息把控 + 国内高响应交付”体系。我们专注<span className="text-brand-orange font-black">医学、心理学及相关学科</span>，不仅帮助申请，更关注专业匹配度及未来就业竞争力。
        </p>
        
        <p className="text-[11px] text-gray-600 leading-relaxed text-justify">
          提供多国联申服务，围绕<span className="font-black text-gray-800 bg-orange-50 px-1">“专业匹配—规划—申请落地—职业发展”</span>全链路。协助职业方向梳理与路径定位，让申请真正为职业发展服务。
        </p>

        <div className="bg-gradient-to-br from-orange-50/50 to-white p-3 rounded-2xl border border-orange-100/50 flex items-center justify-between">
          <div className="text-center border-r border-orange-200/50 pr-4 flex-1">
            <div className="text-lg font-black text-brand-orange leading-none italic">500+</div>
            <div className="text-[8px] text-gray-400 mt-1 uppercase font-bold tracking-tighter">累计服务学生</div>
          </div>
          <div className="text-center pl-4 flex-1">
            <div className="text-lg font-black text-brand-orange leading-none italic">2000+</div>
            <div className="text-[8px] text-gray-400 mt-1 uppercase font-bold tracking-tighter">海外录取通知</div>
          </div>
        </div>
      </div>
    </section>
  );
};
