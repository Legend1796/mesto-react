import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isLoading, isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <div className={`popup popup_profile ${isOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container">
        <h2 className="popup__text">Редактировать профиль</h2>
        <form onSubmit={handleSubmit} name="profile" className="popup__form popup__form_profile" noValidate>
          <input value={name} onChange={handleChangeName} className=" popup__input popup__input_type_name" id="name-input" type="text" name="name" placeholder="Имя"
            minLength="2" maxLength="40" required />
          <span className="popup__input-error name-input-error"></span>
          <input value={description} onChange={handleChangeDescription} className="popup__input popup__input_type_job" id="about-input" type="text" name="about"
            placeholder="О себе" minLength="2" maxLength="200" required />
          <span className="popup__input-error about-input-error"></span>
          <button className="popup__save-btn" type="submit">{isLoading ? "Сохранение..." : "Сохранить"}</button>
        </form>
        <button onClick={onClose} className="popup__close" type="button" aria-label="Закрыть" />
      </div>
    </ div>
  )
}

export default EditProfilePopup;