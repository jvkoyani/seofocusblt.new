import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { HeroSection } from '@/components/hero-section';
import { CTASection } from '@/components/cta-section';
import { ContactForm } from '@/components/contact-form';
import { Breadcrumb } from '@/components/breadcrumb';
import { StructuredData } from '@/components/structured-data';

const locations = {
  'sydney': {
    title: 'SEO Services in Sydney',
    subtitle: 'Leading SEO Agency in Sydney, Australia',
    description: 'Professional SEO services in Sydney to help local businesses dominate search results and attract more customers in the Sydney market.',
    population: '5.3 million',
    businessCount: '180,000+',
    marketInfo: 'Sydney is Australia\'s largest city and a major business hub with intense competition across all industries.',
    services: [
      'Local SEO Sydney',
      'Google My Business optimization',
      'Sydney-specific keyword research',
      'Local citation building',
      'Review management',
      'Technical SEO',
      'Content marketing',
      'Link building'
    ],
    industries: [
      'Professional Services',
      'Healthcare',
      'Real Estate',
      'Retail',
      'Technology',
      'Finance',
      'Hospitality',
      'Education'
    ],
    benefits: [
      'Dominate Sydney local search results',
      'Attract more local customers',
      'Compete with larger businesses',
      'Build trust in the local market',
      'Increase foot traffic and calls',
      'Improve online reputation'
    ]
  },
  'melbourne': {
    title: 'SEO Services in Melbourne',
    subtitle: 'Expert SEO Agency in Melbourne, Australia',
    description: 'Comprehensive SEO services in Melbourne to help businesses increase visibility, attract customers, and grow in the competitive Melbourne market.',
    population: '5.1 million',
    businessCount: '160,000+',
    marketInfo: 'Melbourne is known for its vibrant business scene, cultural diversity, and strong competition across industries.',
    services: [
      'Local SEO Melbourne',
      'Google My Business optimization',
      'Melbourne-specific keyword research',
      'Local citation building',
      'Review management',
      'Technical SEO',
      'Content marketing',
      'Link building'
    ],
    industries: [
      'Professional Services',
      'Healthcare',
      'Real Estate',
      'Retail',
      'Technology',
      'Finance',
      'Hospitality',
      'Education'
    ],
    benefits: [
      'Dominate Melbourne local search results',
      'Attract more local customers',
      'Compete with larger businesses',
      'Build trust in the local market',
      'Increase foot traffic and calls',
      'Improve online reputation'
    ]
  },
  'brisbane': {
    title: 'SEO Services in Brisbane',
    subtitle: 'Professional SEO Agency in Brisbane, Australia',
    description: 'Strategic SEO services in Brisbane to help local businesses improve search rankings, attract customers, and grow in the Brisbane market.',
    population: '2.6 million',
    businessCount: '90,000+',
    marketInfo: 'Brisbane is a growing business center with opportunities for local businesses to establish strong online presence.',
    services: [
      'Local SEO Brisbane',
      'Google My Business optimization',
      'Brisbane-specific keyword research',
      'Local citation building',
      'Review management',
      'Technical SEO',
      'Content marketing',
      'Link building'
    ],
    industries: [
      'Professional Services',
      'Healthcare',
      'Real Estate',
      'Retail',
      'Technology',
      'Finance',
      'Hospitality',
      'Education'
    ],
    benefits: [
      'Dominate Brisbane local search results',
      'Attract more local customers',
      'Compete with larger businesses',
      'Build trust in the local market',
      'Increase foot traffic and calls',
      'Improve online reputation'
    ]
  }
};

type LocationSlug = keyof typeof locations;

interface LocationPageProps {
  params: {
    location: string;
  };
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const location = locations[params.location as LocationSlug];
  
  if (!location) {
    return {
      title: 'Location Not Found',
      description: 'The requested location page could not be found.'
    };
  }

  return {
    title: `${location.title} | PowerMySEO`,
    description: location.description,
    openGraph: {
      title: location.title,
      description: location.description,
      type: 'website',
    },
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = locations[params.location as LocationSlug];
  
  if (!location) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `PowerMySEO - ${location.title}`,
    "description": location.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": params.location.charAt(0).toUpperCase() + params.location.slice(1),
      "addressCountry": "AU"
    },
    "areaServed": {
      "@type": "City",
      "name": params.location.charAt(0).toUpperCase() + params.location.slice(1)
    }
  };

  return (
    <>
      <StructuredData data={structuredData} />
      
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb />
        </div>
        
        <HeroSection
          title={location.title}
          subtitle={location.subtitle}
          description={location.description}
          showStats={false}
        />

        {/* Location Stats */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-12">
                {params.location.charAt(0).toUpperCase() + params.location.slice(1)} Market Overview
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{location.population}</div>
                  <div className="text-gray-600">Population</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-3xl font-bold text-teal-600 mb-2">{location.businessCount}</div>
                  <div className="text-gray-600">Local Businesses</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">High</div>
                  <div className="text-gray-600">Competition Level</div>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {location.marketInfo}
              </p>
            </div>
          </div>
        </section>

        {/* Services & Industries */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Services */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our SEO Services</h3>
                  <ul className="space-y-3">
                    {location.services.map((service, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industries */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Industries We Serve</h3>
                  <ul className="space-y-3">
                    {location.industries.map((industry, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{industry}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Why Choose Local SEO in {params.location.charAt(0).toUpperCase() + params.location.slice(1)}?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {location.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
        <CTASection />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(locations).map((location) => ({
    location: location,
  }));
}