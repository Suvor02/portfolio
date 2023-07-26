import style from "./contacts.module.css"

const Contacts = () => {
  return(
      <div className={style.contactsDiv}>
          <div className={style.containerDiv}>
              <h2>My contacts</h2>
              <form className={style.containerForm}>
                  <input type="text"/>
                  <input type="text"/>
                  <textarea cols={50} rows={10}></textarea>
              </form>
              <button className={style.button}>Hire me !!!</button>
          </div>
      </div>
  )
}

export default Contacts