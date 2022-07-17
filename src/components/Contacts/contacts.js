import { useState } from "react";
import List from "./List/list";
import Form from "./Form/form";
import  "./contacts.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Hasan Mezarcı", phone: "05433244567" },
    { fullname: "Hidayet Türkoğlu", phone: "05393099812" },
    {fullname:"Faruk Süren", phone:"05553122905"},
    {fullname:"Nükhet Duru", phone:"05055612340"}
  ]);


  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
