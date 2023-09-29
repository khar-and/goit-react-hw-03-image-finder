import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = { showModal: false };

  //Открытие/закрытие модалки
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { picture } = this.props; // получили пропс от Арр

    return (
      <>
        <li className="gallery-item">
          <img
            onClick={this.toggleModal}
            src={picture.webformatURL}
            alt={picture.tags}
          />
        </li>
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeUrlImage={picture.largeImageURL}
            tag={picture.tags}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
