/**
 * Contact Service - API Abstraction Layer for Arch IT Solution
 * Simulates backend validation and processing with asynchronous promises.
 */

export const submitContactForm = async (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Basic runtime payload validation
      if (!formData.name || !formData.email || !formData.projectDetails) {
        reject({
          success: false,
          message: 'Please fill in all mandatory fields (Name, Email, Project Details).'
        });
        return;
      }

      // Email pattern check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        reject({
          success: false,
          message: 'Please provide a valid email address.'
        });
        return;
      }

      // Successful simulated submission
      resolve({
        success: true,
        message: 'Thank you! Your project request has been submitted. Our engineering team will get back to you within 24 hours.',
        timestamp: new Date().toISOString(),
        referenceId: `ARCH-${Math.floor(100000 + Math.random() * 900000)}`
      });
    }, 1200); // 1.2 second simulated server delay
  });
};

export const submitBusinessLeadForm = async (leadData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!leadData.name || !leadData.email || !leadData.company) {
        reject({
          success: false,
          message: 'Please provide your Name, Company Name, and Work Email.'
        });
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(leadData.email)) {
        reject({
          success: false,
          message: 'Please provide a valid business email address.'
        });
        return;
      }

      // Successful simulated submission
      const leadId = `ARCH-BIZ-${Math.floor(100000 + Math.random() * 900000)}`;
      resolve({
        success: true,
        message: 'Thank you! Your business inquiry has been prioritized. A dedicated Solution Architect will review your requirements and reach out within 24 hours.',
        timestamp: new Date().toISOString(),
        referenceId: leadId
      });
    }, 1100);
  });
};
