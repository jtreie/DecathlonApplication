import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import "../App.css"
import {  doc, updateDoc } from "firebase/firestore"
import { db } from '../firebase';


function EditHeptaPopUp(props) {
    //Add deca
 const [name, setName] = useState('')
 const [dateOfBirth, setDOB] = useState('')
 const [longJump, setLong] = useState('')
 const [shotPut, setShot] = useState('')
 const [highJump, setHigh] = useState('')
 const [twoHundredMeters, setTwo] = useState('')
 const [hurdles, setHurdles] = useState('')
 const [javelin, setJav] = useState('')
 const [minutes, setMin] = useState('')
 const [seconds, setSec] = useState('')
 const [id, setId] = useState('')

 function handleSubmitChange(e) {
    e.preventDefault();
    if (name === "" || id === "") {
      return
    }
    const docRef = doc(db, 'heptaTable', id)
    updateDoc(docRef, {
      id, name, dateOfBirth, hurdles, highJump, shotPut, twoHundredMeters,
      longJump, javelin, minutes, seconds
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
            <input placeholder='DMjfOj2vf9CA9lJV28Rb' id='name' type="id" value={id} onChange={e => setId(e.target.value)} />
            <input placeholder='Jane' id='name' type="text" value={name} onChange={e => setName(e.target.value)} />
            <input placeholder='01.01.2000' id='dateOfBirth' type="text" value={dateOfBirth} onChange={e => setDOB(e.target.value)} />
            <input placeholder='14.2' id='hurdles' type="decimal" value={hurdles} onChange={e => setHurdles(e.target.value)} />
            <input placeholder='1.70' id='highJump' type="decimal" value={highJump} onChange={e => setHigh(e.target.value)} />
            <input placeholder='12.20' id='shotPut' type="decimal" value={shotPut} onChange={e => setShot(e.target.value)} />
            <input placeholder='28.9' id='twoHundredMeters' type="decimal" value={twoHundredMeters} onChange={e => setTwo(e.target.value)} />
            <input placeholder='5.80' id='longJump' type="decimal" value={longJump} onChange={e => setLong(e.target.value)} />
            <input placeholder='34' id='javelin' type="decimal" value={javelin} onChange={e => setJav(e.target.value)} />
            <input placeholder='2' id='minutes' type="decimal" value={minutes} onChange={e => setMin(e.target.value)} />
            <input placeholder='45' id='seconds' type="decimal" value={seconds} onChange={e => setSec(e.target.value)} />
            <button name='btnName' type="submit">Update</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          
        <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
  export default EditHeptaPopUp;