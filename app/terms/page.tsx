import Navbar from "../components/Navbar";
import Link from "next/link";

export default function TermsAndConditions() {
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
            Terms & Conditions
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
              These Terms and Conditions ("Terms") govern the access and use of the website{" "}
              <Link href="/" className="text-[#0F8BFF] hover:underline">
                www.pgmaster.in
              </Link>
              , mobile applications, and services operated by Swastik Smart Solutions Private Limited ("Company", "PGMASTER", "We", "Us", "Our").
            </p>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              The terms "User", "You", or "Your" refer to any individual or entity accessing or using the Platform.
            </p>
            <p
              className="font-inter text-[#0F0F0F] font-semibold text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              By accessing or using this Platform, you agree to be legally bound by these Terms. If you do not agree, you must discontinue using the Platform immediately.
            </p>
          </div>

          {/* 1. Company Information */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              1. Company Information
            </h2>
            <div
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              <p className="mb-2">Swastik Smart Solutions Private Limited</p>
              <p className="mb-2">Plt No-296/300 Laxmi Sagar</p>
              <p className="mb-2">Near Oppolo Pharmacy, Budheswari Colony</p>
              <p className="mb-2">Khorda, Bhubaneswar, Orissa, India – 751006</p>
              <p className="mt-4">
                Website:{" "}
                <Link href="/" className="text-[#0F8BFF] hover:underline">
                  www.pgmaster.in
                </Link>
              </p>
            </div>
          </div>

          {/* 2. Scope of Services */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              2. Scope of Services
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              PGMASTER provides software tools and digital services for:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>PG & hostel management</li>
              <li>Tenant management</li>
              <li>Rental tracking</li>
              <li>Payment facilitation</li>
              <li>Operational automation</li>
            </ul>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              PGMASTER acts solely as a technology platform facilitating interactions between property owners, managers, tenants, and third-party service providers.
            </p>
            <p
              className="font-inter text-[#0F0F0F] font-semibold text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              We are not:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>A financial institution</li>
              <li>A bank or NBFC</li>
              <li>A real estate agent</li>
              <li>A party to any tenancy agreement</li>
            </ul>
          </div>

          {/* 3. Acceptance of Terms */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              3. Acceptance of Terms
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              By using the Platform, you:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Confirm you are legally capable of entering agreements.</li>
              <li>Agree to comply with applicable laws.</li>
              <li>Accept updates or revisions made to these Terms.</li>
            </ul>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              We reserve the right to modify these Terms at any time. Continued use of the Platform constitutes acceptance of updated Terms.
            </p>
          </div>

          {/* 4. Use of Content and Intellectual Property */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              4. Use of Content and Intellectual Property
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              All trademarks, logos, software, designs, graphics, and content displayed on the Platform are owned by or licensed to the Company.
            </p>
            <p
              className="font-inter text-[#0F0F0F] font-semibold text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              Users may not:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Copy or reproduce content</li>
              <li>Sell or redistribute materials</li>
              <li>Modify or create derivative works</li>
            </ul>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              without prior written permission.
            </p>
          </div>

          {/* 5. Acceptable Use Policy */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              5. Acceptable Use Policy
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              Users agree not to:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Upload unlawful, defamatory, or harmful content</li>
              <li>Violate intellectual property rights</li>
              <li>Attempt unauthorized access to systems</li>
              <li>Engage in fraudulent activities</li>
            </ul>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              Violation may result in suspension or termination of access.
            </p>
          </div>

          {/* 6. Payment Facilitation and Platform Role */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              6. Payment Facilitation and Platform Role
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              PGMASTER may enable payment features via third-party payment gateways.
            </p>
            <p
              className="font-inter text-[#0F0F0F] font-semibold text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              Important:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>PGMASTER only facilitates technical processing of payments.</li>
              <li>Payments are made directly between payer and beneficiary.</li>
              <li>We do not hold or own funds beyond technical processing requirements.</li>
              <li>We are not responsible for the underlying rental agreements or disputes.</li>
            </ul>
            <p
              className="font-inter text-[#0F0F0F] font-semibold text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              Users confirm:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>A valid rental or service relationship exists between parties.</li>
              <li>Transactions reflect genuine payments.</li>
            </ul>
          </div>

          {/* 7. Authorization for Transactions */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              7. Authorization for Transactions
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              By initiating a payment through the Platform, you authorize:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Charging your selected payment method (UPI, cards, wallets, bank account).</li>
              <li>Processing and transferring funds to the designated recipient.</li>
              <li>Deduction of applicable service charges or fees.</li>
            </ul>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              If transactions fail due to incorrect details provided by you, refunds (if applicable) may be subject to processing fees.
            </p>
          </div>

          {/* 8. KYC and Compliance Requirements */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              8. KYC and Compliance Requirements
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              The Company may request verification documents including but not limited to:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>PAN Card</li>
              <li>Aadhaar Card</li>
              <li>Rental agreements</li>
              <li>Identity proof</li>
            </ul>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              Especially where required under law or for transactions exceeding regulatory thresholds.
            </p>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              Failure to provide required documentation may result in suspension of services.
            </p>
          </div>

          {/* 9. Transaction Responsibility */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              9. Transaction Responsibility
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-semibold text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              Users are solely responsible for:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Entering accurate beneficiary details</li>
              <li>Ensuring legitimacy of transactions</li>
              <li>Maintaining confidentiality of login credentials</li>
            </ul>
            <p
              className="font-inter text-[#0F0F0F] font-semibold text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              PGMASTER shall not be liable for:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Wrong transfers due to incorrect details</li>
              <li>Unauthorized transactions caused by user negligence</li>
            </ul>
          </div>

          {/* 10. Suspension or Rejection of Transactions */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              10. Suspension or Rejection of Transactions
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              We reserve the right to delay, suspend, or reject any transaction if:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Fraudulent activity is suspected</li>
              <li>Legal or regulatory compliance requires review</li>
              <li>Security risks are detected</li>
            </ul>
          </div>

          {/* 11. Indemnification */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              11. Indemnification
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              You agree to indemnify and hold harmless the Company, its officers, employees, and affiliates from any claims, damages, or liabilities arising from:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Your misuse of the Platform</li>
              <li>Violation of these Terms</li>
              <li>Unauthorized or illegal activities.</li>
            </ul>
          </div>

          {/* 12. Limitation of Liability */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              12. Limitation of Liability
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              To the maximum extent permitted by law:
            </p>
            <p
              className="font-inter text-[#0F0F0F] font-semibold text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              The Company shall not be liable for:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Indirect or consequential damages</li>
              <li>Loss of profits or data</li>
              <li>Service interruptions</li>
              <li>Third-party actions</li>
            </ul>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              Total liability shall not exceed the amount paid by the User for the specific service giving rise to the claim.
            </p>
          </div>

          {/* 13. Disclaimer */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              13. Disclaimer
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              The Platform is provided on an "as-is" and "as-available" basis.
            </p>
            <p
              className="font-inter text-[#0F0F0F] font-semibold text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              We do not guarantee:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Continuous availability</li>
              <li>Error-free performance</li>
              <li>Suitability for specific purposes</li>
            </ul>
          </div>

          {/* 14. Third-Party Services */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              14. Third-Party Services
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              The Platform may integrate with third-party services including payment gateways. Such services are governed by their respective terms and policies.
            </p>
          </div>

          {/* 15. Governing Law */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-8 sm:mb-12">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              15. Governing Law
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              These Terms shall be governed by the laws of India. Jurisdiction shall lie with courts located in Bhubaneswar, Odisha.
            </p>
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
