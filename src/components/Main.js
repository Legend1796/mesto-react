import React from 'react';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ isEditAvatarPopupOpen, onEditProfile, isAddPlacePopupOpen, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

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






  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <button onClick={isEditAvatarPopupOpen} className="profile__edit-avatar" type="button" aria-label="Редактировать Аватар" />
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
          <div className="profile__block">
            <div className="profile__name-edit">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button onClick={onEditProfile} className="profile__edit-btn" type="button" aria-label="Редактировать профиль" />
            </div>
            <p className="profile__job">{currentUser.about}</p>
          </div>

        </div>
        <button onClick={isAddPlacePopupOpen} className="profile__add-btn" type="button" aria-label="Добавить новое место" />
      </section>
      <section>
        <ul className="elements">
          {cards.map((card) => (

            <Card cardInfo={card} onCardLikeClick={handleCardLike} onCardClick={onCardClick} key={card._id} />
          ))}
        </ul>
      </section>
    </main >
  )
}

export default Main;