'use client';

import { useState, useEffect } from 'react';

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if already authenticated in this session
    const auth = sessionStorage.getItem('siteAuth');
    if (auth === 'authenticated') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/check-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        sessionStorage.setItem('siteAuth', 'authenticated');
        setIsAuthenticated(true);
        setError('');
      } else {
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  if (isLoading) {
    return null; // Prevent flash of content
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-steel-900 via-steel-800 to-steel-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white dark:bg-steel-800 rounded-xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-steel-800 dark:text-steel-50 mb-2">
            Sheel Advisory Services
          </h1>
          <p className="text-steel-600 dark:text-steel-300 mb-6">
            This site is currently in preview mode.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-steel-700 dark:text-steel-200 mb-2"
              >
                Enter Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-steel-300 dark:border-steel-600 bg-white dark:bg-steel-900 text-steel-800 dark:text-steel-100 focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none"
                placeholder="Password"
                autoFocus
              />
            </div>
            
            {error && (
              <p className="text-red-600 dark:text-red-400 text-sm">
                {error}
              </p>
            )}
            
            <button
              type="submit"
              className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Access Site
            </button>
          </form>
          
          <p className="mt-6 text-xs text-steel-500 dark:text-steel-400 text-center">
            For access, please contact chris@sheeladvisory.ca
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}