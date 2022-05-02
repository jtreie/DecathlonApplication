import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import "./App.css";
import data from "./deca-mock-data.json";

const App = () => {

  const [competitors, setCompetitors] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName:'',
    dateOfBirth:'',
    hundredMeters:'',
    longJump:'',
    shotPut:'',
    highJump:'',
    fourHundredMeters:'',
    Hurdles:'',
    discus:'',
    poleVault:'',
    javelin:'',
    fifteenHundredMeters:'',
    totalScore:''
    
  })

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
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
      Hurdles: addFormData.Hurdles,
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
          <tr>
          <td>{competitor.fullName}</td>
          <td>{competitor.dateOfBirth}</td>
          <td>{competitor['hundredMeters']}</td>
          <td>{competitor.longJump}</td>
          <td>{competitor.shotPut}</td>
          <td>{competitor.highJump}</td>
          <td>{competitor['fourHundredMeters']}</td>
          <td>{competitor['Hurdles']}</td>
          <td>{competitor.discus}</td>
          <td>{competitor.poleVault}</td>
          <td>{competitor.javelin}</td>
          <td>{competitor['fifteenHundredMeters']}</td>
          <td>{competitor.totalScore}</td>
        </tr>
        ))}
      </tbody>
    </table>
    <h2>Add new competitor</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input type="text" name="fullName" required="required" onChange={handleAddFormChange}/>
      <input type="text" name="dateOfBirth" required="required" onChange={handleAddFormChange}/>
      <input type="decimal" name="hundredMeters" required="required" onChange={handleAddFormChange}/>
      <input type="decimal" name="longJump" required="required" onChange={handleAddFormChange}/>
      <input type="decimal" name="shotPut" required="required" onChange={handleAddFormChange}/>
      <input type="decimal" name="highJump" required="required" onChange={handleAddFormChange}/>
      <input type="decimal" name="fourHundredMeters" required="required" onChange={handleAddFormChange}/>
      <input type="decimal" name="Hurdles" required="required" onChange={handleAddFormChange}/>
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