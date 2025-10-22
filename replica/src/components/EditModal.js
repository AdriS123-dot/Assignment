import React, { useState } from 'react';

export default function EditModal({ user, onClose, onSave }) {
  const [form, setForm] = useState({ ...user });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function submit(e) {
    e.preventDefault();
    onSave(form);
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <header className="modal-head">
          <h3>Edit user</h3>
          <button className="close" onClick={onClose}>×</button>
        </header>

        <form onSubmit={submit} className="modal-form">
          <label>Name
            <input name="name" value={form.name} onChange={handleChange} />
          </label>
          <label>Email
            <input name="email" value={form.email} onChange={handleChange} />
          </label>
          <label>Phone
            <input name="phone" value={form.phone} onChange={handleChange} />
          </label>
          <label>Website
            <input name="website" value={form.website} onChange={handleChange} />
          </label>

          <div className="modal-actions">
            <button type="button" className="btn secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
