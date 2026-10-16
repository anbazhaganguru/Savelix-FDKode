import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Calendar, ArrowRight } from 'lucide-react';
import Logo from '../ui/Logo';
import { MAIN_NAV_ITEMS, SERVICES_NAV_ITEMS, NAVBAR_CTA } from '../../config/navigation';

/**
 * Responsive SAVELIX Navbar
 *
 * Implements:
 * - Official SAVELIX brand logo with proper proportions
 * - Approved navigation labels & destinations
 * - Keyboard accessible desktop dropdown with click/escape handling
 * - Accessible mobile sliding drawer with expandable services accordion
 * - Active route indicators matching design system (Muted Purple text + underline)
 * - Pill-shaped "Book an Appointment" CTA button
 */
export default function Navbar({ onOpenAppointmentModal }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const location = useLocation();
  const dropdownRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  const [prevPath, setPrevPath] = useState(location.pathname);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  };

  // Synchronously reset open menus during render when route changes without cascading render
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }

  // Click outside listener for desktop dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Global Escape key handling for dropdown and mobile drawer
  useEffect(() => {
    function handleGlobalKeyDown(e) {
      if (e.key === 'Escape') {
        closeMenus();
      }
    }
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Smooth hover open with grace delay for desktop dropdown
  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  // Close dropdown when focus moves outside
  const handleDropdownBlur = (e) => {
    if (!dropdownRef.current?.contains(e.relatedTarget)) {
      setIsServicesOpen(false);
    }
  };

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-savelix-border/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Logo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5"
            aria-label="Main Navigation"
          >
            {MAIN_NAV_ITEMS.map((item) => {
              if (item.isDropdown) {
                return (
                  <div
                    key={item.name}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onBlur={handleDropdownBlur}
                  >
                    <button
                      type="button"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      aria-expanded={isServicesOpen}
                      aria-haspopup="true"
                      className={`relative inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple ${
                        isServicesActive
                          ? 'text-savelix-purple font-semibold after:absolute after:bottom-0 after:left-2.5 after:right-2.5 xl:after:left-3 xl:after:right-3 after:h-0.5 after:bg-savelix-purple after:rounded-full'
                          : 'text-savelix-plum hover:text-savelix-purple'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180 text-savelix-purple' : 'text-savelix-grey'
                        }`}
                      />
                    </button>

                    {/* Services Dropdown Menu */}
                    {isServicesOpen && (
                      <div
                        className="absolute left-0 mt-1 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-savelix-border/80 p-2 z-50 animate-fadeIn"
                        role="menu"
                        aria-orientation="vertical"
                        aria-label="Services submenu"
                      >
                        <div className="px-3 py-2 border-b border-savelix-border/50 mb-1">
                          <p className="text-xs font-semibold uppercase tracking-wider text-savelix-purple">
                            Clinical Services
                          </p>
                          <p className="text-xs text-savelix-grey mt-0.5">
                            Comprehensive Psychiatric &amp; Psychological Care
                          </p>
                        </div>

                        <div className="space-y-0.5 max-h-[calc(100vh-160px)] overflow-y-auto">
                          {SERVICES_NAV_ITEMS.map((subItem) => (
                            <NavLink
                              key={subItem.path}
                              to={subItem.path}
                              end={subItem.path === '/services'}
                              role="menuitem"
                              onClick={closeMenus}
                              className={({ isActive }) =>
                                `block px-3 py-2 rounded-xl text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple ${
                                  isActive
                                    ? 'bg-savelix-lavender text-savelix-purple font-semibold'
                                    : 'text-savelix-plum hover:bg-savelix-lilac hover:text-savelix-purple'
                                }`
                              }
                            >
                              <div className="text-sm font-medium">{subItem.name}</div>
                              <div className="text-xs text-savelix-grey line-clamp-1 mt-0.5">
                                {subItem.description}
                              </div>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={closeMenus}
                  className={({ isActive }) =>
                    `relative px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple ${
                      isActive
                        ? 'text-savelix-purple font-semibold after:absolute after:bottom-0 after:left-2.5 after:right-2.5 xl:after:left-3 xl:after:right-3 after:h-0.5 after:bg-savelix-purple after:rounded-full'
                        : 'text-savelix-plum hover:text-savelix-purple'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Right CTA Action */}
          <div className="hidden lg:flex items-center">
            <button
              type="button"
              onClick={onOpenAppointmentModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2"
              aria-label="Open appointment booking dialog"
            >
              <Calendar className="w-4 h-4" />
              <span>{NAVBAR_CTA.label}</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-savelix-plum hover:bg-savelix-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple"
              aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-savelix-plum" />
              ) : (
                <Menu className="w-6 h-6 text-savelix-plum" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sliding Drawer & Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-savelix-plum/40 backdrop-blur-sm transition-opacity"
          aria-modal="true"
          role="dialog"
          aria-label="Mobile Navigation Drawer"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeMenus();
          }}
        >
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl border-l border-savelix-border flex flex-col justify-between overflow-y-auto animate-slideIn">
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between p-4 border-b border-savelix-border/70">
                <Logo size="sm" />
                <button
                  type="button"
                  onClick={closeMenus}
                  className="p-2 rounded-xl text-savelix-grey hover:text-savelix-plum hover:bg-savelix-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items List */}
              <nav className="p-4 space-y-1" aria-label="Mobile main navigation">
                {MAIN_NAV_ITEMS.map((item) => {
                  if (item.isDropdown) {
                    return (
                      <div key={item.name} className="py-1">
                        <button
                          type="button"
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          aria-expanded={isMobileServicesOpen}
                          className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple ${
                            isServicesActive
                              ? 'bg-savelix-lavender text-savelix-purple'
                              : 'text-savelix-plum hover:bg-savelix-lilac'
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${
                              isMobileServicesOpen ? 'rotate-180 text-savelix-purple' : 'text-savelix-grey'
                            }`}
                          />
                        </button>

                        {/* Mobile Services Accordion */}
                        {isMobileServicesOpen && (
                          <div className="mt-1 pl-3 space-y-1 border-l-2 border-savelix-lavender ml-3">
                            {SERVICES_NAV_ITEMS.map((subItem) => (
                              <NavLink
                                key={subItem.path}
                                to={subItem.path}
                                end={subItem.path === '/services'}
                                onClick={closeMenus}
                                className={({ isActive }) =>
                                  `block px-3 py-2.5 rounded-lg text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple ${
                                    isActive
                                      ? 'text-savelix-purple font-semibold bg-savelix-lavender/50'
                                      : 'text-savelix-plum hover:text-savelix-purple hover:bg-savelix-lilac/50'
                                  }`
                                }
                              >
                                {subItem.name}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end={item.path === '/'}
                      onClick={closeMenus}
                      className={({ isActive }) =>
                        `block px-3 py-3 rounded-xl text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple ${
                          isActive
                            ? 'bg-savelix-lavender text-savelix-purple font-semibold'
                            : 'text-savelix-plum hover:bg-savelix-lilac'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Bottom CTA Action */}
            <div className="p-4 border-t border-savelix-border bg-savelix-lilac/40">
              <button
                type="button"
                onClick={() => {
                  closeMenus();
                  onOpenAppointmentModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-sm font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple"
              >
                <Calendar className="w-4 h-4" />
                <span>{NAVBAR_CTA.label}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              <p className="text-[11px] text-center text-savelix-grey mt-2">
                Confidential psychiatric care &amp; counselling
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
