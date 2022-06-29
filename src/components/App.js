import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithiForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />

      <template className="elem">
        <li className="element">
          <img className="element__image" src="#" alt="Фото места" />
          <button className="element__image-btn" type="button" aria-label="На весь экран фото места"></button>
          <button className="element__delete-urn" type="button" aria-label="Удалить карточку места"></button>
          <div className="element__rectangle">
            <h2 className="element__title"></h2>
            <div className="element__like-container">
              <button className="element__like" type="button" aria-label="В избранное"></button>
              <p className="element__count-likes"></p>
            </div>

          </div>
        </li>
      </template>

      <Footer />
      <PopupWithiForm name="profile" title="Редактировать профиль" children={
        <>
          <input className=" popup__input popup__input_type_name" id="name-input" type="text" name="name" placeholder="Имя"
            minLength="2" maxLength="40" required />
          <span className="popup__input-error name-input-error"></span>
          <input className="popup__input popup__input_type_job" id="about-input" type="text" name="about"
            placeholder="О себе" minLength="2" maxLength="200" required />
          <span className="popup__input-error about-input-error"></span>
        </>} />
      <PopupWithiForm name="new-space" title="Новое место" children={
        <>
          <input className="popup__input popup__input_type_name-space" id="cardName-input" type="text" name="name"
            placeholder="Название места" minLength="2" maxLength="30" required />
          <span className="popup__input-error cardName-input-error"></span>
          <input className="popup__input popup__input_type_link-space" id="url-input" type="url" name="link"
            placeholder="Ссылка на картинку" required />
          <span className="popup__input-error url-input-error"></span>
        </>
      } />
      <PopupWithiForm name="edit-avatar" title="Обновить аватар" children={
        <>
          <input className="popup__input popup__input_type_link-avatar" id="avatar-input" type="url" name="link"
            placeholder="Ссылка на аватар" required />
          <span className="popup__input-error avatar-input-error"></span>
        </>
      } />
      <PopupWithiForm name="delete-card" title="Вы уверены?" children={
        <button className="popup__save-btn" type="submit">Да</button>
      } />
      <ImagePopup />
    </div>
  );
}

export default App;
