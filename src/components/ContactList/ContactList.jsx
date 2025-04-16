import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map((c) => (
        <li key={c.id}>
          <Contact contact={c} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;