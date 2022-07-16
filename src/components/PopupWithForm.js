function PopupWithForm({ name, isOpen, onClose, buttonText, title, onDeleteCard }) {

  function handleSubmit(e) {
    e.preventDefault();
    onDeleteCard();
  }

  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container">
        <h2 className="popup__text">{title}</h2>
        <form onSubmit={handleSubmit} name={name} className={`popup__form popup__form_${name}`} noValidate>
          <button className="popup__save-btn" type="submit">{buttonText}</button>
        </form>
        <button onClick={onClose} className="popup__close" type="button" aria-label="Закрыть"></button>
      </div>
    </ div >
  )
}

export default PopupWithForm;