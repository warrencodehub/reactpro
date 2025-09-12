import React, { useState } from 'react';

export default function Contact({ contact }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Using mailto link as a fallback solution
      const mailtoLink = `mailto:${contact[0].email}?subject=Contact from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="resume-section-content">
      <h2 className="mb-5">Contact Me</h2>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                backgroundColor: 'var(--surface-color)',
                color: 'var(--text-color)',
                border: '2px solid var(--text-secondary-color)',
                borderRadius: '4px',
                padding: '8px'
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                backgroundColor: 'var(--surface-color)',
                color: 'var(--text-color)',
                border: '2px solid var(--text-secondary-color)',
                borderRadius: '4px',
                padding: '8px'
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                backgroundColor: 'var(--surface-color)',
                color: 'var(--text-color)',
                border: '2px solid var(--text-secondary-color)',
                borderRadius: '4px',
                padding: '8px'
              }}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <div className="alert alert-success mt-3">
              Message sent successfully!
            </div>
          )}
          {status === 'error' && (
            <div className="alert alert-danger mt-3">
              Failed to send message. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
