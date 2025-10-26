import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductDetail = ({ product, onBack, onAddToCart }: ProductDetailProps) => {
  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Button>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-4">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-3">
              {product.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-4">
              <p className="text-4xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </p>
              <Badge variant={product.inStock ? "default" : "destructive"}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-lg font-semibold mb-3">Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">Specifications</h2>
            <ul className="space-y-2">
              {product.specifications.map((spec, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button 
            variant="accent" 
            size="lg" 
            className="w-full md:w-auto md:min-w-[200px]"
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
