function ImagePopup() {
  return (
    <div className="popup popup_full-size">

      <div className="popup__container popup__container_full-size">
        <button className="popup__close" type="button" aria-label="Закрыть"></button>
        <img className="popup__image" src="#" alt="Фото места" />
        <h2 className="popup__title"></h2>
      </div>
    </div>
  )
}

export default ImagePopup;