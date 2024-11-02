import { motion } from "framer-motion";
import ElectricWorkBg from '../assets/images/Electric work.jpg';
import PlusDriver from '../assets/images/driver photo.jpg';

const features = [
  {
    id: 1,
    title: "先端保護",
    description: "先端6mmまで金属部分をチューブで保護",
    position: "top-[140px] left-[-10px]",
    linePoints: "M0 0 L100 100",
  },
  {
    id: 2,
    title: "テストボタン",
    description: "テストボタンで使用前点検が可能",
    position: "top-[125px] right-[180px]",
    linePoints: "M0 0 L-100 100",
  },
  {
    id: 3,
    title: "LEDインジケーター",
    description: "作業箇所の通電・無電が見える高精度LED",
    position: "bottom-[130px] left-[100px]",
    linePoints: "M300 -300 L0 0",
  },
  {
    id: 4,
    title: "滑り止めグリップ",
    description: "ゴム製の持ちやすい滑り止め",
    position: "bottom-[100px] right-[20px]",
    linePoints: "M0 0 L-160 -160",
  },
];

const DriverFeatures = () => {
  return (
    <section className="relative py-10 w-screen overflow-hidden -mx-[50vw] left-[50%] right-[50%]">
      <div 
        className="absolute inset-0 z-0 before:absolute before:inset-0 before:bg-gradient-to-t before:from-dark before:to-transparent after:absolute after:inset-0 after:bg-gradient-to-b after:from-dark after:to-transparent"
        style={{
          backgroundImage: `url(${ElectricWorkBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7) blur(4px)",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-8"></div>
        <div className="relative w-[800px] h-[600px] mx-auto">
          {/* 特徴説明（先に配置） */}
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`absolute ${feature.position} max-w-xs z-30`}
            >
              <div className="relative">
                {/* 上部の特徴（id: 1, 2）用のSVG */}
                {feature.id <= 2 && (
                  <svg
                    className="absolute inset-0 text-primary"
                    width="100%"
                    height="200"  // 下向きの線のために高さを確保
                    style={{
                      top: '100%',  // ボックスの下に配置
                      pointerEvents: 'none'
                    }}
                  >
                    {feature.id === 1 && (
                      <line x1="50%" y1="0" x2="60%" y2="30%" stroke="currentColor" strokeWidth="2" />
                    )}
                    {feature.id === 2 && (
                      <line x1="50%" y1="0" x2="20%" y2="30%" stroke="currentColor" strokeWidth="2" />
                    )}
                  </svg>
                )}

                {/* 下部の特徴（id: 3, 4）用のSVG */}
                {feature.id > 2 && (
                  <svg
                    className="absolute inset-0 text-primary"
                    width="100%"
                    height="200"
                    style={{
                      transform: 'translateY(-100%)',
                      pointerEvents: 'none'
                    }}
                  >
                    {feature.id === 3 && (
                      <line x1="50%" y1="100%" x2="70%" y2="70%" stroke="currentColor" strokeWidth="2" />
                    )}
                    {feature.id === 4 && (
                      <line x1="50%" y1="100%" x2="30%" y2="75%" stroke="currentColor" strokeWidth="2" />
                    )}
                  </svg>
                )}
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-dark/80 backdrop-blur-sm p-4 rounded-lg border border-primary/20"
                >
                  <h4 className="text-primary font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* ドライバー画像（後に配置） */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <img
              src={PlusDriver}
              alt="プラスドライバー"
              className="h-[500px] w-auto object-contain rotate-[-135deg]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DriverFeatures;