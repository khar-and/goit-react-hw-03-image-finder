import React, { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {};

  render() {
    const { picture } = this.props; // получили пропс от Арр
    return (
      <li className="gallery-item">
        <img src={picture.webformatURL} alt={picture.tags} />
      </li>
    );
  }
}

export default ImageGalleryItem;
