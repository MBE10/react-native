// API Client Configuration

class APIClient {
  constructor() {
    this.baseURL = 'https://jsonplaceholder.typicode.com';
    this.apiKey = this.getOrGenerateApiKey();
    this.timeout = 5000;
  }

  getOrGenerateApiKey() {
    let key = localStorage.getItem('apiKey');
    if (!key) {
      key = this.generateKey();
      localStorage.setItem('apiKey', key);
    }
    return key;
  }

  generateKey() {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substr(2, 9);
    return `SK-${timestamp}-${randomStr}`.toUpperCase();
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Students endpoints
  async getStudents() {
    return this.request('/users');
  }

  async getStudent(id) {
    return this.request(`/users/${id}`);
  }

  async createStudent(data) {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  getApiKey() {
    return this.apiKey;
  }

  rotateApiKey() {
    this.apiKey = this.generateKey();
    localStorage.setItem('apiKey', this.apiKey);
    return this.apiKey;
  }
}

export default new APIClient();
