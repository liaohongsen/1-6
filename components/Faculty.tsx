
import React from 'react';

export const Faculty: React.FC = () => {
  return (
    <section className="p-3 bg-[#fcfcfc] space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-1 h-4 bg-brand-orange rounded-full"></div>
        <h3 className="text-base font-black text-gray-800 tracking-tight">部分老师介绍</h3>
      </div>

      <div className="space-y-3">
        {[
          {
            name: "Dr. Amna",
            title: "NHS 在职医生｜辅导导师",
            expertise: [
              "UCAT、MMI、MCAT 等考试辅导",
              "国际医生考试（PLAB、UKMLA）备考",
              "英国执业路径解析，纯英文教学"
            ]
          },
          {
            name: "Zoe 博士",
            title: "香港大学博士｜讲师及研究助理",
            expertise: [
              "医工交叉方向申请规划",
              "医学申请课程辅导（MMI、EPQ等）",
              "博士阶段科研能力构建与方向定位"
            ]
          }
        ].map((teacher, i) => (
          <div key={i} className="bg-white rounded-[24px] p-4 shadow-md border border-gray-100">
            <div className="flex flex-col mb-3">
              <h4 className="text-lg font-black text-gray-900 mb-0.5">{teacher.name}</h4>
              <p className="text-[11px] font-bold text-brand-orange leading-snug opacity-80">
                {teacher.title}
              </p>
            </div>
            
            <div className="bg-[#fff7f0] p-3 rounded-xl border border-orange-50">
              <p className="text-[8px] font-black text-gray-400 mb-2 uppercase tracking-widest">核心擅长方向</p>
              <ul className="space-y-1.5">
                {teacher.expertise.map((item, idx) => (
                  <li key={idx} className="text-[10px] text-gray-700 font-medium flex gap-2 leading-snug">
                    <span className="text-brand-orange mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
