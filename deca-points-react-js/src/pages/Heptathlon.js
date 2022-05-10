import React, { useState, Fragment } from 'react';
import { nanoid } from 'nanoid';
import "../App.css";
import data from "../hept-mock-data.json";
import ReadOnlyHeptRow from '../components/ReadOnlyHeptRow.js';
import EditableHeptRow from '../components/EditableHeptRow';


  
const Heptathlon = () => {

  const [toggle, setToggle] = useState(false)

  const [heptathletes, setHeptathletes] = useState(data);  //dynamic
  const [addFormData, setAddFormData] = useState({ //adding new entries
    fullName:'',
    dateOfBirth:'',
    hurdles:'',
    highJump:'',
    shotPut:'',
    twoHundredMeters:'',
    longJump:'',
    javelin:'',
    eightHundredMeters:''
    
  });

  const [editFormData, setEditFormData] = useState({
    fullName:'',
    dateOfBirth:'',
    hurdles:'',
    highJump:'',
    shotPut:'',
    twoHundredMeters:'',
    longJump:'',
    javelin:'',
    eightHundredMeters:''
  });

  const [editHeptathleteId, setEditHeptathleteId] = useState(null);

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
    const newHeptathlete = {
      id: nanoid(),
      fullName: addFormData.fullName,
      dateOfBirth: addFormData.dateOfBirth,
      hurdles: addFormData.hurdles,
      highJump: addFormData.highJump,
      shotPut: addFormData.shotPut,
      twoHundredMeters: addFormData.twoHundredMeters,
      longJump: addFormData.longJump,
      javelin: addFormData.javelin,
      eightHundredMeters: addFormData.eightHundredMeters
    };
    const newHeptathletes = [...heptathletes, newHeptathlete];
    setHeptathletes(newHeptathletes);
  };

  const handleEditClick = (event, heptathlete) => {
    event.preventDefault();
   setEditHeptathleteId(heptathlete.id);

   const formValues = { 
     fullName: heptathlete.fullName,
     dateOfBirth: heptathlete.dateOfBirth,
     hurdles: heptathlete.hurdles,
     highJump: heptathlete.highJump,
     shotPut: heptathlete.shotPut,
     twoHundredMeters: heptathlete.twoHundredMeters,
     longJump: heptathlete.longJump,
     javelin: heptathlete.javelin,
     eightHundredMeters: heptathlete.eightHundredMeters
   };

   setEditFormData(formValues);
 };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedHeptathlete = {
      id: editHeptathleteId,
      fullName: editFormData.fullName,
      dateOfBirth: editFormData.dateOfBirth,
      hurdles: editFormData.hurdles,
      highJump: editFormData.highJump,
      shotPut: editFormData.shotPut,
      twoHundredMeters: editFormData.twoHundredMeters,
      longJump: editFormData.longJump,
      javelin: editFormData.javelin,
      eightHundredMeters: editFormData.eightHundredMeters
    };

    const newHeptathletes = [...heptathletes];

    const index = heptathletes.findIndex((heptathlete) => heptathlete.id === editHeptathleteId);

    newHeptathletes[index] = editedHeptathlete;

    setHeptathletes(newHeptathletes);
    setEditHeptathleteId(null);
  };

  const handleCancelClick = () => {
    setEditHeptathleteId(null);
  };

  const handleDeleteClick = (heptathleteId) => {
    const newHeptathletes = [...heptathletes];

    const index = heptathletes.findIndex((heptathlete) => heptathlete.id === heptathleteId);

    newHeptathletes.splice(index, 1);

    setHeptathletes(newHeptathletes);
  };  

 return (
    <div className='app-container'>
     <h1><button type="button"
       onClick={(e) => {
         e.preventDefault();
         window.location.href = "http://localhost:3000/decathlon";
       } }>Mens Decathlon</button>
       <button type="button"
         onClick={(e) => {
           e.preventDefault();
           window.location.href = "http://localhost:3000/heptathlon";
         } }>Womens Heptathlon</button></h1>
     <form onSubmit={handleEditFormSubmit}>
       <table>
         <thead>
           <tr>
             <th>Name</th>
             <th>Date of birth</th>
             <th>Hurdles</th>
             <th>High jump</th>
             <th>Shot put</th>
             <th>200m</th>
             <th>Long Jump</th>
             <th>Javelin</th>
             <th>800m</th>
             <th>Total score</th>
             <th>Actions</th>
           </tr>
         </thead>
         <tbody>
           {heptathletes.map((heptathlete) => (
             <Fragment>
               {editHeptathleteId === heptathlete.id ? (
                 <EditableHeptRow
                   editFormData={editFormData}
                   handleEditFormChange={handleEditFormChange}
                   handleCancelClick={handleCancelClick} />)
                 : (
                   <ReadOnlyHeptRow
                     heptathlete={heptathlete}
                     handleEditClick={handleEditClick}
                     handleDeleteClick={handleDeleteClick} />)}

             </Fragment>
           ))}
         </tbody>
       </table>
     </form>
     {toggle && (          
       <form onSubmit={handleAddFormSubmit}>
       <input type="text" name="fullName" required="required" onChange={handleAddFormChange} />
       <input type="text" name="dateOfBirth" required="required" onChange={handleAddFormChange} />
       <input type="decimal" name="hurdles" onChange={handleAddFormChange} />
       <input type="decimal" name="highJump" onChange={handleAddFormChange} />
       <input type="decimal" name="shotPut" onChange={handleAddFormChange} />
       <input type="decimal" name="twoHundredMeters" onChange={handleAddFormChange} />
       <input type="decimal" name="longJump" onChange={handleAddFormChange} />
       <input type="decimal" name="javelin" onChange={handleAddFormChange} />
       <input type="text" name="eightHundredMeters" onChange={handleAddFormChange} />
       <button type="submit">Add</button>
     </form> 
      )}
     <button onClick={() => setToggle(!toggle)} className='btn' >Add new competitor</button>
      
    </div>
 );
}

export default Heptathlon;