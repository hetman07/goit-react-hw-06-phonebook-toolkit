import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import phonebookActions from "./phonebookActions";

const initialValue = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const handleAddContact = (state, action) => [...state, action.payload.contact];

const handleDeleteContact = (state, action) =>
  state.filter(contactId => contactId.id !== action.payload);

const itemsReducer = createReducer(initialValue, {
  [phonebookActions.addContact]: handleAddContact,
  [phonebookActions.deleteContact]: handleDeleteContact,
});

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case phonebookActions.changeFilter.type:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
