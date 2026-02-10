
import React from 'react';

export const TutoringPlans: React.FC = () => {
  const plans = [
    {
      title: "方案一｜UCAT 10 节核心提升辅导",
      price: "15,000 RMB",
      target: [
        "UCAT 首次备考，希望建立正确解题方法与节奏的学生",
        "需要明确各模块策略，避免盲目刷题",
        "希望在有限时间内完成系统梳理与提升"
      ],
      services: [
        "每节课60分钟 1v1 专项训练与方法讲解",
        "作业批改与错因分析",
        "模考诊断与薄弱项定位",
        "针对性训练建议与学习规划",
        "每个学员配有助教督学，确保课后训练落地执行"
      ]
    },
    {
      title: "方案二｜UCAT 20 节系统强化辅导",
      price: "29,000 RMB",
      target: [
        "希望 UCAT 成绩具备强竞争力而非“达标”的学生",
        "不愿承担试错风险，以充分准备换取稳定发挥",
        "需要长期训练，在速度、准确率与抗压上全面提升",
        "希望通过多轮模考与反馈，持续拉高整体表现上限的学生"
      ],
      services: [
        "每节课60分钟 1V1 全模块系统训练与深度讲解",
        "多轮模考分析与动态调整方案",
        "作业逐题批改与专项强化",
        "长期学习节奏管理与督学支持",
        "针对目标院校的 UCAT 分数策略建议"
      ]
    }
  ];

  return (
    <section className="p-3 bg-[#fcfcfc] space-y-4">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-1 h-4 bg-brand-orange rounded-full"></div>
        <h3 className="text-base font-black text-gray-800 tracking-tight">YUSHI UCAT 辅导方案</h3>
      </div>

      <div className="space-y-4">
        {plans.map((p, i) => (
          <div key={i} className="bg-white rounded-[24px] p-5 shadow-lg border border-gray-100">
            <h3 className="text-base font-black mb-1 leading-tight text-brand-orange">{p.title}</h3>
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-[10px] font-bold text-gray-400">价格：</span>
              <span className="text-xl font-black text-[#1a2b3c] tracking-tight">{p.price}</span>
            </div>

            <div className="mb-3">
              <h4 className="text-[8px] font-black text-brand-orange/60 mb-2 uppercase tracking-widest">适合人群</h4>
              <ul className="space-y-1.5">
                {p.target.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-[10px] leading-relaxed font-medium text-gray-700">
                    <span className="text-orange-200 mt-1 shrink-0 text-[3px]">●</span> 
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#fff7f0] p-4 rounded-[20px] border border-orange-50">
              <h4 className="text-[8px] font-black text-brand-orange mb-2">服务包含</h4>
              <ul className="space-y-1.5">
                {p.services.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-[11px] font-bold leading-relaxed text-gray-800 items-center">
                    <div className="w-3.5 h-3.5 bg-brand-orange rounded-full flex items-center justify-center shrink-0">
                      <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="bg-white border border-dashed border-orange-200 rounded-[24px] p-5 text-center shadow-sm">
          <div className="flex justify-center mb-2">
            <div className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e67e22" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
          </div>
          <h4 className="text-sm font-black text-brand-orange mb-0.5">单节 UCAT 针对性辅导</h4>
          <p className="text-lg font-black text-gray-900 mb-3">1,500 RMB / 节</p>
          <div className="bg-gray-50/50 p-3 rounded-lg text-left">
            <ul className="space-y-1">
              {["已有一定基础，希望单项突破或短期调整策略", "模考后需要专业诊断，快速找出提分关键点", "希望在报长期课程前，先体验专业医学向辅导方式的学生"].map((item, idx) => (
                <li key={idx} className="text-[9px] text-gray-500 flex gap-2">
                  <span className="text-gray-300">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
