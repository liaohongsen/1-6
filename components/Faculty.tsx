
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
            name: "Mohammad老师",
            title: "伦敦国王学院（KCL）医学院｜UCAT高分导师",
            expertise: [
              "UCAT考试辅导与冲分",
              "医学面试（MMI/Panel）",
              "医学个人陈述润色",
              "英国医学本科申请规划",
              "生物、化学及医学基础课程辅导"
            ],
            expertise1: [
              "UCAT取得3010分（Band 1）",
              "超5000+小时教学经验",
              "辅导学生获得多所英国医学院临床医学，牙医学面试及录取",
              "熟悉英国医学申请全流程与录取标准"
            ]
          },
          {
            name: "Rhea老师",
            title: "帝国理工医学院｜UCAT高分专项导师",
            expertise: [
              "UCAT全科冲刺提分（AR、QR单科顶尖）",
              "医学面试模拟训练",
              "医学申请文书与择校规划",
              "A-Level生物/化学/数学辅导"
            ],
            expertise1: [
              "UCAT总分2970，AR前1%、QR前5%",
              "A-Level三科全A*，GCSE九科9分，手握帝国理工、KCL、布里斯托医学院offer",
              "多名学员经辅导拿到帝国理工、UCL医学院录取",
              "定制针对性刷题方案，配套专属标注学习资料，高效补齐薄弱模块"
            ]
          },
          {
            name: "Olivia老师",
            title: "利兹大学医学院｜UCAT专项辅导导师",
            expertise: [
              "UCAT备考提分与答题技巧",
              "医学MMI面试专项训练",
              "A-Level生物、物理、数学辅导",
            ],
            expertise1: [
              "UCAT 2730分，SJT Band 2",
              "A-Level生物/物理/数学三科A*，GCSE七科9分",
              "学员UCAT提分明显，面试能力大幅提升，为学生拿到多所临床医学及牙科本科offer"
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

            <div className="bg-[#fff7f0] p-3 rounded-xl border border-orange-50">
              <p className="text-[8px] font-black text-gray-400 mb-2 uppercase tracking-widest">代表成果</p>
              <ul className="space-y-1.5">
                {teacher.expertise1.map((item, idx) => (
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
