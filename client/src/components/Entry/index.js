import React from "react";
import "../Entry/style.css"

function Entry() {
    return (
        <div className="list-container">
            <div>
                <h2>Journal Entries</h2>
            </div>
            <div>
                <input className="note-title" placeholder="Note Title" maxLength="28" type="text" />
                <textarea className="note-textarea" placeholder="Type here...">
                </textarea>
            </div>
        </div>
    )
}

export default Entry;