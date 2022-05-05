import { useState } from 'react'

import Header from "../Header";
import Main from '../Main'
import Footer from '../Footer'
import PopupWithForm from '../PopuWithForm'
import ImagePopup from "../ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(null)
  }

  return (
    <div>

      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        title='Редактировать профиль'
        name='profile'
        buttonText='Сохранить'
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen}>
        <input
          id="name-input"
          type="text"
          name="name"
          value=""
          className="popup__input popup__input_value_name"
          minLength="2"
          maxLength="40"
          required
          placeholder="Имя" />
        <span className="name-input-error popup__input-error"></span>
        <input
          id="sign-input"
          type="text"
          name="sign"
          value=""
          className="popup__input popup__input_value_sign"
          minLength="2"
          maxLength="200"
          required
          placeholder="О себе" />
        <span className="sign-input-error popup__input-error"></span>

      </PopupWithForm>

      <PopupWithForm
        title='Новое место'
        name='mesto'
        buttonText='Сохранить'
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen}>
        <input
          id="title-input"
          type="text"
          name="title"
          value=""
          className="popup__input popup__input_value_mesto"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required />
        <span className="title-input-error popup__input-error"></span>
        <input
          id="src-input"
          type="url"
          name="src"
          value=""
          className="popup__input popup__input_value_src"
          placeholder="Ссылка на картинку"
          required />
        <span className="src-input-error popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title='Обновить аватар'
        name='avatar'
        buttonText='Сохранить'
        onClose={closeAllPopups}
        isOpen={isEditAvatarPopupOpen}>
        <input
          id="avatar-input"
          type="url"
          name="avatar"
          value=""
          className="popup__input popup__input_value_avatar"
          placeholder="Ссылка на картинку"
          required />
        <span className="avatar-input-error popup__input-error"></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

    </div>
  );
}

export default App;