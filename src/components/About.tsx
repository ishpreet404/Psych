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
              src="https://i.ibb.co/MySkTWfR/IMG-4868.jpg"
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
              I'm driven by a purpose to revolutionize mental wellness care through community-facilitated, evidence-guided interventions. As a founder at Unfiltered, I'm building an inviting, safe community for mental wellness programs and groups, and for people to confront life's challenges with confidence and awareness. I have a background in neurodiverse care, psychological interventions, and evidence-guided mental wellness interventions, with a strong commitment to shattering stigma, community creation, and providing meaningful impact in mental wellness advocacy. Unfiltered isn't a platform, it's a movement.              </p>
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