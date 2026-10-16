/**
 * Approved SAVELIX Navigation Configuration
 * Source: SAVELIX Website Content & Structure Plan (Page 2 & Page 15)
 * Strict Content Rule: No unauthorized routes or unapproved destinations.
 */

export const SERVICES_NAV_ITEMS = [
  {
    name: 'Overview',
    path: '/services',
    description: 'Comprehensive Psychiatric Care and Psychological Support',
  },
  {
    name: 'Psychiatric Care',
    path: '/services/psychiatric-care',
    description: 'Clinical evaluation, diagnosis, medication management & follow-up',
  },
  {
    name: 'Psychological Counselling',
    path: '/services/psychological-counselling',
    description: 'Psychotherapy, CBT, DBT-informed interventions & stress management',
  },
  {
    name: 'Psychiatric Rehabilitation',
    path: '/services/psychiatric-rehabilitation',
    description: 'Structured daily routines, life-skills & recovery support',
  },
  {
    name: 'Family, Marriage & Relationship Counselling',
    path: '/services/family-counselling',
    description: 'Supportive guidance, communication skills & family dynamics',
  },
  {
    name: 'Substance Use & Addiction Support',
    path: '/services/substance-use-support',
    description: 'Assessment, recovery-oriented support & relapse prevention',
  },
  {
    name: 'Child & Adolescent Counselling',
    path: '/services/child-adolescent-counselling',
    description: 'Developmental, emotional, behavioural & youth guidance',
  },
  {
    name: 'Inpatient Environment & Safety Monitoring',
    path: '/services/inpatient-safety-monitoring',
    description: 'Structured rehabilitation environment, safety protocols & continuous monitoring',
  },
];

export const MAIN_NAV_ITEMS = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About Us',
    path: '/about',
  },
  {
    name: 'Services',
    path: '/services',
    isDropdown: true,
    subItems: SERVICES_NAV_ITEMS,
  },
  {
    name: 'Conditions We Support',
    path: '/conditions',
  },
  {
    name: 'Education & Internship',
    path: '/education-internship',
  },
  {
    name: 'Why Savelix',
    path: '/why-savelix',
  },
  {
    name: 'Contact Us',
    path: '/contact',
  },
];

export const NAVBAR_CTA = {
  label: 'Book an Appointment',
  actionType: 'modal',
  fallbackPath: '/contact',
};
