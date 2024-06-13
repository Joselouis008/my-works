import React, { useState } from 'react';

function NoteTakingApp() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const handleSubmit = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, { text: newNote, id: Date.now() }]);
      setNewNote('');
    }
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div>
      <h1>Note Take</h1>
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        className='border-black border rounded'
        placeholder="Enter a new note"
      />
      <button className='border-black border rounded-md' onClick={handleSubmit}>Add Note</button>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.text}
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteTakingApp;