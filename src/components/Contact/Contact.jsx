import css from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.card}>
      <div className={css.innerFlex}>
        <p>
          <span className={css.icon}>👤</span> {contact.name}
        </p>
        <p>
          <span className={css.icon}>📞</span> {contact.number}
        </p>
      </div>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;