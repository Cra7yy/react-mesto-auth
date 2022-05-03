import pen from '../../images/pen.svg'
import cross from '../../images/cross.svg'
import {api} from '../../utils/Api'
import Card from '../Card/Card'
import {
   useEffect,
   useState
} from 'react'

const Main = ({
   onEditProfile,
   onAddPlace,
   onEditAvatar,
   onCardClick
}) => {

   const [userName, setUserName] = useState("");
   const [userDescription, setUserDescription] = useState("");
   const [userAvatar, setUserAvatar] = useState("");
   const [card, setCard] = useState([])


   useEffect(() => {
      api.getProfile()
         .then((res) => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar);
         })
         .catch(err => console.log(err))
   }, []);

   useEffect(() => {
      api.getInitialCards()
         .then((res) => {
            setCard(res)
         })
   }, [])


   return (
      <main className="main" >
         <section className="profile" >
            <div className="profile__content" >
               <div className="profile__img-container" onClick={onEditAvatar} >
                  <img src={userAvatar} alt="фото профиля" className="profile__img" />
                  <span className="profile__img-shadow" ></span>
               </div>
               <div className="profile__text-content" >
                  <div className="profile__element" >
                     <h1 className="profile__title" > {userName} </h1>
                     <button type="button" className="profile__editor" onClick={onEditProfile} >
                        <img src={pen} alt="ручка" className="profile__pen" />
                     </button>
                  </div>
                  <p className="profile__subtitle">{userDescription}</p>
               </div>
            </div>
            <button type="button"
               className="profile__mesto"
               onClick={onAddPlace} >
               <img src={cross} alt="крест" className="profile__cross" />
            </button>
         </section>
         <section className="grid-conteiner" >
            {card.map((item) => <Card key={item._id} card={item} onCardClick={onCardClick} />)}
         </section>
      </main>
   )
}

export default Main