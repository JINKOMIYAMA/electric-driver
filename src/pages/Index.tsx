import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import RiskDiagram from "../components/RiskDiagram";
import ProductCard from "../components/ProductCard";

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

      <section className="py-20 container mx-auto px-4">
        <div className="fade-in-section">
          <h2 className="section-title">About</h2>
          <h3 className="section-subtitle">セーフティシリーズとは？</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                カッターナイフは便利な道具である一方、使い方によってはケガを起こしてしまうリスクを抱えています。
              </p>
              <p className="text-lg">
                そこでオルファは、カッターナイフで起こりうるケガのリスクを減らすべく、安全性を考慮し、かつ作業効率にも配慮した設計の「セーフティシリーズ」を生み出しました。
              </p>
            </div>
            <RiskDiagram />
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