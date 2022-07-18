import React from "react";

function AddPlacePopup({ isOpen, onClose, onAddCard, isLoading }) {
  const [nameCard, setNameCard] = React.useState('');
  const [linkCard, setLinkCard] = React.useState('');

  function handleChangeNameCard(e) {
    setNameCard(e.target.value);
  }
  function handleChangeLinkCard(e) {
    setLinkCard(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
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



    <div className={`popup popup_new-space ${isOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container">
        <h2 className="popup__text">Новое место</h2>
        <form onSubmit={handleSubmit} name="new-space" className="popup__form popup__form_new-space" noValidate>
          <input value={nameCard} onChange={handleChangeNameCard} className=" popup__input popup__input_type_name" id="name-input" type="text" name="name" placeholder="Название места"
            minLength="2" maxLength="40" required />
          <span className="popup__input-error name-input-error"></span>
          <input value={linkCard} onChange={handleChangeLinkCard} className="popup__input popup__input_type_job" id="about-input" type="text" name="about"
            placeholder="Ссылка на картинку" minLength="2" maxLength="200" required />
          <span className="popup__input-error about-input-error"></span>
          <button className="popup__save-btn" type="submit">{isLoading ? "Сохранение..." : "Сохранить"}</button>
        </form>
        <button onClick={onClose} className="popup__close" type="button" aria-label="Закрыть" />
      </div>
    </ div>
  )
}

export default AddPlacePopup;