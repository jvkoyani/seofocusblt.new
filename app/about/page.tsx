"use client";

import { motion } from 'framer-motion';
import { HeroSection } from '@/components/hero-section';
import { CTASection } from '@/components/cta-section';
import { Breadcrumb } from '@/components/breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  CheckCircle,
  Star,
  Calendar,
  Globe
} from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: TrendingUp, value: '300%', label: 'Average Traffic Increase' },
  { icon: Target, value: '85%', label: 'Keywords in Top 10' },
  { icon: Award, value: '50+', label: 'Industry Awards' }
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & SEO Strategist',
    experience: '10+ years',
    certifications: ['Google Analytics', 'SEMrush', 'Moz Pro'],
    image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Michael Chen',
    role: 'Technical SEO Lead',
    experience: '8+ years',
    certifications: ['Google Search Console', 'Screaming Frog', 'GTmetrix'],
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Content Marketing Manager',
    experience: '7+ years',
    certifications: ['HubSpot', 'Google Ads', 'Content Marketing Institute'],
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'David Kim',
    role: 'Local SEO Specialist',
    experience: '6+ years',
    certifications: ['BrightLocal', 'Google My Business', 'Local Search Association'],
    image: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const values = [
  {
    icon: CheckCircle,
    title: 'Transparency',
    description: 'We believe in clear communication and honest reporting about your SEO progress.'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We strive for exceptional results and continuously improve our strategies.'
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work closely with our clients as partners in their digital success.'
  },
  {
    icon: Globe,
    title: 'Innovation',
    description: 'We stay ahead of SEO trends and adapt to algorithm changes quickly.'
  }
];

const milestones = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'PowerMySEO was founded with a mission to help small businesses compete online.'
  },
  {
    year: '2017',
    title: 'First 100 Clients',
    description: 'Reached our first major milestone of 100 satisfied clients.'
  },
  {
    year: '2019',
    title: 'Award Recognition',
    description: 'Won "Best SEO Agency" award from the Australian Digital Marketing Association.'
  },
  {
    year: '2021',
    title: 'Team Expansion',
    description: 'Expanded our team to 20+ SEO specialists and content creators.'
  },
  {
    year: '2023',
    title: 'Industry Leadership',
    description: 'Became recognized as a leading SEO agency in Australia with 500+ clients.'
  }
];

export default function About() {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />
      </div>
      
      <HeroSection
        title="About PowerMySEO"
        subtitle="Your Trusted SEO Partner Since 2015"
        description="We're a team of passionate SEO professionals dedicated to helping businesses grow their online presence through proven strategies and exceptional results."
        showStats={false}
      />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Founded in 2015, PowerMySEO started with a simple mission: to help small and medium-sized businesses compete with larger companies in the digital space. What began as a small team of SEO enthusiasts has grown into Australia's leading SEO agency.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We've helped over 500 businesses increase their online visibility, drive more qualified traffic, and achieve sustainable growth through strategic SEO. Our success comes from staying ahead of algorithm changes, using data-driven strategies, and maintaining long-term partnerships with our clients.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to be recognized as industry leaders, but we never forget our roots. Every strategy we develop, every campaign we execute, and every result we deliver is focused on helping our clients achieve their business goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our experienced team of SEO specialists, content creators, and digital strategists are passionate about delivering results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 rounded-full mx-auto object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-gray-600 mb-2">{member.role}</p>
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">{member.experience}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.certifications.map((cert) => (
                          <Badge key={cert} variant="secondary" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and shape how we work with our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Key milestones in our company's growth and evolution.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-6 pb-12"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                    {milestone.year}
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}