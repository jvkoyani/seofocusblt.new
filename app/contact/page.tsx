"use client";

import { HeroSection } from '@/components/hero-section';
import { ContactForm } from '@/components/contact-form';
import { Breadcrumb } from '@/components/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Calendar,
  Users,
  Award
} from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    description: 'Speak with our SEO experts directly',
    value: '+61 2 9876 5432',
    action: 'Call us now'
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Send us a detailed message',
    value: 'info@powermyseo.com',
    action: 'Send email'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Get instant answers to your questions',
    value: 'Available 9am-6pm AEST',
    action: 'Start chat'
  },
  {
    icon: Calendar,
    title: 'Book a Call',
    description: 'Schedule a free consultation',
    value: '30-minute strategy session',
    action: 'Book now'
  }
];

const faqs = [
  {
    question: 'How long does it take to see SEO results?',
    answer: 'Typically, you can expect to see initial improvements within 3-6 months, with significant results appearing within 6-12 months. SEO is a long-term strategy that builds momentum over time.'
  },
  {
    question: 'Do you offer a guarantee for SEO results?',
    answer: 'While we cannot guarantee specific rankings due to the nature of search algorithms, we do guarantee our commitment to best practices, transparent reporting, and continuous optimization to improve your results.'
  },
  {
    question: 'What makes PowerMySEO different from other agencies?',
    answer: 'We focus on data-driven strategies, transparent reporting, and building long-term partnerships. Our team stays current with algorithm changes and uses white-hat techniques to deliver sustainable results.'
  },
  {
    question: 'How do you measure SEO success?',
    answer: 'We track various metrics including organic traffic growth, keyword rankings, conversion rates, and ROI. We provide monthly reports with clear insights into your SEO performance and progress.'
  },
  {
    question: 'Can you help with local SEO?',
    answer: 'Yes, local SEO is one of our specialties. We help businesses improve their visibility in local search results through Google My Business optimization, local citations, and location-based content strategies.'
  }
];

export default function Contact() {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />
      </div>
      
      <HeroSection
        title="Get Your Free SEO Audit"
        subtitle="Ready to Boost Your Search Rankings?"
        description="Contact our SEO experts today for a complimentary website audit and discover how we can help you dominate search results and drive more qualified traffic to your business."
        showStats={false}
      />

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the best way to reach us. We're here to help you succeed online.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={method.title} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{method.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{method.description}</p>
                      <div className="font-semibold text-gray-900 mb-4">{method.value}</div>
                      <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
                        {method.action}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about our SEO services and process.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Location */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Monday - Friday</div>
                      <div className="text-gray-600">9:00 AM - 6:00 PM AEST</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Saturday</div>
                      <div className="text-gray-600">10:00 AM - 4:00 PM AEST</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-600" />
                    <div>
                      <div className="font-medium">Sunday</div>
                      <div className="text-gray-600">Closed</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose PowerMySEO?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-medium">Expert Team</div>
                      <div className="text-gray-600">Certified SEO professionals with years of experience</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-medium">Proven Results</div>
                      <div className="text-gray-600">500+ successful projects with measurable results</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-medium">Local Expertise</div>
                      <div className="text-gray-600">Deep understanding of Australian market</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}