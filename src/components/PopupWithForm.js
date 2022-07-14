function PopupWithForm({ name, isOpen, onClose, buttonText, children, title }) {
  return (
    // при клике на оверлэй не закрывается попап, т.к. закрывается даже при клике на контейнер
    <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container">
        <h2 className="popup__text">{title}</h2>
        <form name={name} className={`popup__form popup__form_${name}`} noValidate>
          {children}
          <button onClick={onClose} className="popup__save-btn" type="submit">{buttonText}</button>
        </form>
        <button onClick={onClose} className="popup__close" type="button" aria-label="Закрыть"></button>
      </div>
    </ div >
  )
}

export default PopupWithForm;