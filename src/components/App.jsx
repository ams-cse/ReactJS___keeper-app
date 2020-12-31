import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNote] = useState([]);

    function addNote(newNote) {
        setNote(prevNote => {
           return [...prevNote, newNote];
        });
    }

    function deleteNote(id) {
        setNote(prevNote => {
            return prevNote.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }
    
  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />

        {notes.map((newItem, index) => {
            return < Note
            key={index}
            id={index}
            title = {newItem.title}
            content = {newItem.content}
            onDelete = {deleteNote}
            />
        })}
      <Footer />
    </div>
  );
}

export default App;
