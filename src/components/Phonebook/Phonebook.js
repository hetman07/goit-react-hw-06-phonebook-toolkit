import React, { Component } from "react";

import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList";

import Logo from "../Logo";

export default class App extends Component {
  render() {
    return (
      <>
        <Logo text={"Phonebook"} />
        <ContactForm />
        <Filter />
        <ContactList />
      </>
    );
  }
}
