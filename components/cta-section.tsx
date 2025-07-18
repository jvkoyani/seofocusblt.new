"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  description?: string;
  showContactInfo?: boolean;
  className?: string;
}

export function CTASection({ 
  title = "Ready to Boost Your SEO Rankings?", 
  description = "Get a free SEO audit and discover how we can help you dominate search results and drive more qualified traffic to your website.",
  showContactInfo = true,
  className = ""
}: CTASectionProps) {
  return (
    <section className={`py-20 bg-gradient-to-r from-blue-600 to-teal-600 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {title}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Free SEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="tel:+61298765432">
                  Call Now
                  <Phone className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {showContactInfo && (
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100">
                <div className="flex items-center space-x-2">
                  <Phone size={20} />
                  <span>+61 2 9876 5432</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={20} />
                  <span>info@powermyseo.com</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}