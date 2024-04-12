"use client" 
import styles from "@/styles/Home.module.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      "service_28p58f9",
      "template_ga97rxq",
      form.current,
      process.env.NEXT_PUBLIC_KEY
    )
    .then(
      (result) => {
        document
          .querySelectorAll(".input-field-div .input-field")
          .forEach((item) => {
            item.value = "";
          });
      },
      (error) => {}
    );
  };
  return (
    <section id="contact" className={styles.Contact}>
      <div
        className="SectionDivider"
      ></div>
      <h2  className="SectionTitle">
        Contact Me
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className={styles.form}
      >
        <h3 className={styles.formTitle}>Get In Touch</h3>
        <div className="input-field-div">
          <label className="form-label">Name</label>
          <input
            className="input-field"
            placeholder="Enter your name"
            type="text"
            name="from_name"
            min-length="5"
            required
          />
        </div>
        <div className="input-field-div">
          <label className="form-label">Email</label>
          <input
            className="input-field"
            placeholder="Enter your Email"
            type="email"
            name="from_email"
            min-length="5"
            required
          />
        </div>

        <div className="input-field-div">
          <label className="form-label">Subject</label>
          <input
            className="input-field"
            placeholder="Enter your Subject"
            type="text"
            name="subject"
          />
        </div>
        <div className="input-field-div">
          <label className="form-label">Message</label>
          <textarea
            className="input-field"
            placeholder="Elaborate your concern"
            type="text"
            name="message"
            min-length="10"
            required
          ></textarea>
        </div>
        <div className="btn-container">
          <button type="submit" className="PrimaryButton btn">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
