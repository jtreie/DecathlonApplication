import React, { useState, Fragment } from 'react';
import { nanoid } from 'nanoid';
import "./App.css";
import data from "./deca-mock-data.json";
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';
import Heptathlon from './Heptathlon';


const Decathlon = () => {

  const [competitors, setCompetitors] = useState(data);  //dynamic
  const [addFormData, setAddFormData] = useState({ //adding new entries
    fullName:'',
    dateOfBirth:'',
    hundredMeters:'',
    longJump:'',
    shotPut:'',
    highJump:'',
    fourHundredMeters:'',
    hurdles:'',
    discus:'',
    poleVault:'',
    javelin:'',
    fifteenHundredMeters:''
    
  });

  const [editFormData, setEditFormData] = useState({
    fullName:'',
    dateOfBirth:'',
    hundredMeters:'',
    longJump:'',
    shotPut:'',
    highJump:'',
    fourHundredMeters:'',
    hurdles:'',
    discus:'',
    poleVault:'',
    javelin:'',
    fifteenHundredMeters:''
  });

  const [editCompetitorId, setEditCompetitorId] = useState(null);

  const handleAddFormChange = (event) => {  //asserts correct inserted value to the right field
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {  //adds from the for to the table
    event.preventDefault();
    const newCompetitor = {
      id: nanoid(),
      fullName: addFormData.fullName,
      dateOfBirth: addFormData.dateOfBirth,
      hundredMeters: addFormData.hundredMeters,
      longJump: addFormData.longJump,
      shotPut: addFormData.shotPut,
      highJump: addFormData.highJump,
      fourHundredMeters: addFormData.fourHundredMeters,
      hurdles: addFormData.hurdles,
      discus: addFormData.discus,
      poleVault: addFormData.poleVault,
      javelin: addFormData.javelin,
      fifteenHundredMeters: addFormData.fifteenHundredMeters
    };
    const newCompetitors = [...competitors, newCompetitor];
    setCompetitors(newCompetitors);
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
     fifteenHundredMeters: competitor.fifteenHundredMeters
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
      fifteenHundredMeters: editFormData.fifteenHundredMeters
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

  const handleDeleteClick = (competitorId) => {
    const newCompetitors = [...competitors];

    const index = competitors.findIndex((competitor) => competitor.id === competitorId);

    newCompetitors.splice(index, 1);

    setCompetitors(newCompetitors);
  };

 return (
  <div className='app-container'>
    <h1>Decathlon</h1>
    <form onSubmit={handleEditFormSubmit}>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of birth</th>
          <th>100m</th>
          <th>Long jump</th>
          <th>Shot put</th>
          <th>High jump</th>
          <th>400m</th>
          <th>110m hurdles</th>
          <th>Discus</th>
          <th>Pole vault</th>
          <th>Javelin</th>
          <th>1500m</th>
          <th>Total score</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {competitors.map((competitor) => (
          <Fragment>
            {editCompetitorId === competitor.id ? (
              <EditableRow 
              editFormData={editFormData} 
              handleEditFormChange={handleEditFormChange}
              handleCancelClick={handleCancelClick}/> )
             : (
              <ReadOnlyRow 
              competitor={competitor} 
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}/>)
            }
          
          </Fragment>
        ))}
      </tbody>
    </table>
    </form>
    <h2>Add new competitor</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input type="text" name="fullName" required="required" onChange={handleAddFormChange}/>
      <input type="text" name="dateOfBirth" required="required" onChange={handleAddFormChange}/>
      <input type="decimal" name="hundredMeters" required="required" onChange={handleAddFormChange}/>
      <input type="decimal" name="longJump" required="required" onChange={handleAddFormChange}/>
      <input type="decimal" name="shotPut" required="required" onChange={handleAddFormChange}/>
      <input type="decimal" name="highJump" required="required" onChange={handleAddFormChange}/>
      <input type="decimal" name="fourHundredMeters" required="required" onChange={handleAddFormChange}/>
      <input type="decimal" name="hurdles" required="required" onChange={handleAddFormChange}/>
      <input type="decimal" name="discus" required="required" onChange={handleAddFormChange}/>
      <input type="decimal" name="poleVault" required="required" onChange={handleAddFormChange}/>
      <input type="decimal" name="javelin" required="required"  onChange={handleAddFormChange}/>
      <input type="text" name="fifteenHundredMeters" required="required"  onChange={handleAddFormChange}/>
      <button type="submit">Add</button>
    </form>
  </div>
 );
}

export default Decathlon;