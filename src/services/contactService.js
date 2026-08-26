/**
 * Contact & Business Lead Service - API Abstraction Layer for Arch IT Solution
 * Connects directly to PHP Laravel REST API with fallback simulation.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.warn('Backend API unreachable, using simulated response:', error);
  }

  // Simulated fallback if local backend server is not running
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!formData.name || !formData.email || !formData.projectDetails) {
        reject({
          success: false,
          message: 'Please fill in all mandatory fields (Name, Email, Project Details).'
        });
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        reject({
          success: false,
          message: 'Please provide a valid email address.'
        });
        return;
      }

      resolve({
        success: true,
        message: 'Thank you! Your project request has been submitted. Our engineering team will get back to you within 24 hours.',
        timestamp: new Date().toISOString(),
        referenceId: `ARCH-${Math.floor(100000 + Math.random() * 900000)}`
      });
    }, 1000);
  });
};

export const submitBusinessLeadForm = async (leadData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/business-leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: leadData.name,
        company: leadData.company,
        email: leadData.email,
        phone: leadData.phone || null,
        service: leadData.service,
        company_size: leadData.companySize,
        budget: leadData.budget,
        timeline: leadData.timeline,
        features: leadData.selectedFeatures || [],
        project_details: leadData.projectDetails || null
      })
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        message: data.message || 'Inquiry stored successfully.',
        referenceId: data.reference_id || data.referenceId || `ARCH-BIZ-${Math.floor(100000 + Math.random() * 900000)}`
      };
    } else {
      const errorData = await response.json().catch(() => ({}));
      if (errorData.message) {
        throw new Error(errorData.message);
      }
    }
  } catch (error) {
    // If backend is active and responded with validation error, propagate it
    if (error.message && !error.message.includes('fetch') && !error.message.includes('Failed to fetch')) {
      throw error;
    }
    console.warn('Laravel backend not reachable at ' + API_BASE_URL + ', using simulated response:', error);
  }

  // Simulated fallback for local testing without server running
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

      const leadId = `ARCH-BIZ-${Math.floor(100000 + Math.random() * 900000)}`;
      resolve({
        success: true,
        message: 'Thank you! Your business inquiry has been prioritized. A dedicated Solution Architect will review your requirements and reach out within 24 hours.',
        timestamp: new Date().toISOString(),
        referenceId: leadId
      });
    }, 1000);
  });
};
