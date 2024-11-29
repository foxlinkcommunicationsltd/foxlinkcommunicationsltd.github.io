import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="
        px-4 py-2
        text-gray-400 hover:text-white
        rounded-xl
        transition-all duration-300
        hover:bg-brand-primary/10
        relative
        group
      "
    >
      <span className="relative z-10">{children}</span>
      <div className="
        absolute inset-0
        rounded-xl
        bg-gradient-to-r from-brand-primary/0 via-brand-primary/5 to-brand-accent/0
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
      "></div>
    </a>
  );
}