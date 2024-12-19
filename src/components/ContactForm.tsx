import React, { useState } from "react";
import ButtonMailto from "./MailToButton";

interface ContactFormProps {
  contactEmail: string;
}

const ContactForm = ({ contactEmail }: ContactFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (firstName && email && message) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="" onSubmit={handleSubmit}>
      {/* First Row */}
      <div className="flex flex-col sm:grid sm:grid-cols-3 sm:gap-4 pb-10">
        <div className="flex flex-col pb-8 sm:pb-0">
          <label
            htmlFor="firstName"
            className="text-sm font-medium mb-1 text-white"
          >
            First Name (Required)
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border px-3 py-2 border-white bg-black text-white"
            required
          />
        </div>
        <div className="flex flex-col pb-8 sm:pb-0">
          <label
            htmlFor="lastName"
            className="text-sm font-medium mb-1 text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border px-3 py-2 border-white bg-black text-white"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm font-medium mb-1 text-white"
          >
            Email (Required)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-3 py-2 border-white bg-black text-white"
            required
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="pb-8">
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-sm font-medium mb-1 text-white"
          >
            Message (Required)
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border w-full px-3 py-2 border-white bg-black text-white"
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex flex-row items-center pt-8">
        <div onClick={handleSubmit}>
          <ButtonMailto
            label="Submit"
            mailTo={`mailto:${contactEmail}?subject=Inquiry From ${firstName} ${lastName}&body=User Email: ${email}}%0DMessage: ${message}`}
            enable={Boolean(firstName && email && message)}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
