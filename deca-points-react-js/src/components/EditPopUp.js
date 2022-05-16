
import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import "../App.css"
import {  doc, updateDoc } from "firebase/firestore"
import { db } from '../firebase';


function EditPopUp(props) {
    //Add deca
 const [name, setName] = useState('')
 const [dateOfBirth, setDOB] = useState('')
 const [hundredMeters, setHundred] = useState('')
 const [longJump, setLong] = useState('')
 const [shotPut, setShot] = useState('')
 const [highJump, setHigh] = useState('')
 const [fourHundredMeters, setFour] = useState('')
 const [hurdles, setHurdles] = useState('')
 const [discus, setDisc] = useState('')
 const [poleVault, setPole] = useState('')
 const [javelin, setJav] = useState('')
 const [minutes, setMin] = useState('')
 const [seconds, setSec] = useState('')
 const [id, setId] = useState('')

 function handleSubmitChange(e) {
    e.preventDefault();
    if (name === "" || id === "") {
      return
    }
    const docRef = doc(db, 'decaTable', id)
    updateDoc(docRef, {
      id, name, dateOfBirth, hundredMeters, longJump, shotPut, highJump, fourHundredMeters,
      hurdles, discus, poleVault, javelin, minutes, seconds,
    }).then(response => {
      console.log(response)
    })
      .catch(error => console.log(error.message))
  }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='modal'
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className='form' onSubmit={handleSubmitChange}>
            <input placeholder='WRJFXrJhAN0UsJWw5WLV' id='id' type="text" value={id} onChange={e => setId(e.target.value)} />
            <input placeholder='Name' id='name' type="text" value={name} onChange={e => setName(e.target.value)} />
            <input placeholder='01/01/2010' id='dateOfBirth' type="text" value={dateOfBirth} onChange={e => setDOB(e.target.value)} />
            <input placeholder='11.2' id='hundredMeters' type="decimal" value={hundredMeters} onChange={e => setHundred(e.target.value)} />
            <input placeholder='6.52' id='longJump' type="decimal" value={longJump} onChange={e => setLong(e.target.value)} />
            <input placeholder='13.30' id='shotPut' type="decimal" value={shotPut} onChange={e => setShot(e.target.value)} />
            <input placeholder='1.94' id='highJump' type="decimal" value={highJump} onChange={e => setHigh(e.target.value)} />
            <input placeholder='48.20' id='fourHundredMeters' type="decimal" value={fourHundredMeters} onChange={e => setFour(e.target.value)} />
            <input placeholder='13.78' id='hurdles' type="decimal" value={hurdles} onChange={e => setHurdles(e.target.value)} />
            <input placeholder='45.2' id='discus' type="decimal" value={discus} onChange={e => setDisc(e.target.value)} />
            <input placeholder='4.20' id='poleVault' type="decimal" value={poleVault} onChange={e => setPole(e.target.value)} />
            <input placeholder='56.20' id='javelin' type="decimal" value={javelin} onChange={e => setJav(e.target.value)} />
            <input placeholder='4' id='minutes' type="decimal" value={minutes} onChange={e => setMin(e.target.value)} />
            <input placeholder='28.2' id='seconds' type="decimal" value={seconds} onChange={e => setSec(e.target.value)} />
            <button name='btnName' type="submit" >Update</button>
        </form>
        </Modal.Body>
        <Modal.Footer>
          
        <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
  export default EditPopUp;