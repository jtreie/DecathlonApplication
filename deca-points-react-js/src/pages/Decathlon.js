import React, { useState, Fragment, useEffect } from 'react';
import { nanoid } from 'nanoid';
import "../App.css";
import data from "../deca-mock-data.json";
import ReadOnlyRow from '../components/ReadOnlyRow';
import EditableRow from '../components/EditableRow';
import hundredMeters from "../Calculator/Decathlon/Runs/hundredMeters.js";
import {Table} from "react-bootstrap"
import {collection, doc, getDocs } from "firebase/firestore"
import { db } from '../firebase';
import longJump from 'Calculator/Decathlon/Jumps/longJump';
import shotPut from 'Calculator/Decathlon/Throws/shotPut';
import highJump from 'Calculator/Decathlon/Jumps/highJump';
import hurdles from 'Calculator/Decathlon/Runs/hurdles';
import discusThrow from 'Calculator/Decathlon/Throws/discusThrow';
import poleVault from 'Calculator/Decathlon/Jumps/poleVault';
import javelinThrow from 'Calculator/Decathlon/Throws/javelinThrow';
import fifteenHundredMeters from 'Calculator/Decathlon/Runs/fifteenHundredMeters';
import fourHundred from 'Calculator/Decathlon/Runs/fourHundred';
import AddDecathlete from './AddDecathlete';
    


const Decathlon = () => {

  const [decathletes, setDecathletes] = useState([])
  useEffect(() => {
      getDecathletes()
  }, [])

  function getDecathletes() {
      const decathletesCollectionRef = collection(db, 'decaTable');
      getDocs(decathletesCollectionRef)
      .then(response => {
          const deca = response.docs.map(doc => ({data: doc.data(), id:doc.id}))
          setDecathletes(deca)
      })
      .catch(e => console.log(e.message));

  }
    
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
    minutes:'',
    seconds:''
    
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
    minutes:'',
    seconds:''
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
      minutes: addFormData.minutes,
      seconds: addFormData.seconds
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
     minutes: competitor.minutes,
     seconds: competitor. seconds
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


  const handleDeleteClick = (competitorId) => {
    const newCompetitors = [...competitors];

    const index = competitors.findIndex((competitor) => competitor.id === competitorId);

    newCompetitors.splice(index, 1);

    setCompetitors(newCompetitors);
  };
  const hundredPoints = () => {
    var number = 0;
    // if (decathletes.hundredMeters === ''){
    //   number += 0;
    // } else if(decathletes.hundredMeters > 17.83 || decathletes.hundredMeters < 9.5) 
    // {number += 0;
    // } else{
    //   number += Number(Math.floor(hundredMeters.hundredMeters.a*Math.pow((hundredMeters.hundredMeters.b-Number(decathletes.data.hundredMeters)), hundredMeters.hundredMeters.c)))
    // } 
    number = decathletes.data.hundredMeters;
    return number;
  }

 return ( 
  
  <div className='app-container'>
    <h4>List of asdasd</h4>
        
      <h1><button type="button"
       onClick={(e) => {
         e.preventDefault();
         window.location.href = "http://localhost:3000/decathlon";
       } }>Decathlon</button> <button type="button" 
    onClick={(e) => {
      e.preventDefault();
      window.location.href="http://localhost:3000/heptathlon"}}>Womens Heptathlon</button></h1>
      
    <form onSubmit={handleEditFormSubmit}>
    < Table>
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
               handleEditFormChange={handleEditFormChange}
               handleCancelClick={handleCancelClick}/>
              )
            }
          
          </Fragment>
        ))}
            {decathletes.map((decas) => (<tr>
            <td key={decas.id}>{decas.data.name}</td>
            <td key={decas.id}>{decas.data.dateOfBirth}</td>
            <td key={decas.id}>{decas.data.hundredMeters}</td>
            <td key={decas.id}>{decas.data.longJump}</td>
            <td key={decas.id}>{decas.data.shotPut}</td>
            <td key={decas.id}>{decas.data.highJump}</td>
            <td key={decas.id}>{decas.data.fourHundredMeters}</td>
            <td key={decas.id}>{decas.data.hurdles}</td>
            <td key={decas.id}>{decas.data.discus}</td>
            <td key={decas.id}>{decas.data.poleVault}</td>
            <td key={decas.id}>{decas.data.javelin}</td>
            <td key={decas.id}>{decas.data.minutes}:{decas.data.seconds}</td>
            <td key={decas.id}>{Number(Math.floor(hundredMeters.hundredMeters.a*Math.pow((hundredMeters.hundredMeters.b-Number(decas.data.hundredMeters)), hundredMeters.hundredMeters.c)))+
            Number(Math.floor(longJump.longJump.a*Math.pow(Number(decas.data.longJump)*100-longJump.longJump.b, longJump.longJump.c)))+
            Number(Math.floor(shotPut.shotPut.a*Math.pow((Number(decas.data.shotPut-shotPut.shotPut.b)), shotPut.shotPut.c)))+
            Number(Math.floor(highJump.highJump.a*Math.pow((Number(decas.data.highJump*100-highJump.highJump.b)), highJump.highJump.c)))+
            Number(Math.floor(fourHundred.fourHundred.a*Math.pow((fourHundred.fourHundred.b-Number(decas.data.fourHundredMeters)), fourHundred.fourHundred.c)))+
            Number(Math.floor(hurdles.hurdles.a*Math.pow((hurdles.hurdles.b-Number(decas.data.hurdles)), hurdles.hurdles.c)))+
            Number(Math.floor(discusThrow.discusThrow.a*Math.pow((Number(decas.data.discus)-discusThrow.discusThrow.b), discusThrow.discusThrow.c)))+
            Number(Math.floor(poleVault.poleVault.a*Math.pow((Number(decas.data.poleVault)*100-poleVault.poleVault.b), poleVault.poleVault.c)))+
            Number(Math.floor(javelinThrow.javelinThrow.a*Math.pow((Number(decas.data.javelin)-javelinThrow.javelinThrow.b), javelinThrow.javelinThrow.c)))+
            Number(Math.floor(fifteenHundredMeters.fifteenHundredMeters.a*Math.pow((fifteenHundredMeters.fifteenHundredMeters.b-Number(decas.data.minutes*60+decas.data.seconds)), fifteenHundredMeters.fifteenHundredMeters.c)))}
            </td>
            <td><button type="button" onClick={(event) => handleEditClick(event, decathletes)}>Edit</button>
            <button type="button" onClick={() => handleDeleteClick(decathletes.id)}>Delete</button></td>
            </tr>
            ))}
      </tbody>
    </Table>
    </form>
    
       <button onClick={() => setToggle(!toggle)} className='btn' >Add new competitor</button>
      {toggle && (
        <AddDecathlete />
      )}
    </div>
 );
}

export default Decathlon;