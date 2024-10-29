interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard = ({ title, description, image }: ProductCardProps) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <button className="bg-primary text-dark px-6 py-2 rounded-full text-base font-bold hover:bg-opacity-90 transition-colors w-full">
          購入
        </button>
      </div>
    </div>
  );
};

export default ProductCard;