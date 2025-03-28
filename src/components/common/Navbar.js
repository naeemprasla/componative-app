import { Component } from '../../core/Component';

export class Navbar extends Component {
  render() {
    return `
      <nav class="navbar">
        <ul>
          <li><a href="/" data-route>Home</a></li>
          <li><a href="/about" data-route>About</a></li>
          <li><a href="/contact" data-route>Contact</a></li>
        </ul>
      </nav>
    `;
  }

  afterRender() {
    const path = window.location.pathname;
    this.$element.find('a').each((i, el) => {
      const $el = $(el);
      $el.toggleClass('active', $el.attr('href') === path);
    });
  }
}