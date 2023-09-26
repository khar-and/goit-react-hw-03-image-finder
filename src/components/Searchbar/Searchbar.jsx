import React, { Component } from 'react';

export class Searchbar extends Component {
  state = { searchName: '' };

  handleSubmitForm = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  handleChangeSearch = evt => {
    this.setState({ searchName: evt.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmitForm}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.searchName}
            onChange={this.handleChangeSearch}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
