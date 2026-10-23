import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Conditions from './pages/Conditions';
import EducationInternship from './pages/EducationInternship';
import WhySavelix from './pages/WhySavelix';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import PsychiatricCare from './pages/services/PsychiatricCare';
import PsychologicalCounselling from './pages/services/PsychologicalCounselling';
import PsychiatricRehabilitation from './pages/services/PsychiatricRehabilitation';
import FamilyCounselling from './pages/services/FamilyCounselling';
import SubstanceUseSupport from './pages/services/SubstanceUseSupport';
import ChildAdolescentCounselling from './pages/services/ChildAdolescentCounselling';
import InpatientSafetyMonitoring from './pages/services/InpatientSafetyMonitoring';

/**
 * SAVELIX Application Router
 *
 * Configured in strict adherence to SAVELIX Website Content & Structure Plan (Pages 2 & 15).
 * All approved navigation destinations are routed cleanly within the shared Layout shell.
 */
export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Home Route with Hero */}
          <Route index element={<Home />} />

          {/* About Us */}
          <Route path="about" element={<About />} />

          {/* Services Directory Overview */}
          <Route path="services" element={<Services />} />

          {/* Dedicated Service Routes */}
          <Route path="services/psychiatric-care" element={<PsychiatricCare />} />
          <Route path="services/psychological-counselling" element={<PsychologicalCounselling />} />
          <Route path="services/psychiatric-rehabilitation" element={<PsychiatricRehabilitation />} />
          <Route path="services/family-counselling" element={<FamilyCounselling />} />
          <Route path="services/substance-use-support" element={<SubstanceUseSupport />} />
          <Route path="services/child-adolescent-counselling" element={<ChildAdolescentCounselling />} />
          <Route path="services/inpatient-safety-monitoring" element={<InpatientSafetyMonitoring />} />

          {/* Conditions We Support */}
          <Route path="conditions" element={<Conditions />} />

          {/* Education & Internship */}
          <Route path="education-internship" element={<EducationInternship />} />

          {/* Why Savelix */}
          <Route path="why-savelix" element={<WhySavelix />} />

          {/* Contact Us */}
          <Route path="contact" element={<Contact />} />

          {/* 404 Fallback within Layout */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
