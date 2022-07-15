import React from 'react';
// import avatar from '../images/avatar.jpg';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ isEditAvatarPopupOpen, onEditProfile, isAddPlacePopupOpen, onCardClick, cards }) {
  const currentUser = React.useContext(CurrentUserContext);

  // const [userAvatar, setUserAvatar] = React.useState(avatar);

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <button onClick={isEditAvatarPopupOpen} className="profile__edit-avatar" type="button" aria-label="Редактировать Аватар" />
          {/* <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" /> */}
          <div className="profile__block">
            <div className="profile__name-edit">
              {/* <h1 className="profile__name">{currentUser.name}</h1> */}
              <button onClick={onEditProfile} className="profile__edit-btn" type="button" aria-label="Редактировать профиль" />
            </div>
            {/* <p className="profile__job">{currentUser.about}</p> */}
          </div>

        </div>
        <button onClick={isAddPlacePopupOpen} className="profile__add-btn" type="button" aria-label="Добавить новое место" />
      </section>
      <section>
        <ul className="elements">
          {cards.map((card) => (
            <Card cardInfo={card} onCardClick={onCardClick} key={card._id} currentUser={currentUser} />
          ))}
        </ul>
      </section>
    </main >
  )
}

export default Main;