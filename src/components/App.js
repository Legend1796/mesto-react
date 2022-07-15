import React from 'react';
import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithiForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isCardPopupOpen, setCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });
  const [currentUser, setUserInfo] = React.useState({ name: '', about: '', avatar: '' });
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards()])
      .then(([info, initialCards]) => {
        setUserInfo(info);
        setCards(initialCards);
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
  function handleCardLikeClick(cardInfo) {
    const isLiked = cardInfo.likes.some(i => i._id === currentUser._id);
    if (!isLiked) {
      api.changeLikeCardStatus(cardInfo._id, 'PUT')
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === cardInfo._id ? newCard : c));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api.changeLikeCardStatus(cardInfo._id, 'DELETE')
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === cardInfo._id ? newCard : c));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page" onKeyDown={(e) => {
        if (e.key === 'Escape') {
          handleCloseAllPopups();
        }
      }}>
        <Header />
        <Main cards={cards} onCardLikeClick={handleCardLikeClick} onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} isAddPlacePopupOpen={handleAddPlaceClick} isEditAvatarPopupOpen={handleEditAvatarClick} />
        <Footer />
        <PopupWithiForm name="profile" title="Редактировать профиль" buttonText="Сохранить" onClose={handleCloseAllPopups} isOpen={isEditProfilePopupOpen} children={
          <>
            <input className=" popup__input popup__input_type_name" id="name-input" type="text" name="name" placeholder="Имя"
              minLength="2" maxLength="40" required />
            <span className="popup__input-error name-input-error"></span>
            <input className="popup__input popup__input_type_job" id="about-input" type="text" name="about"
              placeholder="О себе" minLength="2" maxLength="200" required />
            <span className="popup__input-error about-input-error"></span>
          </>} />
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