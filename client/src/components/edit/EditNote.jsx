import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import NoteForm from "../noteForm/NoteForm";
import { useEffect } from "react";
import { useState } from "react";

export default function EditNote() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/notes/${id}`)
        .then(res => res.json())
        .then(data => setNote(data));
    }, [id]);


    const handleUpdate = data => {
        fetch(`http://localhost:5000/notes/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data),
    }).then(() => navigate('/'));
    };

    return (
        <div>
            <h1>Edit Note</h1>
            <NoteForm onSubmit={handleUpdate} editingForm={note} />
        </div>
    )
}