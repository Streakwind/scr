'use client';

import { useState } from 'react';
import { useGoogleAnalytics } from "@/lib/google-analytics";
import { PageFooter } from "@/components/page-footer";

export default function Contact() {
  const googleAnalyticsComponent = useGoogleAnalytics();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        form.reset();
        alert("Success! Your message has been sent.");
      } else {
        console.log("Error:", data);
        alert("Something went wrong. If this issue persists, email us at seattlecomputingresourcing@gmail.com");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. If this issue persists, email us at seattlecomputingresourcing@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {googleAnalyticsComponent}
      <div className="min-h-screen">
        {/* Content section */}
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-foreground">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground">
                Get in touch with our team. We would love to hear from you!
              </p>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <form onSubmit={onSubmit} className="contact-form">
                <div className="input-box">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    className="field"
                    placeholder="Enter your name"
                    name="name"
                    required
                  />
                </div>
                
                <div className="input-box">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="field"
                    placeholder="Enter your email"
                    name="email"
                    required
                  />
                </div>
                
                <div className="input-box">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="field message"
                    placeholder="Enter your message"
                    name="message"
                    required
                  />
                </div>
                
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <PageFooter 
          filePath="/contact" 
          showSocialFooter={true}
        />
      </div>

      <style jsx>{`
        .contact-form {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06);
          backdrop-filter: blur(8px);
        }

        /* Dark mode for form container */
        :global(.dark) .contact-form {
          background: rgba(15, 23, 42, 0.95) !important;
          border: 1px solid #334155 !important;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -1px rgb(0 0 0 / 0.2);
        }

        .input-box {
          margin-top: 20px;
        }

        .input-box:first-child {
          margin-top: 0;
        }

        .input-box label {
          display: block;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 8px;
        }

        /* Dark mode for labels */
        :global(.dark) .input-box label {
          color: #f1f5f9 !important;
        }

        .input-box .field {
          color: #1e293b;
          width: 100%;
          height: 50px;
          background: #ffffff;
          border: 2px solid #cbd5e1;
          outline: none;
          border-radius: 8px;
          padding: 15px;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
        }

        /* Dark mode for fields */
        :global(.dark) .input-box .field {
          color: #f1f5f9 !important;
          background: #1e293b !important;
          border: 2px solid #475569 !important;
        }

        .input-box .field::placeholder {
          color: #64748b;
        }

        /* Dark mode for placeholders */
        :global(.dark) .input-box .field::placeholder {
          color: #94a3b8 !important;
        }

        .input-box .field:hover {
          border-color: #3b82f6;
        }

        .input-box .field:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgb(37 99 235 / 0.1), 0 1px 3px 0 rgb(0 0 0 / 0.1);
        }

        /* Dark mode focus states */
        :global(.dark) .input-box .field:hover {
          border-color: #60a5fa !important;
        }

        :global(.dark) .input-box .field:focus {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 3px rgb(59 130 246 / 0.2), 0 1px 3px 0 rgb(0 0 0 / 0.3) !important;
        }

        .input-box .field.message {
          height: 200px;
          resize: vertical;
          font-family: inherit;
          padding-top: 15px;
        }

        .contact-form button {
          width: 100%;
          height: 55px;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          border: 2px solid #3b82f6;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          color: #ffffff;
          font-weight: 600;
          margin-top: 25px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06);
        }

        .contact-form button:hover:not(:disabled) {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          border-color: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05);
        }

        .contact-form button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
          background: #94a3b8;
          color: #64748b;
          border-color: #cbd5e1;
        }

        /* Dark mode for disabled button */
        :global(.dark) .contact-form button:disabled {
          background: #475569 !important;
          color: #94a3b8 !important;
          border-color: #334155 !important;
        }

        .contact-form button:active:not(:disabled) {
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}
