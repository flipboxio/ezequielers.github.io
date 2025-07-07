import { motion } from "framer-motion";
import { Plus, ArrowLeft, Search, Home } from "lucide-react";

export default function Index() {
  const gameCharacters = [
    {
      name: "Roxz",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/21cb7445f9469fee276208583612f75d26db352c",
    },
    {
      name: "Lynx",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fe1e0004cc859dde75bf385ba11fe99ecb50c37a",
    },
    {
      name: "Zyra",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/abb77a4d8783ef5f04174aec94e09da538e71b26",
    },
    {
      name: "Fynn",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a964e2a4efe827b9b437995640366d190783af69",
    },
    {
      name: "Juno",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a8788b977ae95a4370ef42b36f52d007bd432ae2",
    },
    {
      name: "Kira",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/50070c4b8ca8b4fdf696649e19628dbd1db64569",
    },
    {
      name: "Milo",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9c77453a0cf0f5a62f6442dec9033e1afb864e96",
    },
  ];

  const popularGames = [
    {
      id: "meet-cody",
      title: "MEET",
      subtitle: "CODY",
      description: "Most viewed Creator",
      bgGradient: "from-orange-500 via-yellow-500 to-orange-600",
      hasCharacter: true,
    },
    {
      id: "zirk-stream",
      title: "ZIRK A",
      subtitle: "STREAM",
      description: "The New Trend",
      bgGradient: "from-cyan-500 to-blue-600",
      hasCharacter: false,
    },
    {
      id: "special-event",
      title: "SPECIAL",
      subtitle: "EVENT",
      description: "Limited Time",
      bgGradient: "from-purple-500 via-pink-500 to-red-500",
      hasCharacter: true,
    },
    {
      id: "zirk-event",
      title: "ZIRK A",
      subtitle: "EVENT",
      description: "Most engage Host",
      bgGradient: "from-purple-600 to-blue-600",
      hasCharacter: false,
    },
    {
      id: "newbie-special",
      title: "NEWBIE",
      subtitle: "BONUS",
      description: "Get Started",
      bgGradient: "from-green-500 via-emerald-500 to-teal-500",
      hasCharacter: true,
    },
  ];

  const crashGames = [
    {
      id: "crash-game-1",
      name: "Player 1",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/454a2c7d96ffedc7cee7b28076ab13d393fc7261",
    },
    {
      id: "crash-game-2",
      name: "Player 2",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/14e5879501a8977f2bbfd4a11f185d98ed1f6390",
    },
    {
      id: "crash-game-3",
      name: "Player 3",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b8b52c4ad6037e80ea953eeadb4d864633f2ca76",
    },
    {
      id: "crash-game-4",
      name: "Player 4",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bd9362200ed0d5e7e1a769f0a552a1c79e3d05e5",
    },
  ];

  // Event handlers
  const handleCharacterClick = (characterName: string) => {
    console.log(`Character clicked: ${characterName}`);
    // Add your event logic here
  };

  const handleGameClick = (gameType: string) => {
    console.log(`Game clicked: ${gameType}`);
    // Add your event logic here
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
    // Add your event logic here
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Stars Background - Full Screen */}
      {Array.from({ length: 50 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white opacity-60 z-0"
          style={{
            width: 1 + Math.random() * 2,
            height: 1 + Math.random() * 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Moving Stars - Full Screen */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`moving-${i}`}
          className="absolute w-1 h-1 rounded-full bg-white opacity-40 z-0"
          initial={{
            x: -10,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: window.innerWidth + 10,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Header Section */}
      <div className="relative px-5 py-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between relative z-10"
        >
          <div className="flex items-center gap-3">
            <button
              onClick={handleProfileClick}
              className="text-left hover:opacity-80 transition-opacity"
            >
              <div className="text-white font-medium text-sm">
                Oliver Bennet
              </div>
              <div className="text-white font-medium text-sm">$37,657.00</div>
            </button>
            <button
              onClick={() => handleGameClick("add-funds")}
              className="w-5 h-5 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Plus size={12} className="text-black" />
            </button>
          </div>

          {/* Centered Starz Logo */}
          <button
            onClick={() => handleGameClick("home")}
            className="absolute left-1/2 transform -translate-x-1/2 flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/068a262e4e1c39345b4089ac9bce61d6724b5a20"
              alt="Starz Logo"
              className="h-8 object-contain"
            />
          </button>

          <button
            onClick={handleProfileClick}
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9abfbeea575d8eb1f04c7feb67db1b93c5562a3"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
          </button>
        </motion.div>
      </div>

      <div className="px-5 pb-20">
        {/* Games Made For You Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex items-center gap-1 mb-4">
            <span className="text-white font-medium text-lg">Games</span>
            <span className="text-white/80 font-medium text-lg">
              made for you
            </span>
          </div>

          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-5 px-5">
            {gameCharacters.map((character, index) => (
              <motion.button
                key={character.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => handleCharacterClick(character.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 hover:opacity-90 transition-all"
              >
                <div className="relative w-20 h-24 rounded-3xl overflow-hidden">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-black text-xs font-medium px-2 py-1 rounded-full">
                      {character.name}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
            {/* Add extra characters for better scrolling */}
            {gameCharacters.map((character, index) => (
              <motion.button
                key={`extra-${character.name}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * (index + gameCharacters.length) }}
                onClick={() => handleCharacterClick(`${character.name}-extra`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 hover:opacity-90 transition-all"
              >
                <div className="relative w-20 h-24 rounded-3xl overflow-hidden">
                  <img
                    src={character.image}
                    alt={`${character.name} Extra`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-black text-xs font-medium px-2 py-1 rounded-full">
                      {character.name}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Most Popular Games Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1">
              <span className="text-white font-medium text-lg">Most</span>
              <span className="text-white/80 font-medium text-lg">
                popular games
              </span>
            </div>
            <button
              onClick={() => handleGameClick("see-all-popular")}
              className="text-white/80 text-sm hover:text-white transition-colors"
            >
              See all
            </button>
          </div>

          <div className="overflow-x-auto scrollbar-hide -mx-5 px-5">
            <div className="flex gap-3 min-w-max">
              {popularGames.map((game, index) => (
                <motion.button
                  key={game.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => handleGameClick(game.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-shrink-0 hover:opacity-90 transition-all"
                >
                  <div
                    className={`bg-gradient-to-r ${game.bgGradient} rounded-2xl p-4 w-[263px] h-[102px] relative overflow-hidden`}
                  >
                    <div className="relative z-10">
                      <div className="text-white font-bold text-[19px] leading-tight">
                        {game.title}
                      </div>
                      <div className="text-white font-bold text-[19px] leading-tight">
                        {game.subtitle}
                      </div>
                      <div className="text-white/50 text-xs mt-1">
                        {game.description.split(" ")[0]}{" "}
                        <span className="text-white font-semibold">
                          {game.description.split(" ").slice(1).join(" ")}
                        </span>
                      </div>
                    </div>

                    {game.id === "meet-cody" && (
                      <>
                        <div className="absolute -left-4 top-10 w-20 h-20 bg-red-500 rounded-full opacity-20 blur-[20px]" />
                        <div className="absolute left-8 -top-8 w-24 h-24 bg-orange-400 rounded-full opacity-30 blur-[12px]" />
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/580452c0d5cd21d8b2a2fce7ef353397ed656b67"
                          alt="Cody Character"
                          className="absolute left-4 -top-1 w-[92px] h-[103px] object-cover"
                        />
                      </>
                    )}

                    {game.id === "zirk-stream" && (
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-30" />
                      </div>
                    )}

                    {game.id === "zirk-event" && (
                      <>
                        <div className="absolute -left-10 -top-8 w-24 h-24 bg-purple-600 rounded-full opacity-50 blur-[24px]" />
                        <div className="absolute right-4 top-4 w-36 h-36 bg-pink-400 rounded-full opacity-30 blur-[33px]" />
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/09d962cca45219bbfc65c846c00cd643ba9b8652"
                          alt="Event Character 1"
                          className="absolute right-4 top-4 w-[56px] h-[65px] object-cover"
                        />
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f9e7a756884184da59bd95a23154412581daec3"
                          alt="Event Character 2"
                          className="absolute right-4 bottom-2 w-[43px] h-[43px] object-cover"
                        />
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3d6f53c812b0b04c1a21b66062d835030a938c6"
                          alt="Event Character 3"
                          className="absolute right-4 -top-7 w-[43px] h-[43px] object-cover"
                        />
                      </>
                    )}

                    {game.id === "special-event" && (
                      <>
                        <div className="absolute -left-10 -top-8 w-24 h-24 bg-purple-600 rounded-full opacity-50 blur-[24px]" />
                        <div className="absolute right-4 top-4 w-36 h-36 bg-pink-400 rounded-full opacity-30 blur-[33px]" />
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/09d962cca45219bbfc65c846c00cd643ba9b8652"
                          alt="Event Character 1"
                          className="absolute right-4 top-4 w-[56px] h-[65px] object-cover"
                        />
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f9e7a756884184da59bd95a23154412581daec3"
                          alt="Event Character 2"
                          className="absolute right-4 bottom-2 w-[43px] h-[43px] object-cover"
                        />
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3d6f53c812b0b04c1a21b66062d835030a938c6"
                          alt="Event Character 3"
                          className="absolute right-4 -top-7 w-[43px] h-[43px] object-cover"
                        />
                      </>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Crash Games Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-6"
        >
          <div className="flex items-center gap-1 mb-4">
            <span className="text-white font-medium text-lg">Crash</span>
            <span className="text-white/80 font-medium text-lg">Games</span>
          </div>

          <div className="overflow-x-auto scrollbar-hide -mx-5 px-5">
            <div className="flex gap-4 min-w-max">
              {crashGames.map((game, index) => (
                <motion.button
                  key={game.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => handleGameClick(game.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0 hover:opacity-90 transition-all"
                >
                  <div className="w-[84px] h-[84px] rounded-full overflow-hidden relative">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </motion.button>
              ))}

              {/* Add duplicates for smooth scrolling */}
              {crashGames.map((game, index) => (
                <motion.button
                  key={`extra-${game.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (index + crashGames.length) }}
                  onClick={() => handleGameClick(`${game.id}-extra`)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0 hover:opacity-90 transition-all"
                >
                  <div className="w-[84px] h-[84px] rounded-full overflow-hidden relative">
                    <img
                      src={game.image}
                      alt={`${game.name} Extra`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-xl rounded-t-3xl p-4"
      >
        <div className="flex items-center justify-between max-w-sm mx-auto px-8">
          <button className="p-3">
            <Home size={24} className="text-blue-500" />
          </button>
          <button className="p-3">
            <ArrowLeft size={24} className="text-white/60" />
          </button>
          <button className="p-3">
            <Search size={24} className="text-white/60" />
          </button>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9abfbeea575d8eb1f04c7feb67db1b93c5562a3"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
        <div className="w-32 h-1 bg-white/30 rounded-full mx-auto mt-3"></div>
      </motion.div>
    </div>
  );
}
