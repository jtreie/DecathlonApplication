import React, { useState, Fragment, useEffect, useRef } from 'react';
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
import { collection, getDocs, addDoc, doc, deleteDoc, onSnapshot, updateDoc, query } from "firebase/firestore"
import { ref as sRef } from "firebase/storage"
import { orderByChild } from "firebase/database"
import { db } from '../firebase';
import { Button, Modal } from 'react-bootstrap';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { CSVLink } from 'react-csv'

// import { } from "bootstrap/dist/css/bootstrap.min.css";



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

  //toggle add and edit forms
  const [toggle, setToggle] = useState(false)
  const [editToggle, setEditToggle] = useState(false)

  //calculate points

  //etst
  // let result = decathletes.map(a => a.longJump)
  // const q = query(decathletesCollectionRef, where("name", "array-contains", "jane"))
  // const decathlete = {
  //   fullName:   decathletes.map(a => a.name),
  //   hundredMeters: decathletes.map(a => a.hundredMeters)
  // }


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
    } else {
      uid = setUid('')
    }
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (name === '') {
      return
    }
    // const number = uid.substring(0,7) + Math.floor(Math.random()*(999-100+1)+100);

    const decathletesCollectionRef = collection(db, 'decaTable');
    // setDoc(doc(decathletesCollectionRef, number),
    //   {
    //     name, dateOfBirth, hundredMeters, longJump, shotPut, highJump, fourHundredMeters,
    //     hurdles, discus, poleVault, javelin, minutes, seconds
    //   })
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
            <button name='btnName' type="submit">Update</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
  const ShowDecas = ({ decas }) => {
    const hundredPoints = () => {
      var number = 0;
      if (decas.data.hundredMeters === '') {
        number += 0
      } else if (decas.data.hundredMeters < 9.5 || decas.data.hundredMeters > 17.5) {
        number += 0;
      } else {
        number += Math.floor(hundred.hundredMeters.a * Math.pow((hundred.hundredMeters.b - Number(decas.data.hundredMeters)), hundred.hundredMeters.c))
      }
      console.log(number);
      return number;
    }
    const longJumpPoints = () => {
      var number = 0;
      if (decas.data.longJump === '') {
        number += 0
      } else if (decas.data.longJump > 9.49 || decas.data.longJump < 2.25) {
        number += 0;
      } else {
        number += Math.floor(long.longJump.a * Math.pow((Number(decas.data.longJump) * 100 - long.longJump.b), long.longJump.c))
      }
      return number;
    }
    const shotPutPoints = () => {
      var number = 0;
      if (decas.data.shotPut === '') {
        number += 0
      } else if (decas.data.shotPut > 23.99 || decas.data.shotPut < 1.53) {
        number += 0;
      } else {
        number += Math.floor(shot.shotPut.a * Math.pow((Number(decas.data.shotPut) - shot.shotPut.b), shot.shotPut.c))
      }
      return number;
    }
    const highJumpPoints = () => {
      var number = 0;
      if (decas.data.highJump === '') {
        number += 0
      } else if (decas.data.highJump > 2.59 || decas.data.highJump < 0.77) {
        number += 0;
      } else {
        number += Math.floor(high.highJump.a * Math.pow((Number(decas.data.highJump) * 100 - high.highJump.b), high.highJump.c))
      }
      return number;
    }
    const fourHundredPoints = () => {
      var number = 0;
      if (decas.data.fourHundredMeters === '') {
        number += 0
      } else if (decas.data.fourHundredMeters < 41.47 || decas.data.fourHundredMeters > 81.21) {
        number += 0;
      } else {
        number += Math.floor(fourHundred.fourHundred.a * Math.pow((fourHundred.fourHundred.b - Number(decas.data.fourHundredMeters)), fourHundred.fourHundred.c))
      }
      return number;
    }
    const hurdlesPoints = () => {
      var number = 0;
      if (decas.data.hurdles === '') {
        number += 0
      } else if (decas.data.hurdles < 12 || decas.data.hurdles > 28.09) {
        number += 0;
      } else {
        number += Math.floor(hurdless.hurdles.a * Math.pow((hurdless.hurdles.b - Number(decas.data.hurdles)), hurdless.hurdles.c))
      }
      return number;
    }
    const discusPoints = () => {
      var number = 0;
      if (decas.data.discus === '') {
        number += 0
      } else if (decas.data.discus < 4.10 || decas.data.discus > 79.41) {
        number += 0;
      } else {
        number += Math.floor(disc.discusThrow.a * Math.pow((Number(decas.data.discus) - disc.discusThrow.b), disc.discusThrow.c))
      }
      return number;
    }
    const poleVaultPoints = () => {
      var number = 0;
      if (decas.data.poleVault === '') {
        number += 0
      } else if (decas.data.poleVault < 1.03 || decas.data.poleVault >6.49) {
        number += 0;
      } else {
        number += Math.floor(pole.poleVault.a * Math.pow((Number(decas.data.poleVault)*100 - pole.poleVault.b), pole.poleVault.c))
      }
      return number;
    }
    const javelinPoints = () => {
      var number = 0;
      if (decas.data.javelin === '') {
        number += 0
      } else if (decas.data.javelin > 102.85 || decas.data.javelin < 7.12) {
        number += 0;
      } else {
        number += Math.floor(jav.javelinThrow.a*Math.pow((Number(decas.data.javelin)-jav.javelinThrow.b), jav.javelinThrow.c))
      }
      return number;

    }
    const fifteenHundredPoints = () => {
      var time = Number(decas.data.minutes * 60 + Number(decas.data.seconds))
      var number = 0;
      if (time === '') {
        number += 0
      } else if (time < 202.23 || time > 474.11) {
        number += 0;
      } else {
        number += Math.floor(fifteenHundred.fifteenHundredMeters.a * Math.pow(Number(fifteenHundred.fifteenHundredMeters.b-time), fifteenHundred.fifteenHundredMeters.c))
      }
      return number;
    }
    return (
      <tr>
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
        <td key={decas.id}> {
          hundredPoints() +
           longJumpPoints() +
           shotPutPoints() +
          highJumpPoints() +
          fourHundredPoints()+
           hurdlesPoints() +
           discusPoints() +
           poleVaultPoints() +
           javelinPoints()+
            fifteenHundredPoints()
        }
        </td>
        <td><button className='delete' onClick={() => handleDeleteClick(decas.id)}>X</button>
          <button className='edit' variant="primary" onClick={() => setModalShow(true)}>
            Edit
          </button>
          <EditPopUp
            show={modalShow}
            onHide={() => setModalShow(false)} />
        </td>
        <td key={decas.id}>{decas.id}</td>

      </tr>
    )
  }

  return (

    <div>

      <table className="content-table">
        <div class="text-center"><button type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "http://localhost:3000/decathlon";
          }}>Mens Decathlon</button> <button type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://localhost:3000/heptathlon"
            }}>Womens Heptathlon</button></div>
        <br />
        <Fragment>
          <div>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of birth</th>
                <th>100m</th>
                <th>Long</th>
                <th>Shot  Put</th>
                <th>High Jump</th>
                <th>400m</th>
                <th>110m hurdles</th>
                <th>Discus</th>
                <th>Pole vault</th>
                <th>Javelin</th>
                <th>1500m</th>
                <th>Total score</th>
                <th>Actions</th>
                <th>Id</th>
              </tr>
            </thead>
            <tbody>
              {decathletes.map((decas) => (<ShowDecas decas={decas}/>))}
            </tbody>
          </div>
        </Fragment>
      </table>
      <div className='app-container'>
        <button onClick={() => setToggle(!toggle)} className='btn' >Add new competitor</button>
        {toggle && (
          <div>
            <form onSubmit={handleSubmit}>
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
              <button name='btnName' type="submit">Add</button>
            </form>
          </div>
        )}

        <button onClick={() => setEditToggle(!editToggle)} className='btn' >Edit competitor</button>
        {editToggle && (
          <div>
            <form onSubmit={handleSubmitChange}>
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
              <button name='btnName' type="submit">Update</button>
            </form>
            <br></br>
            <br></br>
          </div>
        )}
      </div>
    </div>
  )
}

export default Decathlon;