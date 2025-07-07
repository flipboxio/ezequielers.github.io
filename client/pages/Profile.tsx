export default function Profile() {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage:
          "url('https://cdn.builder.io/api/v1/image/assets/TEMP/f0878f67d828dd5a4e7a8794def2941ba1228cc6?width=750')",
      }}
    >
      {/* Page Title */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-30">
        <h2 className="text-white/80 text-sm font-sf-pro-display font-medium">
          Tela de Profile
        </h2>
      </div>
      {/* Header Navigation */}
      <div className="flex justify-between items-center w-full px-5 pt-8 pb-2 h-[73px]">
        <button className="w-[38px] h-[38px] rounded-full bg-[#141414] flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.29303 12.707C8.10556 12.5194 8.00024 12.2651 8.00024 12C8.00024 11.7348 8.10556 11.4805 8.29303 11.293L13.95 5.63598C14.0423 5.54047 14.1526 5.46428 14.2746 5.41188C14.3966 5.35947 14.5279 5.33188 14.6606 5.33073C14.7934 5.32957 14.9251 5.35487 15.048 5.40516C15.1709 5.45544 15.2825 5.52969 15.3764 5.62358C15.4703 5.71747 15.5446 5.82913 15.5949 5.95202C15.6451 6.07492 15.6704 6.2066 15.6693 6.33938C15.6681 6.47216 15.6405 6.60338 15.5881 6.72538C15.5357 6.84739 15.4595 6.95773 15.364 7.04998L10.414 12L15.364 16.95C15.5462 17.1386 15.647 17.3912 15.6447 17.6534C15.6424 17.9156 15.5373 18.1664 15.3518 18.3518C15.1664 18.5372 14.9156 18.6424 14.6534 18.6447C14.3912 18.6469 14.1386 18.5461 13.95 18.364L8.29303 12.707Z"
              fill="#999999"
            />
          </svg>
        </button>

        <div className="flex items-center gap-0.5 font-sf-pro-display text-[15px] font-medium text-center">
          <span className="text-white/50">orb.club/</span>
          <span className="text-white">@evelysmith</span>
        </div>

        <button className="w-[38px] h-[38px] rounded-full bg-[#141414] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4.16667 8.33337C4.60869 8.33337 5.03262 8.50897 5.34518 8.82153C5.65774 9.13409 5.83333 9.55801 5.83333 10C5.83333 10.4421 5.65774 10.866 5.34518 11.1786C5.03262 11.4911 4.60869 11.6667 4.16667 11.6667C3.72464 11.6667 3.30072 11.4911 2.98816 11.1786C2.67559 10.866 2.5 10.4421 2.5 10C2.5 9.55801 2.67559 9.13409 2.98816 8.82153C3.30072 8.50897 3.72464 8.33337 4.16667 8.33337ZM10 8.33337C10.442 8.33337 10.866 8.50897 11.1785 8.82153C11.4911 9.13409 11.6667 9.55801 11.6667 10C11.6667 10.4421 11.4911 10.866 11.1785 11.1786C10.866 11.4911 10.442 11.6667 10 11.6667C9.55797 11.6667 9.13405 11.4911 8.82149 11.1786C8.50893 10.866 8.33333 10.4421 8.33333 10C8.33333 9.55801 8.50893 9.13409 8.82149 8.82153C9.13405 8.50897 9.55797 8.33337 10 8.33337ZM15.8333 8.33337C16.2754 8.33337 16.6993 8.50897 17.0118 8.82153C17.3244 9.13409 17.5 9.55801 17.5 10C17.5 10.4421 17.3244 10.866 17.0118 11.1786C16.6993 11.4911 16.2754 11.6667 15.8333 11.6667C15.3913 11.6667 14.9674 11.4911 14.6548 11.1786C14.3423 10.866 14.1667 10.4421 14.1667 10C14.1667 9.55801 14.3423 9.13409 14.6548 8.82153C14.9674 8.50897 15.3913 8.33337 15.8333 8.33337Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      {/* Complex Decorative Shape on the Left */}
      <div className="absolute top-[200px] left-5 w-[84px] h-[82px] z-10">
        <div
          className="relative w-full h-full"
          style={{ transform: "rotate(-14deg)" }}
        >
          {/* Background blur shapes */}
          <div
            className="absolute -left-6 -top-7 w-[37px] h-[113px] bg-[#720b82] blur-lg"
            style={{ transform: "rotate(53.299deg)" }}
          ></div>
          <div
            className="absolute right-7 -top-2 w-[37px] h-[113px] bg-gradient-to-b from-[#780c88] to-[#e11dff] blur-lg"
            style={{ transform: "rotate(-9.214deg)" }}
          ></div>

          {/* Red triangle blur */}
          <div
            className="absolute -left-4 top-5 blur-lg"
            style={{ transform: "rotate(14deg)" }}
          >
            <svg width="116" height="111" viewBox="0 0 102 101" fill="none">
              <path
                d="M53.0232 20.2524L10.7665 77.6674L-14.2026 106.336L101.773 131.014L53.0232 20.2524Z"
                fill="#C40A0A"
              />
            </svg>
          </div>

          {/* Blue geometric shapes */}
          <div
            className="absolute top-16 left-3 w-[25px] h-[27px] bg-gradient-to-b from-[#83C7FF] to-[#1086E6]"
            style={{
              transform: "rotate(43.556deg)",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            }}
          ></div>

          <div
            className="absolute top-0.5 right-13 w-6 h-6 rounded-full bg-gradient-to-b from-[#83C7FF] to-[#1495FF]"
            style={{ transform: "rotate(36.362deg)" }}
          ></div>
          <div
            className="absolute top-3 right-11 w-6 h-6 rounded-full bg-gradient-to-b from-[#83C7FF] to-[#1495FF]"
            style={{ transform: "rotate(36.362deg)" }}
          ></div>

          {/* Purple lines */}
          <div
            className="absolute top-9 left-8"
            style={{ transform: "rotate(29.407deg)" }}
          >
            <div
              className="w-[30px] h-1.5 bg-gradient-to-r from-[#bc68ff] to-[#644a79] mb-1"
              style={{
                transform: "rotate(43.407deg)",
                boxShadow: "0px 4px 0px rgba(85, 85, 85, 0.25)",
              }}
            ></div>
            <div
              className="w-5 h-1.5 bg-gradient-to-r from-[#bc68ff] to-[#644a79] mb-1"
              style={{
                transform: "rotate(43.407deg)",
                boxShadow: "0px 4px 0px rgba(85, 85, 85, 0.25)",
              }}
            ></div>
            <div
              className="w-3 h-1.5 bg-gradient-to-r from-[#bc68ff] to-[#644a79]"
              style={{
                transform: "rotate(43.407deg)",
                boxShadow: "0px 4px 0px rgba(85, 85, 85, 0.25)",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Star Badge */}
      <div className="absolute top-[140px] left-[77px] w-[115px] h-[115px] z-10">
        <svg width="121" height="121" viewBox="0 0 121 121" fill="none">
          <path
            d="M60.6833 1.5C69.8074 1.5 77.355 8.24313 78.6179 17.0176C85.7154 11.7058 95.8214 12.2749 102.273 18.7266C108.725 25.1783 109.293 35.2834 103.981 42.3809C112.756 43.6432 119.5 51.192 119.5 60.3164C119.5 69.4405 112.757 76.9882 103.982 78.251C109.294 85.3485 108.725 95.4544 102.273 101.906C95.8214 108.358 85.7154 108.927 78.6179 103.615C77.3551 112.39 69.8074 119.133 60.6833 119.133C51.5589 119.133 44.0101 112.389 42.7478 103.614C35.6503 108.926 25.5452 108.358 19.0935 101.906C12.6418 95.4545 12.0727 85.3484 17.3845 78.251C8.61007 76.9881 1.86694 69.4404 1.86694 60.3164L1.8728 59.8486C2.0987 50.9354 8.76043 43.622 17.3845 42.3809C12.0733 35.2834 12.642 25.1781 19.0935 18.7266C25.545 12.275 35.6504 11.7064 42.7478 17.0176C44.0106 8.24308 51.5593 1.50006 60.6833 1.5Z"
            fill="url(#star-gradient)"
            stroke="white"
            strokeWidth="3"
          />
          <defs>
            <radialGradient
              id="star-gradient"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(60.6835 60.3165) rotate(90) scale(57.3165)"
            >
              <stop stopColor="#000000" />
              <stop offset="1" stopColor="#B5B5B5" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Cool Shape with Gradient */}
      <div className="absolute top-[170px] left-[111px] w-12 h-12 z-10">
        <div className="w-full h-full rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF00D6] via-[#FF6C02] to-[#07FFE1] opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6C02] to-transparent opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-[#07FFE1] to-transparent opacity-60"></div>
        </div>
      </div>

      {/* Lightning Shape on the Right */}
      <div className="absolute top-[145px] right-5 w-[109px] h-[74px] z-10">
        <div className="relative w-full h-full">
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#58b4ff] via-[#a218ae] to-[#ff2b2b] rounded-lg"
            style={{ stroke: "#fff", strokeWidth: "2.945px" }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-medium">
              ⚡
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay for Content Area */}
      <div className="absolute top-[450px] left-0 w-full h-[350px] bg-gradient-to-t from-[#3f3f3f] to-transparent backdrop-blur-sm"></div>

      {/* Main Profile Content */}
      <div className="absolute top-[400px] left-1/2 transform -translate-x-1/2 w-full max-w-sm flex flex-col items-center gap-2.5 z-20 px-5">
        {/* Profile Picture */}
        <div
          className="w-[120px] h-[120px] rounded-full bg-cover bg-center border-4 border-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494790108755-2616b612b786?w=240&h=240&fit=crop&crop=face')",
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.5)",
          }}
        ></div>

        {/* Name */}
        <h1 className="text-white text-center font-sf-pro text-xl font-semibold tracking-tight">
          Evelyn Smith
        </h1>

        {/* Stats */}
        <div className="flex items-center gap-2.5 text-white text-center font-sf-pro-rounded text-base font-medium">
          <span>2,425 Followers</span>
          <span>377 Follow</span>
          <span>14 Clubs</span>
        </div>

        {/* Bio */}
        <div className="flex flex-col items-center gap-0 w-[151px] text-white/70 text-center font-sf-pro-rounded text-sm font-medium">
          <div>nft artist / visual designer</div>
          <div>passionate about web3</div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-2.5">
          <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-gray-600/15 backdrop-blur-md">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M10.9999 1.83337C16.0627 1.83337 20.1666 5.93729 20.1666 11C20.1666 16.0628 16.0627 20.1667 10.9999 20.1667C5.93717 20.1667 1.83325 16.0628 1.83325 11C1.83325 5.93729 5.93717 1.83337 10.9999 1.83337ZM10.9999 3.66671C9.055 3.66671 7.18974 4.43932 5.81447 5.81459C4.4392 7.18986 3.66659 9.05512 3.66659 11C3.66659 12.945 4.4392 14.8102 5.81447 16.1855C7.18974 17.5608 9.055 18.3334 10.9999 18.3334C12.9448 18.3334 14.8101 17.5608 16.1854 16.1855C17.5606 14.8102 18.3333 12.945 18.3333 11C18.3333 9.05512 17.5606 7.18986 16.1854 5.81459C14.8101 4.43932 12.9448 3.66671 10.9999 3.66671ZM10.9908 9.16671C11.5023 9.16671 11.9166 9.58104 11.9166 10.0925V14.7895C12.0913 14.8904 12.2279 15.0462 12.3051 15.2326C12.3823 15.419 12.3959 15.6257 12.3436 15.8206C12.2914 16.0155 12.1763 16.1878 12.0163 16.3106C11.8562 16.4334 11.66 16.5 11.4583 16.5H11.0091C10.8875 16.5 10.7671 16.4761 10.6548 16.4296C10.5425 16.383 10.4404 16.3148 10.3544 16.2289C10.2685 16.1429 10.2003 16.0408 10.1537 15.9285C10.1072 15.8162 10.0833 15.6958 10.0833 15.5742V11C9.84014 11 9.60698 10.9035 9.43507 10.7316C9.26316 10.5596 9.16658 10.3265 9.16658 10.0834C9.16658 9.84026 9.26316 9.6071 9.43507 9.43519C9.60698 9.26328 9.84014 9.16671 10.0833 9.16671H10.9908ZM10.9999 6.41671C11.243 6.41671 11.4762 6.51328 11.6481 6.68519C11.82 6.8571 11.9166 7.09026 11.9166 7.33337C11.9166 7.57649 11.82 7.80965 11.6481 7.98155C11.4762 8.15346 11.243 8.25004 10.9999 8.25004C10.7568 8.25004 10.5236 8.15346 10.3517 7.98155C10.1798 7.80965 10.0833 7.57649 10.0833 7.33337C10.0833 7.09026 10.1798 6.8571 10.3517 6.68519C10.5236 6.51328 10.7568 6.41671 10.9999 6.41671Z"
                fill="white"
              />
            </svg>
            <span className="text-white text-sm font-medium">ABOUT</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-gray-600/15 backdrop-blur-md">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M10.9999 1.83337C16.0627 1.83337 20.1666 5.93729 20.1666 11C20.1666 16.0628 16.0627 20.1667 10.9999 20.1667C5.93717 20.1667 1.83325 16.0628 1.83325 11C1.83325 5.93729 5.93717 1.83337 10.9999 1.83337ZM12.5427 14.6209C11.5151 14.6818 10.4848 14.6818 9.45717 14.6209C9.58184 15.3414 9.74042 15.9904 9.92467 16.544C10.1557 17.237 10.4105 17.732 10.6488 18.0345C10.7295 18.1354 10.8533 18.3334 11.0018 18.3334C11.1347 18.3215 11.2786 18.1253 11.3501 18.0345C11.5884 17.732 11.8442 17.237 12.0743 16.544C12.2782 15.9156 12.4354 15.2728 12.5427 14.6209Z"
                fill="white"
              />
            </svg>
            <span className="text-white text-sm font-medium">
              EVELYNSMITH.COM
            </span>
          </div>
        </div>

        {/* Social Sections */}
        <div className="flex justify-center items-center gap-3.5">
          {/* Play Together */}
          <div className="flex flex-col items-center gap-1 w-32">
            <div className="flex items-center justify-center px-1.5 py-1.5 rounded-full bg-gray-400/15 backdrop-blur-sm w-full h-14">
              <div className="flex items-center -space-x-5">
                <div
                  className="w-11 h-11 rounded-full border-2 border-white bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1494790108755-2616b612b786?w=44&h=44&fit=crop&crop=face')",
                  }}
                ></div>
                <div
                  className="w-11 h-11 rounded-full border-2 border-white bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=44&h=44&fit=crop&crop=face')",
                  }}
                ></div>
                <div
                  className="w-11 h-11 rounded-full border-2 border-white bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=44&h=44&fit=crop&crop=face')",
                  }}
                ></div>
                <div className="w-11 h-11 rounded-full bg-white border-2 border-white flex items-center justify-center">
                  <span className="text-black text-sm font-semibold">+33</span>
                </div>
              </div>
            </div>
            <span className="text-white text-sm font-medium">
              Play Together
            </span>
          </div>

          {/* Championships */}
          <div className="flex flex-col items-center gap-1 w-32">
            <div className="flex items-center justify-center px-1.5 py-1.5 rounded-2xl bg-gray-400/15 backdrop-blur-sm w-full h-14 overflow-hidden">
              <div className="flex items-center -space-x-5">
                <div className="w-11 h-11 rounded-xl border-2 border-white bg-red-500"></div>
                <div className="w-11 h-11 rounded-xl border-2 border-white bg-black"></div>
                <div className="w-11 h-11 rounded-xl border-2 border-white bg-green-500"></div>
                <div
                  className="w-11 h-11 rounded-xl bg-white border-2 border-white flex items-center justify-center"
                  style={{ boxShadow: "-4px 0px 10px rgba(0, 0, 0, 0.5)" }}
                >
                  <span className="text-black text-sm font-medium">+2</span>
                </div>
              </div>
            </div>
            <span className="text-white text-sm font-medium">
              Championships
            </span>
          </div>
        </div>

        {/* Bottom Action Buttons */}
        <div className="flex items-start gap-2.5">
          <div className="flex items-center justify-center gap-1 px-11 py-3 rounded-full bg-white/15 backdrop-blur-sm">
            <svg width="22" height="22" viewBox="0 0 23 22" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5833 1.83337C9.36768 1.83337 8.20189 2.31626 7.34235 3.1758C6.4828 4.03534 5.99992 5.20113 5.99992 6.41671C5.99992 7.63228 6.4828 8.79807 7.34235 9.65761C8.20189 10.5172 9.36768 11 10.5833 11C11.7988 11 12.9646 10.5172 13.8242 9.65761C14.6837 8.79807 15.1666 7.63228 15.1666 6.41671C15.1666 5.20113 14.6837 4.03534 13.8242 3.1758C12.9646 2.31626 11.7988 1.83337 10.5833 1.83337ZM10.5833 11.9167C8.38784 11.9167 6.3895 12.5529 4.92009 13.4494C4.18675 13.8967 3.55975 14.4247 3.10692 14.9985C2.66142 15.5614 2.33325 16.237 2.33325 16.9584C2.33325 17.733 2.71 18.3435 3.25267 18.7789C3.766 19.1914 4.44342 19.4645 5.163 19.6552C6.6095 20.0375 8.54 20.1667 10.5833 20.1667C10.7941 20.1667 11.0049 20.1649 11.2112 20.1621C11.3647 20.16 11.5152 20.1194 11.6489 20.0439C11.7827 19.9685 11.8953 19.8607 11.9765 19.7304C12.0577 19.6001 12.1049 19.4515 12.1137 19.2982C12.1226 19.1449 12.0927 18.9919 12.027 18.8531C11.6786 18.1177 11.4986 17.3138 11.4999 16.5C11.4999 15.3524 11.851 14.289 12.4505 13.4081C12.5396 13.2772 12.5933 13.1255 12.6063 12.9676C12.6193 12.8098 12.5912 12.6513 12.5247 12.5076C12.4583 12.3638 12.3557 12.2398 12.227 12.1475C12.0984 12.0552 11.948 11.9978 11.7905 11.9809C11.3963 11.9387 10.993 11.9167 10.5833 11.9167ZM20.3989 14.729C20.5659 14.5562 20.6583 14.3246 20.6562 14.0843C20.6541 13.8439 20.5577 13.614 20.3878 13.444C20.2178 13.2741 19.9879 13.1777 19.7475 13.1756C19.5072 13.1735 19.2756 13.2659 19.1028 13.4329L16.1859 16.3497L14.8898 15.0535C14.7169 14.8866 14.4853 14.7942 14.245 14.7963C14.0046 14.7983 13.7747 14.8947 13.6048 15.0647C13.4348 15.2347 13.3384 15.4646 13.3363 15.7049C13.3342 15.9453 13.4266 16.1768 13.5936 16.3497L15.4728 18.2289C15.5664 18.3226 15.6776 18.3969 15.7999 18.4476C15.9223 18.4983 16.0535 18.5244 16.1859 18.5244C16.3184 18.5244 16.4495 18.4983 16.5719 18.4476C16.6943 18.3969 16.8054 18.3226 16.8991 18.2289L20.3989 14.729Z"
                fill="white"
              />
            </svg>
            <span className="text-white text-[15px] font-medium">Friends</span>
          </div>
          <div className="flex items-center justify-center gap-1 px-11 py-3 rounded-full bg-white/15 backdrop-blur-sm">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M5.49992 6.41671C5.49992 5.20113 5.9828 4.03534 6.84235 3.1758C7.70189 2.31626 8.86768 1.83337 10.0833 1.83337C11.2988 1.83337 12.4646 2.31626 13.3242 3.1758C14.1837 4.03534 14.6666 5.20113 14.6666 6.41671C14.6666 7.63228 14.1837 8.79807 13.3242 9.65761C12.4646 10.5172 11.2988 11 10.0833 11C8.86768 11 7.70189 10.5172 6.84235 9.65761C5.9828 8.79807 5.49992 7.63228 5.49992 6.41671ZM4.42009 13.4494C5.8895 12.5529 7.88784 11.9167 10.0833 11.9167C10.493 11.9167 10.8963 11.9387 11.2896 11.9809C11.447 11.9978 11.5974 12.0552 11.7261 12.1475C11.8548 12.2398 11.9574 12.3638 12.0238 12.5076C12.0903 12.6513 12.1184 12.8098 12.1054 12.9676C12.0924 13.1255 12.0387 13.2772 11.9496 13.4081C11.3286 14.3195 10.9976 15.3972 10.9999 16.5C10.9999 17.3434 11.1897 18.1409 11.527 18.8531C11.5927 18.9919 11.6226 19.1449 11.6137 19.2982C11.6049 19.4515 11.5577 19.6001 11.4765 19.7304C11.3953 19.8607 11.2827 19.9685 11.1489 20.0439C11.0152 20.1194 10.8647 20.16 10.7112 20.1621L10.0833 20.1667C8.04 20.1667 6.1095 20.0384 4.663 19.6552C3.94342 19.4645 3.266 19.1914 2.75267 18.7789C2.20909 18.3425 1.83325 17.733 1.83325 16.9584C1.83325 16.237 2.16142 15.5623 2.60692 14.9976C3.05975 14.4247 3.68584 13.8976 4.42009 13.4485V13.4494ZM16.4999 12.8334C16.743 12.8334 16.9762 12.93 17.1481 13.1019C17.32 13.2738 17.4166 13.5069 17.4166 13.75V15.5834H19.2499C19.493 15.5834 19.7262 15.68 19.8981 15.8519C20.07 16.0238 20.1666 16.2569 20.1666 16.5C20.1666 16.7432 20.07 16.9763 19.8981 17.1482C19.7262 17.3201 19.493 17.4167 19.2499 17.4167H17.4166V19.25C17.4166 19.4932 17.32 19.7263 17.1481 19.8982C16.9762 20.0701 16.743 20.1667 16.4999 20.1667C16.2568 20.1667 16.0236 20.0701 15.8517 19.8982C15.6798 19.7263 15.5833 19.4932 15.5833 19.25V17.4167H13.7499C13.5068 17.4167 13.2736 17.3201 13.1017 17.1482C12.9298 16.9763 12.8333 16.7432 12.8333 16.5C12.8333 16.2569 12.9298 16.0238 13.1017 15.8519C13.2736 15.68 13.5068 15.5834 13.7499 15.5834H15.5833V13.75C15.5833 13.5069 15.6798 13.2738 15.8517 13.1019C16.0236 12.93 16.2568 12.8334 16.4999 12.8334Z"
                fill="white"
              />
            </svg>
            <span className="text-white text-[15px] font-medium">Follow</span>
          </div>
        </div>
      </div>

      {/* Animated Star */}
      <div className="absolute bottom-[200px] right-16 w-[52px] h-[48px] z-10">
        <svg width="77" height="76" viewBox="0 0 77 76" fill="none">
          <g filter="url(#filter0_f_star)">
            <circle cx="38.5" cy="38" r="18" fill="url(#paint0_linear_star)" />
          </g>
          <path
            d="M30.3793 41.7138L28.8154 46.8697C28.7525 47.149 28.6967 47.5676 28.8154 48.094C28.9341 48.6204 29.6935 50.6018 31.4484 50.8599C33.2033 51.1179 34.5503 50.7065 35.7694 49.6046C36.9884 48.5028 38.1359 46.8697 38.0229 44.2585C37.9098 41.6473 36.2359 40.1483 36.2359 40.1483C36.2359 40.1483 34.7503 38.768 33.5654 38.3429C33.1302 38.1868 32.8787 38.0974 32.4193 38.0461C32.0316 38.0029 31.4206 38.055 31.4206 38.055V37.2066C31.4206 37.2066 32.0308 37.2415 32.4193 37.2066C32.8736 37.1659 33.1362 37.0639 33.5654 36.9093C34.8098 36.4611 35.4441 36.0332 36.3248 35.0589C37.3927 33.8774 37.875 33.0332 38.1284 31.4014C38.1803 31.0674 38.1284 30.5358 38.1284 30.5358H38.9405C38.9405 30.5358 38.9331 31.065 38.968 31.4014C39.1378 33.0424 39.9849 34.06 41.0009 35.3598C42.2656 36.9779 45.5806 37.232 45.5806 37.232V38.0461C45.5806 38.0461 43.9746 38.1548 43.0825 38.5167C42.1904 38.8786 40.9386 39.9307 40.9386 39.9307C40.9386 39.9307 39.4511 41.3213 39.1141 44.2585C38.7771 47.1957 41.2307 49.6046 41.2307 49.6046C41.2307 49.6046 43.517 51.6815 45.9192 50.7664C48.3213 49.8513 48.3483 47.1749 48.3213 46.8697C48.2943 46.5645 46.6984 41.6833 46.6984 41.6833C46.6984 41.6833 50.0926 39.2969 50.8922 38.6428C51.6918 37.9887 52.2384 36.7255 52.009 34.9259C51.7796 33.1263 50.0513 32.3276 49.3592 32.1559C48.6672 31.9842 43.5766 32.1559 43.5766 32.1559L41.9863 27.4575C41.9863 27.4575 41.1231 25.0456 38.4806 24.9999C35.8382 24.9542 35.0472 27.4575 35.0472 27.4575L33.5654 32.1559C33.5654 32.1559 29.0641 32.1102 28.1441 32.1559C27.2241 32.2016 25.5401 33.2038 25.0721 34.6858C24.6703 35.9583 25.2589 37.3325 25.6865 38.047C26.1142 38.7614 30.3793 41.7138 30.3793 41.7138Z"
            fill="white"
            fillOpacity="0.8"
          />
          <defs>
            <filter
              id="filter0_f_star"
              x="0.5"
              y="0"
              width="76"
              height="76"
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
                stdDeviation="10"
                result="effect1_foregroundBlur_star"
              />
            </filter>
            <linearGradient
              id="paint0_linear_star"
              x1="28.3023"
              y1="22.7183"
              x2="49.4633"
              y2="53.0882"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD54B" />
              <stop offset="0.235577" stopColor="#FF5757" />
              <stop offset="0.519231" stopColor="#FE62EE" />
              <stop offset="0.778846" stopColor="#4DB5FF" />
              <stop offset="1" stopColor="#C4FF66" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="w-[134px] h-[5px] rounded-full bg-black"></div>
      </div>
    </div>
  );
}
