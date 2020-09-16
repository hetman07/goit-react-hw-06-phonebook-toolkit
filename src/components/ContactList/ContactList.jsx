import React from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import phonebookActions from "../../redux/phonebook/phonebookActions";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onRemove }) => {
  return (
    <div className={styles.TaskEditor}>
      <h2>Contacts</h2>
      <TransitionGroup component="ul">
        {contacts.map(cont => (
          <CSSTransition
            in={contacts.length > 0}
            appear={true}
            key={cont.id}
            timeout={250}
            classNames={{ ...styles }}
            unmountOnExit
          >
            <li className={styles.TaskListItem} key={cont.id}>
              <span className={styles.TaskListText}>{cont.name}: </span>
              <span className={styles.TaskListText}>{cont.number}</span>
              <button
                type="button"
                className={styles.TaskListButton}
                onClick={() => onRemove(cont.id)}
              >
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onRemove: PropTypes.func.isRequired,
};

const mapStateToprops = state => {
  const { items, filter } = state.contacts;

  const visibleContacts = items.filter(contact => {
    console.log("visibleContacts", contact.name.toLowerCase());
    console.log("filter", filter);
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToprops = {
  onRemove: phonebookActions.deleteContact,
};
export default connect(mapStateToprops, mapDispatchToprops)(ContactList);
