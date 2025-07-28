import React, { useState, useEffect } from "react";

export default function NoteForm({onSubmit, editingForm}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (editingForm){
            setTitle(editingForm.title);
            setContent(editingForm.content);
        }
    }, [editingForm]);

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({title, content});
        setTitle('');
        setContent('');
    };

    return (
    <form onSubmit={handleSubmit}>
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
        />
        
        <button type="submit">{editingForm ? 'Update Note' : 'Create Note'}</button>

    </form>
)
};


