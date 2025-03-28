export class PluginSystem {
    static plugins = {};
    static jqPlugins = {};
  
    static register(name, pluginFn) {
      this.plugins[name] = pluginFn;
      return this;
    }
  
    static registerJQuery(name, pluginFn) {
      this.jqPlugins[name] = pluginFn;
      $ && !$.fn[name] && ($.fn[name] = pluginFn);
      return this;
    }
  
    static applyTo(component, plugins = []) {
      plugins.forEach(name => {
        this.plugins[name] 
          ? component.usePlugin(this.plugins[name])
          : this.jqPlugins[name] && component.useJQueryPlugin(name);
      });
      return this;
    }
  }