

const ImagePopup = ({ link, onClose }) => {

  return (
    <div className={`popup popup_type_image ${link?"popup_opened":''}`}>
        <div className="popup-image">
          <button type="button" className="popup__cross popup-image__cross" onClick={onClose} ></button>
          <img className="popup-image__src" src={link} alt="фото"/>
          <h2 className="popup-image__name"></h2>
        </div>
      </div>
  )
}

export default ImagePopup





