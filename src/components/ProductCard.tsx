interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

const ProductCard = ({ title, description, image, className }: ProductCardProps) => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
      <div className="mb-4">
        <img
          src={image}
          alt={title}
          className={`w-full rounded-lg ${className || ''}`}
        />
      </div>
      <h4 className="text-xl font-bold text-primary mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ProductCard;