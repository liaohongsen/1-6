
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-3 overflow-hidden">
      {/* Top Header Branding - Simplified */}
      <div className="px-6 flex justify-between items-center mb-3">
        <div className="group">
          <h2 className="text-2xl font-black text-brand-orange leading-none tracking-tighter">YUSHI</h2>
          <p className="text-[5px] tracking-[0.4em] text-gray-400 font-bold uppercase">Education Consulting</p>
        </div>
        {/* Removed 2026 branding as requested */}
      </div>

      {/* Main Title Area */}
      <div className="px-6 mb-3">
        <h1 className="text-5xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-2">
          留学<span className="text-brand-orange">指南</span>
        </h1>
        <div className="bg-brand-orange/95 backdrop-blur-md text-white p-3 rounded-xl shadow-xl shadow-orange-100 border border-orange-400/10">
          <p className="text-[11px] leading-relaxed font-medium">
            以<span className="font-extrabold text-orange-100">医学与心理学</span>为核心，提供覆盖学术成长与职业发展的<span className="font-extrabold underline decoration-orange-300 underline-offset-4 decoration-2">全路径支持</span>。
          </p>
        </div>
      </div>

      {/* Hero Image Section - Further tightened */}
      <div className="px-5 mb-3">
        <div className="relative h-32 rounded-[28px] overflow-hidden shadow-lg ring-1 ring-black/5">
          <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80" 
            alt="Medical Professional" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-950/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-3 left-6 right-6 flex justify-between items-end text-white">
            <div className="text-[8px] font-black uppercase tracking-[0.2em] opacity-90">Medical Excellence</div>
            <div className="text-[7px] font-bold border border-white/30 px-2 py-0.5 rounded-full backdrop-blur-md bg-white/10">UK • CN</div>
          </div>
        </div>
      </div>

      {/* High Density Stats Bar */}
      <div className="grid grid-cols-3 gap-0 border-y border-orange-50 bg-gradient-to-b from-white to-orange-50/10">
        {[
          { label: '成功案例', val: '500+' },
          { label: '录取通知', val: '2000+' },
          { label: '服务覆盖', val: '全球' }
        ].map((s, i) => (
          <div key={i} className={`py-2 text-center ${i < 2 ? 'border-r border-orange-100' : ''}`}>
            <div className="text-xs font-black text-brand-orange leading-none tracking-tight">{s.val}</div>
            <div className="text-[7px] text-gray-400 font-bold mt-0.5 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
