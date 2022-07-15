import React from 'react';
import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithiForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isCardPopupOpen, setCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });
  const [currentUser, setUserInfo] = React.useState({ name: '', about: '', avatar: '' });

  // const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getUserInfo()
      .then((info) => {
        setUserInfo(info);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

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
    setCardPopupOpen(false);
  }
  function handleCardClick(card) {
    setSelectedCard({ name: card.name, link: card.link });
    setCardPopupOpen(true);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page" onKeyDown={(e) => {
        if (e.key === 'Escape') {
          handleCloseAllPopups();
        }
      }}>
        <Header />
        <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} isAddPlacePopupOpen={handleAddPlaceClick} isEditAvatarPopupOpen={handleEditAvatarClick} />
        <Footer />
        <EditProfilePopup onClose={handleCloseAllPopups} isOpen={isEditProfilePopupOpen} />
        <PopupWithiForm name="new-space" title="Новое место" buttonText="Сохранить" onClose={handleCloseAllPopups} isOpen={isAddPlacePopupOpen} children={
          <>
            <input className="popup__input popup__input_type_name-space" id="cardName-input" type="text" name="name"
              placeholder="Название места" minLength="2" maxLength="30" required />
            <span className="popup__input-error cardName-input-error"></span>
            <input className="popup__input popup__input_type_link-space" id="url-input" type="url" name="link"
              placeholder="Ссылка на картинку" required />
            <span className="popup__input-error url-input-error"></span>
          </>
        } />
        <PopupWithiForm name="edit-avatar" title="Обновить аватар" buttonText="Сохранить" onClose={handleCloseAllPopups} isOpen={isEditAvatarPopupOpen} children={
          <>
            <input className="popup__input popup__input_type_link-avatar" id="avatar-input" type="url" name="link"
              placeholder="Ссылка на аватар" required />
            <span className="popup__input-error avatar-input-error"></span>
          </>
        } />
        <PopupWithiForm name="delete-card" title="Вы уверены?" buttonText="Да" onClose={handleCloseAllPopups} />
        <ImagePopup isOpen={isCardPopupOpen} onClose={handleCloseAllPopups} cardInfo={selectedCard} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;