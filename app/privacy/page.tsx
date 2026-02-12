import Navbar from "../components/Navbar";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#B4DEFF] via-[#D3ECFF] to-[#FFFFFF]">
      <Navbar />

      <main className="flex flex-col items-center pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[340px] sm:max-w-[700px] lg:max-w-[900px] w-full">
          {/* Header */}
          <h1
            className="font-fustat text-[#0F0F0F] font-bold text-[32px] leading-[36px] sm:text-[48px] sm:leading-[52px] lg:text-[64px] lg:leading-[70px] mb-4"
            style={{ letterSpacing: "-2px" }}
          >
            Privacy Policy
          </h1>

          <p
            className="font-inter text-[#5D5B63] font-normal text-[14px] leading-[21px] sm:text-[16px] sm:leading-[24px] mb-8 sm:mb-12"
            style={{ letterSpacing: "-0.5px" }}
          >
            Last Updated: February 12, 2026
          </p>

          {/* Introduction */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              This Privacy Policy describes how PG MASTER ("Company", "We", "Us", "Our"), collects, uses, processes, stores, and protects information provided by users ("You", "Your", "User") when accessing or using our website{" "}
              <Link href="/" className="text-[#0F8BFF] hover:underline">
                www.pgmaster.in
              </Link>
              , mobile applications, and related services (collectively referred to as the "Platform").
            </p>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              This Privacy Policy is an electronic record under the provisions of the Information Technology Act, 2000 and applicable rules thereunder, including the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
            </p>
            <p
              className="font-inter text-[#0F0F0F] font-semibold text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              By accessing or using the Platform, you acknowledge that you have read, understood, and agreed to the terms of this Privacy Policy.
            </p>
          </div>

          {/* 1. Information We Collect */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              1. Information We Collect
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              To provide our services, we may collect the following categories of information:
            </p>

            <h3
              className="font-fustat text-[#0F0F0F] font-semibold text-[16px] leading-[20px] sm:text-[18px] sm:leading-[24px] lg:text-[20px] lg:leading-[26px] mb-3 mt-6"
              style={{ letterSpacing: "-0.5px" }}
            >
              1.1 Personal Information
            </h3>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4 space-y-1"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Full name</li>
              <li>Phone number (mandatory)</li>
              <li>Email address (mandatory)</li>
              <li>Age</li>
              <li>Gender</li>
              <li>PIN code / location details</li>
              <li>Occupation</li>
              <li>Interests and preferences</li>
              <li>Images and photographs</li>
              <li>Documents uploaded by users</li>
            </ul>

            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              Where applicable and voluntarily provided:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4 space-y-1"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Medical records or history</li>
              <li>Other sensitive information required for specific services</li>
            </ul>

            <p
              className="font-inter text-[#0F0F0F] font-semibold text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              Phone number and email address are used to:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4 space-y-1"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Create and verify user accounts</li>
              <li>Send OTP authentication messages</li>
              <li>Provide service notifications</li>
              <li>Deliver updates or promotional communications (only with consent)</li>
            </ul>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              Users may opt out of promotional communication at any time.
            </p>

            <h3
              className="font-fustat text-[#0F0F0F] font-semibold text-[16px] leading-[20px] sm:text-[18px] sm:leading-[24px] lg:text-[20px] lg:leading-[26px] mb-3 mt-6"
              style={{ letterSpacing: "-0.5px" }}
            >
              1.2 Tenant Data Sharing
            </h3>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              If you are residing in a property managed through PG MASTER:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4 space-y-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Your submitted information may be shared with your property owner/manager strictly for operational, compliance, and tenancy management purposes.</li>
              <li>Such data is not sold or shared with unrelated third parties.</li>
            </ul>

            <h3
              className="font-fustat text-[#0F0F0F] font-semibold text-[16px] leading-[20px] sm:text-[18px] sm:leading-[24px] lg:text-[20px] lg:leading-[26px] mb-3 mt-6"
              style={{ letterSpacing: "-0.5px" }}
            >
              1.3 Automatically Collected Information
            </h3>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              We may automatically collect:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4 space-y-1"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>IP address</li>
              <li>Device information</li>
              <li>Browser type</li>
              <li>Usage logs</li>
              <li>Cookies and session data</li>
            </ul>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              This information helps us improve security, user experience, and platform performance.
            </p>
          </div>

          {/* 2. Purpose of Data Processing */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              2. Purpose of Data Processing
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              We process your information for the following purposes:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 space-y-1"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Account creation and identity verification</li>
              <li>Providing platform features and services</li>
              <li>Tenant/property management functionality</li>
              <li>Customer support and communication</li>
              <li>Security monitoring and fraud prevention</li>
              <li>Service analytics and improvements</li>
              <li>Legal and regulatory compliance</li>
            </ul>
          </div>

          {/* 3. Meta Integration */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              3. Meta (Facebook/Instagram) Integration – CRM Module
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              PG MASTER offers an optional CRM integration allowing business users to connect Meta platforms such as Facebook Pages and Instagram Professional Accounts.
            </p>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              When enabled, we may access:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4 space-y-1"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Basic account/profile information (instagram_business_basic)</li>
              <li>Messages and related metadata (instagram_business_manage_messages)</li>
              <li>Comments and related metadata (instagram_business_manage_comments)</li>
            </ul>
            <p
              className="font-inter text-[#0F0F0F] font-semibold text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              This data is used solely to:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4 space-y-1"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Display conversations within CRM</li>
              <li>Allow users to manage and respond to leads</li>
              <li>Maintain operational logs for security and service reliability</li>
            </ul>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              We do not sell or use Meta data for unrelated advertising purposes.
            </p>

            <h3
              className="font-fustat text-[#0F0F0F] font-semibold text-[16px] leading-[20px] sm:text-[18px] sm:leading-[24px] lg:text-[20px] lg:leading-[26px] mb-3 mt-4"
              style={{ letterSpacing: "-0.5px" }}
            >
              Security of Integration
            </h3>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 space-y-1"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Access tokens are stored securely.</li>
              <li>Access is restricted on a need-to-know basis.</li>
              <li>Users may revoke integration anytime via Meta settings or PG MASTER CRM.</li>
            </ul>
          </div>

          {/* 4. Cookies */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              4. Cookies and Tracking Technologies
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              We use cookies and similar technologies to:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4 space-y-1"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Improve website functionality</li>
              <li>Understand user preferences</li>
              <li>Enhance user experience</li>
              <li>Measure platform performance</li>
            </ul>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              Cookies do not access personal files on your device.
            </p>
          </div>

          {/* 5. Information Sharing */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              5. Information Sharing and Disclosure
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-semibold text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              We do not sell personal data.
            </p>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              Information may be shared only under limited circumstances:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 space-y-1"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Legal obligations or lawful requests by authorities</li>
              <li>Internal processing by authorized employees or group entities</li>
              <li>Third-party integrations explicitly enabled by you</li>
              <li>Service providers operating under confidentiality obligations</li>
            </ul>
          </div>

          {/* 6. Data Security */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              6. Data Security
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              We implement reasonable security practices including:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4 space-y-1"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Encryption protocols</li>
              <li>Secure server infrastructure</li>
              <li>Access controls</li>
              <li>Internal audits and monitoring</li>
            </ul>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              While we strive to protect data, no online system can guarantee absolute security.
            </p>
          </div>

          {/* 7. Data Retention */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              7. Data Retention
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              We retain personal information only for:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4 space-y-1"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Service delivery</li>
              <li>Legal compliance</li>
              <li>Dispute resolution</li>
              <li>Operational purposes</li>
            </ul>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              Users may request deletion subject to applicable laws.
            </p>
          </div>

          {/* 8. User Data Deletion Rights */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              8. User Data Deletion Rights
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              You may request deletion of your personal data by:
            </p>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4 pl-6"
              style={{ letterSpacing: "-0.3px" }}
            >
              Using the in-app deletion option.
            </p>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              This includes data obtained through third-party integrations where applicable.
            </p>
          </div>

          {/* 9. Third-Party Links */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              9. Third-Party Links
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              Our Platform may contain links to external websites. We are not responsible for their privacy practices.
            </p>
          </div>

          {/* 10. Updates to This Policy */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              10. Updates to This Policy
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              We may update this Privacy Policy periodically. Continued use of the Platform after updates constitutes acceptance of the revised policy.
            </p>
          </div>

          {/* 11. Grievance Redressal */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-8 sm:mb-12">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              11. Grievance Redressal
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              For any privacy concerns, complaints, or requests:
            </p>
            <div
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              <p className="font-semibold mb-2">SWASTIK SMART SOLUTIONS PRIVATE LIMITED</p>
              <p className="mb-1">Plt No-296/300 Laxmi Sagar</p>
              <p className="mb-1">Near Oppolo Pharmacy, Budheswari Colony</p>
              <p>Khorda, Bhubaneswar, Orissa, India, 751006</p>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="text-center mb-8">
            <Link
              href="/"
              className="font-inter inline-flex items-center gap-2 bg-[#0F8BFF] text-white px-5 py-3 sm:px-6 sm:py-3.5 rounded-2xl font-normal text-[14px] sm:text-[16px] hover:bg-[#0d7ae6] hover:shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset] transition-all duration-200 shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset]"
              style={{ letterSpacing: "-0.5px", lineHeight: "27.2px" }}
            >
              Back to Home
              <div className="flex items-center justify-center w-[24px] h-[24px] sm:w-[27px] sm:h-[27px] rounded-full bg-white">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-4 sm:h-4"
                >
                  <path
                    d="M10 4L6 8L10 12"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
