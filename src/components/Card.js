import React from 'react';

function Card(props) {
  function handleClick() {
    props.fullSize(props.cardInfo);
  }

  return (
    <li className="element">
      <img className="element__image" src={props.cardInfo.link} alt="Фото места" />
      <button onClick={handleClick} className="element__image-btn" type="button" aria-label="На весь экран фото места"></button>
      <button className="element__delete-urn" type="button" aria-label="Удалить карточку места"></button>
      <div className="element__rectangle">
        <h2 className="element__title">{props.cardInfo.name}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button" aria-label="В избранное"></button>
          <p className="element__count-likes">{props.cardInfo.likes.length}</p>
        </div>

      </div>
    </li>
  )
}

export default Card;