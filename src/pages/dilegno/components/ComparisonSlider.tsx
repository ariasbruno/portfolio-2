import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronsLeftRight, MousePointer2, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { translations } from '@/i18n/translations';

interface ComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  onExpand?: () => void;
  isExpandedMode?: boolean;
}

export function ComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
  className = "",
  onExpand,
  isExpandedMode = false
}: ComparisonProps) {
  const t = translations;
  const actualBeforeLabel = beforeLabel || t.common.legacyLabel;
  const actualAfterLabel = afterLabel || t.common.modernLabel;

  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent | MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  }, [isDragging]);

  const handleTouchMove = (e: React.TouchEvent | TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };

    updateWidth();

    // Use ResizeObserver for robust sizing handles (e.g. modal open, window resize)
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);

    window.addEventListener('resize', updateWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, [handleMouseMove]);

  // Update mouse/touch handlers to use current width logic if needed, 
  // though they use getBoundingClientRect() directly which is fine.

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove]);

  return (
    <div
      ref={containerRef}
      data-cursor-type="compare"
      className={`relative w-full ${!isExpandedMode ? 'aspect-video md:aspect-21/9' : ''} rounded-xl overflow-hidden shadow-2xl border border-white/10 group select-none cursor-none touch-none ${className}`}
      onMouseDown={handleMouseDown}
      onTouchMove={handleTouchMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="slider"
      aria-valuenow={sliderPosition}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
    >
      {/* Ghost Images for Height (Expanded Mode Only) */}
      {isExpandedMode && (
        <div className="grid grid-cols-1 opacity-0 pointer-events-none select-none" aria-hidden="true">
          <img src={beforeImage} alt="" className="col-start-1 row-start-1 w-full h-auto" />
          <img src={afterImage} alt="" className="col-start-1 row-start-1 w-full h-auto" />
        </div>
      )}

      {/* Main Content Layer */}
      <div className="absolute inset-0 w-full h-full">
        {/* AFTER Image (Background) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            alt={actualAfterLabel}
            className={`w-full block object-top ${isExpandedMode ? 'h-auto' : 'h-full object-cover'}`}
            src={afterImage}
          />
          <div className="absolute top-4 right-4 bg-p-dilegno-primary/90 text-black px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold border border-white/20 select-none whitespace-nowrap min-w-max"
            style={{ opacity: isExpandedMode ? 1 : 0.8 }}
          >
            {actualAfterLabel}
          </div>
        </div>

        {/* BEFORE Image (Clipped) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden border-r border-p-dilegno-primary/50 bg-[#111] z-30"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            alt={actualBeforeLabel}
            className={`absolute top-0 left-0 max-w-none block object-top ${isExpandedMode ? 'h-auto' : 'h-full object-cover'}`}
            src={beforeImage}
            style={{ width: containerWidth || '100%' }}
          />

          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium border border-white/20 select-none whitespace-nowrap min-w-max">
            {actualBeforeLabel}
          </div>
        </div>

        {/* Slider Handle */}
        <div
          data-compare-divider="true"
          className="absolute inset-y-0 w-1 bg-p-dilegno-primary/50 shadow-[0_0_20px_rgba(212,163,115,0.5)] z-40 flex items-center justify-center group-hover:bg-p-dilegno-primary transition-colors cursor-none"
          style={{ left: `${sliderPosition - 0.2}%` }}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface-dark border-2 border-p-dilegno-primary flex items-center justify-center shadow-2xl relative bg-[#1a1a1a]">
            <ChevronsLeftRight className="w-4 h-4 text-p-dilegno-primary" />
          </div>
        </div>
      </div>

      {/* Expand Button */}
      {onExpand && !isExpandedMode && (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onExpand();
          }}
          variant="icon"
          className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 backdrop-blur z-40 transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-p-dilegno-primary hover:text-black hover:border-p-dilegno-primary border-white/10 cursor-none"
          title={t.common.expandTitle}
        >
          <Maximize2 className="w-5 h-5" />
        </Button>
      )}

      {/* Interactive Hint */}
      {!isExpandedMode && (
        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur text-white px-4 py-2 rounded-full text-xs pointer-events-none flex items-center gap-2 border border-white/10 z-40 transition-all duration-300 ${!isDragging && isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
        >
          <MousePointer2 className="w-3 h-3" />
          {t.common.dragHint}
        </div>
      )}
    </div>
  );
}
