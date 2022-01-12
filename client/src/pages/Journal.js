import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "../components/Grid";
import Entry from "../components/Entry";
import { useUserContext } from "../utils/globalState";
import Button from "react-bootstrap/Button";
import API from "../utils/API";

function Journal() {
  const [state] = useUserContext();
  let isLoggin = localStorage.getItem("isLoggin") === "true";
  const userId = localStorage.getItem("user");
  const [JournalSet, setJournalSet] = useState([]);
  const [JournalSelect, setJournalSelect] = useState({
    title: "title",
    note: "note",
  });
  const updateTitleRef = useRef();
  const updateNoteRef = useRef();

  useEffect(() => {
    authenticate();
    loadJournal();
  }, [state]);

  function authenticate() {
    if (!isLoggin) {
      window.location.pathname = "/";
    }
  }

  function loadJournal() {
    API.getUser(userId)
      .then((res) => {
        setJournalSet(res.data.journals);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  const selectJournal = (e) => {
    e.preventDefault();
    let value = e.target.value;

    setJournalSelect(JournalSet.find((element) => element.title === value));
  };

  function saveJournal() {
    let array = JournalSet;
    array.push({
      title: updateTitleRef.current.value,
      note: updateNoteRef.current.value,
    });
    API.updateUserJournal(userId, { journals: array })
      .then((res) => console.log("Successful POST to DB!", res))
      .catch((err) => console.log("this is the error", err.response));
    window.location.reload();
  }

  const removeJournal = (e) => {
    let array = JournalSet;
    const i = array.findIndex((t) => t.title === e.target.value);
    array.splice(i, 1);

    API.updateUserJournal(userId, { journals: array })
      .then((res) => console.log("Successful POST to DB!", res))
      .catch((err) => console.log("this is the error", err.response));
    window.location.reload();
  };

  return (
    <Container>
      <h3 className="justify-content-center d-flex mt-5">Journal Entries</h3>
      <div className="row mt-5">
        <div className="col-lg-4" style={{ backgroundColor: "orange" }}>
          {JournalSet.map((e) => {
            return (
              <div className="row mt-3 mb-3">
                <div className="col-lg-8 col-sm-10">
                  <Button
                    className="d-flex"
                    style={{ width: "100%" }}
                    value={e.title}
                    onClick={selectJournal}
                  >
                    {e.title}
                  </Button>
                </div>
                <div className="col-4 col-sm-2">
                  <Button
                    className="btn btn-danger"
                    onClick={removeJournal}
                    value={e.title}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-lg-8">
          <div className="list-container">
            <input
              className="note-title"
              placeholder={JournalSelect.title}
              maxLength="28"
              type="text"
              ref={updateTitleRef}
            />
            <textarea
              className="note-textarea"
              placeholder={JournalSelect.note}
              ref={updateNoteRef}
            ></textarea>
          </div>

          <Button className="mr-4" onClick={saveJournal}>
            Save
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Journal;
