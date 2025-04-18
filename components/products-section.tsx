"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cookie, 
  Wheat, 
  Droplets, 
  Candy, 
  Cookie as WaferIcon,
  ChevronRight,
  UtensilsCrossed,
  Package
} from "lucide-react";

const products = [
  {
    name: "Margarine",
    icon: Droplets,
    description: "Premium quality margarine for all your cooking and baking needs",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
    category: "margarine"
  },
  {
    name: "Yeast",
    icon: Wheat,
    description: "High-performance yeast for perfect fermentation",
    color: "text-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
    category: "yeast"
  },
  {
    name: "Vegetable Oil",
    icon: Droplets,
    description: "Pure and healthy vegetable oil for cooking excellence",
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    category: "vegetable-oil"
  },
  {
    name: "Candy",
    icon: Candy,
    description: "Delightful candies made with the finest ingredients",
    color: "text-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/20",
    category: "candy"
  },
  {
    name: "Wafers",
    icon: WaferIcon,
    description: "Crispy and delicious wafers in various flavors",
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    category: "wafers"
  },
  {
    name: "Seasoning & Can Foods",
    icon: UtensilsCrossed,
    description: "Premium seasonings and quality canned food products",
    color: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    category: "seasoning-and-can-foods"
  },
  {
    name: "Others",
    icon: Package,
    description: "Explore our other high-quality food products",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    category: "others"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

export function ProductsSection() {
  const scrollToPortfolio = (category: string) => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
      // Find and click the category button in the portfolio section
      const categoryButton = document.querySelector(`button[data-category="${category}"]`) as HTMLButtonElement;
      if (categoryButton) {
        categoryButton.click();
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of high-quality food products crafted with excellence
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className={`p-4 rounded-full ${product.bgColor} mb-6`}
                      whileHover="hover"
                    >
                      <motion.div variants={iconVariants}>
                        <product.icon className={`h-12 w-12 ${product.color}`} />
                      </motion.div>
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
                    <p className="text-muted-foreground mb-6">
                      {product.description}
                    </p>
                    <Button 
                      onClick={() => scrollToPortfolio(product.category)}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    >
                      More Info
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}