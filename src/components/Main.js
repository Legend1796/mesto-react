function Main() {

  function handleEditAvatarClick() {
    document.querySelector('.popup_edit-avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_profile').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_new-space').classList.add('popup_opened');
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <button onClick={handleEditAvatarClick} className="profile__edit-avatar" type="button" aria-label="Редактировать Аватар"></button>
          <img className="profile__avatar" src="<%=require('./images/avatar.jpg')%>" alt="Аватар" />
          <div className="profile__block">
            <div className="profile__name-edit">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button onClick={handleEditProfileClick} className="profile__edit-btn" type="button" aria-label="Редактировать профиль"></button>
            </div>
            <p className="profile__job">Исследователь океана</p>
          </div>

        </div>
        <button onClick={handleAddPlaceClick} className="profile__add-btn" type="button" aria-label="Добавить новое место"></button>
      </section>
      <section>
        <ul className="elements">

        </ul>
      </section>
    </main>
  )

}

export default Main;