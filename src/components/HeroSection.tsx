import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)"
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="text-primary">見電</span> ドライバー
          </h1>
          <h2 className="text-3xl md:text-4xl mb-8 text-gray-300">
            Safety Electric Driver
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto whitespace-nowrap">
            業界初、検電器と作業用ドライバーが1つになった革新的なツール
          </p>
          <button className="bg-primary text-dark px-8 py-3 rounded-full text-lg font-bold hover:bg-opacity-90 transition-colors">
            詳細を見る
          </button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
};

export default HeroSection;