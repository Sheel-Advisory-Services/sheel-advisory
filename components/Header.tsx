'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'Podcast', href: '/#props' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-steel-100/90 md:bg-steel-50/90 dark:bg-steel-950/90 backdrop-blur-md border-b border-steel-300/50 dark:border-steel-800/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col leading-none">
            <span className="text-3xl font-display font-bold tracking-tight text-steel-600 dark:text-steel-100">
              SAS
            </span>
            <span className="text-xs font-medium tracking-wider text-steel-600 dark:text-steel-400">
              Practical Professional Advice
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ThemeToggle />
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-steel-700 dark:text-steel-300 hover:text-accent-blue dark:hover:text-accent-blue transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-steel-200 dark:bg-steel-800/50 rounded-lg text-steel-700 dark:text-steel-100 font-semibold hover:bg-steel-300 dark:hover:bg-steel-800"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-steel-700 dark:text-steel-300 hover:text-accent-blue transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <ThemeToggle />
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-steel-700 dark:text-steel-300 hover:text-accent-blue transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-2 bg-steel-200 dark:bg-steel-800/50 rounded-lg text-steel-700 dark:text-steel-100 font-semibold hover:bg-steel-300 dark:hover:bg-steel-800"
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
