import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
}) => {
  const scale = size === 'sm' ? 0.75 : size === 'lg' ? 1.25 : size === 'hero' ? 1.45 : 1;
  const wordmarkSize = size === 'hero'
    ? 'text-5xl sm:text-6xl lg:text-7xl'
    : 'text-2xl md:text-3xl';
  const hatSize = size === 'hero' ? { width: 46, height: 38 } : { width: 34, height: 28 };

  return (
    <div className={`inline-flex flex-col items-center select-none cursor-pointer group ${className}`}>
      <div className="flex items-center gap-1 relative">
        {/* Chef hat icon */}
        <div 
          className="relative -mr-1 z-10 transition-transform group-hover:-rotate-12 duration-300"
          style={{ transform: `scale(${scale}) translateY(-6px)` }}
        >
          <svg width={hatSize.width} height={hatSize.height} viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 14C8 14 5 17 6 22C4 23 3 26 5 28C7 30 11 30 12 30H28C29 30 33 30 35 28C37 26 36 23 34 22C35 17 32 14 28 14C28 9 22 7 19 8C16 7 12 9 12 14Z"
              fill="#FFD900"
              stroke="#0B100D"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d="M9 30H31V33C31 34 30 34 29 34H11C10 34 9 34 9 33V30Z"
              fill="#FFD900"
              stroke="#0B100D"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Wordmark: Bab (Yellow) + jus (Green) */}
        <div className={`flex items-baseline tracking-tight font-black ${wordmarkSize} drop-shadow-sm`}>
          <span 
            className="text-babjus-yellow font-extrabold tracking-normal"
            style={{ 
              WebkitTextStroke: '1px #0B100D',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))'
            }}
          >
            Bab
          </span>
          <span 
            className="text-green-500 font-extrabold tracking-normal -ml-0.5"
            style={{ 
              WebkitTextStroke: '1px #0B100D',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))'
            }}
          >
            jus
          </span>
        </div>
      </div>

      {showSubtitle && (
        <div className="flex flex-col items-center -mt-1 leading-none">
          <span 
            className={`${size === 'hero' ? 'text-[11px] sm:text-xs tracking-[0.32em]' : 'text-[9px] tracking-[0.25em]'} font-black uppercase ${
              variant === 'dark' ? 'text-white/90' : 'text-neutral-900'
            }`}
          >
            RESTAURANT
          </span>
          <span className={`${size === 'hero' ? 'text-[9px] sm:text-[10px]' : 'text-[7.5px]'} font-bold tracking-[0.2em] text-babjus-yellow uppercase`}>
            EL JADIDA
          </span>
        </div>
      )}
    </div>
  );
};
