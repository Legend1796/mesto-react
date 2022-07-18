import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

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

  function handleSubmit() {
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm eventSubmit={handleSubmit} name="profile" title="Редактировать профиль" buttonText={isLoading ? "Сохранение..." : "Сохранить"} onClose={onClose} isOpen={isOpen} children={
      <>
        <input value={name} onChange={handleChangeName} className=" popup__input popup__input_type_name" id="name-input" type="text" name="name" placeholder="Имя"
          minLength="2" maxLength="40" required />
        <span className="popup__input-error name-input-error"></span>
        <input value={description} onChange={handleChangeDescription} className="popup__input popup__input_type_job" id="about-input" type="text" name="about"
          placeholder="О себе" minLength="2" maxLength="200" required />
        <span className="popup__input-error about-input-error"></span>
      </>} />
  )
}

export default EditProfilePopup;