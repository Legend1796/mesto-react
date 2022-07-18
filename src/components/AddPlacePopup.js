import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddCard, isLoading }) {
  const [nameCard, setNameCard] = React.useState('');
  const [linkCard, setLinkCard] = React.useState('');

  function handleChangeNameCard(e) {
    setNameCard(e.target.value);
  }
  function handleChangeLinkCard(e) {
    setLinkCard(e.target.value);
  }
  function handleSubmit() {
    onAddCard({
      name: nameCard,
      link: linkCard,
    });
  }

  React.useEffect(() => {
    setNameCard('');
    setLinkCard('');
  }, [isOpen]);

  return (
    <PopupWithForm eventSubmit={handleSubmit} name="new-space" title="Новое место" buttonText={isLoading ? "Сохранение..." : "Сохранить"} onClose={onClose} isOpen={isOpen} children={
      <>
        <input value={nameCard} onChange={handleChangeNameCard} className="popup__input popup__input_type_name-space" id="cardName-input" type="text" name="name"
          placeholder="Название места" minLength="2" maxLength="30" required />
        <span className="popup__input-error cardName-input-error"></span>
        <input value={linkCard} onChange={handleChangeLinkCard} className="popup__input popup__input_type_link-space" id="url-input" type="url" name="link"
          placeholder="Ссылка на картинку" required />
        <span className="popup__input-error url-input-error"></span>
      </>
    } />
  )
}

export default AddPlacePopup;