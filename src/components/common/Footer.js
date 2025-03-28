import { Component } from '../../core/Component';

export class Footer extends Component {
  render() {
    return `
      <footer class="footer">
        <div class="container">
          <p>&copy; ${new Date().getFullYear()} My SPA</p>
        </div>
      </footer>
    `;
  }
}