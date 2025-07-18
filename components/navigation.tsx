"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Search, MapPin, Building2, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const services = [
  { name: 'SEO Audit', href: '/services/seo-audit', description: 'Comprehensive SEO analysis' },
  { name: 'Local SEO', href: '/services/local-seo', description: 'Dominate local search results' },
  { name: 'Technical SEO', href: '/services/technical-seo', description: 'Fix technical SEO issues' },
  { name: 'On-Page SEO', href: '/services/on-page-seo', description: 'Optimize your content' },
  { name: 'Link Building', href: '/services/link-building', description: 'Build high-quality backlinks' },
  { name: 'Keyword Research', href: '/services/keyword-research', description: 'Find profitable keywords' },
  { name: 'eCommerce SEO', href: '/services/ecommerce-seo', description: 'Boost online sales' },
  { name: 'International SEO', href: '/services/international-seo', description: 'Global SEO strategy' },
];

const industries = [
  { name: 'Law Firms', href: '/industries/law-firms', icon: Briefcase },
  { name: 'Dentists', href: '/industries/dentists', icon: Building2 },
  { name: 'SaaS', href: '/industries/saas', icon: Search },
  { name: 'Ecommerce', href: '/industries/ecommerce', icon: Building2 },
  { name: 'Real Estate', href: '/industries/real-estate', icon: MapPin },
];

const locations = [
  { name: 'Sydney', href: '/locations/sydney' },
  { name: 'Melbourne', href: '/locations/melbourne' },
  { name: 'Brisbane', href: '/locations/brisbane' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-primary">
            PowerMySEO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
                <span>Services</span>
                <ChevronDown size={16} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="font-medium text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.description}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
                <span>Industries</span>
                <ChevronDown size={16} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 p-4"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {industries.map((industry) => {
                        const Icon = industry.icon;
                        return (
                          <Link
                            key={industry.name}
                            href={industry.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <Icon size={20} className="text-primary" />
                            <span className="font-medium text-gray-900">{industry.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Locations Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('locations')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
                <span>Locations</span>
                <ChevronDown size={16} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'locations' && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 p-4"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {locations.map((location) => (
                        <Link
                          key={location.name}
                          href={location.href}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-900"
                        >
                          {location.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link href="/contact">Get Free SEO Audit</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <div className="flex flex-col space-y-6 mt-8">
                <Link href="/" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
                
                <div className="space-y-4">
                  <div className="font-medium text-gray-900">Services</div>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block pl-4 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="font-medium text-gray-900">Industries</div>
                  {industries.map((industry) => (
                    <Link
                      key={industry.name}
                      href={industry.href}
                      className="block pl-4 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>

                <Link href="/about" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
                <Link href="/contact" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
                
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Free SEO Audit
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}