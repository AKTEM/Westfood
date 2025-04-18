"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";

type Category = "all" | "margarine" | "yeast" | "vegetable-oil" | "candy" | "wafers" | "seasoning-and-can-foods" | "others";

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  // Margarine
  {
    id: 1,
    title: "Premium Table Margarine",
    category: "margarine",
    image: "img/IMG_2306.jpg"
  },
  {
    id: 2,
    title: "Baking Margarine",
    category: "margarine",
    image: "img/w-01.jpg"
  },
  {
    id: 3,
    title: "Low Fat Margarine",
    category: "margarine",
    image: "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  

  // Yeast
  {
    id: 4,
    title: "Active Dry Yeast",
    category: "yeast",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 5,
    title: "Instant Yeast",
    category: "yeast",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 6,
    title: "Fresh Yeast",
    category: "yeast",
    image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
 

  // Vegetable Oil
  {
    id: 13,
    title: "Soybean Oil",
    category: "vegetable-oil",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 14,
    title: "Sunflower Oil",
    category: "vegetable-oil",
    image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 15,
    title: "Palm Oil",
    category: "vegetable-oil",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  

  // Candy
  {
    id: 19,
    title: "Hard Candies",
    category: "candy",
    image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 20,
    title: "Toffees",
    category: "candy",
    image: "https://images.unsplash.com/photo-1575224526797-5730d09d781d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 21,
    title: "Fruit Candies",
    category: "candy",
    image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  
  // Wafers
  {
    id: 25,
    title: "Chocolate Wafers",
    category: "wafers",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 26,
    title: "Vanilla Wafers",
    category: "wafers",
    image: "https://images.unsplash.com/photo-1587244141530-6b594e3e3754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 27,
    title: "Strawberry Wafers",
    category: "wafers",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  
  // Others
  {
    id: 31,
    title: "Specialty Product 1",
    category: "others",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 32,
    title: "Specialty Product 2",
    category: "others",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 33,
    title: "Specialty Product 3",
    category: "others",
    image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  
  // Seasoning & Can Foods
  {
    id: 37,
    title: "Premium Seasonings",
    category: "seasoning-and-can-foods",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 38,
    title: "Canned Vegetables",
    category: "seasoning-and-can-foods",
    image: "https://images.unsplash.com/photo-1594057683346-8ac9e6dc8140?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 39,
    title: "Spice Blends",
    category: "seasoning-and-can-foods",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  
];

const categories = [
  { id: "all", label: "All Products" },
  { id: "margarine", label: "Margarine" },
  { id: "yeast", label: "Yeast" },
  { id: "vegetable-oil", label: "Vegetable Oil" },
  { id: "candy", label: "Candy" },
  { id: "wafers", label: "Wafers" },
  { id: "seasoning-and-can-foods", label: "Seasoning & Can Foods" },
  { id: "others", label: "Others" },
];

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredItems = selectedCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-16 bg-gray-50 dark:bg-gray-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of high-quality food products
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as Category)}
              data-category={category.id}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-green-600 text-white"
                  : "bg-white dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden group cursor-pointer">
                  <div className="relative h-64">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}