import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Payments() {
  const [acceptedUsers, setAcceptedUsers] = useState<number[]>([]);
  const [selectedContactForAccept, setSelectedContactForAccept] = useState<
    number | null
  >(null);
  const navigate = useNavigate();

  const handleAccept = (index: number) => {
    setAcceptedUsers((prev) => [...prev, index]);
    setSelectedContactForAccept(null); // Remove selection after accepting
  };

  const handleContactClick = (index: number) => {
    if (!acceptedUsers.includes(index)) {
      setSelectedContactForAccept(index);
    }
  };

  const contacts = [
    {
      name: "Helix",
      username: "@helix_dvis",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f1e0f6bd3fb0b7ad8feac92fc5753784ecd124b4?width=88",
    },
    {
      name: "Helix",
      username: "@helix_dvis",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f1e0f6bd3fb0b7ad8feac92fc5753784ecd124b4?width=88",
    },
    {
      name: "Helix",
      username: "@helix_dvis",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f1e0f6bd3fb0b7ad8feac92fc5753784ecd124b4?width=88",
    },
    {
      name: "Helix",
      username: "@helix_dvis",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f1e0f6bd3fb0b7ad8feac92fc5753784ecd124b4?width=88",
    },
    {
      name: "Helix",
      username: "@helix_dvis",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f1e0f6bd3fb0b7ad8feac92fc5753784ecd124b4?width=88",
    },
    {
      name: "Helix",
      username: "@helix_dvis",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2c1fc7159f790a76609273eca4ec1e82eb9cf12c?width=88",
    },
    {
      name: "Helix",
      username: "@helix_dvis",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=88",
    },
    {
      name: "Helix",
      username: "@helix_dvis",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=88",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#141414] text-white overflow-hidden relative font-sf-pro">
      {/* Main Container */}
      <div className="mx-auto max-w-[375px] min-h-screen bg-[#141414] relative sm:max-w-md md:max-w-lg lg:max-w-xl">
        {/* Clean Status Bar - No indicators */}
        <div className="w-full h-[20px] pt-[15px]"></div>

        {/* Header */}
        <div className="text-center mt-[67px] mb-[53px] relative">
          <button
            onClick={() => navigate("/")}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="#9a9a9a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h1 className="text-[#9a9a9a] font-sf-pro text-[18px] font-medium tracking-[-0.72px]">
            Payments
          </h1>
        </div>

        {/* Main Card Section */}
        <div className="flex justify-center items-center relative mb-[125px]">
          {/* Heart Button */}
          <button className="absolute left-[55px] w-12 h-12 rounded-full bg-[#111] neumorphic-outset flex items-center justify-center hover:bg-[#1a1a1a] transition-colors">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <path
                d="M26.4939 15.801C28.5889 17.022 30.0629 19.501 29.9979 22.393C29.8599 28.5 21.4999 33 19.9999 33C18.4999 33 10.1389 28.5 10.0019 22.393C9.9369 19.501 11.4109 17.023 13.5059 15.801C15.4659 14.66 17.9279 14.653 19.9999 16.338C22.0719 14.653 24.5339 14.659 26.4939 15.801Z"
                fill="#0071E3"
              />
            </svg>
          </button>

          {/* Main Card */}
          <button
            onClick={() => {
              /* Add card click action */
            }}
            className="w-[117px] h-[148px] rounded-[24px] border-[3px] border-[#191919] bg-[#111] neumorphic-profile overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b69ebe7007d525a86dfd59b4be4c7dec2c951b5?width=234"
              alt=""
              className="w-full h-full object-cover rounded-[24px]"
            />
          </button>

          {/* Menu Button */}
          <button className="absolute right-[55px] w-12 h-12 rounded-full bg-[#111] neumorphic-outset flex items-center justify-center hover:bg-[#1a1a1a] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 10C5.53043 10 6.03914 10.2107 6.41421 10.5858C6.78929 10.9609 7 11.4696 7 12C7 12.5304 6.78929 13.0391 6.41421 13.4142C6.03914 13.7893 5.53043 14 5 14C4.46957 14 3.96086 13.7893 3.58579 13.4142C3.21071 13.0391 3 12.5304 3 12C3 11.4696 3.21071 10.9609 3.58579 10.5858C3.96086 10.2107 4.46957 10 5 10ZM12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10ZM19 10C19.5304 10 20.0391 10.2107 20.4142 10.5858C20.7893 10.9609 21 11.4696 21 12C21 12.5304 20.7893 13.0391 20.4142 13.4142C20.0391 13.7893 19.5304 14 19 14C18.4696 14 17.9609 13.7893 17.5858 13.4142C17.2107 13.0391 17 12.5304 17 12C17 11.4696 17.2107 10.9609 17.5858 10.5858C17.9609 10.2107 18.4696 10 19 10Z"
                fill="#999999"
              />
            </svg>
          </button>
        </div>

        {/* Contacts List */}
        <div className="px-5 pb-[120px] space-y-[14px] max-h-[400px] overflow-y-auto">
          {contacts.map((contact, index) => (
            <button
              key={index}
              onClick={() => handleContactClick(index)}
              className={`flex items-center justify-between h-[54px] px-[10px] py-2 rounded-2xl w-full hover:bg-white/5 transition-colors ${
                selectedContactForAccept === index ? "bg-[#212121]" : ""
              }`}
            >
              <div className="flex items-center gap-[6px]">
                <img
                  src={contact.image}
                  alt=""
                  className="w-11 h-11 rounded-[13px] object-cover"
                />
                <div className="flex flex-col gap-[2px] text-left">
                  <div className="text-white font-sf-pro text-[14px] font-medium tracking-[-0.56px]">
                    {contact.name}
                  </div>
                  <div className="text-white/50 font-sf-pro text-[12px] font-normal tracking-[-0.48px]">
                    {contact.username}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              {selectedContactForAccept === index &&
              !acceptedUsers.includes(index) ? (
                <button
                  onClick={() => handleAccept(index)}
                  className="px-4 py-[6px] bg-gradient-to-b from-[#42a0ff] to-[#0071e3] rounded-[27px] text-white font-sf-pro text-[14px] font-medium tracking-[-0.56px] shadow-lg hover:from-[#3a94f0] hover:to-[#0066cc] transition-all"
                  style={{
                    boxShadow:
                      "inset -1px -1px 10px 0px rgba(255,255,255,0.30), -3px -2px 11px 0px rgba(108,108,108,0.60), 4px 5px 6px 0px #000",
                  }}
                >
                  Accept
                </button>
              ) : (
                <button className="w-[38px] h-[38px] rounded-full bg-[#141414] neumorphic-outset flex items-center justify-center hover:bg-[#1a1a1a] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#999">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              )}
            </button>
          ))}
        </div>

        {/* Bottom Blur Overlay */}
        <div
          className="absolute bottom-[109px] left-0 w-full h-[109px] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,20,20,0.00) 0%, #141414 100%)",
            backdropFilter: "blur(2px)",
          }}
        />

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute bottom-[73px] left-5 w-[45px] h-[45px] rounded-[22.5px] bg-[#141414] neumorphic-outset flex items-center justify-center hover:bg-[#1a1a1a] transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 25 25" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.79303 13.207C8.60556 13.0194 8.50024 12.7651 8.50024 12.5C8.50024 12.2348 8.60556 11.9805 8.79303 11.793L14.45 6.13598C14.5423 6.04047 14.6526 5.96428 14.7746 5.91188C14.8966 5.85947 15.0279 5.83188 15.1606 5.83073C15.2934 5.82957 15.4251 5.85487 15.548 5.90516C15.6709 5.95544 15.7825 6.02969 15.8764 6.12358C15.9703 6.21747 16.0446 6.32913 16.0949 6.45202C16.1451 6.57492 16.1704 6.7066 16.1693 6.83938C16.1681 6.97216 16.1405 7.10338 16.0881 7.22538C16.0357 7.34739 15.9595 7.45773 15.864 7.54998L10.914 12.5L15.864 17.45C16.0462 17.6386 16.147 17.8912 16.1447 18.1534C16.1424 18.4156 16.0373 18.6664 15.8518 18.8518C15.6664 19.0372 15.4156 19.1424 15.1534 19.1447C14.8912 19.1469 14.6386 19.0461 14.45 18.864L8.79303 13.207Z"
              fill="#999999"
            />
          </svg>
        </button>

        {/* Bottom Navigation */}
        <div
          className="absolute bottom-5 left-5 right-5 h-[62px] rounded-[19px] border border-white/[0.006] bg-white/10 backdrop-blur-[10px] px-6 py-3 flex items-center justify-between"
          style={{
            boxShadow:
              "inset -4px -4px 10px 0px rgba(255,255,255,0.10), inset 4px 4px 4px 0px rgba(0,0,0,0.10)",
          }}
        >
          <div className="flex items-center justify-between w-full">
            {/* Home */}
            <button
              onClick={() => navigate("/")}
              className="flex flex-col items-center gap-1"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M3.5 13.9878V16.9166C3.5 20.7664 3.5 22.6913 4.69598 23.8873C5.89196 25.0833 7.81686 25.0833 11.6667 25.0833H16.3333C20.1831 25.0833 22.108 25.0833 23.304 23.8873C24.5 22.6913 24.5 20.7664 24.5 16.9166V13.9878C24.5 12.0263 24.5 11.0456 24.0848 10.1967C23.6696 9.34772 22.8955 8.74562 21.3472 7.54142L19.0139 5.7266C16.6053 3.85328 15.401 2.91663 14 2.91663C12.5989 2.91663 11.3947 3.85328 8.98616 5.7266L6.65281 7.54142C5.10455 8.74562 4.33042 9.34772 3.91522 10.1967C3.5 11.0456 3.5 12.0263 3.5 13.9878Z"
                  stroke="#0071E3"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5003 19.8334C16.5675 20.5595 15.3422 21 14.0003 21C12.6583 21 11.433 20.5595 10.5002 19.8334"
                  stroke="#0071E3"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="w-[6px] h-[6px] rounded-full bg-[#1D92F2]"></div>
            </button>

            {/* Transfer */}
            <button
              onClick={() => navigate("/transfer")}
              className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M23.3332 19.8334H4.66663"
                  stroke="white"
                  strokeOpacity="0.45"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.8334 16.3334C19.8334 16.3334 23.3333 18.9111 23.3333 19.8334C23.3333 20.7557 19.8333 23.3334 19.8333 23.3334"
                  stroke="white"
                  strokeOpacity="0.45"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.83325 8.16663H23.3332"
                  stroke="white"
                  strokeOpacity="0.45"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.16659 4.66663C8.16659 4.66663 4.66663 7.24434 4.66663 8.16665C4.66661 9.08897 8.16663 11.6666 8.16663 11.6666"
                  stroke="white"
                  strokeOpacity="0.45"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Search */}
            <button
              onClick={() => navigate("/search")}
              className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M24.5 24.5L19.4366 19.4366"
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
            </button>

            {/* Profile */}
            <button
              onClick={() => navigate("/profile")}
              className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity"
            >
              <div className="w-7 h-7 rounded-full bg-gray-400 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1e0f6bd3fb0b7ad8feac92fc5753784ecd124b4?width=88"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="w-[134px] h-[5px] rounded-[100px] bg-white"></div>
        </div>
      </div>
    </div>
  );
}
