
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fdf2e9] pt-6 pb-5 px-6 text-center">
      {/* Brand Header */}
      <div className="mb-3">
        <h2 className="text-2xl font-black text-brand-orange tracking-tight mb-1">
          YUSHI (博睿医智)
        </h2>
        <div className="space-y-0.5">
          <p className="text-[11px] font-bold text-[#8c5b3f]">以医学与心理学为核心</p>
          <p className="text-[11px] font-bold text-[#8c5b3f]">提供覆盖学术成长与职业发展的全程支持</p>
        </div>
      </div>

      {/* Horizontal Divider */}
      <div className="max-w-[70%] mx-auto h-[1px] bg-brand-orange/20 mb-5"></div>

      {/* Main Content Area: Two Columns - Compacted */}
      <div className="flex justify-center items-center gap-6 mb-6 max-w-sm mx-auto">
        {/* Left Column: Contact */}
        <div className="text-left">
          <h4 className="text-brand-orange font-black text-[11px] mb-2">联系我们</h4>
          <div className="space-y-1">
            <p className="text-[12px] font-black text-[#5d4037] whitespace-nowrap">
              +86 13162611127 (中国)
            </p>
            <p className="text-[12px] font-black text-[#5d4037] whitespace-nowrap">
              +44 07419735373 (英国)
            </p>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="w-[1px] h-10 bg-brand-orange/20"></div>

        {/* Right Column: QR Code */}
        <div className="flex flex-col items-center">
          <h4 className="text-brand-orange font-black text-[11px] mb-2">官方微信</h4>
          <div className="bg-white p-0.5 rounded-lg shadow-sm">
            <div className="w-14 h-14 rounded-md overflow-hidden relative">
               <img 
                 src="./images/wechat.jpg" 
                 alt="QR Code" 
                 className="w-full h-full object-cover opacity-90"
               />
               {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="w-3.5 h-3.5 bg-white rounded-sm flex items-center justify-center shadow-xs">
                    <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-[#07C160]">
                      <path d="M8.5,13.5C9.33,13.5 10,12.83 10,12C10,11.17 9.33,10.5 8.5,10.5C7.67,10.5 7,11.17 7,12C7,12.83 7.67,13.5 8.5,13.5M15.5,13.5C16.33,13.5 17,12.83 17,12C17,11.17 16.33,10.5 15.5,10.5C14.67,10.5 14,11.17 14,12C14,12.83 14.67,13.5 15.5,13.5M12,2A10,10 0 0,0 2,12C2,13.31 2.25,14.56 2.71,15.7L1,21L6.65,19.64C7.67,20.5 8.78,21.18 10,21.61L10,21C10,15.47 14.47,11 20,11L20.61,11C21.18,9.78 22,8.67 22,7.5A10,10 0 0,0 12,2Z" />
                    </svg>
                 </div>
               </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-2">
        <p className="text-[9px] font-black text-brand-orange/40 tracking-[0.2em] uppercase">
          © 2026 YUSHI MEDICAL EDUCATION
        </p>
      </div>
    </footer>
  );
};
