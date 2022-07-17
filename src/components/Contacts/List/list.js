import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((contact) => {
    return Object.keys(contact).some((key) =>
      contact[key].toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <div>
      <input
        placeholder="Filter contacts"
        value={filterText}
        onChange={(e) => {
          setFilterText(e.target.value);
        }}
      />
      <ul className="list">
        {filtered.map((contact, index) => (
          <li key={index}>
            <span className="fullname">{contact.fullname}</span>
            <span className="phone">{contact.phone}</span>
          </li>
        ))}
      </ul>

      <p>Total contacts: {filtered.length}</p>
    </div>
  );
}

export default List;
