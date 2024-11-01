import { useEffect, useState } from "react";
import kwesforms from "kwesforms";

const ContactForm = () => {
  const [placeholder, setPlaceholder] = useState("Your message here...");

  useEffect(() => {
    if (kwesforms && typeof kwesforms.init === 'function') {
      console.log("Initializing KwesForms...");
      kwesforms.init();
    } else {
      console.error("KwesForms not available");
    }
  }, []);

  const handleFocus = () => {
    setPlaceholder(""); 
  };

  const handleBlur = (event) => {
    if (!event.target.value) {
      setPlaceholder("Your message here..."); 
    }
  };

  return (
    <form
      method="POST"
      action="https://kwesforms.com/api/f/J4cZUcPjZqE1xfJ662no"
      className="w-full max-w-3xl mx-auto px-4 sm:px-6"
      data-kw-validate-on-change="false"
      data-kw-validate-on-blur="false"
      data-kw-show-errors-on="submit"
    >
      <div className="mb-4 form-input">
        <label htmlFor="comment" className="block text-gray-800 dark:text-white text-xl font-semibold text-center mb-6">
          Drop me a line. Any questions or feedback are welcome!
        </label>
       <textarea
          rows="5"
          name="comment"
          id="comment"
          className="w-full border-2 border-gray-400 dark:border-gray-700 bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-md px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base transition-colors focus:outline-none focus:border-blue-400 focus:bg-white dark:focus:bg-gray-800 dark:focus:border-blue-400"
          placeholder={placeholder}
          data-kw-rules="required"
          data-kw-max-length="255"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div className="flex justify-end">
       <button
        type="submit"
        className="btn btn-primary rounded-xl shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3"
      >
        Send
      </button>
      </div>
    </form>
  );
};

export default ContactForm;