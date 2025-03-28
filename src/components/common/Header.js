import { Component } from '../../core/Component';

export class Header extends Component {
  render() {
    return `
      <header class="header">
        <div class="container">
          <h1>My SPA</h1>
          <p>Built with jQuery SPA Framework</p>
        </div>
      </header>
    `;
  }
}