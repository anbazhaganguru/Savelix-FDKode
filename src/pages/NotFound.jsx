import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

/**
 * SAVELIX 404 Not Found Page
 */
export default function NotFound() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-xl mx-auto text-center">
      <div className="bg-white border border-savelix-border rounded-2xl p-8 sm:p-12 shadow-sm">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-savelix-lavender text-savelix-purple mb-4">
          404 Error
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-savelix-plum mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-savelix-grey leading-relaxed mb-8">
          The requested address is not part of the SAVELIX directory. Please use the navigation menu or return to the clinic homepage.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-savelix-lavender hover:bg-savelix-lavender-light text-savelix-plum text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
