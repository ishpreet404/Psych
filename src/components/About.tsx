import React from 'react';
import { RevealText } from './RevealText';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-green-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Dr. Sarah Mitchell"
              className="rounded-lg shadow-lg object-cover relative transform transition duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1"
            />
          </div>
          
          <div className="mt-10 lg:mt-0">
            <RevealText>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About Prerna Tomar
              </h2>
            </RevealText>
            <RevealText delay={200}>
              <p className="text-gray-600 mb-6">
              As a graduate in Applied Clinical Psychology, I specialize in supporting individuals through evidence-based approaches, blending psychological research with modern therapeutic strategies. My work focuses on fostering resilience, self-awareness, and emotional well-being through compassionate and informed care.
              </p>
            </RevealText>
            <div className="grid grid-cols-2 gap-4">
              <RevealText direction="left" delay={400}>
                <div className="border border-green-100 rounded-lg p-4 bg-green-50 transform transition duration-300 hover:scale-105 hover:shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>MSc Applied Clinical Psychology
                    </li>
                    <li>BA (Hons) Applied Psychology</li>
                    <li>University of Bath, UK</li>
                  </ul>
                </div>
              </RevealText>
              <RevealText direction="right" delay={600}>
                <div className="border border-green-100 rounded-lg p-4 bg-green-50 transform transition duration-300 hover:scale-105 hover:shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Specialties</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>Clinical Psychology & Mental Health</li>
                    <li>Self-Esteem & Self-Control in Young Adults</li>
                    <li>Cognitive-Behavioral Approaches (CBT) & Mindfulness
                    </li>
                    <li>Emotional Resilience & Well-being Strategies
                    </li>
                    <li>Innovative & Research-Driven </li>
                  </ul>
                </div>
              </RevealText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}