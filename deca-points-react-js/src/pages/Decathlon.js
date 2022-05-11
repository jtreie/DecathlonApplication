import React, { useState, Fragment, useEffect } from 'react';
import "../App.css";
import hundred from "../Calculator/Decathlon/Runs/hundredMeters.js";
import long from "../Calculator/Decathlon/Jumps/longJump.js";
import shot from "../Calculator/Decathlon/Throws/shotPut.js";
import high from "../Calculator/Decathlon/Jumps/highJump.js";
import fourHundred from "../Calculator/Decathlon/Runs/fourHundred.js";
import hurdless from "../Calculator/Decathlon/Runs/hurdles.js"
import disc from "../Calculator/Decathlon/Throws/discusThrow.js";
import pole from "../Calculator/Decathlon/Jumps/poleVault.js";
import jav from "../Calculator/Decathlon/Throws/javelinThrow.js";
import fifteenHundred from "../Calculator/Decathlon/Runs/fifteenHundredMeters.js"
import { Table } from "react-bootstrap"
import { collection, getDocs, addDoc, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from '../firebase';
import { Button, Modal } from 'react-bootstrap';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from 'react-toastify';
import fifteenHundredMeters from '../Calculator/Decathlon/Runs/fifteenHundredMeters.js';

import { } from "bootstrap/dist/css/bootstrap.min.css";



const Decathlon = () => {

  //get data from database
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
  const [editToggle, setEditToggle] = useState(false)

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
  const [uid, setUid] = useState('')
  const [id, setId] = useState('')


  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid = setUid(user.uid);
      alert("user logged in with id " + uid)
    } else {
      alert("user not singed inn")
    }
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (name === '') {
      return
    }
    const decathletesCollectionRef = collection(db, 'decaTable');
    addDoc(decathletesCollectionRef,
      {
        name, dateOfBirth, hundredMeters, longJump, shotPut, highJump, fourHundredMeters,
        hurdles, discus, poleVault, javelin, minutes, seconds, uid
      })
      .then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error.message)
      })
  }

  //show decas

  useState(() => {
    const decathletesCollectionRef = collection(db, 'decaTable');
    const unsubscribe = onSnapshot(decathletesCollectionRef, snapshot => {
      setDecathletes(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    })
    return () => {
      unsubscribe()
    }
  })

  const handleDeleteClick = (id) => {
    const docRef = doc(db, 'decaTable', id)
    deleteDoc(docRef);
  };

  //Edit athletes
  const [modalShow, setModalShow] = useState(false);
  const [tempUid, setTempUid] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [decathlete, setDecathlete] = useState();
  
  function handleSubmitChange(e) {
    e.preventDefault();
    if(name === ""  || id === ""){
      return
    }
    // const newData = {
    //   hundredMeters: hundredMeters, longJump: longJump, shotPut: shotPut, highJump: highJump, fourHundredMeters: fourHundredMeters,
    //   hurdles: hurdles, discus: discus, poleVault: poleVault, javelin: javelin, minutes: minutes, seconds: seconds
    // };
        const docRef = doc(db, 'decaTable', id)
        updateDoc(docRef, {
            id, name, dateOfBirth, hundredMeters, longJump, shotPut, highJump, fourHundredMeters,
            hurdles, discus, poleVault, javelin, minutes, seconds,
        }).then(response => {
            console.log(response)
        })
            .catch(error => console.log(error.message))
  }
  //function for edit popup
  function EditPopUp(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmitChange}>
        <input id='name' type="id" value={id} onChange={e => setId(e.target.value)} />
          <input id='name' type="text" value={name} onChange={e => setName(e.target.value)} />
          <input id='dateOfBirth' type="text" value={dateOfBirth} onChange={e => setDOB(e.target.value)} />
          <input id='hundredMeters' type="decimal" value={hundredMeters} onChange={e => setHundred(e.target.value)} />
          <input id='longJump' type="decimal" value={longJump} onChange={e => setLong(e.target.value)} />
          <input id='shotPut' type="decimal" value={shotPut} onChange={e => setShot(e.target.value)} />
          <input id='highJump' type="decimal" value={highJump} onChange={e => setHigh(e.target.value)} />
          <input id='fourHundredMeters' type="decimal" value={fourHundredMeters} onChange={e => setFour(e.target.value)} />
          <input id='hurdles' type="decimal" value={hurdles} onChange={e => setHurdles(e.target.value)} />
          <input id='discus' type="decimal" value={discus} onChange={e => setDisc(e.target.value)} />
          <input id='poleVault' type="decimal" value={poleVault} onChange={e => setPole(e.target.value)} />
          <input id='javelin' type="decimal" value={javelin} onChange={e => setJav(e.target.value)} />
          <input id='minutes' type="decimal" value={minutes} onChange={e => setMin(e.target.value)} />
          <input id='seconds' type="decimal" value={seconds} onChange={e => setSec(e.target.value)} />
          <button name='btnName' type="submit">Update</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
  return (

    <div className='app-container'>
            < Table>
            <div class="text-center"><button type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:3000/decathlon";
        }}>Decathlon</button> <button type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "http://localhost:3000/heptathlon"
          }}>Womens Heptathlon</button></div>
        <Fragment>
          <div>
            <thead>
              <tr>
                <th>Id</th>
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
              {decathletes.map((decas) => (<tr>
                <td key={decas.id}>{decas.id}</td>
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
                <td></td>
                <td><Button onClick={() => handleDeleteClick(decas.id)}>X</Button>
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    Edit
                  </Button>
                  <EditPopUp
                    show={modalShow}
                    onHide={() => setModalShow(false)} />
                </td></tr>))}
              {/*<td key={decas.id}>{Number(Math.floor(hundred.hundredMeters.a * Math.pow((hundred.hundredMeters.b - Number(decas.data.hundredMeters)), hundred.hundredMeters.c))) +
                Number(Math.floor(long.longJump.a * Math.pow(Number(decas.data.longJump) * 100 - long.longJump.b, long.longJump.c))) +
                Number(Math.floor(shot.shotPut.a * Math.pow((Number(decas.data.shotPut - shotPut.shotPut.b)), shotPut.shotPut.c))) +
                Number(Math.floor(high.highJump.a * Math.pow((Number(decas.data.highJump * 100 - high.highJump.b)), high.highJump.c))) +
                Number(Math.floor(fourHundred.fourHundred.a * Math.pow((fourHundred.fourHundred.b - Number(decas.data.fourHundredMeters)), fourHundred.fourHundred.c))) +
                Number(Math.floor(hurdless.hurdles.a * Math.pow((hurdless.hurdles.b - Number(decas.data.hurdles)), hurdless.hurdles.c))) +
                Number(Math.floor(disc.discusThrow.a * Math.pow((Number(decas.data.discus) - disc.discusThrow.b), disc.discusThrow.c))) +
                Number(Math.floor(pole.poleVault.a * Math.pow((Number(decas.data.poleVault) * 100 - pole.poleVault.b), pole.poleVault.c))) +
                Number(Math.floor(jav.javelinThrow.a * Math.pow((Number(decas.data.javelin) - jav.javelinThrow.b), jav.javelinThrow.c))) +
                Number(Math.floor(fifteenHundredMeters.a * Math.pow((fifteenHundredMeters.b - Number(decas.data.minutes * 60 + decas.data.seconds)), fifteenHundredMeters.c)))}
              </td>
              
              
            </tr>
            ))} */}
            </tbody>
          </div>
        </Fragment>


        {/* </tbody> */}
      </Table>
      {/* </form> */}
      <button onClick={() => setToggle(!toggle)} className='btn' >Add new competitor</button>
      {toggle && (
        <div>
          <form onSubmit={handleSubmit}>
            <input id='name' type="text" value={name} onChange={e => setName(e.target.value)} />
            <input id='dateOfBirth' type="text" value={dateOfBirth} onChange={e => setDOB(e.target.value)} />
            <input id='hundredMeters' type="decimal" value={hundredMeters} onChange={e => setHundred(e.target.value)} />
            <input id='longJump' type="decimal" value={longJump} onChange={e => setLong(e.target.value)} />
            <input id='shotPut' type="decimal" value={shotPut} onChange={e => setShot(e.target.value)} />
            <input id='highJump' type="decimal" value={highJump} onChange={e => setHigh(e.target.value)} />
            <input id='fourHundredMeters' type="decimal" value={fourHundredMeters} onChange={e => setFour(e.target.value)} />
            <input id='hurdles' type="decimal" value={hurdles} onChange={e => setHurdles(e.target.value)} />
            <input id='discus' type="decimal" value={discus} onChange={e => setDisc(e.target.value)} />
            <input id='poleVault' type="decimal" value={poleVault} onChange={e => setPole(e.target.value)} />
            <input id='javelin' type="decimal" value={javelin} onChange={e => setJav(e.target.value)} />
            <input id='minutes' type="decimal" value={minutes} onChange={e => setMin(e.target.value)} />
            <input id='seconds' type="decimal" value={seconds} onChange={e => setSec(e.target.value)} />
            <button name='btnName' type="submit">Add</button>
          </form>
        </div>
      )};
      
      <button onClick={() => setEditToggle(!editToggle)} className='btn' >Edit competitor</button>
      {editToggle && (
        <div>
        <form onSubmit={handleSubmitChange}>
        <input id='id' type="text" value={id} onChange={e => setId(e.target.value)} />
          <input id='name' type="text" value={name} onChange={e => setName(e.target.value)} />
          <input id='dateOfBirth' type="text" value={dateOfBirth} onChange={e => setDOB(e.target.value)} />
          <input id='hundredMeters' type="decimal" value={hundredMeters} onChange={e => setHundred(e.target.value)} />
          <input id='longJump' type="decimal" value={longJump} onChange={e => setLong(e.target.value)} />
          <input id='shotPut' type="decimal" value={shotPut} onChange={e => setShot(e.target.value)} />
          <input id='highJump' type="decimal" value={highJump} onChange={e => setHigh(e.target.value)} />
          <input id='fourHundredMeters' type="decimal" value={fourHundredMeters} onChange={e => setFour(e.target.value)} />
          <input id='hurdles' type="decimal" value={hurdles} onChange={e => setHurdles(e.target.value)} />
          <input id='discus' type="decimal" value={discus} onChange={e => setDisc(e.target.value)} />
          <input id='poleVault' type="decimal" value={poleVault} onChange={e => setPole(e.target.value)} />
          <input id='javelin' type="decimal" value={javelin} onChange={e => setJav(e.target.value)} />
          <input id='minutes' type="decimal" value={minutes} onChange={e => setMin(e.target.value)} />
          <input id='seconds' type="decimal" value={seconds} onChange={e => setSec(e.target.value)} />
          <button name='btnName' type="submit">Update</button>
          </form>
          <br></br>
          <br></br>
      </div>
      )};
    </div>
  )
}

export default Decathlon;