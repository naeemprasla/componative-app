import { Component } from '../../core/Component';
import { ApiService } from '../../core/ApiService';

export class UserList extends Component {
  state = { users: [], loading: false, error: null };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const users = await ApiService.get('/users');
      this.setState({ users, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }

  render() {
    if (this.state.loading) return '<div>Loading...</div>';
    if (this.state.error) return `<div>Error: ${this.state.error}</div>`;

    return `
      <ul class="user-list">
        ${this.state.users.map(user => `
          <li>${user.name} - ${user.email}</li>
        `).join('')}
      </ul>
    `;
  }
}