import React from "react";

function EditAvatarPopup({ isLoading, isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  function handleChangeLink(e) {
    avatarRef.current.value = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }
  React.useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen]);


  return (
    <div className={`popup popup_edit-avatar ${isOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container">
        <h2 className="popup__text">Обновить аватар</h2>
        <form onSubmit={handleSubmit} name="edit-avatar" className="popup__form popup__form_edit-avatar" noValidate>
          <input ref={avatarRef} onChange={handleChangeLink} className="popup__input popup__input_type_link-avatar" id="avatar-input" type="url" name="link"
            placeholder="Ссылка на аватар" required />
          <span className="popup__input-error avatar-input-error"></span>
          <button className="popup__save-btn" type="submit">{isLoading ? "Сохранение..." : "Сохранить"}</button>
        </form>
        <button onClick={onClose} className="popup__close" type="button" aria-label="Закрыть" />
      </div>
    </ div>
  )
}

export default EditAvatarPopup;