"use client";

import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { Award, Users, Package, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const achievements = [
  {
    icon: Award,
    value: 20,
    label: "Years of Excellence",
    suffix: "+",
  },
  {
    icon: Users,
    value: 1000,
    label: "Happy Customers",
    suffix: "+",
  },
  {
    icon: Package,
    value: 50000,
    label: "Units Delivered",
    suffix: "+",
  },
  {
    icon: Clock,
    value: 98,
    label: "On-Time Delivery",
    suffix: "%",
  },
];

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-3">Our Achievements</h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            A track record of excellence in food manufacturing
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-6 border-none bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-green-50 dark:bg-green-900/20">
                  <achievement.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {isInView && (
                    <CountUp
                      end={achievement.value}
                      duration={2.5}
                      suffix={achievement.suffix}
                    />
                  )}
                </div>
                <h3 className="text-sm font-medium">{achievement.label}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}