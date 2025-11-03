'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
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
              Privacy Policy
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
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">Introduction</h2>
                <p className="mb-4">
                  Nutriora ("we," "our," or "us") is committed to protecting your privacy and complies with applicable U.S. federal regulations, including those administered by the U.S. Food and Drug Administration (FDA). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the "Service"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access or use our Service.
                </p>
                <p className="mb-4">
                  This Privacy Policy is designed to comply with U.S. privacy laws including the Health Insurance Portability and Accountability Act (HIPAA) where applicable, the Federal Trade Commission (FTC) Act, and FDA regulations governing health information and nutritional claims. When you use Nutriora's clinic member features to connect with healthcare providers, additional HIPAA protections apply to your Protected Health Information (PHI).
                </p>
                <p className="mb-4">
                  <strong>Clinic Membership:</strong> Nutriora facilitates connections between users and licensed healthcare providers, nutritionists, dietitians, and medical practices (collectively "clinic members"). When you choose to connect with a clinic member, you establish a patient-provider relationship, and your health information may be subject to HIPAA regulations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">Information We Collect</h2>
                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Personal Information</h3>
                <p className="mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Register for an account</li>
                  <li>Use our nutrition planning and tracking features</li>
                  <li>Contact us for customer support</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                </ul>
                <p className="mb-4">
                  This information may include: name, email address, phone number, date of birth, gender, height, weight, health goals, dietary preferences, allergies, medical conditions, and other health-related information.
                </p>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Health and Nutrition Data (FDA Compliant)</h3>
                <p className="mb-4">
                  Our Service is designed to help you manage your nutrition and wellness in compliance with U.S. FDA regulations. We collect health-related data including:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Food intake and meal logs</li>
                  <li>Exercise and activity data</li>
                  <li>Weight and body measurements</li>
                  <li>Health symptoms and conditions</li>
                  <li>Medications and dietary supplements</li>
                  <li>Nutritional label information (compliant with FDA labeling requirements)</li>
                </ul>
                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-4 rounded-r-lg">
                  <p className="mb-4 font-semibold text-black">
                    FDA REQUIRED DISCLAIMER: This information is not intended to diagnose, treat, cure, or prevent any disease. The statements made about dietary supplements and food products have not been evaluated by the U.S. Food and Drug Administration (FDA). These products are not intended to diagnose, treat, cure, or prevent any disease.
                  </p>
                  <p className="mb-2">
                    Always consult with a qualified healthcare professional before making changes to your diet, exercise routine, or taking dietary supplements.
                  </p>
                </div>
                <p className="mb-4">
                  <strong>FDA Nutrition Facts:</strong> All nutritional information provided through our Service complies with FDA regulations (21 CFR Part 101) regarding nutrition labeling and education. Nutrient content claims are made in accordance with FDA requirements.
                </p>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Automatically Collected Information</h3>
                <p className="mb-4">
                  We automatically collect certain information when you use our Service, including:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Device information (device type, operating system, unique device identifiers)</li>
                  <li>Usage data (pages visited, features used, time spent)</li>
                  <li>IP address and location data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Provide, maintain, and improve our Service</li>
                  <li>Create and personalize your nutrition and wellness plans</li>
                  <li>Facilitate connections between you and clinic members (healthcare providers) when authorized</li>
                  <li>Share your health information with authorized clinic members as per your consent</li>
                  <li>Enable clinic members to provide personalized nutrition counseling and medical advice</li>
                  <li>Process your transactions and manage your account</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze usage patterns and trends</li>
                  <li>Detect, prevent, and address technical issues</li>
                  <li>Send you marketing communications (with your consent)</li>
                </ul>
                <p className="mb-4">
                  <strong>Clinic Member Access:</strong> When you authorize a clinic member to access your account, we share your health and nutrition information with that provider to enable them to provide you with personalized care. This sharing is done in compliance with HIPAA regulations where applicable.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">Clinic Members and Healthcare Provider Access</h2>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6 rounded-r-lg">
                  <p className="mb-4 font-semibold text-black">
                    HIPAA COMPLIANCE: Nutriora complies with the Health Insurance Portability and Accountability Act (HIPAA) when applicable. When you connect with clinic members or healthcare providers through our Service, your Protected Health Information (PHI) is handled in accordance with HIPAA regulations.
                  </p>
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-3 mt-6">What are Clinic Members?</h3>
                <p className="mb-4">
                  Clinic members are licensed healthcare providers, nutritionists, dietitians, physicians, and medical practices that use Nutriora to provide nutrition and wellness services to their patients. When you choose to connect with a clinic member through our Service, you establish a patient-provider relationship through the platform.
                </p>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Sharing Information with Clinic Members</h3>
                <p className="mb-4">
                  When you authorize a clinic member to access your account, you are consenting to share your health and nutrition information with that healthcare provider. This includes:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Food intake and meal logs</li>
                  <li>Exercise and activity data</li>
                  <li>Weight and body measurements</li>
                  <li>Health symptoms and conditions</li>
                  <li>Medications and supplements</li>
                  <li>Nutritional goals and progress</li>
                  <li>Any other health information you provide through the Service</li>
                </ul>
                <p className="mb-4">
                  <strong>Authorization Required:</strong> We will only share your information with clinic members after you explicitly authorize such sharing. You may revoke this authorization at any time through your account settings.
                </p>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Clinic Member Responsibilities</h3>
                <p className="mb-4">
                  Clinic members are bound by professional and legal obligations including:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>HIPAA compliance and patient privacy protection</li>
                  <li>Professional licensing requirements</li>
                  <li>Medical ethics and confidentiality obligations</li>
                  <li>FDA regulations regarding nutritional and health advice</li>
                </ul>
                <p className="mb-4">
                  Clinic members are independent healthcare providers and Nutriora is not responsible for their medical advice, recommendations, or treatment plans. Any treatment decisions are made between you and your clinic member provider.
                </p>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">FDA Compliance and Health Information</h3>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6 rounded-r-lg">
                  <p className="mb-4 font-semibold text-black">
                    FDA REGULATION COMPLIANCE: Nutriora complies with U.S. Food and Drug Administration (FDA) regulations regarding health claims and nutritional information. All health-related statements and claims made through our Service comply with FDA guidelines under 21 CFR Part 101.
                  </p>
                </div>
                <p className="mb-4">
                  Your health information is sensitive and we treat it with the utmost care in accordance with applicable U.S. federal and state health privacy laws, including HIPAA where applicable. We do not sell your health information. We may disclose your health information only:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>With your explicit written consent</li>
                  <li>To authorized clinic members and licensed healthcare providers you select</li>
                  <li>As required by HIPAA, FDA regulations, or other applicable laws</li>
                  <li>To comply with legal process or court orders</li>
                  <li>To protect our rights, privacy, safety, or property</li>
                  <li>In connection with a business transfer (merger, acquisition, etc.)</li>
                </ul>
                <p className="mb-4">
                  <strong>FDA Health Claims:</strong> Any health claims or statements about the relationship between food, food components, or dietary supplements and disease are evaluated in accordance with FDA regulations (21 CFR 101.14). We do not make unsubstantiated health claims and all nutritional information is provided for educational purposes only.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">Data Security</h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
                </p>
                <p className="mb-4">
                  Security measures include:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls and authentication</li>
                  <li>Secure data storage and backup procedures</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">Your Rights</h2>
                <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong>Deletion:</strong> Request deletion of your data</li>
                  <li><strong>Portability:</strong> Request transfer of your data</li>
                  <li><strong>Objection:</strong> Object to processing of your data</li>
                  <li><strong>Restriction:</strong> Request restriction of processing</li>
                </ul>
                <p className="mb-4">
                  To exercise these rights, please contact us at <a href="mailto:privacy@nutriora.com" className="text-primary-500 hover:underline">privacy@nutriora.com</a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">Children's Privacy</h2>
                <p className="mb-4">
                  Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">Changes to This Privacy Policy</h2>
                <p className="mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 mt-8">Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-primary-50 p-6 rounded-lg mb-4">
                  <p className="mb-2"><strong>Email:</strong> <a href="mailto:privacy@nutriora.com" className="text-primary-500 hover:underline">privacy@nutriora.com</a></p>
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

