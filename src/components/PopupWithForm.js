function PopupWithiForm(props) {
  return (
    <div className={`popup popup_${props.name}`} >
      <div className="popup__container">
        <h2 className="popup__text">{props.title}</h2>
        <form name={props.name} className={`popup__form popup__form_${props.name}`} noValidate>
          {props.children}
          <button className="popup__save-btn" type="submit">Сохранить</button>
        </form>
        <button className="popup__close" type="button" aria-label="Закрыть"></button>
      </div>
    </ div >
  )
}

export default PopupWithiForm;