"use client";

import { motion } from 'framer-motion';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { CTASection } from '@/components/cta-section';
import { ContactForm } from '@/components/contact-form';
import { StructuredData } from '@/components/structured-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    name: 'SEO Audit',
    description: 'Comprehensive analysis of your website\'s SEO performance',
    href: '/services/seo-audit',
    features: ['Technical SEO Analysis', 'Keyword Gap Analysis', 'Competitor Research', 'Action Plan']
  },
  {
    name: 'Local SEO',
    description: 'Dominate local search results and attract nearby customers',
    href: '/services/local-seo',
    features: ['Google My Business', 'Local Citations', 'Reviews Management', 'Local Keywords']
  },
  {
    name: 'Technical SEO',
    description: 'Fix technical issues that prevent search engines from crawling your site',
    href: '/services/technical-seo',
    features: ['Site Speed Optimization', 'Mobile Optimization', 'Schema Markup', 'Core Web Vitals']
  },
  {
    name: 'Link Building',
    description: 'Build high-quality backlinks to improve your domain authority',
    href: '/services/link-building',
    features: ['Guest Posting', 'HARO Outreach', 'Broken Link Building', 'Resource Page Links']
  }
];

const industries = [
  { name: 'Law Firms', href: '/industries/law-firms', icon: '⚖️' },
  { name: 'Dentists', href: '/industries/dentists', icon: '🦷' },
  { name: 'SaaS', href: '/industries/saas', icon: '💻' },
  { name: 'Ecommerce', href: '/industries/ecommerce', icon: '🛒' },
  { name: 'Real Estate', href: '/industries/real-estate', icon: '🏠' }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PowerMySEO",
  "url": "https://seo.powermyseo.com",
  "logo": "https://seo.powermyseo.com/logo.png",
  "description": "Professional SEO services to boost your online presence and drive qualified traffic",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AU",
    "addressLocality": "Sydney"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+61-2-9876-5432",
    "contactType": "Customer Service"
  },
  "sameAs": [
    "https://www.facebook.com/powermyseo",
    "https://www.linkedin.com/company/powermyseo",
    "https://twitter.com/powermyseo"
  ]
};

export default function Home() {
  return (
    <>
      <StructuredData data={structuredData} />
      
      <HeroSection
        title="Boost Your Search Rankings"
        subtitle="Professional SEO Services That Drive Results"
        description="Transform your online presence with our data-driven SEO strategies. We help businesses increase organic traffic, improve search rankings, and generate more qualified leads."
      />

      {/* Services Section */}
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
                Our SEO Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive SEO solutions tailored to your business needs and goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <p className="text-gray-600">{service.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button asChild className="w-full">
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
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
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Specialized SEO strategies for different industries and business types.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={industry.href} className="block group">
                    <Card className="text-center hover:shadow-lg transition-all group-hover:scale-105">
                      <CardContent className="p-6">
                        <div className="text-4xl mb-4">{industry.icon}</div>
                        <h3 className="font-semibold text-gray-900">{industry.name}</h3>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
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
                Proven Results
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our SEO strategies deliver measurable results for businesses of all sizes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-10 w-10 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">300%</div>
                <div className="text-gray-600">Average Traffic Increase</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-teal-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-orange-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">85%</div>
                <div className="text-gray-600">Keywords in Top 10</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <ContactForm />
      <CTASection />
    </>
  );
}