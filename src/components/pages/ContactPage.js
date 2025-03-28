import { Component } from '../../core/Component';
import { Header } from '../common/Header';
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';

export class ContactPage extends Component {
  constructor() {
    super();
    this.state = { name: '', email: '', message: '' };
  }

  render() {
    return `
      ${new Header().render()}
      ${new Navbar().render()}
      <main class="container">
        <h2>Contact Us</h2>
        <form class="contact-form">
          <div class="form-group">
            <label>Name</label>
            <input type="text" value="${this.state.name}" data-bind="name">
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" value="${this.state.email}" data-bind="email">
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea data-bind="message">${this.state.message}</textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
      ${new Footer().render()}
    `;
  }

  afterRender() {
    this.$element.find('[data-bind]').on('input', (e) => {
      this.setState({ [$(e.target).data('bind')]: e.target.value });
    });

    this.$element.find('form').submit((e) => {
      e.preventDefault();
      alert(`Thanks for your message, ${this.state.name}!`);
      this.setState({ name: '', email: '', message: '' });
    });
  }
}