import logo from '../images/logo.svg';
import '../index.css';

function App() {
  return (
    <div className="page">
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип сайта" />
      </header>
      <main>
        <section className="profile">
          <div className="profile__info">
            <button className="profile__edit-avatar" type="button" aria-label="Редактировать Аватар"></button>
            <img className="profile__avatar" src="<%=require('./images/avatar.jpg')%>" alt="Аватар" />
            <div className="profile__block">
              <div className="profile__name-edit">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button className="profile__edit-btn" type="button" aria-label="Редактировать профиль"></button>
              </div>
              <p className="profile__job">Исследователь океана</p>
            </div>

          </div>
          <button className="profile__add-btn" type="button" aria-label="Добавить новое место"></button>
        </section>
        <section>
          <ul className="elements">

          </ul>
        </section>
      </main>

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

      <footer className="footer">
        <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
      </footer>

      <div className="popup popup_profile">

        <div className="popup__container">
          <h2 className="popup__text">Редактировать профиль</h2>
          <form name="profile" className="popup__form popup__form_profile" novalidate>
            <input className="popup__input popup__input_type_name" id="name-input" type="text" name="name" placeholder="Имя"
              minlength="2" maxlength="40" required />
            <span className="popup__input-error name-input-error"></span>
            <input className="popup__input popup__input_type_job" id="about-input" type="text" name="about"
              placeholder="О себе" minlength="2" maxlength="200" required />
            <span className="popup__input-error about-input-error"></span>
            <button className="popup__save-btn" type="submit">Сохранить</button>
          </form>
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
        </div>
      </div>
      <div className="popup popup_new-space">

        <div className="popup__container">
          <h2 className="popup__text">Новое место</h2>
          <form name="mesto" className="popup__form popup__form_card" novalidate>
            <input className="popup__input popup__input_type_name-space" id="cardName-input" type="text" name="name"
              placeholder="Название места" minlength="2" maxlength="30" required />
            <span classNameName="popup__input-error cardName-input-error"></span>
            <input className="popup__input popup__input_type_link-space" id="url-input" type="url" name="link"
              placeholder="Ссылка на картинку" required />
            <span className="popup__input-error url-input-error"></span>
            <button className="popup__save-btn popup__save-btn_disabled" type="submit" disabled>Создать</button>
          </form>
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
        </div>
      </div>

      <div className="popup popup_edit-avatar">

        <div className="popup__container">
          <h2 className="popup__text popup__text_edit-avatar">Обновить аватар</h2>
          <form name="avatar" className="popup__form popup__form_avatar" novalidate>
            <input className="popup__input popup__input_type_link-avatar" id="avatar-input" type="url" name="link"
              placeholder="Ссылка на аватар" required />
            <span className="popup__input-error avatar-input-error"></span>
            <button className="popup__save-btn popup__save-btn_disabled" type="submit" disabled>Сохранить</button>
          </form>
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
        </div>
      </div>

      <div className="popup popup_delete-card">

        <div className="popup__container">
          <h2 className="popup__text popup__text_delete-container">Вы уверены?</h2>
          <form name="delete-mesto" className="popup__form popup__form_card" novalidate>
            <button className="popup__save-btn" type="submit">Да</button>
          </form>
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
        </div>
      </div>
      <div className="popup popup_full-size">

        <div className="popup__container popup__container_full-size">
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
          <img className="popup__image" src="#" alt="Фото места" />
          <h2 className="popup__title"></h2>
        </div>
      </div>
    </div>
  );
}

export default App;
