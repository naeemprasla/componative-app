import { Component } from '../../core/Component';
import { Header } from '../common/Header';
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';
import { UserList } from '../common/UserList';

export class AboutPage extends Component {
  render() {
    return `
      ${new Header().render()}
      ${new Navbar().render()}
      <main class="container">
        <h2>About Us</h2>
        <p>Learn about our company history and team.</p>
        ${new UserList().render()}
      </main>
      ${new Footer().render()}
    `;
  }
}