import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "先端保護",
    description: "先端6mmまで金属部分をチューブで保護",
    position: "top-1/4 -left-32",
    linePoints: "M0 0 L60 40",
  },
  {
    id: 2,
    title: "テストボタン",
    description: "テストボタンで使用前点検が可能",
    position: "top-1/2 -right-36",
    linePoints: "M0 0 L-60 20",
  },
  {
    id: 3,
    title: "LEDインジケーター",
    description: "作業箇所の通電・無電が見える高精度LED",
    position: "bottom-1/3 -left-40",
    linePoints: "M0 0 L80 -20",
  },
  {
    id: 4,
    title: "滑り止めグリップ",
    description: "ゴム製の持ちやすい滑り止め",
    position: "bottom-1/4 -right-32",
    linePoints: "M0 0 L-60 -40",
  },
];

const DriverFeatures = () => {
  return (
    <div className="relative max-w-4xl mx-auto mt-16 h-[600px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Electric Driver"
          className="max-h-full object-contain"
        />
      </motion.div>

      {features.map((feature, index) => (
        <motion.div
          key={feature.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className={`absolute ${feature.position} max-w-xs`}
        >
          <div className="relative">
            <svg
              className="absolute text-primary/30"
              width="100"
              height="100"
              viewBox="-50 -50 100 100"
            >
              <path
                d={feature.linePoints}
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <div className="bg-dark/80 backdrop-blur-sm p-4 rounded-lg border border-primary/20">
              <h4 className="text-primary font-bold mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DriverFeatures;