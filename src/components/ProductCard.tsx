import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
}

const ProductCard = ({ title, description, image, price }: ProductCardProps) => {
  const { toast } = useToast();

  const handlePurchase = () => {
    toast({
      title: "カートに追加しました",
      description: `${title}をカートに追加しました。`,
    });
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">{price}</span>
          <Button 
            onClick={handlePurchase}
            className="bg-primary text-dark hover:bg-primary/90"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            購入する
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;