import React from 'react';

const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg'
];

export const CompetitionShowcase: React.FC = () => {
  return (
    <section className="p-3 bg-[#fcfcfc] space-y-4">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-1 h-4 bg-brand-orange rounded-full"></div>
        <h3 className="text-base font-black text-gray-800 tracking-tight">部分竞赛成果展示</h3>
      </div>

      <p className="text-[10px] text-gray-500 font-medium">点击图片可查看原图</p>

      <div className="grid grid-cols-2 gap-3">
        {images.map((name, idx) => (
          <a
            key={name}
            href={`/images/${name}`}
            target="_blank"
            rel="noreferrer"
            className="block rounded-[18px] overflow-hidden shadow-md ring-1 ring-black/5 bg-white"
          >
            <img
              src={`/images/${name}`}
              alt={`竞赛成果 ${idx + 1}`}
              className="w-full h-32 object-contain bg-[#fff7f0]"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
};
