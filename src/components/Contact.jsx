import React from "react";
import Title from "./Title";
import "../css/contact.css";

export default function Contact() {
  return (
    <section className="contact-section mt-4 mb-16">
      <div className="title-wrapper font-bold">
        <Title title="contact" subtitle="us" />
      </div>
      <div className="contact-form w-4/5 md:w-1/2 max-w-2xl mx-auto py-6">
        <form action="https://formspree.io/f/mrgvvkze" method="POST">
          <div class="mb-6">
            <label
              for="email"
              className="block mb-2 font-sm font-medium text-dark-blue dark:text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 font-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Ian Rioba"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 font-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              placeholder="riobafelix@gmail.com"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 font-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="message"
              className="block mb-2 font-sm font-medium text-dark-blue dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full font-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="terms"
              className="ml-2 font-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
            </label>
          </div>
          <button
            type="button"
            style={{ color: "#fff" }}
            className="bg-dark-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg font-sm px-10 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
