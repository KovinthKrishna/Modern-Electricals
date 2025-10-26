import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-base line-clamp-2 text-foreground">
              {product.name}
            </h3>
            <Badge variant="secondary" className="shrink-0">
              {product.inStock ? "In Stock" : "Out of Stock"}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-1">
            {product.category}
          </p>
          <p className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          variant="accent" 
          className="w-full"
          onClick={() => onViewDetails(product)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};
