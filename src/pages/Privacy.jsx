import React from "react";
import { Helmet } from "react-helmet";

function Privacy() {
  return (
    <section className="page-title">
      <Helmet>
        <title>Privacy Policy</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5 style={{ marginBottom: "20px" }}>Privacy Policy for NFTracker.net</h5>
            <p style={{ marginBottom: "20px" }}>
              <strong>Last Updated:</strong> November 2024
            </p>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>1. Introduction</h6>
            <p style={{ marginBottom: "20px" }}>
              Welcome to NFTracker.net. We are committed to
              protecting your privacy and ensuring that your personal information
              is handled securely and responsibly. This Privacy Policy outlines how
              we collect, use, and safeguard your information when you visit our
              website.
            </p>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>2. Information We Collect</h6>
            <ul style={{ marginBottom: "20px" }}>
              <li>
                <strong>Personal Identification Information:</strong> Name, email address, 
                and other contact details you provide when registering or contacting us.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type, operating system, 
                and other technical information collected automatically when you visit our site.
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent on the site, and other 
                analytical data to help us improve user experience.
              </li>
            </ul>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>3. How We Use Your Information</h6>
            <p style={{ marginBottom: "15px" }}>The information we collect is used for:</p>
            <ul style={{ marginBottom: "20px" }}>
              <li>Providing and maintaining our services.</li>
              <li>Improving and personalizing user experience.</li>
              <li>Communicating with you, including responding to inquiries and providing updates.</li>
              <li>Analyzing usage patterns to enhance our website's functionality.</li>
            </ul>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>4. Cookies and Tracking Technologies</h6>
            <p style={{ marginBottom: "20px" }}>
              We use cookies and similar tracking technologies to monitor activity on our site 
              and hold certain information. Cookies are files with a small amount of data that are 
              sent to your browser from a website and stored on your device. You can instruct 
              your browser to refuse all cookies or to indicate when a cookie is being sent. 
              However, if you do not accept cookies, you may not be able to use some portions of 
              our site.
            </p>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>5. Sharing Your Information</h6>
            <p style={{ marginBottom: "20px" }}>
              We do not sell, trade, or otherwise transfer your personal information to outside parties, 
              except when necessary to comply with the law, enforce our site policies, or protect our rights, property, or safety.
            </p>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>6. Data Security</h6>
            <p style={{ marginBottom: "20px" }}>
              We implement a variety of security measures to maintain the safety of your personal information. 
              However, please be aware that no method of transmission over the internet or method of electronic 
              storage is 100% secure.
            </p>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>7. Third-Party Links</h6>
            <p style={{ marginBottom: "20px" }}>
              Our website may contain links to third-party sites. We are not responsible for the privacy 
              practices of these external sites and encourage you to review their privacy policies.
            </p>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>8. Children's Privacy</h6>
            <p style={{ marginBottom: "20px" }}>
              Our services are not directed to individuals under the age of 13. We do not knowingly collect 
              personal information from children under 13. If we become aware that we have collected such 
              information, we will take steps to delete it.
            </p>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>9. Changes to This Privacy Policy</h6>
            <p style={{ marginBottom: "20px" }}>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>10. Contact Us</h6>
            <p style={{ marginBottom: "20px" }}>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p><strong>Email: info@nftracker.net</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Privacy;
