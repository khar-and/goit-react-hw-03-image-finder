import React, { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    return (
      <ul class="gallery">
        <li>{this.props.searchName}</li>
      </ul>
    );
  }
}

export default ImageGallery;
