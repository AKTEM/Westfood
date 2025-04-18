"use client";

import * as React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Target, Rocket, Shield, Leaf, BadgeCheck, LineChart, Users } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Achievements } from "@/components/achievements";
import { useRef } from "react";
import { ProductsSection } from "@/components/products-section";
import { DivisionsSection } from "@/components/divisions-section";
import { BestSellingSection } from "@/components/best-selling-section";
import { ReviewsSection } from "@/components/reviews-section";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect } from "react";
import { PortfolioSection } from "@/components/portfolio-section";

const heroSlides = [
  {
    image: "/img/s1.png",
    title: "Modern Food Manufacturing",
    description: "State-of-the-art facilities ensuring the highest quality",
  },
  {
    image: "/img/s2.jpg",
    title: "Quality Ingredients",
    description: "Only the finest ingredients make it to our products",
  },
  {
    image: "/img/s3.jpg",
    title: "Sustainable Production",
    description: "Committed to environmental responsibility",
  },
];

const managementTeam = [
  {
    name: "Placeholder 1",
    position: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80",
  },
  {
    name: "Placeholder 2",
    position: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80",
  },
  {
    name: "Placeholder 3",
    position: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80",
  },
];

const coreValues = [
  {
    title: "Quality",
    description: "Maintaining the highest standards in all our products",
    icon: BadgeCheck,
    color: "text-blue-500",
  },
  {
    title: "Innovation",
    description: "Continuously improving our processes and products",
    icon: Rocket,
    color: "text-purple-500",
  },
  {
    title: "Integrity",
    description: "Conducting business with honesty and transparency",
    icon: Shield,
    color: "text-red-500",
  },
  {
    title: "Sustainability",
    description: "Committed to environmental responsibility",
    icon: Leaf,
    color: "text-green-500",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const textLine = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    }
  }
};

const reliableText = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
      delay: 0.6,
    }
  }
};

export default function Home() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const autoplay = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 2000);

    return () => clearInterval(autoplay);
  }, [api]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDUwIDAgTCAwIDAgMCA1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <div className="overflow-hidden">
              <motion.h1 
                variants={textLine}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight inline-block"
              >
                Quality Products
              </motion.h1>
            </div>
            {/* <div className="overflow-hidden">
              <motion.h1 
                variants={textLine}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight inline-block"
              >
                
              </motion.h1>
            </div> */}
            <div className="overflow-hidden">
              <motion.span 
                variants={reliableText}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-emerald-100 leading-tight inline-block"
              >
                Everyday Value
              </motion.span>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-emerald-100 text-xl mt-4"
            >
              Nourishing Lives with Trusted, High-Quality Packaged Food Products.
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <Button
              size="lg"
              className="bg-white text-green-800 hover:bg-green-50 text-lg px-8"
              onClick={() => scrollToSection('products')}
            >
              Discover Our Products
            </Button>
            <Button
              size="lg"
              className="bg-[#FF7C24] text-black hover:bg-[#FF7C24]/80 text-lg px-8"
              onClick={() => scrollToSection('contact')}
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Slider Section */}
      <section className="relative">
        <div className="min-h-[600px] relative">
          <Carousel
            className="w-full h-full"
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <CarouselContent className="h-[600px]">
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="relative w-full h-full">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="100vw"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-7xl mx-auto">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                          className="max-w-3xl"
                        >
                          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{slide.title}</h2>
                          <p className="text-lg md:text-xl text-white/90 mb-6">{slide.description}</p>
                          <div className="flex gap-4">
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-4 z-20">
              <CarouselPrevious className="relative" />
              <CarouselNext className="relative" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-gray-950 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Westfood Company Limited is a leading manufacturer in the FMCG sector,
              specializing in high-quality food products. With decades of experience,
              we've built a reputation for excellence in producing margarine, yeast,
              vegetable oil, candy,wafers(cookies), seasoning, can foods and others
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground">
                To be the leading food manufacturing company in the region, recognized
                for our innovation, quality, and commitment to customer satisfaction.
              </p>
            </motion.div>
            <motion.div
              className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <LineChart className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground">
                To provide consumers with high-quality food products while maintaining
                the highest standards of food safety and environmental responsibility.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold">Our Core Values</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                >
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <div className="mb-4 flex justify-center">
                        <value.icon className={`h-10 w-10 ${value.color}`} />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              <h3 className="text-2xl font-bold text-center">Management Team</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {managementTeam.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-64">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="text-center p-4">
                      <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                      <p className="text-muted-foreground">{member.position}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <Achievements />
        </div>
      </section>

      {/* Products Section */}
      <section id="products">
        <ProductsSection />
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Remaining Sections */}
      <DivisionsSection />
      <BestSellingSection />
      <ReviewsSection />
      <FAQSection />
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}