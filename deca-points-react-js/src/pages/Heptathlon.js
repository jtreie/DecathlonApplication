import React, { useState, Fragment, useEffect } from 'react';
import "../App.css";
// import hundred from "../Calculator/Heptathlon/Runs/hundredMeters.js";
// import long from "../Calculator/Heptathlon/Jumps/longJump.js";
// import shot from "../Calculator/Heptathlon/Throws/shotPut.js";
// import high from "../Calculator/Heptathlon/Jumps/highJump.js";
// import fourHundred from "../Calculator/Heptathlon/Runs/fourHundred.js";
// import hurdless from "../Calculator/Heptathlon/Runs/hurdles.js"
// import disc from "../Calculator/Heptathlon/Throws/discusThrow.js";
// import pole from "../Calculator/Heptathlon/Jumps/poleVault.js";
// import jav from "../Calculator/Heptathlon/Throws/javelinThrow.js";
// import fifteenHundred from "../Calculator/Heptathlon/Runs/fifteenHundredMeters.js"
import { Table } from "react-bootstrap"
import { collection, getDocs, addDoc, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from '../firebase';
import { Button, Modal } from 'react-bootstrap';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { } from "bootstrap/dist/css/bootstrap.min.css";



const Heptathlon = () => {

  //get data from database
  const [heptathletes, setHeptathletes] = useState([])
  useEffect(() => {
    getHeptathletes()
  }, [])

  function getHeptathletes() {
    const heptathletesCollectionRef = collection(db,'heptaTable');
    getDocs(heptathletesCollectionRef)
      .then(response => {
        const hepta = response.docs.map(doc => ({ data: doc.data(), id: doc.id }))
        setHeptathletes(hepta)
      })
      .catch(e => console.log(e.message));

  }


  const [toggle, setToggle] = useState(false)
  const [editToggle, setEditToggle] = useState(false)

  //Add hepta
  const [name, setName] = useState('')
  const [dateOfBirth, setDOB] = useState('')
  const [hurdles, setHurdles] = useState('')
  const [highJump, setHigh] = useState('')
  const [shotPut, setShot] = useState('')
  const [twoHundredMeters, setTwo] = useState('')
  const [longJump, setLong] = useState('')
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
    }
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (name === '') {
      return
    }
    const heptathletesCollectionRef = collection(db,'heptaTable');
    addDoc(heptathletesCollectionRef,
      {
        name, dateOfBirth, hurdles, highJump, shotPut, twoHundredMeters,
        longJump, javelin, minutes, seconds, uid
      })
      .then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error.message)
      })
  }

  //show heptas

  useState(() => {
    const heptathletesCollectionRef = collection(db,'heptaTable');
    const unsubscribe = onSnapshot(heptathletesCollectionRef, snapshot => {
      setHeptathletes(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    })
    return () => {
      unsubscribe()
    }
  })

  const handleDeleteClick = (id) => {
    const docRef = doc(db,'heptaTable', id)
    deleteDoc(docRef);
  };

  //Edit athletes
  const [modalShow, setModalShow] = useState(false);
  const [tempUid, setTempUid] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [heptathlete, setHeptathlete] = useState();
  
  function handleSubmitChange(e) {
    e.preventDefault();
    if(name === ""  || id === ""){
      return
    }
    // const newData = {
    //   hundredMeters: hundredMeters, longJump: longJump, shotPut: shotPut, highJump: highJump, fourHundredMeters: fourHundredMeters,
    //   hurdles: hurdles, discus: discus, poleVault: poleVault, javelin: javelin, minutes: minutes, seconds: seconds
    // };
        const docRef = doc(db,'heptaTable', id)
        updateDoc(docRef, {
            id, name, dateOfBirth, hurdles, highJump, shotPut, twoHundredMeters,
            longJump, javelin, minutes, seconds
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
            Edit heptathlete
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmitChange}>
        <input id='name' type="id" value={id} onChange={e => setId(e.target.value)} />
          <input id='name' type="text" value={name} onChange={e => setName(e.target.value)} />
          <input id='dateOfBirth' type="text" value={dateOfBirth} onChange={e => setDOB(e.target.value)} />
          <input id='hurdles' type="decimal" value={hurdles} onChange={e => setHurdles(e.target.value)} />
          <input id='highJump' type="decimal" value={highJump} onChange={e => setHigh(e.target.value)} />
          <input id='shotPut' type="decimal" value={shotPut} onChange={e => setShot(e.target.value)} />
          <input id='twoHundredMeters' type="decimal" value={twoHundredMeters} onChange={e => setTwo(e.target.value)} />
          <input id='longJump' type="decimal" value={longJump} onChange={e => setLong(e.target.value)} />
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
                <th>100m hurdles</th>
                <th>High Jump</th>
                <th>shotPut</th>
                <th>200m</th>
                <th>Long Jump</th>
                <th>Javelin</th>
                <th>1500m</th>
                <th>Total score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {heptathletes.map((heptas) => (<tr>
                <td key={heptas.id}>{heptas.id}</td>
                <td key={heptas.id}>{heptas.data.name}</td>
                <td key={heptas.id}>{heptas.data.dateOfBirth}</td>
                <td key={heptas.id}>{heptas.data.hurdles}</td>
                <td key={heptas.id}>{heptas.data.highJump}</td>
                <td key={heptas.id}>{heptas.data.shotPut}</td>
                <td key={heptas.id}>{heptas.data.twoHundredMeters}</td>
                <td key={heptas.id}>{heptas.data.longJump}</td>
                <td key={heptas.id}>{heptas.data.javelin}</td>
                <td key={heptas.id}>{heptas.data.minutes}:{heptas.data.seconds}</td>
                <td></td>
                <td><Button onClick={() => handleDeleteClick(heptas.id)}>X</Button>
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    Edit
                  </Button>
                  <EditPopUp
                    show={modalShow}
                    onHide={() => setModalShow(false)} />
                </td></tr>))}
              {/*<td key={heptas.id}>{Number(Math.floor(hundred.hundredMeters.a * Math.pow((hundred.hundredMeters.b - Number(heptas.data.hundredMeters)), hundred.hundredMeters.c))) +
                Number(Math.floor(long.longJump.a * Math.pow(Number(heptas.data.longJump) * 100 - long.longJump.b, long.longJump.c))) +
                Number(Math.floor(shot.shotPut.a * Math.pow((Number(heptas.data.shotPut - shotPut.shotPut.b)), shotPut.shotPut.c))) +
                Number(Math.floor(high.highJump.a * Math.pow((Number(heptas.data.highJump * 100 - high.highJump.b)), high.highJump.c))) +
                Number(Math.floor(fourHundred.fourHundred.a * Math.pow((fourHundred.fourHundred.b - Number(heptas.data.fourHundredMeters)), fourHundred.fourHundred.c))) +
                Number(Math.floor(hurdless.hurdles.a * Math.pow((hurdless.hurdles.b - Number(heptas.data.hurdles)), hurdless.hurdles.c))) +
                Number(Math.floor(disc.discusThrow.a * Math.pow((Number(heptas.data.discus) - disc.discusThrow.b), disc.discusThrow.c))) +
                Number(Math.floor(pole.poleVault.a * Math.pow((Number(heptas.data.poleVault) * 100 - pole.poleVault.b), pole.poleVault.c))) +
                Number(Math.floor(jav.javelinThrow.a * Math.pow((Number(heptas.data.javelin) - jav.javelinThrow.b), jav.javelinThrow.c))) +
                Number(Math.floor(fifteenHundredMeters.a * Math.pow((fifteenHundredMeters.b - Number(heptas.data.minutes * 60 + heptas.data.seconds)), fifteenHundredMeters.c)))}
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
          <input id='hurdles' type="decimal" value={hurdles} onChange={e => setHurdles(e.target.value)} />
          <input id='highJump' type="decimal" value={highJump} onChange={e => setHigh(e.target.value)} />
          <input id='shotPut' type="decimal" value={shotPut} onChange={e => setShot(e.target.value)} />
          <input id='twoHundredMeters' type="decimal" value={twoHundredMeters} onChange={e => setTwo(e.target.value)} />
          <input id='longJump' type="decimal" value={longJump} onChange={e => setLong(e.target.value)} />
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
        <input id='name' type="id" value={id} onChange={e => setId(e.target.value)} />
          <input id='name' type="text" value={name} onChange={e => setName(e.target.value)} />
          <input id='dateOfBirth' type="text" value={dateOfBirth} onChange={e => setDOB(e.target.value)} />
          <input id='hurdles' type="decimal" value={hurdles} onChange={e => setHurdles(e.target.value)} />
          <input id='highJump' type="decimal" value={highJump} onChange={e => setHigh(e.target.value)} />
          <input id='shotPut' type="decimal" value={shotPut} onChange={e => setShot(e.target.value)} />
          <input id='twoHundredMeters' type="decimal" value={twoHundredMeters} onChange={e => setTwo(e.target.value)} />
          <input id='longJump' type="decimal" value={longJump} onChange={e => setLong(e.target.value)} />
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

export default Heptathlon;