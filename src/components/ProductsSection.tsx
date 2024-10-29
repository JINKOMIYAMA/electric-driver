import ProductCard from "./ProductCard";

const ProductsSection = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="fade-in-section">
          <h2 className="section-title">Products</h2>
          <h3 className="section-subtitle">製品ラインナップ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductCard
              title="見電ドライバー（＋）"
              description="プラスドライバー型の検電ドライバー。安全性と使いやすさを追求した革新的な設計。"
              image="/product1.jpg"
              price="¥12,800"
            />
            <ProductCard
              title="見電ドライバー（－）"
              description="マイナスドライバー型の検電ドライバー。プロフェッショナルな作業をサポート。"
              image="/product2.jpg"
              price="¥12,800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;