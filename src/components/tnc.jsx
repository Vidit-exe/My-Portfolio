import React, { useRef } from "react";
import { Button } from "@material-tailwind/react";
import html2pdf from "html2pdf.js"

export const handleDownload = (element) => {
  if (element) {
    html2pdf()
      .from(element)
      .set({
        margin: 0.5,
        filename: "Terms-and-Conditions.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .save();
  }
};

const Tnc = () => {
  const pdfRef = useRef(null);
  const statement = `
  <h2><strong>Terms and Conditions</strong></h2>
    <p><strong>Last Updated:</strong> ${new Date().toLocaleDateString()}</p>
    <br />
    <p>Welcome to Vidit's Portfolio. By accessing or using this Website, you agree to comply with and be bound by the following Terms and Conditions. If you do not agree to these terms, please do not use the Website.</p>
    <br />
    <h2><strong>1. Use of Website</strong></h2>
    <li>This Website is intended to showcase the professional work, projects, and services of Vidit.</li>
    <li>You may view, download, and print pages for personal and non-commercial use only.</li>
    <li>You agree not to use this Website for any unlawful or harmful purpose.</li>
    <br />
    <h2><strong>2. Intellectual Property</strong></h2>
    <li>All content, designs, code, images, and other materials on this Website are the intellectual property of Vidit, unless otherwise stated.</li>
    <li>Unauthorized use, reproduction, or distribution of the content is strictly prohibited.</li>
    <br />
    <h2><strong>3. Accuracy of Information</strong></h2>
    <li>While I strive to provide accurate and up-to-date information, I make no warranties or representations regarding the accuracy, completeness, or reliability of any content on this Website.</li>
    <br />
    <h2><strong>4. External Links</strong></h2>
    <li>This Website may contain links to third-party websites. These links are provided for convenience and do not imply endorsement. I am not responsible for the content or practices of any third-party sites.</li>
    <br />
    <h2><strong>5. Contact and Inquiries</strong></h2>
    <li>For project inquiries, collaborations, or any other communications, you may contact me via the methods provided on the Website.</li>
    <li>Misuse of contact forms or spamming will not be tolerated.</li>
    <br />
    <h2><strong>6. Limitation of Liability</strong></h2>
    <li>I shall not be held liable for any damages arising out of or in connection with the use of this Website.</li>
    <li>Use this Website at your own risk.</li>
    <br />
    <h2><strong>7. Changes to Terms</strong></h2>
    <li>I reserve the right to modify these Terms and Conditions at any time. Continued use of the Website signifies your acceptance of any changes.</li>
    <br />
    <h2><strong>8. Governing Law</strong></h2>
    <li>These Terms are governed in accordance with the laws of India.</li>
    <br />
    <i>Thank you for visiting my portfolio! :)</i>
  `
  return (
    <div className="pt-5 pl-2 text-sm text-gray-900 dark:text-white max-w-3xl mx-auto leading-relaxed">
      <div
        dangerouslySetInnerHTML={{
          __html: statement,
        }}
        className="prose prose-sm prose-gray dark:prose-invert"
        ref={pdfRef}
      />

      {/* <div className="mt-4">
        <Button
          id="download-button"
          onClick={() => handleDownload(pdfRef.current)}
          className="bg-gray-900 text-white dark:bg-white dark:text-gray-900"
        >
          Download as PDF
        </Button>
      </div> */}
    </div>
  );
};

export default Tnc;