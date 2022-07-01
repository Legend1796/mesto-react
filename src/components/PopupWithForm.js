function PopupWithiForm(props) {
  return (
    <div onClick={props.onClose} className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container">
        <h2 className="popup__text">{props.title}</h2>
        <form name={props.name} className={`popup__form popup__form_${props.name}`} noValidate>
          {props.children}
          <button onClick={props.onClose} className="popup__save-btn" type="submit">Сохранить</button>
        </form>
        <button onClick={props.onClose} className="popup__close" type="button" aria-label="Закрыть"></button>
      </div>
    </ div >
  )
}

export default PopupWithForm;