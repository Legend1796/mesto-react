import React from 'react';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ isEditAvatarPopupOpen, onEditProfile, isAddPlacePopupOpen, onCardClick, cards }) {
  const currentUser = React.useContext(CurrentUserContext);
  console.log(currentUser);
  function handleCardLike(cardInfo) {
    const isLiked = cardInfo.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    if (!isLiked) {
      api.changeLikeCardStatus(cardInfo._id, 'PUT').then((newCard) => {
        console.log(newCard);
        // setCards((state) => state.map((c) => c._id === cardInfo._id ? newCard : c));
      });
    } else {
      api.changeLikeCardStatus(cardInfo._id, 'DELETE').then((newCard) => {
        console.log(newCard);
        // setCards((state) => state.map((c) => c._id === cardInfo._id ? newCard : c));
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

            <Card cardInfo={card} onLikeCardClick={handleCardLike} onCardClick={onCardClick} key={card._id} currentUser={currentUser} />
          ))}
        </ul>
      </section>
    </main >
  )
}

export default Main;