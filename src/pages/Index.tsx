import { useState } from "react";
import { Product, CartItem } from "@/types/product";
import { products } from "@/data/products";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetail } from "@/components/ProductDetail";
import { ShoppingCart } from "@/components/ShoppingCart";
import { useToast } from "@/hooks/use-toast";

type View = "home" | "product-detail" | "cart";

const Index = () => {
  const [currentView, setCurrentView] = useState<View>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView("product-detail");
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        toast({
          title: "Cart Updated",
          description: `Increased quantity of ${product.name}`,
        });
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart`,
      });
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    toast({
      title: "Item Removed",
      description: "Item has been removed from your cart",
    });
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedProduct(null);
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header onCartClick={() => setCurrentView("cart")} cartItemCount={cartItemCount} />
      
      {currentView === "home" && (
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground">
              Discover our latest collection of premium electronics
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </main>
      )}

      {currentView === "product-detail" && selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onBack={handleBackToHome}
          onAddToCart={handleAddToCart}
        />
      )}

      {currentView === "cart" && (
        <ShoppingCart
          items={cartItems}
          onBack={handleBackToHome}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />
      )}
    </div>
  );
};

export default Index;
