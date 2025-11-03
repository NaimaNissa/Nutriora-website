'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-primary-100 via-white to-peach/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Terms and Conditions
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 text-gray-700 leading-relaxed"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">Agreement to Terms</h2>
                <p className="mb-4">
                  By accessing or using Nutriora's mobile application, website, or services (collectively, the "Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of these terms, you may not access the Service.
                </p>
                <p className="mb-4">
                  These Terms constitute a legally binding agreement between you and Nutriora and are subject to U.S. federal and state laws, including FDA regulations. Please read them carefully before using our Service.
                </p>
                <p className="mb-4">
                  <strong>FDA Compliance:</strong> Nutriora operates in compliance with U.S. Food and Drug Administration (FDA) regulations. All health claims, nutritional information, and dietary supplement information provided through our Service comply with applicable FDA requirements under Title 21 of the Code of Federal Regulations (21 CFR).
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">FDA Compliance and Medical Disclaimer</h2>
                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6 rounded-r-lg">
                  <p className="mb-4 font-semibold text-black text-lg">
                    FDA REQUIRED DISCLAIMER (21 CFR 101.93):
                  </p>
                  <p className="mb-4 font-semibold text-black">
                    The statements made about products, services, and dietary supplements have not been evaluated by the U.S. Food and Drug Administration (FDA). These products and services are not intended to diagnose, treat, cure, or prevent any disease.
                  </p>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6 rounded-r-lg">
                  <p className="mb-4 font-semibold text-black">
                    MEDICAL DISCLAIMER: The information provided by Nutriora is for educational and informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Nutriora does not provide medical advice, diagnosis, or treatment</li>
                    <li>Nutriora complies with FDA regulations under 21 CFR Part 101 regarding health claims and nutrition labeling</li>
                    <li>Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition</li>
                    <li>Never disregard professional medical advice or delay in seeking it because of information provided by Nutriora</li>
                    <li>If you think you may have a medical emergency, call 911 or your doctor immediately</li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-3 mt-6">FDA Regulation Compliance</h3>
                <p className="mb-4">
                  Nutriora operates in compliance with U.S. FDA regulations, including:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>21 CFR Part 101:</strong> Food labeling regulations regarding nutrition facts and health claims</li>
                  <li><strong>21 CFR 101.14:</strong> Requirements for health claims about the relationship between food substances and disease</li>
                  <li><strong>21 CFR 101.93:</strong> Requirements for dietary supplement disclaimers</li>
                  <li><strong>21 CFR Part 111:</strong> Current Good Manufacturing Practice (cGMP) for dietary supplements where applicable</li>
                </ul>
                <p className="mb-4">
                  All nutritional information, health claims, and dietary supplement information provided through our Service complies with FDA regulations. Any health claims are substantiated in accordance with FDA requirements and are limited to FDA-approved health claims or qualified health claims.
                </p>
                
                <p className="mb-4">
                  The nutrition plans, meal suggestions, and health information provided through our Service are general recommendations based on FDA Dietary Guidelines and should not replace personalized medical care. Individual nutritional needs vary, and what works for one person may not work for another.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">Clinic Members and Healthcare Providers</h2>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6 rounded-r-lg">
                  <p className="mb-4 font-semibold text-black">
                    CLINIC MEMBER SERVICES: Nutriora provides a platform that connects users with licensed healthcare providers, nutritionists, dietitians, and medical practices (collectively "clinic members"). When you choose to connect with a clinic member, you establish a patient-provider relationship through the platform.
                  </p>
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-3 mt-6">What are Clinic Members?</h3>
                <p className="mb-4">
                  Clinic members are licensed healthcare professionals and medical practices that use Nutriora to provide nutrition counseling, meal planning, and wellness services. These providers may include:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Licensed physicians and medical doctors</li>
                  <li>Registered dietitians (RD) and nutritionists</li>
                  <li>Certified nutrition specialists</li>
                  <li>Medical practices and healthcare clinics</li>
                  <li>Other licensed healthcare providers specializing in nutrition and wellness</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Patient-Provider Relationship</h3>
                <p className="mb-4">
                  When you authorize a clinic member to access your health information and provide services:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>You establish a patient-provider relationship with that clinic member</li>
                  <li>The clinic member may access your health data as authorized by you</li>
                  <li>The clinic member may provide personalized nutrition plans, dietary advice, and health recommendations</li>
                  <li>All communications and health information shared with clinic members are subject to HIPAA protections where applicable</li>
                  <li>You may revoke clinic member access at any time through your account settings</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Clinic Member Responsibilities</h3>
                <p className="mb-4">
                  Clinic members using Nutriora are independent healthcare providers and are responsible for:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Maintaining appropriate professional licenses and certifications</li>
                  <li>Complying with HIPAA regulations and patient privacy laws</li>
                  <li>Providing accurate, evidence-based medical and nutritional advice</li>
                  <li>Complying with FDA regulations regarding health claims and nutritional information</li>
                  <li>Maintaining professional liability insurance where required</li>
                  <li>Following medical ethics and professional standards</li>
                </ul>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6 rounded-r-lg">
                  <p className="mb-4 font-semibold text-black">
                    IMPORTANT: Nutriora is a platform provider and does not provide medical, nutritional, or healthcare services. All medical advice, treatment plans, and nutritional recommendations come from the clinic members you choose to connect with. Nutriora is not responsible for the quality of care, medical advice, or treatment provided by clinic members.
                  </p>
                  <p className="mb-2">
                    You are responsible for verifying the credentials, licenses, and qualifications of any clinic member you choose to work with through the Service.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">HIPAA Compliance</h3>
                <p className="mb-4">
                  When you connect with clinic members, your Protected Health Information (PHI) may be subject to HIPAA regulations. Both Nutriora and clinic members are required to comply with HIPAA requirements, including:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Obtaining appropriate authorizations before accessing or disclosing PHI</li>
                  <li>Implementing appropriate security measures to protect PHI</li>
                  <li>Providing you with access to your health records</li>
                  <li>Notifying you of any breaches of your PHI as required by law</li>
                  <li>Maintaining Business Associate Agreements where applicable</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Use of Service</h3>
                <h4 className="text-lg font-semibold text-black mb-3 mt-4">Eligibility</h4>
                <p className="mb-4">
                  You must be at least 13 years old to use our Service. If you are under 18, you represent that you have your parent's or guardian's permission to use the Service and that they have agreed to these Terms on your behalf.
                </p>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Account Registration</h3>
                <p className="mb-4">
                  To access certain features of our Service, you may be required to create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and update your account information to keep it accurate</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Prohibited Uses</h3>
                <p className="mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Use the Service for any illegal purpose or in violation of any laws</li>
                  <li>Attempt to gain unauthorized access to the Service or related systems</li>
                  <li>Interfere with or disrupt the Service or servers connected to the Service</li>
                  <li>Reproduce, duplicate, copy, or resell any part of the Service</li>
                  <li>Use the Service to harm, threaten, or harass others</li>
                  <li>Transmit any viruses, malware, or other harmful code</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">Intellectual Property</h2>
                <p className="mb-4">
                  The Service and its original content, features, and functionality are owned by Nutriora and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="mb-4">
                  You may not modify, reproduce, distribute, create derivative works, publicly display, or commercially exploit any content from the Service without our prior written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">User Content</h2>
                <p className="mb-4">
                  Our Service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, or other material ("User Content"). You are responsible for the User Content that you post on or through the Service.
                </p>
                <p className="mb-4">
                  By posting User Content, you grant Nutriora a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your User Content solely for the purpose of providing and improving the Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">Subscription and Payment</h2>
                <p className="mb-4">
                  Some features of our Service may require a paid subscription. By subscribing, you agree to pay all fees associated with your subscription. Subscriptions will automatically renew unless you cancel before the renewal date.
                </p>
                <p className="mb-4">
                  You may cancel your subscription at any time through your account settings or by contacting us. Refunds are provided according to our refund policy, available upon request.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">Limitation of Liability</h2>
                <p className="mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, NUTRIORA AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OR INABILITY TO USE THE SERVICE.
                </p>
                <p className="mb-4">
                  OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE USE OF THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE MONTHS PRIOR TO THE CLAIM.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">Indemnification</h2>
                <p className="mb-4">
                  You agree to defend, indemnify, and hold harmless Nutriora and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation, reasonable legal fees, arising out of or in any way connected with your access to or use of the Service or violation of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">Termination</h2>
                <p className="mb-4">
                  We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms.
                </p>
                <p className="mb-4">
                  Upon termination, your right to use the Service will cease immediately. All provisions of these Terms that by their nature should survive termination shall survive termination, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">Governing Law and FDA Jurisdiction</h2>
                <p className="mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the United States and applicable federal regulations, including those administered by the U.S. Food and Drug Administration (FDA). Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in the United States.
                </p>
                <p className="mb-4">
                  Nutriora is subject to FDA oversight and regulation. Any health claims, nutritional information, or dietary supplement information provided through our Service is subject to FDA review and must comply with FDA regulations, including 21 CFR Part 101 (Food Labeling) and 21 CFR Part 111 (Dietary Supplements).
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p className="mb-4">
                  What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-primary-50 p-6 rounded-lg mb-4">
                  <p className="mb-2"><strong>Email:</strong> <a href="mailto:legal@nutriora.com" className="text-primary-500 hover:underline">legal@nutriora.com</a></p>
                  <p className="mb-2"><strong>Address:</strong> 123 Wellness St, Health City, HC 12345</p>
                  <p><strong>Phone:</strong> +1 (234) 567-890</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

