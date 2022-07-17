import { useState } from "react";

const defaultFormValues = { fullname: "", phone: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(defaultFormValues);

  

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone === "") {
      return;
    }
    addContact([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          onChange={onChangeInput}
          value={form.fullname}
        />
      </div>

      <div>
        <input
          name="phone"
          placeholder="Phone Number"
          onChange={onChangeInput}
          value={form.phone}
        />
      </div>

      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
