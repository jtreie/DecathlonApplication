import React, { useState, Fragment, useEffect } from 'react';
import { nanoid } from 'nanoid';
import "../App.css";
import data from "../deca-mock-data.json";
import ReadOnlyRow from '../components/ReadOnlyRow';
import EditableRow from '../components/EditableRow';
import { Table } from "react-bootstrap"
import { collection, getDocs } from "firebase/firestore"
import { db } from '../firebase';
import AddDecathlete from './AddDecathlete';
import EditDecathlete from './EditDecathlete';
import RealtimeDeca from './RealtimeDeca';



const Decathlon = () => {

  const [decathletes, setDecathletes] = useState([])
  useEffect(() => {
    getDecathletes()
  }, [])

  function getDecathletes() {
    const decathletesCollectionRef = collection(db, 'decaTable');
    getDocs(decathletesCollectionRef)
      .then(response => {
        const deca = response.docs.map(doc => ({ data: doc.data(), id: doc.id }))
        setDecathletes(deca)
      })
      .catch(e => console.log(e.message));

  }

  const [toggle, setToggle] = useState(false)

  const [competitors, setCompetitors] = useState(data);  //dynamic
  const [addFormData, setAddFormData] = useState({ //adding new entries
    fullName: '',
    dateOfBirth: '',
    hundredMeters: '',
    longJump: '',
    shotPut: '',
    highJump: '',
    fourHundredMeters: '',
    hurdles: '',
    discus: '',
    poleVault: '',
    javelin: '',
    minutes: '',
    seconds: ''

  });

  const [editFormData, setEditFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    hundredMeters: '',
    longJump: '',
    shotPut: '',
    highJump: '',
    fourHundredMeters: '',
    hurdles: '',
    discus: '',
    poleVault: '',
    javelin: '',
    minutes: '',
    seconds: ''
  });

  const [editCompetitorId, setEditCompetitorId] = useState(null);

  const handleAddFormChange = (event) => {  //asserts correct inserted value to the right field
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditClick = (event, competitor) => {
    event.preventDefault();
    setEditCompetitorId(competitor.id);

    const formValues = {
      fullName: competitor.fullName,
      dateOfBirth: competitor.dateOfBirth,
      hundredMeters: competitor.hundredMeters,
      longJump: competitor.longJump,
      shotPut: competitor.shotPut,
      highJump: competitor.highJump,
      fourHundredMeters: competitor.fourHundredMeters,
      hurdles: competitor.hurdles,
      discus: competitor.discus,
      poleVault: competitor.poleVault,
      javelin: competitor.javelin,
      minutes: competitor.minutes,
      seconds: competitor.seconds
    };

    setEditFormData(formValues);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedCompetitor = {
      id: editCompetitorId,
      fullName: editFormData.fullName,
      dateOfBirth: editFormData.dateOfBirth,
      hundredMeters: editFormData.hundredMeters,
      longJump: editFormData.longJump,
      shotPut: editFormData.shotPut,
      highJump: editFormData.highJump,
      fourHundredMeters: editFormData.fourHundredMeters,
      hurdles: editFormData.hurdles,
      discus: editFormData.discus,
      poleVault: editFormData.poleVault,
      javelin: editFormData.javelin,
      minutes: editFormData.minutes,
      seconds: editFormData.seconds
    };

    const newCompetitors = [...competitors];

    const index = competitors.findIndex((competitor) => competitor.id === editCompetitorId);

    newCompetitors[index] = editedCompetitor;

    setCompetitors(newCompetitors);
    setEditCompetitorId(null);
  };

  const handleCancelClick = () => {
    setEditCompetitorId(null);
  };

  return (

    <div className='app-container'>
      <h1><button type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:3000/decathlon";
        }}>Decathlon</button> <button type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "http://localhost:3000/heptathlon"
          }}>Womens Heptathlon</button></h1>

      <form onSubmit={handleEditFormSubmit}>
        < Table>

          <tbody>
            {competitors.map((competitor) => (
              <Fragment>
                {editCompetitorId === competitor.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick} />)
                  : (
                    <RealtimeDeca />
                  )
                }

              </Fragment>
            ))}

          </tbody>
        </Table>
      </form>
      <button onClick={() => setToggle(!toggle)} className='btn' >Add new competitor</button>
      {toggle && (
        <AddDecathlete />
      )}
      <EditDecathlete />
    </div>
  );
}

export default Decathlon;