import React from 'react';
import { navigate } from 'gatsby';
import axios from 'axios';

import { Refresh, ExclamationCircle } from '../icons';
import { Notification } from './Notification';
import { Button } from './Button';

export const ContactForm = () => {
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
        navigate('/message-sent');
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
    <>
      {formError && (
        <Notification
          icon={
            <ExclamationCircle className="w-5 sm:w-6 h-5 sm:h-6 text-red-500" />
          }
          title="Your message was not sent. Try contacting directly by email."
          description={formError}
          setShow={setFormError}
        />
      )}
      <form
        className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-8"
        onSubmit={handleSubmit}
      >
        <div className="sm:col-span-1">
          <label htmlFor="firstName" className="block">
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
          <label htmlFor="email" className="block">
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
          <label htmlFor="subject" className="block">
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
            <label htmlFor="message" className="block">
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
          <Button type="submit" disabled={loading}>
            {!loading ? (
              <span>Send</span>
            ) : (
              <span>
                Sending
                <Refresh className="inline-block animate-spin w-4 h-4 ml-2" />
              </span>
            )}
          </Button>
        </div>
      </form>
    </>
  );
};
