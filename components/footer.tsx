import Link from 'next/link';
import { Search, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Search className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">PowerMySEO</span>
            </div>
            <p className="text-gray-400">
              Professional SEO services to boost your online presence and drive more qualified traffic to your website.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <span className="text-sm">info@powermyseo.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <span className="text-sm">+61 2 9876 5432</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm">Sydney, Australia</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2">
              {[
                { name: 'SEO Audit', href: '/services/seo-audit' },
                { name: 'Local SEO', href: '/services/local-seo' },
                { name: 'Technical SEO', href: '/services/technical-seo' },
                { name: 'Link Building', href: '/services/link-building' },
                { name: 'Keyword Research', href: '/services/keyword-research' },
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-400 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Industries</h3>
            <ul className="space-y-2">
              {[
                { name: 'Law Firms', href: '/industries/law-firms' },
                { name: 'Dentists', href: '/industries/dentists' },
                { name: 'SaaS', href: '/industries/saas' },
                { name: 'Ecommerce', href: '/industries/ecommerce' },
                { name: 'Real Estate', href: '/industries/real-estate' },
              ].map((industry) => (
                <li key={industry.name}>
                  <Link href={industry.href} className="text-gray-400 hover:text-white transition-colors">
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Locations</h3>
            <ul className="space-y-2">
              {[
                { name: 'SEO Sydney', href: '/locations/sydney' },
                { name: 'SEO Melbourne', href: '/locations/melbourne' },
                { name: 'SEO Brisbane', href: '/locations/brisbane' },
              ].map((location) => (
                <li key={location.name}>
                  <Link href={location.href} className="text-gray-400 hover:text-white transition-colors">
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PowerMySEO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}