import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import StageRoutePlaceholder from './pages/StageRoutePlaceholder';
import NotFound from './pages/NotFound';

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
          {/* Main Home Route with Stage 3 Hero */}
          <Route index element={<Home />} />

          {/* About Us */}
          <Route
            path="about"
            element={
              <StageRoutePlaceholder
                title="About Us"
                subtitle="About Savelix, Vision, Mission, and Core Care Values"
                sectionCode="PAGE A"
                scopeDetails={[
                  'Care considers the whole person rather than focusing only on symptoms',
                  'Services support early identification, outpatient consultation, inpatient care and continued recovery',
                  'Vision: Accessible, compassionate and professional mental healthcare',
                  'Mission: Psychiatric treatment, counselling, structured inpatient rehabilitation, family education & stigma reduction',
                  'Core Values: Compassion, dignity, ethical practice, recovery and continuous learning',
                ]}
              />
            }
          />

          {/* Services Directory Overview */}
          <Route
            path="services"
            element={
              <StageRoutePlaceholder
                title="Services Overview"
                subtitle="Comprehensive Psychiatric Care and Psychological Support"
                sectionCode="SECTION 03"
                scopeDetails={[
                  'Psychiatric Care: Assessment, diagnosis & medication management',
                  'Psychological Counselling: Psychotherapy, CBT & stress management',
                  'Psychiatric Rehabilitation: Daily routines, social skills & functional support',
                  'Family, Marriage & Relationship Counselling',
                  'Substance Use & Addiction Support',
                  'Child & Adolescent Counselling',
                  'Inpatient Environment & Safety Monitoring',
                ]}
              />
            }
          />

          {/* Dedicated Service Routes */}
          <Route
            path="services/psychiatric-care"
            element={
              <StageRoutePlaceholder
                title="Psychiatric Care"
                subtitle="Comprehensive psychiatric evaluation, diagnosis, and medication management"
                sectionCode="PAGE B"
                scopeDetails={[
                  'Comprehensive psychiatric evaluation and clinical diagnosis',
                  'Individualised medication management and monitoring',
                  'Review of symptoms, treatment response and potential side effects',
                  'Ongoing clinical follow-up and relapse-prevention planning',
                  'Collaborative multidisciplinary care with psychologists and rehabilitation professionals',
                ]}
              />
            }
          />

          <Route
            path="services/psychological-counselling"
            element={
              <StageRoutePlaceholder
                title="Psychological Counselling"
                subtitle="Psychological assessment, individual counselling, and evidence-informed psychotherapy"
                sectionCode="PAGE B"
                scopeDetails={[
                  'Psychological assessment and mental status evaluation',
                  'Individual counselling and supportive psychotherapy',
                  'CBT where clinically appropriate; DBT-informed emotional-regulation skills',
                  'Stress management, relaxation and mindfulness techniques',
                  'Coping skills, behavioural strategies and problem-solving support',
                ]}
              />
            }
          />

          <Route
            path="services/psychiatric-rehabilitation"
            element={
              <StageRoutePlaceholder
                title="Psychiatric Rehabilitation"
                subtitle="Structured daily routines, activity-based interventions, and functional recovery support"
                sectionCode="PAGE D"
                scopeDetails={[
                  'Structured daily routines and activity-based interventions',
                  'Social skills and communication training',
                  'Personal hygiene, self-care and life-skills development',
                  'Cognitive stimulation and functional support where appropriate',
                  'Therapeutic recreational and meaningful engagement activities',
                  'Individualised rehabilitation goals and progress monitoring',
                ]}
              />
            }
          />

          <Route
            path="services/family-counselling"
            element={
              <StageRoutePlaceholder
                title="Family, Marriage & Relationship Counselling"
                subtitle="Supportive and confidential guidance for individuals, couples and families"
                sectionCode="PAGE E"
                scopeDetails={[
                  'Marriage and relationship counselling',
                  'Family conflict resolution and communication skills',
                  'Premarital counselling and relationship guidance',
                  'Parenting challenges and family dynamics',
                  'Emotional adjustment, separation and life transitions',
                  'Family psychoeducation for supporting individuals with mental health conditions',
                ]}
              />
            }
          />

          <Route
            path="services/substance-use-support"
            element={
              <StageRoutePlaceholder
                title="Substance Use & Addiction Support"
                subtitle="Structured assessment, medical management, counselling, and recovery-oriented support"
                sectionCode="PAGE F"
                scopeDetails={[
                  'Assessment of substance use and related psychological concerns',
                  'Psychiatric consultation and medical management',
                  'Motivational interviewing and relapse-prevention strategies where appropriate',
                  'Individual counselling and coping-skills development',
                  'Emotional regulation and stress-management training',
                  'Family counselling and psychoeducation',
                  'Guidance towards medically supervised withdrawal management when required',
                ]}
              />
            }
          />

          <Route
            path="services/child-adolescent-counselling"
            element={
              <StageRoutePlaceholder
                title="Child & Adolescent Counselling"
                subtitle="Age-appropriate psychological support for children and adolescents"
                sectionCode="PAGE G"
                scopeDetails={[
                  'Emotional and behavioural difficulties',
                  'Anxiety, fears and childhood stress',
                  'Anger management and emotional regulation',
                  'School-related stress, academic difficulties and adjustment concerns',
                  'Self-esteem, confidence and communication skills',
                  'Parenting guidance and parent-child relationship support',
                  'Referral for specialised developmental or psychiatric assessment when indicated',
                ]}
              />
            }
          />

          <Route
            path="services/inpatient-safety-monitoring"
            element={
              <StageRoutePlaceholder
                title="Inpatient Environment & Safety Monitoring"
                subtitle="A safe, supportive and structured rehabilitation environment with continuous monitoring"
                sectionCode="PAGE D"
                scopeDetails={[
                  'Routine cleanliness, hygiene and environmental safety checks',
                  'Infection prevention and control measures',
                  'Monitoring ventilation, lighting, temperature and sanitation',
                  'Identifying hazards: falls, fire risks, unsafe equipment and restricted access areas',
                  'Safe medicine storage, handling and administration',
                  'Emergency procedures, staff training and incident reporting',
                  'Measures implemented respectfully while maintaining dignity, privacy and confidentiality',
                ]}
              />
            }
          />

          {/* Conditions We Support */}
          <Route
            path="conditions"
            element={
              <StageRoutePlaceholder
                title="Conditions We Support"
                subtitle="Support for a range of mental health concerns following appropriate clinical assessment"
                sectionCode="PAGE C"
                scopeDetails={[
                  'Anxiety disorders and stress-related concerns',
                  'Depression and mood disorders (including bipolar disorder)',
                  'Obsessive-Compulsive Disorder (OCD)',
                  'Personality disorders (including BPD)',
                  'Psychotic disorders (including schizophrenia & schizoaffective disorder)',
                  'Neurocognitive conditions (including dementia & associated cognitive changes)',
                  'Sleep disturbances, anger-management difficulties and adjustment problems',
                ]}
              />
            }
          />

          {/* Education & Internship */}
          <Route
            path="education-internship"
            element={
              <StageRoutePlaceholder
                title="Education & Internship"
                subtitle="Educational support and structured internship opportunities for healthcare students"
                sectionCode="PAGE H"
                scopeDetails={[
                  'Theoretical learning: Introduction to psychiatry, abnormal psychology, MSE & case history',
                  'Practical learning: Clinical observation under supervision, psychoeducation activities',
                  'Skill development: Clinical documentation, teamwork, reflective thinking & ethical practice',
                  'Target disciplines: Psychology, social work, nursing and related healthcare fields',
                  'Subject to programme availability, institutional policies, patient consent and confidentiality',
                ]}
              />
            }
          />

          {/* Why Savelix */}
          <Route
            path="why-savelix"
            element={
              <StageRoutePlaceholder
                title="Why Choose Savelix?"
                subtitle="Compassionate Care. Professional Expertise. Individualised Support."
                sectionCode="PAGE I"
                scopeDetails={[
                  'Integrated mental healthcare involving psychiatric professionals and psychologists',
                  'Personalised treatment plans aligned with individual needs',
                  'Evidence-based psychological support and structured therapies',
                  'Comprehensive rehabilitation and daily living support',
                  'Family-centred care and psychoeducation',
                  'Support across life stages: child, adolescent, adult and elder care',
                  'Substance-use recovery support and education opportunities',
                ]}
              />
            }
          />

          {/* Contact Us */}
          <Route
            path="contact"
            element={
              <StageRoutePlaceholder
                title="Contact Us"
                subtitle="Enquiry and consultation coordination for individuals and families"
                sectionCode="SECTION 02"
                scopeDetails={[
                  'Confidential appointment and enquiry coordination',
                  'Consultation scheduling for psychiatric and counselling services',
                  'Internship and educational programme enquiries',
                  'Respectful communication adhering to clinical privacy and patient confidentiality',
                ]}
              />
            }
          />

          {/* 404 Fallback within Layout */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
