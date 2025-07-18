import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { HeroSection } from '@/components/hero-section';
import { CTASection } from '@/components/cta-section';
import { ContactForm } from '@/components/contact-form';
import { Breadcrumb } from '@/components/breadcrumb';
import { StructuredData } from '@/components/structured-data';

const services = {
  'seo-audit': {
    title: 'Professional SEO Audit Services',
    subtitle: 'Comprehensive Website Analysis & Optimization Recommendations',
    description: 'Get a detailed SEO audit that identifies technical issues, content gaps, and opportunities to improve your search rankings.',
    features: [
      'Technical SEO Analysis',
      'On-Page SEO Review',
      'Keyword Gap Analysis',
      'Competitor Research',
      'Site Speed Optimization',
      'Mobile Responsiveness Check',
      'Backlink Profile Analysis',
      'Detailed Action Plan'
    ],
    benefits: [
      'Identify hidden SEO issues',
      'Discover new keyword opportunities',
      'Understand your competition',
      'Get a roadmap for improvement',
      'Increase organic traffic',
      'Improve search rankings'
    ],
    process: [
      'Website crawl and technical analysis',
      'Keyword research and mapping',
      'Content quality assessment',
      'Competitor analysis',
      'Backlink profile review',
      'Comprehensive report delivery'
    ]
  },
  'local-seo': {
    title: 'Local SEO Services',
    subtitle: 'Dominate Local Search Results & Attract Nearby Customers',
    description: 'Boost your local visibility and attract more customers from your area with our proven local SEO strategies.',
    features: [
      'Google My Business Optimization',
      'Local Citation Building',
      'Review Management',
      'Local Keyword Targeting',
      'NAP Consistency',
      'Local Schema Markup',
      'Location Page Optimization',
      'Local Link Building'
    ],
    benefits: [
      'Appear in local search results',
      'Increase foot traffic to your business',
      'Build trust with local customers',
      'Compete with larger businesses',
      'Improve online reputation',
      'Generate more phone calls'
    ],
    process: [
      'Local market research',
      'Google My Business setup',
      'Citation building campaign',
      'Review generation strategy',
      'Local content creation',
      'Ongoing monitoring and optimization'
    ]
  },
  'technical-seo': {
    title: 'Technical SEO Services',
    subtitle: 'Fix Technical Issues & Improve Search Engine Crawling',
    description: 'Resolve technical SEO problems that prevent search engines from properly indexing and ranking your website.',
    features: [
      'Site Speed Optimization',
      'Mobile Optimization',
      'Core Web Vitals Improvement',
      'Schema Markup Implementation',
      'XML Sitemap Optimization',
      'Robots.txt Configuration',
      'URL Structure Optimization',
      'Crawl Error Resolution'
    ],
    benefits: [
      'Faster website loading times',
      'Better user experience',
      'Improved search rankings',
      'Enhanced mobile performance',
      'Better search engine crawling',
      'Higher conversion rates'
    ],
    process: [
      'Technical audit and analysis',
      'Priority issue identification',
      'Implementation of fixes',
      'Performance monitoring',
      'Core Web Vitals optimization',
      'Ongoing technical maintenance'
    ]
  },
  'on-page-seo': {
    title: 'On-Page SEO Services',
    subtitle: 'Optimize Your Content & Pages for Better Rankings',
    description: 'Improve your website\'s content and on-page elements to rank higher in search results and attract more organic traffic.',
    features: [
      'Keyword Research & Mapping',
      'Title Tag Optimization',
      'Meta Description Writing',
      'Header Tag Optimization',
      'Content Optimization',
      'Image SEO & Alt Text',
      'Internal Linking Strategy',
      'URL Structure Optimization'
    ],
    benefits: [
      'Higher search rankings',
      'Increased organic traffic',
      'Better user engagement',
      'Improved click-through rates',
      'Enhanced content relevance',
      'Better conversion rates'
    ],
    process: [
      'Content audit and analysis',
      'Keyword research and mapping',
      'On-page optimization',
      'Content creation and updates',
      'Internal linking optimization',
      'Performance tracking and reporting'
    ]
  },
  'link-building': {
    title: 'Link Building Services',
    subtitle: 'Build High-Quality Backlinks to Boost Domain Authority',
    description: 'Increase your website\'s authority and rankings with our white-hat link building strategies that deliver sustainable results.',
    features: [
      'Guest Posting',
      'HARO Outreach',
      'Broken Link Building',
      'Resource Page Links',
      'Digital PR Campaigns',
      'Content Marketing',
      'Influencer Outreach',
      'Competitor Analysis'
    ],
    benefits: [
      'Improved domain authority',
      'Higher search rankings',
      'Increased referral traffic',
      'Enhanced brand credibility',
      'Better online visibility',
      'Sustainable long-term results'
    ],
    process: [
      'Link opportunity research',
      'Outreach strategy development',
      'Content creation for link building',
      'Relationship building',
      'Link acquisition and monitoring',
      'Reporting and analysis'
    ]
  },
  'keyword-research': {
    title: 'Keyword Research Services',
    subtitle: 'Discover Profitable Keywords to Drive Targeted Traffic',
    description: 'Identify the best keywords for your business with our comprehensive keyword research that reveals high-value opportunities.',
    features: [
      'Competitor Keyword Analysis',
      'Search Volume Research',
      'Keyword Difficulty Assessment',
      'Long-tail Keyword Discovery',
      'Intent-based Keyword Mapping',
      'Seasonal Keyword Trends',
      'Local Keyword Research',
      'Content Gap Analysis'
    ],
    benefits: [
      'Target the right keywords',
      'Attract qualified traffic',
      'Improve content strategy',
      'Increase conversion rates',
      'Beat your competition',
      'Maximize ROI'
    ],
    process: [
      'Business and industry analysis',
      'Competitor keyword research',
      'Keyword opportunity identification',
      'Keyword grouping and mapping',
      'Priority keyword selection',
      'Ongoing keyword monitoring'
    ]
  },
  'ecommerce-seo': {
    title: 'eCommerce SEO Services',
    subtitle: 'Boost Online Sales with Specialized eCommerce SEO',
    description: 'Increase your online store\'s visibility and sales with our eCommerce SEO strategies designed for product-based businesses.',
    features: [
      'Product Page Optimization',
      'Category Page SEO',
      'Schema Markup for Products',
      'Technical SEO for eCommerce',
      'Product Feed Optimization',
      'User Experience Optimization',
      'Site Architecture Planning',
      'Conversion Rate Optimization'
    ],
    benefits: [
      'Increased online sales',
      'Higher product visibility',
      'Better shopping experience',
      'Improved conversion rates',
      'Enhanced product discovery',
      'Competitive advantage'
    ],
    process: [
      'eCommerce site audit',
      'Product keyword research',
      'Technical optimization',
      'Product page optimization',
      'Category structure optimization',
      'Performance monitoring'
    ]
  },
  'international-seo': {
    title: 'International SEO Services',
    subtitle: 'Expand Your Global Reach with International SEO',
    description: 'Reach customers worldwide with our international SEO strategies that help you rank in multiple countries and languages.',
    features: [
      'Hreflang Implementation',
      'International Keyword Research',
      'Multi-language Content Strategy',
      'Country-specific Optimization',
      'International Site Structure',
      'Local Search Optimization',
      'Cultural Content Adaptation',
      'Global Technical SEO'
    ],
    benefits: [
      'Access global markets',
      'Increase international sales',
      'Build global brand awareness',
      'Reach multilingual audiences',
      'Improve local relevance',
      'Expand business opportunities'
    ],
    process: [
      'International market research',
      'Technical setup for global SEO',
      'Multi-language content creation',
      'Local optimization strategies',
      'International link building',
      'Global performance monitoring'
    ]
  }
};

type ServiceSlug = keyof typeof services;

interface ServicePageProps {
  params: {
    service: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services[params.service as ServiceSlug];
  
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service page could not be found.'
    };
  }

  return {
    title: `${service.title} | PowerMySEO`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      type: 'website',
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services[params.service as ServiceSlug];
  
  if (!service) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "PowerMySEO",
      "url": "https://seo.powermyseo.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO Services",
      "itemListElement": service.features.map((feature, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        }
      }))
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
          title={service.title}
          subtitle={service.subtitle}
          description={service.description}
          showStats={false}
        />

        {/* Service Details */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Features */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
                  <div className="space-y-4">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
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
  return Object.keys(services).map((service) => ({
    service: service,
  }));
}