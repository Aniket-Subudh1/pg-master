import Navbar from "../components/Navbar";
import Link from "next/link";

export default function RefundPolicy() {
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
            Refund & Cancellation Policy
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
              This Refund & Cancellation Policy outlines the terms governing refunds, cancellations, and transaction-related adjustments for services offered through{" "}
              <Link href="/" className="text-[#0F8BFF] hover:underline">
                www.pgmaster.in
              </Link>{" "}
              ("Platform"), operated by Swastik Smart Solutions Private Limited ("Company", "PGMASTER", "We", "Us", "Our").
            </p>
            <p
              className="font-inter text-[#0F0F0F] font-semibold text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              By using the Platform and making payments through it, you agree to the terms stated below.
            </p>
          </div>

          {/* 1. Nature of Services */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              1. Nature of Services
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              PGMASTER provides software-based services for PG and hostel management, including tenant management tools and payment facilitation features.
            </p>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              PGMASTER acts solely as a technology platform enabling transactions between users and designated beneficiaries. We do not act as a financial institution, intermediary bank, or party to rental agreements.
            </p>
          </div>

          {/* 2. Subscription Payments */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              2. Subscription Payments (If Applicable)
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              For subscription-based services:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 space-y-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Payments made for subscription plans are generally non-refundable once activated.</li>
              <li>Users may cancel future renewals at any time through account settings.</li>
              <li>Cancellation will stop future billing but will not generate a refund for already paid periods unless otherwise specified.</li>
            </ul>
          </div>

          {/* 3. Rental or Third-Party Payments */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              3. Rental or Third-Party Payments
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              Where PGMASTER enables users to make payments to property owners or third parties:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 space-y-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>PGMASTER only facilitates payment processing.</li>
              <li>Refunds related to rental payments must be resolved directly between the payer and the recipient (beneficiary).</li>
              <li>PGMASTER is not responsible for disputes arising from rental agreements or service arrangements between users.</li>
            </ul>
          </div>

          {/* 4. Failed or Duplicate Transactions */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              4. Failed or Duplicate Transactions
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              Refunds may be initiated by PGMASTER under the following conditions:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4 space-y-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Failed transactions where payment is debited but not successfully processed.</li>
              <li>Duplicate payments due to system error.</li>
              <li>Technical issues confirmed by the payment gateway.</li>
            </ul>
            <p
              className="font-inter text-[#0F0F0F] font-semibold text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              Refund timelines:
            </p>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] pl-6"
              style={{ letterSpacing: "-0.3px" }}
            >
              Typically processed within 5–10 business days, subject to payment gateway and banking timelines.
            </p>
          </div>

          {/* 5. Incorrect Payment Details */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              5. Incorrect Payment Details
            </h2>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 space-y-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Users are responsible for entering accurate payment details.</li>
              <li>PGMASTER shall not be liable for payments made to incorrect beneficiary accounts due to user error.</li>
              <li>Recovery of such payments will depend on recipient cooperation and payment network policies.</li>
            </ul>
          </div>

          {/* 6. Cancellation Policy */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              6. Cancellation Policy
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              Users may cancel:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4 space-y-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Subscription renewals anytime before the next billing cycle.</li>
              <li>Pending transactions, only if the payment has not yet been processed.</li>
            </ul>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              Once a transaction is successfully completed and funds are transferred, cancellation may not be possible.
            </p>
          </div>

          {/* 7. Processing Fees */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              7. Processing Fees
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              Where applicable:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 space-y-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Transaction fees, service charges, or payment gateway charges may be non-refundable.</li>
              <li>Any approved refund may be processed after deducting applicable charges.</li>
            </ul>
          </div>

          {/* 8. Fraud Prevention and Risk Controls */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              8. Fraud Prevention and Risk Controls
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              PGMASTER reserves the right to:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 space-y-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Delay or reject refunds if suspicious or fraudulent activity is detected.</li>
              <li>Request additional verification or documentation before processing refunds.</li>
            </ul>
          </div>

          {/* 9. Refund Request Process */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              9. Refund Request Process
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              Users may request refunds by contacting:
            </p>
            <p
              className="font-inter text-[#0F0F0F] font-semibold text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              Email:{" "}
              <a href="mailto:support@pgmaster.in" className="text-[#0F8BFF] hover:underline">
                support@pgmaster.in
              </a>
            </p>
            <p
              className="font-inter text-[#0F0F0F] font-semibold text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              Please include:
            </p>
            <ul
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] list-disc pl-6 mb-4 space-y-2"
              style={{ letterSpacing: "-0.3px" }}
            >
              <li>Registered account details</li>
              <li>Transaction ID</li>
              <li>Payment date</li>
              <li>Reason for refund request</li>
            </ul>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              Incomplete requests may delay processing.
            </p>
          </div>

          {/* 10. Changes to This Policy */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-8 sm:mb-12">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              10. Changes to This Policy
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              We may update this Refund & Cancellation Policy from time to time. Updated versions will be posted on the Platform and become effective immediately.
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
