import React, { useState, Fragment, Component } from 'react';
import { nanoid } from 'nanoid';
import "../App.css";
import data from "../deca-mock-data.json";
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import { useTranslation, Trans } from 'react-i18next'
    

const lngs = [
      { value: 'en', text: "English" },
      { value: 'est', text: "Eesti" }
    ]
const Decathlon = () => {
  
  const { t, i18n } = useTranslation(); 
//   const [lang, setLang] = useState('en');
//   const handleChange = e => { 
//     setLang(e.target.value);
//     let loc = "http://localhost:3000/decathlon";
//     window.location.replace(loc + "?lng=" + e.target.value);
// }

  const [toggle, setToggle] = useState(false)
  
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

  const handleAddFormSubmit = (event) => {  //adds from the form to the table
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

<header className="App-header">
        <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        <p>
          <Trans i18nKey="description.part1">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('description.part2')}
        </a>
      </header>


      <h1><button type="button"
       onClick={(e) => {
         e.preventDefault();
         window.location.href = "http://localhost:3000/decathlon";
       } }>Decathlon</button> <button type="button" 
    onClick={(e) => {
      e.preventDefault();
      window.location.href="http://localhost:3000/heptathlon"}}>Womens Heptathlon</button></h1>
      
    <form onSubmit={handleEditFormSubmit}>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of birth</th>
          <th>100m</th>
          <th>Long</th>
          <th>shotPut</th>
          <th>High Jump</th>
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
      <button onClick={() => setToggle(!toggle)} className='btn' >Add new competitor</button>
      {toggle && (
      <form onSubmit={handleAddFormSubmit}>
      <input type="text" name="fullName" onChange={handleAddFormChange}/>
      <input type="text" name="dateOfBirth" onChange={handleAddFormChange}/>
      <input type="decimal" name="hundredMeters" onChange={handleAddFormChange}/>
      <input type="decimal" name="longJump" onChange={handleAddFormChange}/>
      <input type="decimal" name="shotPut" onChange={handleAddFormChange}/>
      <input type="decimal" name="highJump" onChange={handleAddFormChange}/>
      <input type="decimal" name="fourHundredMeters" onChange={handleAddFormChange}/>
      <input type="decimal" name="hurdles" onChange={handleAddFormChange}/>
      <input type="decimal" name="discus" onChange={handleAddFormChange}/>
      <input type="decimal" name="poleVault" onChange={handleAddFormChange}/>
      <input type="decimal" name="javelin"  onChange={handleAddFormChange}/>
      <input type="text" name="fifteenHundredMeters"  onChange={handleAddFormChange}/>
      <button type="submit">Add</button>
    </form>
    )}   
    </div>
 );
}

export default Decathlon;