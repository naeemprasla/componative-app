export class CSSLoader {
    static loaded = new Set();
  
    static loadStyles(cssContent) {
      const style = document.createElement('style');
      style.textContent = cssContent;
      document.head.appendChild(style);
    }
  
    static async load(url) {
      if (this.loaded.has(url)) return;
      
      try {
        const response = await fetch(url);
        const css = await response.text();
        this.loadStyles(css);
        this.loaded.add(url);
      } catch (err) {
        console.error('Failed to load CSS:', url, err);
      }
    }
  }