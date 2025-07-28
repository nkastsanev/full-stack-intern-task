import React from "react";
import { useNavigate } from "react-router-dom";
import NoteForm from "../noteForm/NoteForm";

export default function CreateNote() {
    const navigate = useNavigate();

    const handleCreate = data => {
        fetch('http://localhost:5000/notes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        }).then(() => navigate('/'))
    };

    return (
        <div>
            <h1>Create Note</h1>
            <NoteForm onSubmit={handleCreate} />
        </div>
    );
}