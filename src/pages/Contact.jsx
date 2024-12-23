import React, { useState } from "react";
import PageTitle from "../components/pagetitle";
import * as emailjs from "emailjs-com";
import { contactConfig } from "../assets/fake-data/dataContact";
import { Helmet } from "react-helmet";

function Contact(props) {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    phone: "",
    alertmessage: "",
    loading: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ ...formData, loading: true }); // Keep the previous state and update loading

    const templateParams = {
      from_name: formData.name, // Ensure you're sending the correct value
      user_name: formData.email,
      to_name: contactConfig.YOUR_EMAIL, // The recipient email (yours)
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
    .send(
      contactConfig.YOUR_SERVICE_ID,
      contactConfig.YOUR_TEMPLATE_ID,
      templateParams,
      contactConfig.YOUR_USER_ID
    )
    .then(
      (result) => {
        console.log("Email sent successfully:", result);
        setFormdata({
          loading: false,
          alertmessage: "SUCCESS! ,Thank you for your message",
          variant: "success",
          show: true,
        });
      },
      (error) => {
        console.error("Email send failed:", error);
        setFormdata({
          loading: false,
          alertmessage: `Failed to send! ${error.text}`,
          variant: "danger",
          show: true,
        });
      }
    );
  
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Helmet>
        <title>NFTracker</title>
      </Helmet>
      <PageTitle title="Contact Us" />

      <section className="tf-section tf-contact">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-md-12">
              <div
                className="content-about m-b50 mobie-40"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="tf-title st2 m-b17">
                  <h4 className="title">Have a question </h4>
                </div>
                <p className="m-r-40">
                  Fill up the Form and our team will get back to within 24 hrs
                </p>
              </div>
              <form
                action="contact/contact-process.php"
                className="form-contact"
                id="contactform"
                data-aos="fade-right"
                data-aos-duration="800"
                onSubmit={handleSubmit}
              >
                <fieldset>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset>
                  <textarea
                    placeholder="Type your Messege"
                    rows="5"
                    tabIndex="4"
                    name="message"
                    className="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </fieldset>
                <button className="tf-button btn-effect" type="submit">
                  <span className="boder-fade"></span>
                  <span className="effect">Send Message</span>
                </button>
                <p className={`alert-subscribe ${formData.variant}`}>{formData.alertmessage}</p>
              </form>
            </div>
            <div className="col-xl-7  col-md-12">
              <div
                className="contact-details"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="adress wrap-fx">
                  <div className="location">
                    <h6>Location</h6>
                    <ul>
                      <li>197 S.Federal Hwy, Ste 200, Boca Raton, FL 33432</li>
                    </ul>
                  </div>
                  <div className="mail">
                    <h6>Contact Us</h6>
                    <ul>
                      <li>info@nftracker.net</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="flat-map wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                >
                  <iframe
                    title="map"
                    className="map-content"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.3306232202444!2d-80.08920872551643!3d26.34816628412536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e21acf6aa067%3A0x81159b00310f31f8!2s197%20S%20Federal%20Hwy%2C%20Boca%20Raton%2C%20FL%2033432%2C%20USA!5e0!3m2!1sen!2s!4v1731762262932!5m2!1sen!2s"                    
                    width="1720"
                    height="655"
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
