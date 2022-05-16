import React, { useState, Fragment, useEffect } from 'react';
import "../App.css";
import { collection, getDocs, addDoc, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from '../firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import long from "../Calculator/Heptathlon/Jumps/longJump.js";
import shot from "../Calculator/Heptathlon/Throws/shotPut.js";
import high from "../Calculator/Heptathlon/Jumps/highJump.js";
import twoHundred from "../Calculator/Heptathlon/Runs/twoHundredMeters.js";
import hurdless from "../Calculator/Heptathlon/Runs/hurdles.js"
import jav from "../Calculator/Heptathlon/Throws/javelin";
import eight from "../Calculator/Heptathlon/Runs/eightHundredMeters";
import { } from "bootstrap/dist/css/bootstrap.min.css";
import EditHeptaPopUp from 'components/EditHeptaPopUp';



const Heptathlon = () => {

  //get data from database
  const [heptathletes, setHeptathletes] = useState([])
  useEffect(() => {
    getHeptathletes()
  }, [])

  function getHeptathletes() {
    const heptathletesCollectionRef = collection(db, 'heptaTable');
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
    const heptathletesCollectionRef = collection(db, 'heptaTable');
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
    const heptathletesCollectionRef = collection(db, 'heptaTable');
    const unsubscribe = onSnapshot(heptathletesCollectionRef, snapshot => {
      setHeptathletes(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    })
    return () => {
      unsubscribe()
    }
  })

  const handleDeleteClick = (id) => {
    const docRef = doc(db, 'heptaTable', id)
    deleteDoc(docRef);
  };

  //Edit athletes
  const [modalShow, setModalShow] = useState(false);
  const [tempUid, setTempUid] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [heptathlete, setHeptathlete] = useState();

  function handleSubmitChange(e) {
    e.preventDefault();
    if (name === "" || id === "") {
      return
    }
    // const newData = {
    //   hundredMeters: hundredMeters, longJump: longJump, shotPut: shotPut, highJump: highJump, fourHundredMeters: fourHundredMeters,
    //   hurdles: hurdles, discus: discus, poleVault: poleVault, javelin: javelin, minutes: minutes, seconds: seconds
    // };
    const docRef = doc(db, 'heptaTable', id)
    updateDoc(docRef, {
      id, name, dateOfBirth, hurdles, highJump, shotPut, twoHundredMeters,
      longJump, javelin, minutes, seconds
    }).then(response => {
      console.log(response)
    })
      .catch(error => console.log(error.message))
  }
  //function for edit popup
      
  const ShowHeptas = ({heptas}) => {
    const hurdlesPoints = () => {
      var number = 0;
      if(heptas.data.hurdles === '') 
      {number += 0
      } else if(heptas.data.hurdles < 11.50 || heptas.data.hurdles > 26.40){
        number += 0;
      } else  {
        number += Math.floor(hurdless.hurdles.a*Math.pow((hurdless.hurdles.b-Number(heptas.data.hurdles)), hurdless.hurdles.c))
      } 
      return number;
    }
  const highJumpPoints = () => {
    var number = 0;
    if(heptas.data.highJump === '') 
    {number += 0
    } else if(heptas.data.highJump > 2.19 || heptas.data.highJump < 0.76) {
      number += 0;
    } else {
      number += Math.floor(high.highJump.a*Math.pow((Number(heptas.data.highJump)*100-high.highJump.b), high.highJump.c))
    } 
    return number;
  }
  const shotPutPoints = () => {
    var number = 0;
    if(heptas.data.shotPut === '') 
    {number += 0
    } else if (heptas.data.shotPut > 24.40 || heptas.data.shotPut < 1.53){
      number += 0;
    } else {
      number += Math.floor(shot.shotPut.a*Math.pow((Number(heptas.data.shotPut)-shot.shotPut.b), shot.shotPut.c))
    } 
    return number;
  }
  const twoHundredPoints = () => {
    var number = 0;
    if(heptas.data.twoHundredMeters === '') 
    {number += 0
    } else if(heptas.data.twoHundredMeters < 20.50 || heptas.data.twoHundredMeters > 42.08) {
      number += 0;
    } else {
      number += Math.floor(twoHundred.twoHundredMeters.a*Math.pow((twoHundred.twoHundredMeters.b-Number(heptas.data.twoHundredMeters)), twoHundred.twoHundredMeters.c))
    } 
    return number;
  }
  
  
  const longJumpPoints = () => {
    var number = 0;
    if(heptas.data.longJump === '') 
    {number += 0
    } else if(heptas.data.longJump > 7.99 || heptas.data.longJump < 2.14){
      number += 0;
    } else {
      number += Math.floor(long.longJump.a*Math.pow((Number(heptas.data.longJump)*100-long.longJump.b), long.longJump.c))
    } 
    return number;
  }
  const javelinPoints = () => {
    var number = 0;
    if(heptas.data.javelin === '') 
    {number += 0
    } else if(heptas.data.javelin > 82.63 || heptas.data.javelin < 3.87) {
      number += 0;
    }else{
      number += Math.floor(jav.javelin.a*Math.pow((Number(heptas.data.javelin)-jav.javelin.b), jav.javelin.c))
    } 
    return number;
    
  }
  const eightHundredPoints = () => {
    var time = Number(heptas.data.minutes*60+heptas.data.seconds)
    var number = 0;
    if(heptas.data.eightHundredMeters === '') 
    {number += 0
    } else if(time < 111.71 || time > 250.79) {
      number += 0;
    } else {
      number += Math.floor(eight.eightHundredMeters.a*Math.pow(eight.eightHundredMeters.b-time,eight.eightHundredMeters.c))
    } 
    return number;
  }
    return(
      <tr>
                <td key={heptas.id}>{heptas.data.name}</td>
                <td key={heptas.id}>{heptas.data.dateOfBirth}</td>
                <td key={heptas.id}>{heptas.data.hurdles}</td>
                <td key={heptas.id}>{heptas.data.highJump}</td>
                <td key={heptas.id}>{heptas.data.shotPut}</td>
                <td key={heptas.id}>{heptas.data.twoHundredMeters}</td>
                <td key={heptas.id}>{heptas.data.longJump}</td>
                <td key={heptas.id}>{heptas.data.javelin}</td>
                <td key={heptas.id}>{heptas.data.minutes}:{heptas.data.seconds}</td>
                <td key={heptas.id}>{hurdlesPoints() +
                highJumpPoints()+
                shotPutPoints()+
                twoHundredPoints()+
                longJumpPoints()+
                javelinPoints()+
                eightHundredPoints()}
                </td>
                <td><button className='delete' onClick={() => handleDeleteClick(heptas.id)}>X</button>
                  <button className='edit' variant="primary" onClick={() => setModalShow(true)}>
                    Edit
                  </button>
                  <EditHeptaPopUp 
                    show={modalShow}
                    onHide={() => setModalShow(false)} />
                </td>
                <td key={heptas.id}>{heptas.id}</td>
              </tr>
    )
  }
  return (

    <div>
      <table className='content-table'>
        <div class="text-center"><button type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "http://localhost:3000/decathlon";
          }}>Mens Decathlon</button> <button type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://localhost:3000/heptathlon"
            }}>Womens Heptathlon</button></div>
            <br/>
        <Fragment>
          <div>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of birth</th>
                <th>100m hurdles</th>
                <th>High Jump</th>
                <th>Shot Put</th>
                <th>200m</th>
                <th>Long Jump</th>
                <th>Javelin</th>
                <th>800m</th>
                <th>Total score</th>
                <th>Actions</th>
                <th>Id</th>
              </tr>
            </thead>
            <tbody>
              {heptathletes.map((heptas) => (<ShowHeptas heptas={heptas}/>))}
            </tbody>
          </div>
        </Fragment>
      </table>
      <div className='app-container'>
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
        )}

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
        )}
      </div>
    </div>
  )
}

export default Heptathlon;