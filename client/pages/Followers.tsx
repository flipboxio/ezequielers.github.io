import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface ProfileData {
  id: string;
  name: string;
  username: string;
  avatar: string;
}

const profiles: ProfileData[] = [
  {
    id: "1",
    name: "The Visual Vibe",
    username: "@visual.vibe",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/258fabab0731eac31e3d891a278159e62d47c239?width=136",
  },
  {
    id: "2",
    name: "Urban Aura",
    username: "@urbanaura_",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c69215460378e19445338e4c570bde0f35378c3d?width=136",
  },
  {
    id: "3",
    name: "Glimpse of Grace",
    username: "@glimpse.grace",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f805e504fe1d8bba634ae26192347b1c0fa24a87?width=136",
  },
  {
    id: "4",
    name: "Minimal Mood",
    username: "@minimal.mood",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/efc30d3abe9515efca244bb14b0b2f8143742d60?width=136",
  },
  {
    id: "5",
    name: "Pixel Bloom",
    username: "@pixelbloom_",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7d331f38e9661f22b8c1195008148786ec25ab72?width=136",
  },
  {
    id: "6",
    name: "Frame & Flow",
    username: "@frame.and.flow",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/600d714e17eb242a47d7d2653fe44db06276b5b0?width=136",
  },
  {
    id: "7",
    name: "Bold & Blended",
    username: "@bold.blended",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/967166bd2df6c848c551214a34993b48ac798d69?width=136",
  },
  {
    id: "8",
    name: "Art of Aesthetics",
    username: "@artofaesthetics",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dfa2788d53716a1290476482f75d781b5e71429d?width=136",
  },
  {
    id: "9",
    name: "Serene Street",
    username: "@serenestreet_",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bb90edbdbbbdfbdaa742fd6fb29e254296840fb8?width=136",
  },
  {
    id: "10",
    name: "Dream Lens Diary",
    username: "@dreamlensdiary",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1aa2a33af8a749880fb83386632b695c053459de?width=136",
  },
  {
    id: "11",
    name: "Moody Palette",
    username: "@moody.palette",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8970f55e2d5f1e349a568de5848da6f2cdbf8a86?width=136",
  },
];

interface ProfileCardProps {
  profile: ProfileData;
  onClick: (profile: ProfileData) => void;
}

const ProfileCard = ({ profile, onClick }: ProfileCardProps) => {
  return (
    <div
      className="flex flex-col items-center w-[68px] cursor-pointer group transition-transform duration-200 hover:scale-105"
      onClick={() => onClick(profile)}
    >
      <div className="relative mb-1">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-[68px] h-[68px] rounded-[20px] object-cover transition-all duration-200 group-hover:brightness-110"
        />
      </div>
      <div className="text-center w-[68px]">
        <div className="text-white text-[14px] font-sf-pro-display font-normal leading-[17px] tracking-[-0.14px] mb-0.5 truncate">
          {profile.name}
        </div>
        <div className="text-white/60 text-[12px] font-sf-pro-rounded font-normal leading-[15px] tracking-[-0.12px] truncate">
          {profile.username}
        </div>
      </div>
    </div>
  );
};

export default function Followers() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"followers" | "following">(
    "followers",
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleProfileClick = (profile: ProfileData) => {
    console.log("Profile clicked:", profile);
  };

  const handleBackClick = () => {
    console.log("Back clicked");
  };

  const handleTabChange = (tab: "followers" | "following") => {
    setActiveTab(tab);
    if (tab === "following") {
      navigate("/following");
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      <div
        className="relative overflow-hidden"
        style={{
          width: "375px",
          height: "812px",
          borderRadius: "60px",
          background: "#000",
          fontFamily:
            "'SF Pro Display', -apple-system, Roboto, Helvetica, sans-serif",
        }}
      >
        {/* Search Section */}
        <div
          className="flex justify-center items-center gap-[22px] absolute"
          style={{ left: "20px", top: "73px", width: "335px", height: "48px" }}
        >
          {/* Back Button */}
          <div
            className="flex items-center justify-center cursor-pointer hover:bg-[#1a1a1a] transition-all duration-200"
            style={{
              width: "45px",
              height: "48px",
              padding: "11px",
              borderRadius: "22.5px",
              background: "#141414",
            }}
            onClick={handleBackClick}
          >
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.79303 12.7071C8.60556 12.5196 8.50024 12.2653 8.50024 12.0001C8.50024 11.7349 8.60556 11.4806 8.79303 11.2931L14.45 5.6361C14.5423 5.54059 14.6526 5.46441 14.7746 5.412C14.8966 5.35959 15.0279 5.332 15.1606 5.33085C15.2934 5.32969 15.4251 5.355 15.548 5.40528C15.6709 5.45556 15.7825 5.52981 15.8764 5.6237C15.9703 5.7176 16.0446 5.82925 16.0949 5.95214C16.1451 6.07504 16.1704 6.20672 16.1693 6.3395C16.1681 6.47228 16.1405 6.6035 16.0881 6.7255C16.0357 6.84751 15.9595 6.95785 15.864 7.0501L10.914 12.0001L15.864 16.9501C16.0462 17.1387 16.147 17.3913 16.1447 17.6535C16.1424 17.9157 16.0373 18.1665 15.8518 18.3519C15.6664 18.5373 15.4156 18.6425 15.1534 18.6448C14.8912 18.6471 14.6386 18.5463 14.45 18.3641L8.79303 12.7071Z"
                fill="#999999"
              />
            </svg>
          </div>

          {/* Search Bar */}
          <div
            className="relative"
            style={{
              width: "268px",
              height: "48px",
              borderRadius: "80px",
              border: "0.4px solid rgba(255,255,255,0.08)",
              background: "#151515",
              boxShadow: `
              -4px -4px 8px 0px rgba(49,49,49,0.64) inset,
              4px 4px 8px 0px rgba(103,103,103,0.00) inset,
              0px 6px 10px 14px rgba(0,0,0,0.30),
              0px 2px 5.9px 10.7px rgba(23,23,23,0.25),
              0px 0px 0px 0.50px rgba(0,0,0,0.40) inset
            `,
            }}
          >
            <div
              className="absolute text-[#404040] font-sf-pro-display text-[12px] font-normal leading-[14px]"
              style={{
                left: "50px",
                top: "17px",
                width: "140px",
                height: "14px",
              }}
            >
              Ask or Type Something...
            </div>
            <svg
              className="absolute cursor-pointer hover:scale-110 transition-all duration-200"
              style={{ left: "13px", top: "12px" }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17 17L21 21"
                stroke="#404040"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
                stroke="#404040"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="absolute cursor-pointer hover:scale-110 transition-all duration-200"
              style={{ left: "230px", top: "10px" }}
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M19.8334 12.8333C19.8334 16.0549 17.2217 18.6666 14.0001 18.6666C10.7784 18.6666 8.16675 16.0549 8.16675 12.8333V8.16659C8.16675 4.94493 10.7784 2.33325 14.0001 2.33325"
                stroke="#656464"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23.3334 12.8333C23.3334 17.9879 19.1548 22.1666 14.0001 22.1666M14.0001 22.1666C8.84542 22.1666 4.66675 17.9879 4.66675 12.8333M14.0001 22.1666V25.6666"
                stroke="#656464"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.7214 5.42039C18.1292 5.24518 19.2451 4.12927 19.4204 2.72137C19.447 2.50824 19.6185 2.33325 19.8333 2.33325C20.048 2.33325 20.2195 2.50824 20.2461 2.72137C20.4214 4.12927 21.5373 5.24518 22.9451 5.42039C23.1583 5.44691 23.3333 5.61848 23.3333 5.83325C23.3333 6.04804 23.1583 6.21959 22.9451 6.24611C21.5373 6.42132 20.4214 7.53724 20.2461 8.94514C20.2195 9.15826 20.048 9.33325 19.8333 9.33325C19.6185 9.33325 19.447 9.15826 19.4204 8.94514C19.2451 7.53724 18.1292 6.42132 16.7214 6.24611C16.5083 6.21959 16.3333 6.04804 16.3333 5.83325C16.3333 5.61848 16.5083 5.44691 16.7214 5.42039Z"
                stroke="#656464"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Tabs Section */}
        <div
          className="flex justify-center items-center gap-[7px] absolute"
          style={{
            left: "50px",
            top: "161px",
            width: "275px",
            height: "31px",
            borderRadius: "60px",
          }}
        >
          <button
            onClick={() => handleTabChange("followers")}
            className={`flex items-center justify-center px-[18px] py-[6px] rounded-[60px] font-sf-pro-rounded text-[16px] font-normal transition-all duration-200 ${
              activeTab === "followers"
                ? "text-white"
                : "text-white/50 hover:text-white/70"
            }`}
          >
            254 Followers
          </button>
          <button
            onClick={() => handleTabChange("following")}
            className={`flex items-center justify-center px-[18px] py-[6px] rounded-[60px] font-sf-pro-rounded text-[16px] font-normal transition-all duration-200 ${
              activeTab === "following"
                ? "text-white"
                : "text-white/50 hover:text-white/70"
            }`}
          >
            243 Following
          </button>
        </div>

        {/* Profile Cards - Row 1 */}
        <div
          className="flex justify-center items-center gap-[40px] absolute"
          style={{
            left: "46px",
            top: "219px",
            width: "284px",
            height: "103px",
          }}
        >
          <ProfileCard profile={profiles[0]} onClick={handleProfileClick} />
          <ProfileCard profile={profiles[1]} onClick={handleProfileClick} />
          <ProfileCard profile={profiles[2]} onClick={handleProfileClick} />
        </div>

        {/* Profile Cards - Row 2 */}
        <div
          className="flex justify-center items-center gap-[40px] absolute"
          style={{
            left: "46px",
            top: "342px",
            width: "284px",
            height: "103px",
          }}
        >
          <ProfileCard profile={profiles[3]} onClick={handleProfileClick} />
          <ProfileCard profile={profiles[4]} onClick={handleProfileClick} />
          <ProfileCard profile={profiles[5]} onClick={handleProfileClick} />
        </div>

        {/* Profile Cards - Row 3 */}
        <div
          className="flex justify-center items-center gap-[40px] absolute"
          style={{
            left: "46px",
            top: "465px",
            width: "284px",
            height: "103px",
          }}
        >
          <ProfileCard profile={profiles[6]} onClick={handleProfileClick} />
          <ProfileCard profile={profiles[7]} onClick={handleProfileClick} />
          <ProfileCard profile={profiles[8]} onClick={handleProfileClick} />
        </div>

        {/* Profile Cards - Row 4 */}
        <div
          className="flex justify-center items-center gap-[50px] absolute"
          style={{
            left: "95px",
            top: "588px",
            width: "186px",
            height: "103px",
          }}
        >
          <ProfileCard profile={profiles[9]} onClick={handleProfileClick} />
          <ProfileCard profile={profiles[10]} onClick={handleProfileClick} />
        </div>

        {/* Bottom Gradient */}
        <div
          className="absolute"
          style={{
            width: "375px",
            height: "111px",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.00) 0%, #000 100%)",
            backdropFilter: "blur(3px)",
            left: "0px",
            top: "701px",
          }}
        />

        {/* Bottom Navigation */}
        <div
          className="absolute"
          style={{
            left: "20px",
            top: "722px",
            width: "335px",
            height: "62px",
            display: "flex",
            padding: "12px 24px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            borderRadius: "19px",
            border: "0.6px solid #fff",
            background: "rgba(255,255,255,0.10)",
            boxShadow: `
            -4px -4px 10px 0px rgba(255,255,255,0.10) inset,
            4px 4px 10px 0px rgba(255,255,255,0.10) inset
          `,
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex items-center gap-[58px] w-full">
            {/* Home Icon - Active */}
            <div className="flex flex-col items-center gap-[4px] w-[28px]">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M3.5 13.9879V16.9167C3.5 20.7665 3.5 22.6914 4.69598 23.8875C5.89196 25.0834 7.81686 25.0834 11.6667 25.0834H16.3333C20.1831 25.0834 22.108 25.0834 23.304 23.8875C24.5 22.6914 24.5 20.7665 24.5 16.9167V13.9879C24.5 12.0264 24.5 11.0458 24.0848 10.1968C23.6696 9.34785 22.8955 8.74574 21.3472 7.54154L19.0139 5.72672C16.6053 3.85341 15.401 2.91675 14 2.91675C12.5989 2.91675 11.3947 3.85341 8.98616 5.72672L6.65281 7.54154C5.10455 8.74574 4.33042 9.34785 3.91522 10.1968C3.5 11.0458 3.5 12.0264 3.5 13.9879Z"
                  stroke="#0071E3"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5003 19.8333C16.5675 20.5594 15.3422 20.9999 14.0003 20.9999C12.6583 20.9999 11.433 20.5594 10.5002 19.8333"
                  stroke="#0071E3"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div
                className="rounded-full"
                style={{ width: "6px", height: "6px", background: "#1D92F2" }}
              />
            </div>

            {/* Arrows Icon */}
            <div className="flex flex-col items-center gap-[4px] w-[28px]">
              <svg
                className="cursor-pointer hover:scale-110 transition-all duration-200"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M23.3331 19.8333H4.6665"
                  stroke="white"
                  strokeOpacity="0.45"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.8334 16.3333C19.8334 16.3333 23.3333 18.911 23.3333 19.8333C23.3333 20.7556 19.8333 23.3333 19.8333 23.3333"
                  stroke="white"
                  strokeOpacity="0.45"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.83325 8.16675H23.3332"
                  stroke="white"
                  strokeOpacity="0.45"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.16647 4.66675C8.16647 4.66675 4.6665 7.24446 4.6665 8.16677C4.66649 9.08909 8.1665 11.6667 8.1665 11.6667"
                  stroke="white"
                  strokeOpacity="0.45"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Search Icon */}
            <svg
              className="cursor-pointer hover:scale-110 transition-all duration-200"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M24.5001 24.5001L19.4368 19.4368"
                stroke="white"
                strokeOpacity="0.45"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.8333 22.1667C17.988 22.1667 22.1667 17.988 22.1667 12.8333C22.1667 7.67868 17.988 3.5 12.8333 3.5C7.67868 3.5 3.5 7.67868 3.5 12.8333C3.5 17.988 7.67868 22.1667 12.8333 22.1667Z"
                stroke="white"
                strokeOpacity="0.45"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Profile Icon */}
            <div
              className="cursor-pointer hover:scale-110 transition-all duration-200 rounded-full overflow-hidden"
              style={{ width: "28px", height: "28px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=56&h=56&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div
          className="absolute"
          style={{
            left: "-7px",
            top: "778px",
            width: "390px",
            height: "34px",
            display: "flex",
            padding: "21px 128px 8px 128px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: "134px",
              height: "5px",
              background: "#fff",
              position: "absolute",
              left: "128px",
              top: "21px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
