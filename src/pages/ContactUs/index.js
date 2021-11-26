import React from "react";
import "../../App.css";
import "./contact-us.css";
import image from "../../images/iletisim.jpeg";
function Contact() {
  return (
    <>
      <div style={{ backgroundImage: `url(${image})` }}>
        <div className="contactdiv">
          <div className="contactinfodiv">
            <h2>Contact Us</h2>
            <p>
              {" "}
              Kraft.co Clothes and Formal Wear company was developed in 2021 by
              Front End Developer M. Batuhan Yılmaz and Ogün Demirkıran with
              their contributions Kodluyoruz and Patika.dev , using React Js. ☺{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>

          <div className="contactmapdiv">
            <iframe
              className="harita"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192384.60881671368!2d28.93111464259887!3d41.11248331312816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caca68143c999f%3A0x63005b61fde9dfb5!2zxLBzdGFuYnVsIEJvxJ9hesSx!5e0!3m2!1str!2str!4v1637677339199!5m2!1str!2str"
              width="50%"
              height="300"
              title="samsunmap"
              loading="lazy"
            ></iframe>

            <form>
              <label>
                <input
                  className="formTasarim"
                  type="text"
                  name="name"
                  placeholder="Please Enter Your Name"
                />
              </label>
              <label>
                <input
                  className="formTasarim"
                  type="text"
                  name="name"
                  placeholder="Please Enter Your EMail"
                />
              </label>
              <textarea
                className="yazimAlani"
                placeholder="Contact Us ♥ "
              ></textarea>

              <input className="button" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
