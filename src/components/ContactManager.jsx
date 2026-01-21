import React, { useState } from 'react'

const ContactManager = () => {
    const [contact, setContact] = useState([])
    const [form, setForm] = useState({name: "", email:"", phone:""})
//     {
//   name: "akhil", 
//   email: "akhil@example.com", 
//   phone: "1234567890"
// }
    const [search, setSearch] = useState("")

    const handleNameChange = (e) => {
        setForm((prev)=> ({...prev,name : e.target.value}))
    }
    const handleEmailChange = (e) => {
        setForm((prev)=> ({...prev,email : e.target.value}))
    }
    const handlePhoneChange = (e) => {
        setForm((prev)=> ({...prev,phone : e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault() //prevent default refresh

        if(!form.name || !form.email || !form.phone)
            return alert("fill all fields")

            const newContact = {id: Date.now(), ...form}
            setContact((prev)=> [...prev,newContact]);// added new contact along with new rest of the contacts
            setForm({name:"", email: "", phone: ""});// clearing the input form 
    }

    const handleDelete = (id) => {
        setContact((prev) => prev.filter((c) => c.id !== id))
    }

     const filteredContacts = contact.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 mb-6'>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleNameChange}
          className='p-3 border rounded-md text-base'
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleEmailChange}
          className='p-3 border rounded-md text-base'
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handlePhoneChange}
          className='p-3 border rounded-md text-base'
        />

        <button
          type='submit'
          className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition'
        >
          Add Contact
        </button>
      </form>
    {/* search form here */}
      <input
        type="text"
        placeholder='Search by name...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='p-3 border rounded-md w-full mb-4'
      />

      <ul className='divide-y'>
        {filteredContacts.length === 0 ? (
          <p className='text-gray-500 text-center'>No contact found..</p>
        ) : (
          filteredContacts.map((contact) => (
            <li key={contact.id} className='flex justify-between items-center py-3'>
              <div>
                <p className='font-semibold'>{contact.name}</p>
                <p className='text-gray-600'>{contact.email}</p>
                <p className='text-gray-600'>{contact.phone}</p>
              </div>
              <button
                onClick={() => handleDelete(contact.id)}
                className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition'
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default ContactManager