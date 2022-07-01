function ImagePopup(props) {
  return (
    <div onClick={props.onClose} className={`popup popup_full-size ${props.isOpen ? 'popup_opened' : ''}`} >

      <div className="popup__container popup__container_full-size">
        <button onClick={props.onClose} className="popup__close" type="button" aria-label="Закрыть"></button>
        <img className="popup__image" src={props.link} alt="Фото места" />
        <h2 className="popup__title">{props.name}</h2>
      </div>
    </div >
  )
}

export default ImagePopup;