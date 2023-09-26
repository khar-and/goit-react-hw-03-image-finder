import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = { searchName: '' };

  // Метод для получения в стейт значения инпута поиска
  handleSubmitSearchForm = searchName => {
    this.setState({ searchName });
    console.log(searchName);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmitSearchForm} />
        <ImageGallery />
      </div>
    );
  }
}

export default App;
