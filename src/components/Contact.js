import React from 'react';
import axios from 'axios';

import { Refresh, ExclamationCircle } from '../icons';
import { Notification } from './Notification';

const ContactForm = () => {
  const initialFormData = {
    firstName: '',
    email: '',
    subject: '',
    message: '',
    agreeSend: '',
  };

  const [loading, setLoading] = React.useState(false);
  const [formError, setFormError] = React.useState(null);
  const [formData, setFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.agreeSend.length > 1) {
      setFormError('Contact form was filled out incorrectly');
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(
        `https://${window.location.hostname}/.netlify/functions/send-email`,
        formData
      );

      if (data.success) {
        setLoading(false);
        setFormData(initialFormData);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setLoading(false);
      setFormError(error.message);
      setFormData(initialFormData);
    }
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setFormError(null);
    }, 7000);

    return () => clearTimeout(timeout);
  }, [formError]);

  return (
    <div className="flex flex-col lg:flex-row max-w-8xl mx-auto mb-12 xl:mb-24">
      {formError && (
        <Notification
          icon={<ExclamationCircle className="h-6 w-6" />}
          title="Your message was not sent. Try contacting directly by email."
          description={formError}
          setShow={setFormError}
        />
      )}
      <div className="w-full px-4 sm:px-6 mx-auto lg:max-w-none">
        <form
          className="mt-14 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-8"
          onSubmit={handleSubmit}
        >
          <div className="sm:col-span-1">
            <label htmlFor="firstName" className="block text-sm">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                className="block w-full sm:text-sm bg-gray text-black py-2 px-3"
                onChange={handleChange}
                value={formData.firstName}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full sm:text-sm bg-gray text-black py-2 px-3"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="subject" className="block text-sm">
              Subject
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="subject"
                id="subject"
                autoComplete="subject"
                className="block w-full sm:text-sm bg-gray text-black py-2 px-3"
                onChange={handleChange}
                value={formData.subject}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <div className="flex justify-between">
              <label htmlFor="message" className="block text-sm">
                Message
              </label>
            </div>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={8}
                className="font-sans block w-full sm:text-sm bg-gray text-black py-2 px-3"
                onChange={handleChange}
                value={formData.message}
                required
              ></textarea>
            </div>
          </div>
          <input
            type="text"
            name="agreeSend"
            className="hidden"
            tabIndex={-1}
            autoComplete="nope"
            onChange={handleChange}
            value={formData.agreeSend}
          />
          <div className="text-right sm:col-span-3">
            <button
              type="submit"
              className={`inline-flex justify-center uppercase text-xl border-2 px-10 py-3 transition-opacity ${
                loading
                  ? 'cursor-not-allowed opacity-70'
                  : 'cursor-pointer hover:opacity-90'
              }`}
              style={{
                borderImage:
                  'linear-gradient(to left top, #464646, rgba(255,255,255, 0))',
                borderImageSlice: 1,
              }}
              disabled={loading}
            >
              {!loading ? (
                <span>Send</span>
              ) : (
                <span>
                  Sending
                  <Refresh className="inline-block animate-spin h-4 w-4 ml-2" />
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const Contact = () => {
  return (
    <section className="mx-auto px-4 py-32 max-w-8xl">
      <h2 className="text-7xl mb-16">Get in touch</h2>
      <div className="flex justify-between items-center">
        <div className="w-5/12">
          <a
            href="mailto:whitesandcomposer@gmail.com"
            className="uppercase inline-block border-b-2 pb-2 text-xl"
          >
            whitesandcomposer@gmail.com
          </a>
        </div>
        <span className="text-lg">or</span>
        <div className="w-5/12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
