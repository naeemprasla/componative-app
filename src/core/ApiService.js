export class ApiService {
    static baseUrl = '/api';
    static headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  
    static async get(endpoint, params = {}) {
      const query = new URLSearchParams(params).toString();
      const url = `${this.baseUrl}${endpoint}${query ? `?${query}` : ''}`;
      return this._request(url, { method: 'GET' });
    }
  
    static async post(endpoint, data = {}) {
      return this._request(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(data)
      });
    }
  
    static async _request(url, options = {}) {
      const config = {
        ...options,
        headers: { ...this.headers, ...options.headers }
      };
  
      const response = await fetch(url, config);
      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || 'Request failed');
      }
      return response.json();
    }
  
    // Configuration methods
    static setBaseUrl(url) { this.baseUrl = url; }
    static setHeader(key, value) { this.headers[key] = value; }
  }