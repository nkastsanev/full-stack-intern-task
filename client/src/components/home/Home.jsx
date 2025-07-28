import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


export default function Home() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/notes`)
    .then(res => res.json())
    .then(data => setNotes(data));
  }, []);

  const deleteNote = id => {
    fetch(`http://localhost:5000/notes/${id}`, {
      method: 'DELETE',
    }).then(() => setNotes(notes.filter(n => n.id !== id)));
  };

  return (
    <div>
      <h1>All Notes</h1>
      {notes.map(note => (
        <div key={note.id} style={{border: '1px solid black', background: 'gray' ,margin: '15px', padding: '15px'}}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <Link to={`/edit/${note.id}`}>Edit</Link>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
