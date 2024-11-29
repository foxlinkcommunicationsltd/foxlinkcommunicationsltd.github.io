import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_5sp8xjo', // Replace with your EmailJS service ID
        'template_6nbg9a8', // Replace with your EmailJS template ID
        formRef.current,
        'uVYzsfix6B4X1jEV5' // Replace with your EmailJS public key
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get in touch with us for a free consultation and quote for your security needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <a href="tel:+16479654321">
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (647) 965-4321</p>
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <a href="mailto:info@foxlink.ca">
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-400">info@foxlink.ca</p>
                  </a>
                </div>
              </div>

              {/*
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                  <p className="text-gray-400">123 Security Street<br />Tech City, TC 12345</p>
                </div>
              </div>
              */}
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-brand-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-brand-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-brand-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-5 w-5" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}