import React from 'react';
import avatar from '../images/avatar.jpg';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState(null);
  const [userDescription, setUserDescription] = React.useState(null);
  const [userAvatar, setUserAvatar] = React.useState(avatar);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards()])
      .then(([info, initialCards]) => {
        setUserName(info.name);
        setUserDescription(info.about);
        setUserAvatar(info.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <button onClick={props.isEditAvatarPopupOpen} className="profile__edit-avatar" type="button" aria-label="Редактировать Аватар" />
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          <div className="profile__block">
            <div className="profile__name-edit">
              <h1 className="profile__name">{userName}</h1>
              <button onClick={props.onEditProfile} className="profile__edit-btn" type="button" aria-label="Редактировать профиль" />
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>

        </div>
        <button onClick={props.isAddPlacePopupOpen} className="profile__add-btn" type="button" aria-label="Добавить новое место" />
      </section>
      <section>
        <ul className="elements">
          {cards.map((card) => (
            <Card cardInfo={card} onCardClick={props.onCardClick} key={card._id} />
          ))}
        </ul>
      </section>
    </main >
  )
}

export default Main;