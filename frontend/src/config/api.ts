export const API_BASE_URL = 'http://localhost:5000';

export const API_ENDPOINTS = {
  phrases: `${API_BASE_URL}/api/phrases`,
  grammar: `${API_BASE_URL}/api/grammar`
} as const;