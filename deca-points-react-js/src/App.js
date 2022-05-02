import React, { useState, Fragment } from 'react';
import { nanoid } from 'nanoid';
import "./App.css";
import data from "./deca-mock-data.json";
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';

const App = () => {

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
    fifteenHundredMeters:'',
    totalScore:''
    
  })

  const handleAddFormChange = (event) => {  //asserts correct inserted value to the right field
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
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
      fifteenHundredMeters: addFormData.fifteenHundredMeters,
      totalScore: addFormData.totalScore
    };
    const newCompetitors = [...competitors, newCompetitor];
    setCompetitors(newCompetitors);
  };

  return <div className='app-container'>
    <form>
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
        </tr>
      </thead>
      <tbody>
        {competitors.map((competitor) => (
          <Fragment>
              <EditableRow/>
          <ReadOnlyRow competitor={competitor}/>
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
      <input type="number" name="totalScore" required="required" onChange={handleAddFormChange}/>
      <button type="submit">Add</button>
    </form>
  </div>;
}
export default App;