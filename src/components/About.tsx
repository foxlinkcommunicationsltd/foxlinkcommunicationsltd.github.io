import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Shield,
      title: 'Expert Security',
      description: 'Over 8 years of experience in security systems installation'
    },
    {
      icon: Award,
      title: 'Certified Team',
      description: 'Fully certified and trained professional technicians'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Dedicated support and maintenance services'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock emergency response team'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">About Foxlink Communications</h2>
            <p className="text-gray-300 mb-8">
              Since our establishment, Foxlink Communications has been at the forefront of security and communication technology. 
              We specialize in providing comprehensive security solutions that protect what matters most to our clients.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-4">
                  <div className="p-2 bg-brand-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80" 
                alt="Security monitoring center" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}