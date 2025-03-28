export class Component {
    constructor(props = {}) {
      this.props = props;
      this.state = {};
      this.$element = null;
      this.plugins = [];
      this.jQueryPlugins = [];
    }
  
    usePlugin(pluginFn, options = {}) {
      this.plugins.push({ pluginFn, options });
      return this;
    }
  
    useJQueryPlugin(name, options = {}) {
      this.jQueryPlugins.push({ name, options });
      return this;
    }
  
    setState(newState, callback) {
      this.state = { ...this.state, ...newState };
      this._render();
      if (callback) callback();
    }
  
    render() {
      throw new Error('Component must implement render()');
    }
  
    afterRender() {
      this.plugins.forEach(({ pluginFn, options }) => {
        this.$element && pluginFn.call(this.$element, options);
      });
      this.jQueryPlugins.forEach(({ name, options }) => {
        this.$element && this.$element.find(`[data-${name}]`)[name](options);
      });
    }
  
    _render() {
      const html = this.render();
      this.$element && this.$element.html(html);
      this.afterRender();
    }
  
    mount(selector) {
      this.$element = $(selector);
      this._render();
      return this;
    }
  }