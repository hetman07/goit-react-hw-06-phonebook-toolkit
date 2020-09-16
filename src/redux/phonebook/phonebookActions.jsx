import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("ADD_CONTACT", (name, number) => ({
  payload: { contact: { id: uuidv4(), name, number } },
}));

const deleteContact = createAction("DEL_CONTACT");

const changeFilter = createAction("UPD_FILTER");

export default { addContact, deleteContact, changeFilter };
