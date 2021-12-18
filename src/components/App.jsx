import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { localStorageKey, getFromLocalStorage, setLocalStorage } from '../helper.js';

function App() {
    const [notes, setNotes] = useState(() => {
        const storage = getFromLocalStorage(localStorageKey);
        return storage.hasLocalData ? storage.data : [];
    });

    function addNote(newNote) {
        setNotes(prevNotes => {
            const updatedNotes = [...prevNotes, newNote];
            setLocalStorage(localStorageKey, updatedNotes);
            return updatedNotes;
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            const updatedNotes = prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
            setLocalStorage(localStorageKey, updatedNotes);
            return updatedNotes;
        });
    }

    return (
        <div>
            <Header onDelete={deleteNote} />
            <CreateArea onAdd={addNote} />
            <div className="note-container">
                {notes.map((noteItem, index) => {
                    return (
                        <Note
                            key={`${index}-note`}
                            id={index}
                            title={noteItem.title}
                            content={noteItem.content}
                            onDelete={deleteNote}
                        />
                    );
                })}
            </div>
            <Footer />
        </div>
    );
}

export default App;
