import React, { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function PayNow() {
  const [sliderValue, setSliderValue] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const updateSliderValue = useCallback((clientX: number) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = Math.max(
        0,
        Math.min(100, ((clientX - rect.left) / rect.width) * 100),
      );
      setSliderValue(percentage);
    }
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true);
      updateSliderValue(e.clientX);
    },
    [updateSliderValue],
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setIsDragging(true);
      updateSliderValue(e.touches[0].clientX);
    },
    [updateSliderValue],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        updateSliderValue(e.clientX);
      }
    },
    [isDragging, updateSliderValue],
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
        updateSliderValue(e.touches[0].clientX);
      }
    },
    [isDragging, updateSliderValue],
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Event listeners para mouse e touch
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleEnd);
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

  return (
    <div className="min-h-screen w-full bg-[#141414] text-white overflow-hidden relative">
      {/* Main Container - Mobile sized but responsive */}
      <div className="mx-auto max-w-[375px] min-h-screen bg-[#141414] relative sm:max-w-md md:max-w-lg lg:max-w-xl">
        {/* Clean Status Bar - No indicators */}
        <div className="w-full h-[20px] pt-[15px]"></div>

        {/* Navigation Header */}
        <div className="flex justify-between items-center px-6 mt-[60px] mb-[41px]">
          <button
            onClick={() => window.history.back()}
            className="flex w-12 h-12 p-[10px] justify-center items-center rounded-[50px] bg-[#111] neumorphic-outset hover:bg-[#1a1a1a] transition-colors"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 22.7917L5.83337 14.625L14 6.45837"
                stroke="#838383"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.1667 14.625H5.83337"
                stroke="#838383"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h1 className="text-[#9a9a9a] font-sf-pro text-[18px] font-medium tracking-[-0.72px] text-center">
            Pay Now
          </h1>
          <button
            onClick={() => navigate("/payments")}
            className="flex w-12 h-12 p-[10px] justify-center items-center rounded-[50px] bg-[#111] neumorphic-outset hover:bg-[#1a1a1a] transition-colors"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66663 14.625H23.3333"
                stroke="#838383"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.66663 21.625H23.3333"
                stroke="#838383"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.66663 7.625H23.3333"
                stroke="#838383"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mb-[41px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a6e05b6bfc738ab11e2bf6ef98a9763e71d2051?width=310"
            alt=""
            className="w-[155px] h-[196px] rounded-[32px] border-4 border-[#191919] bg-[#111] neumorphic-profile object-cover"
          />
        </div>

        {/* Balance Section */}
        <div className="flex flex-col items-center gap-1 mb-[41px]">
          <div className="text-white/70 font-sf-pro-rounded text-[16px] font-medium text-center">
            Balance
          </div>
          <div className="text-white font-sf-pro-display text-[18px] font-semibold text-center">
            $34,657.00
          </div>
        </div>

        {/* Min/Max Balance Labels */}
        <div className="flex justify-between items-center px-6 mb-[41px] relative">
          <div className="text-white/60 font-sf-pro-rounded text-[13px] font-normal text-center">
            Min balance
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="w-[60px] h-[27px] rounded-[8px] bg-[#3b3b3b] relative">
              <div className="text-white font-sf-pro-rounded text-[10px] font-medium text-center absolute top-2 left-1/2 transform -translate-x-1/2 w-[53px] h-3">
                $34,657.00
              </div>
            </div>
          </div>
          <div className="text-white/60 font-sf-pro-rounded text-[13px] font-normal text-center">
            Max balance
          </div>
        </div>

        {/* Interactive Slider */}
        <div className="relative mx-6 mb-[12px]">
          <div
            ref={sliderRef}
            className="w-full h-[14px] rounded-[60px] bg-[#2c2c2c] cursor-pointer relative"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* Progress Fill */}
            <div
              className="h-[14px] rounded-[60px] bg-[#0071e3] absolute top-0 left-0 transition-all duration-75 ease-out"
              style={{ width: `${sliderValue}%` }}
            />

            {/* Slider Handle */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-[12px] bg-[#F5F5F5] neumorphic-slider cursor-grab active:cursor-grabbing transition-all duration-75 ease-out"
              style={{
                left: `calc(${sliderValue}% - 12px)`,
                transform: `translateY(-50%) ${isDragging ? "scale(1.1)" : "scale(1)"}`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[18px] h-[18px] rounded-full bg-[#1D92F2]"></div>
              </div>
            </div>
          </div>

          {/* Balance Value Display */}
          <div className="flex justify-center mt-4">
            <div className="text-white/70 font-sf-pro-rounded text-[12px] font-medium">
              $
              {(34657 * (sliderValue / 100)).toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </div>
        </div>

        {/* Media Controls */}
        <div className="flex justify-between items-center px-6 mb-[41px]">
          <button className="text-[#999] font-sf-pro-display text-[16px] font-extrabold flex w-[74px] h-12 justify-center items-center rounded-[50px] bg-[#111] neumorphic-outset hover:bg-[#1a1a1a] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white font-sf-pro-display text-[22px] font-normal flex w-[74px] h-12 justify-center items-center rounded-[50px] bg-[#0071e3] neumorphic-inset hover:bg-[#0066cc] transition-colors"
          >
            {isPlaying ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          <button className="text-[#999] font-sf-pro-display text-[16px] font-extrabold flex w-[74px] h-12 justify-center items-center rounded-[50px] bg-[#111] neumorphic-outset hover:bg-[#1a1a1a] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>
        </div>

        {/* PayNow Indicator */}
        <div className="flex justify-center items-center w-full h-[34px] pt-[21px] pb-2">
          <div className="w-[134px] h-[5px] rounded-[100px] bg-white"></div>
        </div>
      </div>
    </div>
  );
}
