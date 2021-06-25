import React from 'react';

import { Refresh, ExclamationCircle } from '../icons';

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

    const form = new FormData();
    for (const field in formData) {
      if (field === 'agreeSend') {
        continue;
      }
      form.append(field, formData[field]);
    }

    try {
      setLoading(true);
      const { data } = await axios.post(
        // `${process.env.NEXT_PUBLIC_WP_API_URL}/contact-form-7/v1/contact-forms/27/feedback`,
        form
      );

      if (data.status === 'mail_sent') {
        setLoading(false);
        // router.push('/zinute-issiusta');
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
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto mb-12 xl:mb-24">
      {formError && (
        <Notification
          icon={<ExclamationCircle className="h-6 w-6" />}
          title="Nepavyko išsiųsti žinutės"
          description={formError}
          setShow={setFormError}
        />
      )}
      <div className="w-full px-4 sm:px-6 mx-auto lg:max-w-none">
        <form
          className="mt-14 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                className="block w-full shadow-sm sm:text-sm focus:ring-pink focus:border-pink border-gray-300 rounded-md"
                onChange={handleChange}
                value={formData.firstName}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full shadow-sm sm:text-sm focus:ring-pink focus:border-pink border-gray-300 rounded-md"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="subject"
                id="subject"
                autoComplete="subject"
                className="block w-full shadow-sm sm:text-sm focus:ring-pink focus:border-pink border-gray-300 rounded-md"
                onChange={handleChange}
                value={formData.subject}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
            </div>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full shadow-sm sm:text-sm focus:ring-pink focus:border-pink border-gray-300 rounded-md"
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
          <div className="text-right sm:col-span-2">
            <button
              type="submit"
              className={`inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium shadow-md rounded-md text-white bg-pink-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-dark transition-opacity ${
                loading
                  ? 'cursor-not-allowed opacity-70'
                  : 'cursor-pointer hover:opacity-90'
              }`}
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
      <h2 className="text-7xl">Get in touch</h2>
      <div className="flex justify-between">
        <div className="w-5/12">
          <a href="mailto:whitesandcomposer@gmail.com">
            whitesandcomposer@gmail.com
          </a>
        </div>
        <span>or</span>
        <div className="w-5/12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
