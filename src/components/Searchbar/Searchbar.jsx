// import React, { Component } from 'react';
// import { toast } from 'react-toastify';

// export class Searchbar extends Component {
//   state = { searchName: '' };

//   handleSubmitForm = evt => {
//     evt.preventDefault();

//     // Проверка на заполнение поля поиска
//     if (this.state.searchName.trim() === '') {
//       return toast.warn('Please input the search name!');
//       //   alert('Please input the search name');
//     }
//     // передача значения поиска в АРР-компонент
//     this.props.onSubmit(this.state.searchName);
//     // очистка поля поиска
//     this.setState({ searchName: '' });
//   };

//   handleChangeSearch = evt => {
//     this.setState({ searchName: evt.currentTarget.value.toLowerCase() });
//   };

//   render() {
//     return (
//       <header className="searchbar">
//         <form className="form" onSubmit={this.handleSubmitForm}>
//           <button type="submit" className="button">
//             <span className="button-label">Search</span>
//           </button>

//           <input
//             className="input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.inputValue}
//             onChange={this.handleChangeSearch}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default Searchbar;

import { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchName: '', // Хранит значение введенного поискового запроса
    inputValue: '',
  };

  handleChangeSearch = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmitForm = event => {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
    const searchQuery = event.target.elements.searchName.value.trim(); // Получаем введенный поисковый запрос и удаляем пробелы
    this.props.onSubmit(searchQuery); // Передаем введенный поисковый запрос родительскому компоненту
    event.target.reset(); // Сбрасываем значение в поле ввода после отправки формы
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmitForm}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            name="searchName"
            type="text"
            id="search"
            value={this.state.inputValue}
            onChange={this.handleChangeSearch}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
