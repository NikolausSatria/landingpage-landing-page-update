import React, { useState, useRef } from "react";
import { Input } from "./ui/input";
import { Textarea } from "@material-tailwind/react";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";

function Contact() {
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending...");

    try {
      // Send email using EmailJS
      const emailResult = await emailjs.sendForm(
        "service_k3hkgjd",
        "template_kamc7im",
        e.target,
        {
          publicKey: "p7Dj-UicnVcuZxySG",
        }
      );

      console.log(emailResult.text);
      setStatus("Email successfully sent!");

      // Extracting form data
      const formData = new FormData(e.target);
      const name = formData.get("user_name");
      const email = formData.get("user_email");
      const message = formData.get("message");

      // Call Google Sheets API
      const sheetsResponse = await fetch("/api/sheet", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (sheetsResponse.ok) {
        console.log("Data appended to Google Sheets successfully!");
      } else {
        console.error("Failed to append data to Google Sheets.");
      }

      e.target.reset();
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    // <div>
    //   <form className="space-y-4" onSubmit={sendEmail}>
    //     <Input name="user_name" type="text" placeholder="Name" className="w-full" />
    //     <Input name="user_email" type="email" placeholder="Email" className="w-full" />
    //     <Textarea name="message" placeholder="Message" className="w-full" rows={5} />
    //     <Button value="Send" type="submit" className="w-full">
    //       Submit
    //     </Button>
    //   </form>
    // </div>

    <section id="contact" className="bg-[#3E5B72] py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[color:#fafafa]">
            {" "}
            Ready to elevate your digital presence?
          </h2>
          <p className="text-lg md:text-xl text-muted">
            Get in touch with us today to discuss how we can help you achieve
            your business goals.
          </p>
        </div>
        <div className="max-w-md mx-auto mt-8">
          <form className="space-y-4" onSubmit={sendEmail}>
            <Input
              name="user_name"
              type="text"
              placeholder="Name"
              className="w-full"
            />
            <Input
              name="user_email"
              type="email"
              placeholder="Email"
              className="w-full"
            />
            <Textarea
              name="message"
              placeholder="Message"
              className="w-full"
              rows={5}
            />
            <Button value="Send" type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
