import React from "react";
import { Helmet } from "react-helmet";

function Terms() {
  return (
    <section className="page-title">
      <Helmet>
        <title>Terms and Conditions</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5 style={{ marginBottom: "20px" }}>
              <strong>Terms and Conditions for NFTracker.net</strong>
            </h5>
            <p style={{ marginBottom: "20px" }}>
              <strong>Last Updated:</strong> November 2024
            </p>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>
              1. Acceptance of Terms
            </h6>
            <p style={{ marginBottom: "20px" }}>
              By accessing and using our website, you accept and agree to be
              bound by these Terms and Conditions and our <strong>Privacy Policy</strong>.
            </p>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>2. Use of Our Website</h6>
            <p style={{ marginBottom: "5px" }}>
              You agree to use NFTracker.net for <strong>lawful purposes</strong> only and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
              <br></br><strong>Prohibited activities</strong> include but are not limited to:
            </p>
            <ul style={{ marginBottom: "20px", listStyleType: "disc" }}>
            <li style={{ marginBottom: "10px" }}>Engaging in fraudulent activities.</li>
            <li style={{ marginBottom: "10px" }}>Attempting to gain unauthorized access to the website or its systems.</li>
            <li style={{ marginBottom: "10px" }}>Uploading or transmitting malicious software or harmful code.</li>
            </ul>
            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>3. Intellectual Property</h6>
            <p style={{ marginBottom: "20px" }}>
              All content on NFTracker.net, including text, graphics, logos, and software, is the <strong>property of NFTracker.net or its licensors</strong> and is protected by copyright, trademark, and other intellectual property laws.
              You may not <strong>reproduce, distribute, modify, or exploit</strong> our content without prior written consent.
            </p>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>4. Disclaimer of Warranties</h6>
            <p style={{ marginBottom: "20px" }}>
              The information provided on NFTracker.net is for informational purposes only. While we strive for accuracy, we do not guarantee that the content is <strong>error-free, complete, or up to date.</strong>
              NFTracker.net is provided <strong>"as is"</strong> and <strong>"as available"</strong> without any warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>5. Limitation of Liability</h6>
            <p style={{ marginBottom: "20px" }}>
              To the fullest extent permitted by law:
            </p>
            <ul style={{ marginBottom: "20px" }}>
              <li>
                NFTracker.net shall <strong>not be liable</strong> for any indirect, incidental, special, or consequential damages arising from your use of the website or inability to access the website.
              </li>
              <li>
                Our total liability for any claims arising out of or related to your use of the website shall <strong>not exceed the amount you paid</strong>, if any, to access the website.
              </li>
            </ul>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>6. User Accounts</h6>
            <p style={{ marginBottom: "20px" }}>
              If you create an account on NFTracker.net, you are responsible for maintaining the confidentiality of your <strong>login credentials.</strong>
              You agree to notify us immediately of any <strong>unauthorized use of your account.</strong>
            </p>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>7. Third-Party Links</h6>
            <p style={{ marginBottom: "20px" }}>
              NFTracker.net may contain links to <strong>third-party websites.</strong> We do not control or endorse these sites and are not responsible for their content or policies.
              Your use of third-party websites is at your own risk.
            </p>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>8. Termination</h6>
            <p style={{ marginBottom: "20px" }}>
              We reserve the right to <strong>suspend or terminate your access</strong> to NFTracker.net at our discretion, without notice, for conduct that violates these Terms and Conditions or is otherwise harmful to other users or our interests.
            </p>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>9. Governing Law</h6>
            <p style={{ marginBottom: "20px" }}>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the <strong>United States of America.</strong> Any disputes arising from your use of the website shall be subject to the exclusive jurisdiction of the courts of the <strong>State of Florida.</strong>
            </p>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>10. Changes to Terms</h6>
            <p style={{ marginBottom: "20px" }}>
              We may revise these Terms and Conditions at any time. By continuing to use the website after changes are posted, you agree to be bound by the <strong>updated terms.</strong>
            </p>

            <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>11. Contact Information</h6>
            <p style={{ marginBottom: "20px" }}>
              If you have any questions or concerns about these Terms and Conditions, please contact us:
            </p>
            <p>
              <strong>Email: info@nftracker.net</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Terms;
