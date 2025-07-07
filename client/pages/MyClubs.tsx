import { useNavigate } from "react-router-dom";

interface ClubData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  background: string;
  image: string;
  gradientColors: string[];
  blurElements?: Array<{
    color: string;
    size: string;
    position: { left: string; top: string };
    blur: string;
  }>;
}

const clubs: ClubData[] = [
  {
    id: "1",
    title: "MEET CODY",
    subtitle: "Most viewed",
    category: "Creator",
    background: "#fea43e",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/97c34fd315f6bb3d1060f798ef91f52ac7d1c506?width=183",
    gradientColors: ["#FF2B2B", "#FC6637"],
    blurElements: [
      {
        color: "#FF2B2B",
        size: "80px",
        position: { left: "-17px", top: "42px" },
        blur: "20px",
      },
      {
        color: "#FC6637",
        size: "100px",
        position: { left: "216px", top: "-34px" },
        blur: "12px",
      },
    ],
  },
  {
    id: "2",
    title: "ZIRK A STREAMING",
    subtitle: "The New",
    category: "Trendy",
    background: "linear-gradient(135deg, #4A90E2, #F093FB)",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/940bbea7c43ee03a29655f8aa3856c9f60c7aad5?width=676",
    gradientColors: ["#4A90E2", "#F093FB"],
  },
  {
    id: "3",
    title: "ZIRK A SHARING",
    subtitle: "The viewed",
    category: "Newbie",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/502111a595f1be930ec8c9c987705a30cc5f8fb3?width=678",
    gradientColors: ["#667eea", "#764ba2"],
  },
  {
    id: "4",
    title: "ZIRK A STREAMING",
    subtitle: "The New",
    category: "Trendy",
    background: "linear-gradient(135deg, #4A90E2, #F093FB)",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/940bbea7c43ee03a29655f8aa3856c9f60c7aad5?width=676",
    gradientColors: ["#4A90E2", "#F093FB"],
  },
  {
    id: "5",
    title: "ZIRK A EVENT",
    subtitle: "Most engage",
    category: "Host",
    background: "#1b6598",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7d3604d0cb7d27e5a2309196f35676adccde679e?width=112",
    gradientColors: ["#644A79", "#C9A2CF"],
    blurElements: [
      {
        color: "#644A79",
        size: "91px",
        position: { left: "-42px", top: "-34px" },
        blur: "24px",
      },
      {
        color: "#C9A2CF",
        size: "137px",
        position: { left: "208px", top: "19px" },
        blur: "33px",
      },
    ],
  },
  {
    id: "6",
    title: "MEET CODY",
    subtitle: "Most viewed",
    category: "Creator",
    background: "#fea43e",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/97c34fd315f6bb3d1060f798ef91f52ac7d1c506?width=183",
    gradientColors: ["#FF2B2B", "#FC6637"],
    blurElements: [
      {
        color: "#FF2B2B",
        size: "80px",
        position: { left: "-17px", top: "42px" },
        blur: "20px",
      },
      {
        color: "#FC6637",
        size: "100px",
        position: { left: "216px", top: "-34px" },
        blur: "12px",
      },
    ],
  },
];

interface ClubCardProps {
  club: ClubData;
  onClick: (club: ClubData) => void;
}

const ClubCard = ({ club, onClick }: ClubCardProps) => {
  return (
    <div
      className="relative w-[335px] h-[102px] rounded-[18px] overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105 mb-[8px]"
      style={{ background: club.background }}
      onClick={() => onClick(club)}
    >
      {/* Blur Elements */}
      {club.blurElements?.map((blur, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            width: blur.size,
            height: blur.size,
            background: blur.color,
            filter: `blur(${blur.blur})`,
            left: blur.position.left,
            top: blur.position.top,
          }}
        />
      ))}

      {/* Content */}
      <div className="absolute left-[17px] top-[34px] flex flex-col items-start gap-[2.354px] w-[104px] h-[53px]">
        <div
          className="text-white font-bold leading-[22px]"
          style={{
            fontFamily:
              "'SF Pro Display', -apple-system, Roboto, Helvetica, sans-serif",
            fontSize: "18.831px",
            fontWeight: "700",
          }}
        >
          {club.title}
        </div>
        <div className="flex items-center gap-[1.569px] w-full">
          <div
            className="text-white/50 leading-[13px]"
            style={{
              fontFamily:
                "'SF Pro Text', -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: "10.985px",
              fontWeight: "510",
              letterSpacing: "-0.439px",
            }}
          >
            {club.subtitle}
          </div>
          <div
            className="text-white leading-[13px]"
            style={{
              fontFamily:
                "'SF Pro Text', -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: "10.985px",
              fontWeight: "590",
              letterSpacing: "-0.439px",
            }}
          >
            {club.category}
          </div>
        </div>
      </div>

      {/* Club Image */}
      <img
        src={club.image}
        alt={club.title}
        className="absolute object-cover"
        style={{
          width: club.id === "5" ? "56px" : "92px",
          height: club.id === "5" ? "65px" : "103px",
          right: club.id === "5" ? "162px" : "122px",
          top: club.id === "5" ? "19px" : "-1px",
        }}
      />

      {/* Additional images for Event card */}
      {club.id === "5" && (
        <>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/88d6ff471c4193a115327a175d548c911a8f1caf?width=85"
            alt="Event decoration"
            className="absolute w-[43px] h-[43px] object-cover"
            style={{ right: "155px", top: "88px" }}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef1b74c9c1d9cd87edc741d0a26e51ff09490091?width=85"
            alt="Event decoration"
            className="absolute w-[43px] h-[43px] object-cover"
            style={{ right: "155px", top: "-27px" }}
          />
        </>
      )}
    </div>
  );
};

export default function MyClubs() {
  const navigate = useNavigate();

  const handleClubClick = (club: ClubData) => {
    console.log("Club clicked:", club);
  };

  const handleBackClick = () => {
    navigate(-1);
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
        {/* Back Button */}
        <div
          className="absolute flex items-center justify-center cursor-pointer hover:bg-[#1a1a1a] transition-all duration-200"
          style={{
            left: "20px",
            top: "73px",
            width: "38px",
            height: "38px",
            padding: "11px",
            borderRadius: "22.5px",
            background: "#141414",
            aspectRatio: "1 / 1",
          }}
          onClick={handleBackClick}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.29303 12.7071C8.10556 12.5196 8.00024 12.2653 8.00024 12.0001C8.00024 11.7349 8.10556 11.4806 8.29303 11.2931L13.95 5.6361C14.0423 5.54059 14.1526 5.46441 14.2746 5.412C14.3966 5.35959 14.5279 5.332 14.6606 5.33085C14.7934 5.32969 14.9251 5.355 15.048 5.40528C15.1709 5.45556 15.2825 5.52981 15.3764 5.6237C15.4703 5.7176 15.5446 5.82925 15.5949 5.95214C15.6451 6.07504 15.6704 6.20672 15.6693 6.3395C15.6681 6.47228 15.6405 6.6035 15.5881 6.7255C15.5357 6.84751 15.4595 6.95785 15.364 7.0501L10.414 12.0001L15.364 16.9501C15.5462 17.1387 15.647 17.3913 15.6447 17.6535C15.6424 17.9157 15.5373 18.1665 15.3518 18.3519C15.1664 18.5373 14.9156 18.6425 14.6534 18.6448C14.3912 18.6471 14.1386 18.5463 13.95 18.3641L8.29303 12.7071Z"
              fill="#999999"
            />
          </svg>
        </div>

        {/* Title */}
        <div
          className="absolute inline-flex justify-center items-center gap-[2px] text-white/50 text-center font-sf-pro-display text-[15px] font-medium leading-[18px]"
          style={{
            left: "157px",
            top: "83px",
            width: "61px",
            height: "18px",
          }}
        >
          My Clubs
        </div>

        {/* Clubs List */}
        <div
          className="absolute flex flex-col items-center gap-[8px] overflow-y-auto scrollbar-hide"
          style={{
            left: "20px",
            top: "135px",
            width: "335px",
            height: "550px",
          }}
        >
          {clubs.map((club, index) => (
            <ClubCard
              key={`${club.id}-${index}`}
              club={club}
              onClick={handleClubClick}
            />
          ))}
        </div>

        {/* Home Indicator */}
        <div
          className="absolute flex justify-center items-center"
          style={{
            left: "-7px",
            top: "778px",
            width: "390px",
            height: "34px",
            padding: "21px 128px 8px 128px",
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
