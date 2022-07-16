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
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isCardPopupOpen, setCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });
  const [currentUser, setUserInfo] = React.useState({ name: '', about: '', avatar: '' });
  const [buttonText, setButtonText] = React.useState('Сохранить');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards()])
      .then(([info, cards]) => {
        setUserInfo(info);
        setCards(cards);
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
  function handleUpdateUser(userData) {
    setButtonText('Сохранение...');
    api.setUserInfo(userData)
      .then((res) => {
        setUserInfo(res);
        handleCloseAllPopups();
      })
      .catch((err) => {
        console.log('EditProfilePopup:', err);
      })
      .finally(() => {
        setTimeout(setButtonText('Сохранить'), 2000);
      })
  }
  function handleUpdateAvatar(newAvatar) {
    setButtonText('Сохранение...');
    api.setAvatar(newAvatar.avatar)
      .then((res) => {
        setUserInfo(res);
        handleCloseAllPopups();
      })
      .catch((err) => {
        console.log('EditProfilePopup:', err);
      })
      .finally(() => {
        setTimeout(setButtonText('Сохранить'), 2000);
      })
  }
  function handleCardLike(cardInfo) {
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
  function handleCardDelete(cardInfo) {
    api.deleteCard(cardInfo._id)
      .then(() => {
        setCards(cards.filter(card => card._id !== cardInfo._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleAddPlaceSubmit(cardInfo) {
    console.log(cardInfo);
    setButtonText('Сохранение...');
    api.setInitialCards(cardInfo)
      .then((res) => {
        // setUserInfo(res);
        handleCloseAllPopups();
      })
      .catch((err) => {
        console.log('EditProfilePopup:', err);
      })
      .finally(() => {
        setTimeout(setButtonText('Сохранить'), 2000);
      })
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page" onKeyDown={(e) => {
        if (e.key === 'Escape') {
          handleCloseAllPopups();
        }
      }}>
        <Header />
        <Main cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} isAddPlacePopupOpen={handleAddPlaceClick} isEditAvatarPopupOpen={handleEditAvatarClick} />
        <Footer />
        <EditProfilePopup buttonText={buttonText} onUpdateUser={handleUpdateUser} onClose={handleCloseAllPopups} isOpen={isEditProfilePopupOpen} />
        <EditAvatarPopup buttonText={buttonText} onUpdateAvatar={handleUpdateAvatar} onClose={handleCloseAllPopups} isOpen={isEditAvatarPopupOpen} />
        <AddPlacePopup buttonText={buttonText} onAddCard={handleAddPlaceSubmit} onClose={handleCloseAllPopups} isOpen={isAddPlacePopupOpen} />

        <PopupWithiForm name="delete-card" title="Вы уверены?" buttonText="Да" onClose={handleCloseAllPopups} />
        <ImagePopup isOpen={isCardPopupOpen} onClose={handleCloseAllPopups} cardInfo={selectedCard} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;