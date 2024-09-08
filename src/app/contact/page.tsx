"use client";

import { FormEvent, useState } from "react";
import HeroTitle from "@/components/heroTitle";
import AlertSuccessBanner from "@/components/ui/alertSuccessBanner";

// Validation functions
const validateName = (name: string) => {
  const nameRegex = /^[a-zA-Z\s\-]{2,50}$/;
  return nameRegex.test(name);
};

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateMessage = (message: string) => {
  return message.length >= 10 && message.length <= 1000;
};

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleDismiss = () => {
    setIsSuccess(false);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };

    // Validate fields
    if (!validateName(firstName)) {
      newErrors.firstName =
        "First name must be 2-50 characters long and contain only letters, spaces, or hyphens.";
    }

    if (!validateName(lastName)) {
      newErrors.lastName =
        "Last name must be 2-50 characters long and contain only letters, spaces, or hyphens.";
    }

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!validateMessage(message)) {
      newErrors.message =
        "Message should be between 10 and 1000 characters long.";
    }

    if (
      newErrors.firstName ||
      newErrors.lastName ||
      newErrors.email ||
      newErrors.message
    ) {
      setErrors(newErrors);
      return;
    }

    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });

    try {
      const res = await fetch("/api/contact", {
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (res.ok) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");

        setIsSuccess(true);
      }
    } catch (err: any) {
      console.log("Err", err);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-white w-full">
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f6"
            d="M0,64L20,64C40,64,80,64,120,106.7C160,149,200,235,240,266.7C280,299,320,277,360,250.7C400,224,440,192,480,170.7C520,149,560,139,600,138.7C640,139,680,149,720,170.7C760,192,800,224,840,202.7C880,181,920,107,960,112C1000,117,1040,203,1080,202.7C1120,203,1160,117,1200,112C1240,107,1280,181,1320,192C1360,203,1400,149,1420,122.7L1440,96L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
            transform="translate(0 -35)"></path>
        </svg>
        <div className="absolute top-0 left-1/2 tranform -translate-x-1/2">
          <HeroTitle title="Contact" />
        </div>
      </div>

      <div className="isolate px-6 pb-10 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Have a question, want to work together or just want to say hi? Feel
            free to reach out to me using the form below.
          </p>
        </div>
        {isSuccess && (
          <div className="mt-8 mx-auto max-w-xl">
            <AlertSuccessBanner
              message="Your message has been sent!"
              onDismiss={handleDismiss}
            />
          </div>
        )}
        <form
          onSubmit={onSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
          noValidate>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900 ">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  autoComplete="given-name"
                  required={true}
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                    errors.firstName
                      ? "ring-red-500 focus:ring-red-500"
                      : "ring-gray-300 focus:ring-sky-500"
                  } sm:text-sm sm:leading-6`}
                />
                {errors.firstName && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.firstName}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  autoComplete="family-name"
                  required={true}
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                    errors.lastName
                      ? "ring-red-500 focus:ring-red-500"
                      : "ring-gray-300 focus:ring-sky-500"
                  } sm:text-sm sm:leading-6`}
                />
                {errors.lastName && (
                  <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required={true}
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                    errors.email
                      ? "ring-red-500 focus:ring-red-500"
                      : "ring-gray-300 focus:ring-sky-500"
                  } sm:text-sm sm:leading-6`}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required={true}
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                    errors.message
                      ? "ring-red-500 focus:ring-red-500"
                      : "ring-gray-300 focus:ring-sky-500"
                  } sm:text-sm sm:leading-6`}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-sky-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400">
              Let&apos;s talk
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
