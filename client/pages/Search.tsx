import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const cards = [
    {
      type: "meet-cody",
      title: "MEET CODY",
      subtitle: "Most viewed",
      subtitleHighlight: "Creator",
      background: "#fea43e",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7fb2efcbff6d4495a5f7c5205a2ac2680200fd78?width=183",
    },
    {
      type: "streaming",
      title: "ZIRK A\nSTREAMING",
      subtitle: "The New",
      subtitleHighlight: "Trendy",
      background: "linear-gradient(135deg,#ff6b6b,#4ecdc4)",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7fb2efcbff6d4495a5f7c5205a2ac2680200fd78?width=526",
    },
    {
      type: "meet-cody-alt",
      title: "MEET CODY",
      subtitle: "Most viewed",
      subtitleHighlight: "Creator",
      background: "#fea43e",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d89c7548fd0c3be6979738898064577b0ac0b46e?width=183",
      hasBlurEffects: true,
    },
    {
      type: "streaming-alt",
      title: "ZIRK A\nSTREAMING",
      subtitle: "The New",
      subtitleHighlight: "Trendy",
      background: "linear-gradient(135deg,#ff6b6b,#4ecdc4)",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/60ce07aa685511611632ef85a399c851bb0f9fdb?width=526",
    },
    {
      type: "sharing",
      title: "ZIRK A\nSHARING",
      subtitle: "The viewed",
      subtitleHighlight: "Newbie",
      background: "linear-gradient(135deg,#ff6b6b,#4ecdc4)",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c87475d3b9ebbe424d68c03c1f91f70da13ae4f4?width=526",
    },
    {
      type: "event",
      title: "ZIRK A\nEVENT",
      subtitle: "Most engage",
      subtitleHighlight: "Host",
      background: "#1b6598",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c87475d3b9ebbe424d68c03c1f91f70da13ae4f4?width=112",
      hasMultipleImages: true,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white overflow-hidden relative font-sf-pro">
      {/* Main Container */}
      <div className="mx-auto max-w-[375px] min-h-screen bg-black relative sm:max-w-md md:max-w-lg lg:max-w-xl">
        {/* Clean Status Bar - No indicators */}
        <div className="w-full h-[20px] pt-[15px]"></div>

        {/* Search Header */}
        <div className="flex items-center px-4 py-5 gap-3">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-lg hover:bg-white/20 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Search Bar */}
          <div className="flex-1 h-10 bg-white/10 rounded-full flex items-center px-4 gap-2 text-white/60">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle
                cx="11"
                cy="11"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="m21 21-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <input
              type="text"
              placeholder="Ask or Type Something..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/60 text-sm"
            />
          </div>

          {/* Refresh Button */}
          <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-lg hover:bg-white/20 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m21 3v5h-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m3 21v-5h5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="px-4 pb-[120px] space-y-3 overflow-y-auto max-h-[calc(100vh-180px)]">
          {/* Row 1 */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            <CardComponent card={cards[0]} />
            <CardComponent card={cards[1]} />
            <CardComponent card={cards[2]} />
            <CardComponent card={cards[3]} />
          </div>

          {/* Row 2 */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            <CardComponent card={cards[4]} />
            <CardComponent card={cards[5]} />
            <CardComponent card={cards[1]} />
            <CardComponent card={cards[0]} />
          </div>

          {/* Row 3 */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            <CardComponent card={cards[0]} />
            <CardComponent card={cards[1]} />
            <CardComponent card={{ ...cards[2], hasBlurEffects: false }} />
            <CardComponent card={cards[3]} />
          </div>

          {/* Row 4 */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            <CardComponent card={cards[4]} />
            <CardComponent card={cards[5]} />
            <CardComponent card={cards[1]} />
            <CardComponent card={cards[0]} />
          </div>

          {/* Row 5 */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            <CardComponent card={cards[0]} />
            <CardComponent card={cards[1]} />
            <CardComponent card={{ ...cards[2], hasBlurEffects: false }} />
            <CardComponent card={cards[3]} />
          </div>

          {/* Row 6 */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            <CardComponent card={cards[4]} />
            <CardComponent card={cards[5]} />
            <CardComponent card={cards[1]} />
            <CardComponent card={cards[0]} />
          </div>

          {/* Row 7 */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            <CardComponent card={cards[0]} />
            <CardComponent card={cards[1]} />
            <CardComponent card={{ ...cards[2], hasBlurEffects: false }} />
            <CardComponent card={cards[3]} />
          </div>

          {/* Row 8 */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            <CardComponent card={cards[4]} />
            <CardComponent card={cards[5]} />
            <CardComponent card={cards[1]} />
            <CardComponent card={cards[0]} />
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-[34px] left-1/2 transform -translate-x-1/2 flex items-center gap-5 bg-white/10 backdrop-blur-[20px] rounded-[25px] px-6 py-3">
          <button
            onClick={() => navigate("/")}
            className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors text-xl"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
          </button>

          <button
            onClick={() => navigate("/transfer")}
            className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors text-xl"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </button>

          <button className="w-10 h-10 flex items-center justify-center text-white hover:text-white transition-colors">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ff6b6b] to-[#4ecdc4]"></div>
          </button>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="w-[134px] h-[5px] rounded-[100px] bg-white"></div>
        </div>
      </div>
    </div>
  );
}

interface CardProps {
  card: {
    type: string;
    title: string;
    subtitle: string;
    subtitleHighlight: string;
    background: string;
    image: string;
    hasMultipleImages?: boolean;
    hasBlurEffects?: boolean;
  };
}

function CardComponent({ card }: CardProps) {
  return (
    <button
      className="w-[263px] h-[102px] rounded-[18px] relative flex-shrink-0 overflow-hidden hover:scale-105 transition-transform"
      style={{ background: card.background }}
    >
      {/* Background Image for gradient cards */}
      {card.background.includes("gradient") && (
        <img
          src={card.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Content */}
      <div className="absolute left-[17px] top-[34px] z-10">
        <div
          className="text-white font-bold text-[19px] leading-[1.2] mb-[2px] whitespace-pre-line"
          style={{ fontFamily: "SF Pro Display, sans-serif" }}
        >
          {card.title}
        </div>
        <div className="flex items-center gap-[2px] text-[11px]">
          <span className="text-white/50 font-normal">{card.subtitle}</span>
          <span className="text-white font-semibold">
            {card.subtitleHighlight}
          </span>
        </div>
      </div>

      {/* Side Image for meet-cody type */}
      {card.type.includes("meet-cody") && (
        <img
          src={card.image}
          alt=""
          className="absolute right-[17px] top-[-1px] w-[92px] h-[103px] object-cover"
        />
      )}

      {/* Multiple Images for event type */}
      {card.hasMultipleImages && (
        <>
          <img
            src={card.image}
            alt=""
            className="absolute right-[37px] top-[18px] w-14 h-[65px] object-cover"
          />
          <img
            src={card.image}
            alt=""
            className="absolute right-[31px] bottom-[15px] w-[43px] h-[43px] object-cover rounded-full"
          />
          <img
            src={card.image}
            alt=""
            className="absolute right-[31px] top-[-28px] w-[43px] h-[43px] object-cover rounded-full"
          />
        </>
      )}

      {/* SVG Blur Effects */}
      {card.hasBlurEffects && (
        <>
          <svg
            className="absolute left-[-17px] top-[42px] w-20 h-20"
            viewBox="0 0 25 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_red)">
              <circle cx="-56.4514" cy="44.7566" r="39.9597" fill="#FF2B2B" />
            </g>
            <defs>
              <filter
                id="filter0_f_red"
                x="-137.211"
                y="-36.0031"
                width="161.519"
                height="161.519"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="20.4"
                  result="effect1_foregroundBlur"
                />
              </filter>
            </defs>
          </svg>
          <svg
            className="absolute right-[17px] top-[-34px] w-24 h-24"
            viewBox="0 0 147 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_orange)">
              <circle cx="74.668" cy="-20.7231" r="50.2437" fill="#FC6637" />
            </g>
            <defs>
              <filter
                id="filter0_f_orange"
                x="0.885855"
                y="-94.5053"
                width="147.564"
                height="147.564"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="11.7692"
                  result="effect1_foregroundBlur"
                />
              </filter>
            </defs>
          </svg>
        </>
      )}

      {card.type === "event" && (
        <>
          <svg
            className="absolute right-[-21px] top-[19px] w-32 h-32"
            viewBox="0 0 17 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_purple)">
              <circle cx="-19.9236" cy="87.0922" r="68.4534" fill="#C9A2CF" />
            </g>
            <defs>
              <filter
                id="filter0_f_purple"
                x="-154.285"
                y="-47.2689"
                width="268.722"
                height="268.722"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="32.9538"
                  result="effect1_foregroundBlur"
                />
              </filter>
            </defs>
          </svg>
          <svg
            className="absolute left-[-42px] top-[-34px] w-24 h-24"
            viewBox="0 0 80 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_dark_purple)">
              <circle cx="3.76838" cy="11.6182" r="45.2762" fill="#644A79" />
            </g>
            <defs>
              <filter
                id="filter0_f_dark_purple"
                x="-88.5847"
                y="-80.7349"
                width="184.706"
                height="184.706"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="23.5385"
                  result="effect1_foregroundBlur"
                />
              </filter>
            </defs>
          </svg>
        </>
      )}
    </button>
  );
}
