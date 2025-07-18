"use client";

import { motion } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  Target, 
  Shield, 
  Users, 
  BarChart3,
  Clock,
  Award
} from 'lucide-react';

const features = [
  {
    icon: Search,
    title: "Comprehensive SEO Audit",
    description: "In-depth analysis of your website's technical, on-page, and off-page SEO factors."
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Track record of improving search rankings and organic traffic for clients across industries."
  },
  {
    icon: Target,
    title: "Targeted Strategy",
    description: "Custom SEO strategies tailored to your specific industry and business goals."
  },
  {
    icon: Shield,
    title: "White-Hat Techniques",
    description: "Ethical SEO practices that comply with search engine guidelines and protect your brand."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified SEO professionals with years of experience in digital marketing."
  },
  {
    icon: BarChart3,
    title: "Detailed Reporting",
    description: "Monthly reports with clear metrics and insights into your SEO performance."
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    description: "Continuous monitoring and optimization to maintain and improve your rankings."
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Award-winning SEO agency recognized for excellence in digital marketing."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose PowerMySEO?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge SEO techniques with proven strategies to deliver exceptional results for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}