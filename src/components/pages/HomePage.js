import { Component } from '../../core/Component';
import { Header } from '../common/Header';
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';

export class HomePage extends Component {
  render() {
    return `
      ${new Header().render()}
      ${new Navbar().render()}
      <main class="container">
        <h2>Welcome Home</h2>
        <p>This is our amazing homepage content.</p>
      </main>
      ${new Footer().render()}
    `;
  }
}