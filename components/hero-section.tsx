"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Search, Target } from 'lucide-react';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  showStats?: boolean;
}

export function HeroSection({ 
  title, 
  subtitle, 
  description, 
  ctaText = "Get Free SEO Audit", 
  ctaLink = "/contact",
  showStats = true 
}: HeroSectionProps) {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
              {subtitle}
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href={ctaLink}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>

          {showStats && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">300%</div>
                <div className="text-gray-600">Average Traffic Increase</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Search className="h-8 w-8 text-teal-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">85%</div>
                <div className="text-gray-600">Keywords in Top 10</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Target className="h-8 w-8 text-orange-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Successful Projects</div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}