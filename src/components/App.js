import React from 'react';
import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithiForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleCloseAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }
  function handleCardClick() {
    setSelectedCard(true);
    alert(selectedCard);
  }

  return (
    <div className="page" onKeyDown={(e) => {
      if (e.key === 'Escape') {
        handleCloseAllPopups();
      }
    }}>
      <Header />
      <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} isAddPlacePopupOpen={handleAddPlaceClick} isEditAvatarPopupOpen={handleEditAvatarClick} />
      <Footer />
      <PopupWithiForm name="profile" title="Редактировать профиль" onClose={handleCloseAllPopups} isOpen={isEditProfilePopupOpen} children={
        <>
          <input className=" popup__input popup__input_type_name" id="name-input" type="text" name="name" placeholder="Имя"
            minLength="2" maxLength="40" required />
          <span className="popup__input-error name-input-error"></span>
          <input className="popup__input popup__input_type_job" id="about-input" type="text" name="about"
            placeholder="О себе" minLength="2" maxLength="200" required />
          <span className="popup__input-error about-input-error"></span>
        </>} />
      <PopupWithiForm name="new-space" title="Новое место" onClose={handleCloseAllPopups} isOpen={isAddPlacePopupOpen} children={
        <>
          <input className="popup__input popup__input_type_name-space" id="cardName-input" type="text" name="name"
            placeholder="Название места" minLength="2" maxLength="30" required />
          <span className="popup__input-error cardName-input-error"></span>
          <input className="popup__input popup__input_type_link-space" id="url-input" type="url" name="link"
            placeholder="Ссылка на картинку" required />
          <span className="popup__input-error url-input-error"></span>
        </>
      } />
      <PopupWithiForm name="edit-avatar" title="Обновить аватар" onClose={handleCloseAllPopups} isOpen={isEditAvatarPopupOpen} children={
        <>
          <input className="popup__input popup__input_type_link-avatar" id="avatar-input" type="url" name="link"
            placeholder="Ссылка на аватар" required />
          <span className="popup__input-error avatar-input-error"></span>
        </>
      } />
      <PopupWithiForm name="delete-card" title="Вы уверены?" onClose={handleCloseAllPopups} children={
        <button className="popup__save-btn" type="submit">Да</button>
      } />
      <ImagePopup isOpen={selectedCard} onClose={handleCloseAllPopups} name={selectedCard.name} link={selectedCard.link} />
    </div>
  );
}

export default App;
