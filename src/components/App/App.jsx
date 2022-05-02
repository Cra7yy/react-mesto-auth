import Header from "../Header/Header";
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import PopupWithForm from '../PopuWithForm/PopupWithForm'
import ImagePopup from "../ImagePopup/ImagePopup";

import { useState } from 'react'

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState('');

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }

  const handleCardClick = (event) => {
    setSelectedCard(event.target.src)
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard('')
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
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen}>
        <input id="name-input" type="text" name="name" value="" class="popup__input popup__input_value_name"
          minlength="2" maxlength="40" required placeholder="Имя" />
        <span class="name-input-error popup__input-error"></span>
        <input id="sign-input" type="text" name="sign" value="" class="popup__input popup__input_value_sign"
          minlength="2" maxlength="200" required placeholder="О себе" />
        <span class="sign-input-error popup__input-error"></span>
        <button type="submit" class="popup__submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm
        title='Новое место'
        name='mesto'
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen}>
        <input id="title-input" type="text" name="title" value="" class="popup__input popup__input_value_mesto"
          placeholder="Название" minlength="2" maxlength="30" required />
        <span class="title-input-error popup__input-error"></span>
        <input id="src-input" type="url" name="src" value="" class="popup__input popup__input_value_src"
          placeholder="Ссылка на картинку" required />
        <span class="src-input-error popup__input-error"></span>
        <button type="submit" class="popup__submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm
        title='Обновить аватар'
        name='avatar'
        onClose={closeAllPopups}
        isOpen={isEditAvatarPopupOpen}>
        <input id="avatar-input" type="url" name="avatar" value="" class="popup__input popup__input_value_avatar"
          placeholder="Ссылка на картинку" required />
        <span class="avatar-input-error popup__input-error"></span>
        <button type="submit" class="popup__submit">Сохранить</button>
      </PopupWithForm>

        <ImagePopup link={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
