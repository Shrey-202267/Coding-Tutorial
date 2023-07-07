import React, { useRef } from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import emailjs from "emailjs-com";

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x89iw29",
        "template_1doms8p",
        form.current,
        "X27by5kABNGaGTPZo"
      )
      .then(
        (result) => {
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <footer id="contact" style={{ height: "80vh" }}>
      <hr />

      <div className="container footer__container">
        <div className="footer__sections">
          <div className="footer__form">
            <h2 style={{ color: "#66B2FF" }}>Contact Us</h2>
            <div>
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />

                <textarea
                  name="Message"
                  rows="7"
                  placeholder="Your Message"
                  required
                ></textarea>

                <button type="submit" className="submit__button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="footer__links">
            <div className="links">
              <a href="https://www.facebook.com" target="__blank">
                <FacebookIcon style={{ fontSize: "5rem" }} />
              </a>
              <a href="https://www.instagram.com" target="__blank">
                <InstagramIcon style={{ fontSize: "5rem" }} />
              </a>
              <a href="https://www.twitter.com" target="__blank">
                <TwitterIcon style={{ fontSize: "5rem" }} />
              </a>
              <a href="https://www.github.com" target="__blank">
                <GitHubIcon style={{ fontSize: "5rem" }} />
              </a>
            </div>
          </div>
        </div>
        <div
          className="copyright"
          style={{ paddingTop: "2rem", textAlign: "center", color: "#B2BAC2" }}
        >
          <hr />
          Copyright &copy Shreyash Jawalkar 2022
        </div>
      </div>
    </footer>
  );
}

export default Footer;
