import React, { Component } from 'react';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = { searchName: '' };

  handleSubmitForm = evt => {
    evt.preventDefault();

    // Проверка на заполнение поля поиска
    if (this.state.searchName.trim() === '') {
      return toast.warn('Please input the search name!');
      //   alert('Please input the search name');
    }
    // передача значения поиска в АРР-компонент
    this.props.onSubmit(this.state.searchName);
    // очистка поля поиска
    this.setState({ searchName: '' });
  };

  handleChangeSearch = evt => {
    this.setState({ searchName: evt.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmitForm}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
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
