import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { HeroSection } from '@/components/hero-section';
import { CTASection } from '@/components/cta-section';
import { ContactForm } from '@/components/contact-form';
import { Breadcrumb } from '@/components/breadcrumb';
import { StructuredData } from '@/components/structured-data';

const industries = {
  'law-firms': {
    title: 'SEO for Law Firms',
    subtitle: 'Attract More Clients with Legal SEO Services',
    description: 'Specialized SEO strategies for law firms to increase online visibility, attract qualified leads, and grow your legal practice.',
    challenges: [
      'High competition in legal search results',
      'Complex legal regulations and compliance',
      'Need for local and specialized expertise',
      'Building trust and credibility online',
      'Generating qualified leads, not just traffic'
    ],
    solutions: [
      'Legal keyword research and targeting',
      'Local SEO for law firms',
      'Content marketing for legal topics',
      'Review management and reputation building',
      'Technical SEO for law firm websites',
      'Compliance with legal advertising rules'
    ],
    benefits: [
      'Increased visibility for legal searches',
      'More qualified client inquiries',
      'Enhanced online reputation',
      'Better local search presence',
      'Higher conversion rates',
      'Sustainable long-term growth'
    ],
    caseStudy: {
      title: 'Personal Injury Law Firm',
      result: '250% increase in qualified leads',
      description: 'Helped a personal injury law firm dominate local search results and increase client inquiries by 250% within 6 months.'
    }
  },
  'dentists': {
    title: 'SEO for Dentists',
    subtitle: 'Attract New Patients with Dental SEO Services',
    description: 'Comprehensive SEO strategies for dental practices to increase patient bookings, improve online visibility, and grow your practice.',
    challenges: [
      'Local competition from other dental practices',
      'Patient trust and credibility concerns',
      'Seasonal fluctuations in dental services',
      'Managing online reviews and reputation',
      'Educational content for dental procedures'
    ],
    solutions: [
      'Local SEO for dental practices',
      'Dental procedure keyword optimization',
      'Educational content creation',
      'Review management and patient testimonials',
      'Google My Business optimization',
      'Mobile-friendly website optimization'
    ],
    benefits: [
      'More new patient appointments',
      'Increased local search visibility',
      'Better patient education and trust',
      'Improved online reputation',
      'Higher website conversion rates',
      'Sustainable practice growth'
    ],
    caseStudy: {
      title: 'Family Dental Practice',
      result: '180% increase in appointment bookings',
      description: 'Helped a family dental practice increase appointment bookings by 180% through local SEO and reputation management.'
    }
  },
  'saas': {
    title: 'SEO for SaaS Companies',
    subtitle: 'Drive Growth with SaaS SEO Strategies',
    description: 'Specialized SEO services for SaaS companies to increase trial signups, improve organic visibility, and drive sustainable growth.',
    challenges: [
      'Long and complex sales cycles',
      'Technical product explanations',
      'Competitive software market',
      'Multiple buyer personas and use cases',
      'Scaling content for different markets'
    ],
    solutions: [
      'SaaS keyword research and mapping',
      'Technical content creation',
      'Feature-based landing pages',
      'Competitor analysis and positioning',
      'International SEO for global markets',
      'Conversion rate optimization'
    ],
    benefits: [
      'Increased trial signups and demos',
      'Better organic visibility for software terms',
      'Improved lead quality and conversion',
      'Enhanced brand authority',
      'Sustainable customer acquisition',
      'Reduced customer acquisition costs'
    ],
    caseStudy: {
      title: 'Project Management SaaS',
      result: '300% increase in organic trial signups',
      description: 'Helped a project management SaaS company increase organic trial signups by 300% through strategic content and SEO optimization.'
    }
  },
  'ecommerce': {
    title: 'SEO for Ecommerce',
    subtitle: 'Boost Online Sales with Ecommerce SEO',
    description: 'Comprehensive ecommerce SEO strategies to increase product visibility, drive more sales, and grow your online store.',
    challenges: [
      'Large product catalogs and inventory management',
      'Competing with major marketplaces',
      'Product page optimization at scale',
      'Technical SEO for ecommerce platforms',
      'Seasonal traffic and sales fluctuations'
    ],
    solutions: [
      'Product page SEO optimization',
      'Category structure and navigation',
      'Technical SEO for ecommerce',
      'Product schema markup',
      'Content marketing for products',
      'Local SEO for retail locations'
    ],
    benefits: [
      'Increased product visibility',
      'Higher online sales and revenue',
      'Better shopping experience',
      'Improved conversion rates',
      'Enhanced brand visibility',
      'Sustainable organic growth'
    ],
    caseStudy: {
      title: 'Fashion Ecommerce Store',
      result: '220% increase in organic sales',
      description: 'Helped a fashion ecommerce store increase organic sales by 220% through product optimization and technical SEO improvements.'
    }
  },
  'real-estate': {
    title: 'SEO for Real Estate',
    subtitle: 'Generate More Leads with Real Estate SEO',
    description: 'Specialized SEO strategies for real estate professionals to attract more buyers and sellers, increase listings, and grow your business.',
    challenges: [
      'Local competition from other agents',
      'Seasonal market fluctuations',
      'Property listing optimization',
      'Building trust with potential clients',
      'Managing multiple location markets'
    ],
    solutions: [
      'Local SEO for real estate markets',
      'Property listing optimization',
      'Neighborhood and area pages',
      'Real estate content marketing',
      'Google My Business optimization',
      'Review management and testimonials'
    ],
    benefits: [
      'More qualified buyer and seller leads',
      'Increased local market visibility',
      'Better lead conversion rates',
      'Enhanced professional reputation',
      'Sustainable business growth',
      'Higher property listing visibility'
    ],
    caseStudy: {
      title: 'Residential Real Estate Team',
      result: '190% increase in qualified leads',
      description: 'Helped a residential real estate team increase qualified leads by 190% through local SEO and content marketing strategies.'
    }
  }
};

type IndustrySlug = keyof typeof industries;

interface IndustryPageProps {
  params: {
    industry: string;
  };
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const industry = industries[params.industry as IndustrySlug];
  
  if (!industry) {
    return {
      title: 'Industry Not Found',
      description: 'The requested industry page could not be found.'
    };
  }

  return {
    title: `${industry.title} | PowerMySEO`,
    description: industry.description,
    openGraph: {
      title: industry.title,
      description: industry.description,
      type: 'website',
    },
  };
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = industries[params.industry as IndustrySlug];
  
  if (!industry) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": industry.title,
    "description": industry.description,
    "provider": {
      "@type": "Organization",
      "name": "PowerMySEO",
      "url": "https://seo.powermyseo.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
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
          title={industry.title}
          subtitle={industry.subtitle}
          description={industry.description}
          showStats={false}
        />

        {/* Industry Details */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Challenges */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Challenges</h3>
                  <ul className="space-y-3">
                    {industry.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Solutions</h3>
                  <ul className="space-y-3">
                    {industry.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h3>
                  <ul className="space-y-3">
                    {industry.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Case Study</h3>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{industry.caseStudy.title}</h4>
                <div className="text-4xl font-bold text-blue-600 mb-4">{industry.caseStudy.result}</div>
                <p className="text-gray-600">{industry.caseStudy.description}</p>
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
  return Object.keys(industries).map((industry) => ({
    industry: industry,
  }));
}