import React, { useState, useEffect } from "react";
import './NoteForm.css';

export default function NoteForm({onSubmit, editingForm}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (editingForm){
            setTitle(editingForm.title);
            setContent(editingForm.content);
        }
    }, [editingForm]);

    const handleSubmit = e => {
        e.preventDefault();

        if (title.length < 6 || content.length < 6){
            setError('Title and Content must be atleast 6 characters.')
            return;
        }


        setError('');
        onSubmit({title, content});
        setTitle('');
        setContent('');
    };

    return (
    <form className="note-form" onSubmit={handleSubmit}>
    {error && <div className="error">{error}</div>}
        <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        />

        <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
        rows="6"
        />
        
        <button type="submit">{editingForm ? 'Update Note' : 'Create Note'}</button>

    </form>
)
};


