import React from 'react';
import { Shield, Key, Radio } from 'lucide-react';

export function Products() {
  const categories = [
    {
      icon: Shield,
      title: 'Security Systems',
      products: [
        'DSC Power Series Pro',
        'DSC Power Series Neo',
        'DSC Maxsys',
        'Integrated Security Solutions'
      ]
    },
    {
      icon: Key,
      title: 'Access Control',
      products: [
        'Kantech EntraPass',
        'CDVI Access Systems',
        'Keyscan Aurora',
        'Biometric Solutions'
      ]
    },
    {
      icon: Radio,
      title: 'Communication Systems',
      products: [
        'Public Address Systems',
        'Pro Sound Equipment',
        'Emergency Communication',
        'Intercom Solutions'
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Products</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a comprehensive range of security and communication products from industry-leading manufacturers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-brand-primary/10 rounded-lg">
                  <category.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.products.map((product) => (
                  <li key={product} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                    <span className="text-gray-300">{product}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}