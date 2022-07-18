import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isLoading, isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();
  function handleChangeLink(e) {
    avatarRef.current.value = e.target.value;
  }
  function handleSubmit() {
    console.log('test');
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  React.useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm eventSubmit={handleSubmit} name="edit-avatar" title="Обновить аватар" buttonText={isLoading ? "Сохранение..." : "Сохранить"} onClose={onClose} isOpen={isOpen} children={
      <>
        <input ref={avatarRef} onChange={handleChangeLink} className="popup__input popup__input_type_link-avatar" id="avatar-input" type="url" name="link"
          placeholder="Ссылка на аватар" required />
        <span className="popup__input-error avatar-input-error"></span>
      </>
    } />
  )
}

export default EditAvatarPopup;