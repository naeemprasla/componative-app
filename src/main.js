import { initApp } from './App';
import { ApiService } from './core/ApiService';
import './styles/main.css'; // This will now work with the PostCSS plugin


// Configure API settings
ApiService.setBaseUrl('https://api.example.com/v1');
ApiService.setHeader('Authorization', 'Bearer YOUR_TOKEN');

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});