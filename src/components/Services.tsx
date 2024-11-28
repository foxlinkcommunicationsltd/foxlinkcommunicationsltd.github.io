import React from 'react';
import { Shield, Key, Radio, Network } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export function Services() {
  const services = [
    {
      title: "Security Systems Installation",
      description: "Professional installation of DSC Power series Pro, DSC Power series Neo, DSC Maxsys and more.",
      Icon: Shield
    },
    {
      title: "Access Control",
      description: "Complete access control solutions including Kantech, CDVI, and Keyscan systems.",
      Icon: Key
    },
    {
      title: "Public Addressing Systems",
      description: "State-of-the-art PA system installation for clear and reliable communication.",
      Icon: Radio
    },
    {
      title: "Structured Cabling",
      description: "Professional network infrastructure and structured cabling solutions.",
      Icon: Network
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide comprehensive security and communication solutions for businesses and organizations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}