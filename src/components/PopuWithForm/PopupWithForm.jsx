

const PopupWithForm = ({title, name, children, isOpen, onClose}) => {
  return (

    <div className={`popup popup_type_${name} ${isOpen?"popup_opened":''}`}>
      <div className="popup__container">
        <button type="button" className="popup__cross" onClick={onClose}></button>
          <h2 className="popup__title">{title}</h2>
        <form name={name} action="#" method="post" enctype="multipart/form-data"
            className="popup__form popup__form_type_profile" novalidate>
            {children}
        </form>
      </div>
    </div>
    )
}

export default PopupWithForm





