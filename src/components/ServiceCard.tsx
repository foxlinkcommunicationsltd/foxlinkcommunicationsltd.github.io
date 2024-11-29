import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-brand-primary transition-all duration-300 relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
      <div className="relative">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-gray-900 rounded-lg border border-brand-primary/20">
            <Icon className="h-6 w-6 text-brand-primary" />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}