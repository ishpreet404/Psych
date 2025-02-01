import React from 'react';
import { Heart, Users, Brain, Sparkles } from 'lucide-react';
import { RevealText } from './RevealText';

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Psychological Support & Counseling',
      description: 'Providing evidence-based guidance to help individuals navigate mental health challenges, including stress, anxiety, and emotional well-being.',
      price: ''
    },
    {
      icon: Users,
      title: 'Couples Counseling',
      description: 'Strengthen relationships through guided communication and conflict resolution.',
      price: ''
    },
    {
      icon: Brain,
      title: 'Cognitive Behavioral Therapy',
      description: 'Evidence-based approach to modify thought patterns and behaviors.',
      price: ''
    },
    {
      icon: Sparkles,
      title: 'Mindfulness Training',
      description: 'Learn techniques for stress reduction and present-moment awareness.',
      price: ''
    }
  ];

  return (
    <section id="services" className="py-20 bg-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <RevealText>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Services Offered</h2>
          </RevealText>
          <RevealText delay={200}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive psychological services tailored to your individual needs
            </p>
          </RevealText>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ icon: Icon, title, description, price }, index) => (
            <RevealText key={title} delay={index * 200}>
              <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-rotate-1">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover:rotate-12">
                  <Icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <p className="text-green-600 font-semibold">{price}</p>
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}