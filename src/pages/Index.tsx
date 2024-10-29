import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import RiskDiagram from "../components/RiskDiagram";
import ProductCard from "../components/ProductCard";
import DriverFeatures from "../components/DriverFeatures";
import { Shield, Zap, Battery, Factory, AlertCircle } from "lucide-react";

const SpecItem = ({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => (
  <div className="flex flex-col items-center p-6 bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl hover:scale-105 transition-transform duration-300">
    <div className="bg-primary/10 p-4 rounded-full mb-4">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <h4 className="text-lg font-bold text-primary mb-2">{title}</h4>
    <p className="text-gray-400 text-center text-sm">{description}</p>
  </div>
);

const Index = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".fade-in-section").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-dark min-h-screen">
      <HeroSection />

      <section className="py-20 container mx-auto px-4 relative">
        <div className="fade-in-section relative z-10">
          <h2 className="section-title">ABOUT</h2>
          <h3 className="section-subtitle">見電ドライバーとは？</h3>
          <DriverFeatures />
          
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-12 text-primary">製品仕様</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SpecItem
                icon={Zap}
                title="検知範囲"
                description="AC100V-240V対応で、幅広い電圧に対応"
              />
              <SpecItem
                icon={Battery}
                title="電源"
                description="単4電池2本で長時間駆動"
              />
              <SpecItem
                icon={Shield}
                title="安全性"
                description="絶縁手袋着用可能な安全設計"
              />
              <SpecItem
                icon={Factory}
                title="Made in Japan"
                description="品質と信頼性にこだわった国内生産"
              />
            </div>
          </div>

          <div className="mt-24 bg-gray-900/50 rounded-xl p-8">
            <h2 className="section-title">SAFETY</h2>
            <h3 className="section-subtitle">電気工事をする方々のお悩みを解決</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-left">
                <div className="bg-dark/50 p-6 rounded-lg border border-primary/20">
                  <h4 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    作業時の不安を解消
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    <li>・さっき検電したから大丈夫？という不安</li>
                    <li>・目に見えない電気作業の恐怖</li>
                    <li>・通電状態の確実な確認</li>
                    <li>・スイッチの切り忘れ防止</li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                  alt="電気工事作業"
                  className="rounded-lg object-cover w-full h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="fade-in-section">
            <h2 className="section-title">Products</h2>
            <h3 className="section-subtitle">製品ラインナップ</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProductCard
                title="セーフティカッター"
                description="刃が自動的に戻る安全設計"
                image="/product1.jpg"
              />
              <ProductCard
                title="オールメタルセーフティ"
                description="耐久性に優れた金属製ボディ"
                image="/product2.jpg"
              />
              <ProductCard
                title="セーフティカッターコンパクト"
                description="携帯に便利なコンパクトサイズ"
                image="/product3.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
