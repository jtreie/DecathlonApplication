// import React, { useState, Fragment } from 'react';
// import { nanoid } from 'nanoid';
// import "./App.css";
// import data from "./deca-mock-data.json";
// import ReadOnlyRow from './components/ReadOnlyRow';
// import EditableRow from './components/EditableRow';

// const Heptathlon = () => {
//     const [competitors, setCompetitors] = useState(data);  //dynamic
//   const [addFormData, setAddFormData] = useState({ //adding new entries
//     fullName:'',
//     dateOfBirth:'',
//     hundredMeters:'',
//     shotPut:'',
//     highJump:'',
//     twoHundredMeters:'',
//     longJump:'',
//     javelin:'',
//     eightHundredMeters:''
    
//   });

//   const [editFormData, setEditFormData] = useState({
//     fullName:'',
//     dateOfBirth:'',
//     hundredMeters:'',
//     shotPut:'',
//     highJump:'',
//     twoHundredMeters:'',
//     longJump:'',
//     javelin:'',
//     eightHundredMeters:''
//   });

//   const [editCompetitorId, setEditCompetitorId] = useState(null);

//   const handleAddFormChange = (event) => {  //asserts correct inserted value to the right field
//     event.preventDefault();

//     const fieldName = event.target.getAttribute("name");
//     const fieldValue = event.target.value;

//     const newFormData = { ...addFormData};
//     newFormData[fieldName] = fieldValue;
//     setAddFormData(newFormData);
//   };

//   const handleEditFormChange = (event) => {
//     event.preventDefault();

//     const fieldName = event.target.getAttribute("name");
//     const fieldValue = event.target.value;

//     const newFormData = { ...editFormData};
//     newFormData[fieldName] = fieldValue;

//     setEditFormData(newFormData);
//   };

//   const handleAddFormSubmit = (event) => {  //adds from the for to the table
//     event.preventDefault();
//     const newCompetitor = {
//       id: nanoid(),
//       fullName: addFormData.fullName,
//       dateOfBirth: addFormData.dateOfBirth,
//       hurdles: addFormData.hurdles,
//       shotPut: addFormData.shotPut,
//       highJump: addFormData.highJump,
//       twoHundredMeters: addFormData.twoHundredMeters,
//       longJump: addFormData.longJump,
//       javelin: addFormData.javelin,
//       eightHundredMeters: addFormData.eightHundredMeters
//     };
//     const newCompetitors = [...competitors, newCompetitor];
//     setCompetitors(newCompetitors);
//   };

//   const handleEditClick = (event, competitor) => {
//     event.preventDefault();
//    setEditCompetitorId(competitor.id);

//    const formValues = { 
//      fullName: competitor.fullName,
//      dateOfBirth: competitor.dateOfBirth,
//      hurdles: competitor.hurdles,
//      shotPut: competitor.shotPut,
//      highJump: competitor.highJump,
//      twoHundredMeters: competitor.twoHundredMeters,
//      longJump: competitor.longJump,
//      javelin: competitor.javelin,
//      eightHundredMeters: competitor.eightHundredMeters
//    };

//    setEditFormData(formValues);
//  };

//   const handleEditFormSubmit = (event) => {
//     event.preventDefault();

//     const editedCompetitor = {
//       id: editCompetitorId,
//       fullName: editFormData.fullName,
//       dateOfBirth: editFormData.dateOfBirth,
//       hurdles: editFormData.hurdles,
//       shotPut: editFormData.shotPut,
//       highJump: editFormData.highJump,
//       twoHundredMeters: editFormData.twoHundredMeters,
//       longJump: editFormData.longJump,
//       javelin: editFormData.javelin,
//       eightHundredMeters: editFormData.eightHundredMeters
//     };

//     const newCompetitors = [...competitors];

//     const index = competitors.findIndex((competitor) => competitor.id === editCompetitorId);

//     newCompetitors[index] = editedCompetitor;

//     setCompetitors(newCompetitors);
//     setEditCompetitorId(null);
//   };

//   const handleCancelClick = () => {
//     setEditCompetitorId(null);
//   };

//   const handleDeleteClick = (competitorId) => {
//     const newCompetitors = [...competitors];

//     const index = competitors.findIndex((competitor) => competitor.id === competitorId);

//     newCompetitors.splice(index, 1);

//     setCompetitors(newCompetitors);
//   };
//     return (
//         <div className='app-container'>
//             <h1>
//                 Womens heptathlon
//             </h1>
//             <table>
//             <thead>
//         <tr>
//           <th>Name</th>
//           <th>Date of birth</th>
//           <th>100m hurdles</th>
//           <th>Shot put</th>
//           <th>High jump</th>
//           <th>200m</th>
//           <th>Long jump</th>
//           <th>Javelin</th>
//           <th>800m</th>
//           <th>Total score</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {competitors.map((competitor) => (
//           <Fragment>
//             {editCompetitorId === competitor.id ? (
//               <EditableRow 
//               editFormData={editFormData} 
//               handleEditFormChange={handleEditFormChange}
//               handleCancelClick={handleCancelClick}/> )
//              : (
//               <ReadOnlyRow 
//               competitor={competitor} 
//               handleEditClick={handleEditClick}
//               handleDeleteClick={handleDeleteClick}/>)
//             }
          
//           </Fragment>
//         ))}
//       </tbody>
//     </table>
//     <h2>Add new competitor</h2>
//     <form onSubmit={handleAddFormSubmit}>
//       <input type="text" name="fullName" required="required" onChange={handleAddFormChange}/>
//       <input type="text" name="dateOfBirth" required="required" onChange={handleAddFormChange}/>
//       <input type="decimal" name="hurdles" required="required" onChange={handleAddFormChange}/>
//       <input type="decimal" name="shotPut" required="required" onChange={handleAddFormChange}/>
//       <input type="decimal" name="highJump" required="required" onChange={handleAddFormChange}/>
//       <input type="decimal" name="twoHundredMeters" required="required" onChange={handleAddFormChange}/>
//       <input type="decimal" name="longJump" required="required" onChange={handleAddFormChange}/>
//       <input type="decimal" name="javelin" required="required"  onChange={handleAddFormChange}/>
//       <input type="text" name="eightHundredMeters" required="required"  onChange={handleAddFormChange}/>
//       <button type="submit">Add</button>
//     </form>
//         </div>
//     )
// }
// export default Heptathlon;