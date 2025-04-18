"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Stay updated with our latest products and news
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button>Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold text-white mb-4">About Westfood</h4>
            <p className="text-gray-400 mb-4">
              Leading manufacturer in the FMCG sector, specializing in high-quality food products
              with a commitment to innovation and sustainability.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-green-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-green-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/margarine" className="hover:text-green-400 transition-colors">
                  Margarine
                </Link>
              </li>
              <li>
                <Link href="/products/yeast" className="hover:text-green-400 transition-colors">
                  Yeast
                </Link>
              </li>
              <li>
                <Link href="/products/vegetable-oil" className="hover:text-green-400 transition-colors">
                  Vegetable Oil
                </Link>
              </li>
              <li>
                <Link href="/products/candy" className="hover:text-green-400 transition-colors">
                  Candy
                </Link>
              </li>
              <li>
                <Link href="/products/wafers" className="hover:text-green-400 transition-colors">
                  Wafers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-400" />
                <span>info@westfood.com</span>
              </li>
              <li>
                <p>123 Industrial Park Road</p>
                <p>Manufacturing District</p>
                <p>Business City, BC 12345</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 text-center text-sm">
          <p>© {new Date().getFullYear()} Westfood Company Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}