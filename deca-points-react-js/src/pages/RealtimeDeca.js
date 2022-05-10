import { onSnapshot } from 'firebase/firestore'
import React, { useState } from 'react'
import longJump from 'Calculator/Decathlon/Jumps/longJump';
import shotPut from 'Calculator/Decathlon/Throws/shotPut';
import highJump from 'Calculator/Decathlon/Jumps/highJump';
import hurdles from 'Calculator/Decathlon/Runs/hurdles';
import discusThrow from 'Calculator/Decathlon/Throws/discusThrow';
import poleVault from 'Calculator/Decathlon/Jumps/poleVault';
import javelinThrow from 'Calculator/Decathlon/Throws/javelinThrow';
import fifteenHundredMeters from 'Calculator/Decathlon/Runs/fifteenHundredMeters';
import fourHundred from 'Calculator/Decathlon/Runs/fourHundred';
import hundredMeters from "../Calculator/Decathlon/Runs/hundredMeters.js";
import { collection, doc, deleteDoc } from "firebase/firestore"
import { db } from '../firebase';
import { toast, ToastContainer } from 'react-toastify';
import { } from "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from 'react-bootstrap';

export default function () {
    const [decathletes, setDecathletes] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [updata, setUpdata] = useState({data:{
        name:'',
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
            minutes:'', 
            seconds:''
    },
id:''
});
    
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
        deleteDoc(docRef).then(() => console.log("deleted"))
            .catch(error => console.log(error.message))
    };

    function MyVerticallyCenteredModal(props) {
         const {daata} = props;
         console.log(props);
        const [value, setValue] = useState({
                name:'',
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
                minutes:'', 
                seconds:''
            });

            const handleChange = (name) => (e) => {
                e.preventDefault();
                setValue({...value, [name]: e.target.value})
            };
            const {name, dateOfBirth, hundredMeters, longJump, shotPut, highJump, fourHundredMeters,
                hurdles, discus, poleVault, javelin, minutes, seconds} = value;

            const updateDoc = () => {
                toast.success(props.daata.id)
            }
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit page
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <input name='name' type="text" value={name} onChange={() => handleChange('name')} />
                        <input name='dateOfBirth' type="text" value={dateOfBirth} onChange={() => handleChange('dateOfBirth')} />
                        <input name='hundredMeters' type="decimal" value={hundredMeters} onChange={() => handleChange('hundredMeters')} />
                        <input name='longJump' type="decimal" value={longJump} onChange={() => handleChange('longJump')} />
                        <input name='shotPut' type="decimal" value={shotPut} onChange={() => handleChange('shotPut')} />
                        <input name='highJump' type="decimal" value={highJump} onChange={() => handleChange('highJump')} />
                        <input name='fourHundredMeters' type="decimal" value={fourHundredMeters} onChange={() => handleChange('fourHundredMeters')} />
                        <input name='hurdles' type="decimal" value={hurdles} onChange={e =>() => handleChange('hurdles')} />
                        <input name='discus' type="decimal" value={discus} onChange={() => handleChange('discus')} />
                        <input name='poleVault' type="decimal" value={poleVault} onChange={() => handleChange('poleVault')} />
                        <input name='javelin' type="decimal" value={javelin} onChange={() => handleChange('javelin')} />
                        <input name='minutes' type="decimal" value={minutes} onChange={() => handleChange('minutes')} />
                        <input name='seconds' type="decimal" value={seconds} onChange={() => handleChange('seconds')} />
                        <button name='btnName' onClick={updateDoc} type="submit">Update</button>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    return (
        <div>
            <ToastContainer />
            <thead>
                <tr>
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
            {decathletes.map((decas) => (<tr>
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
                <td key={decas.id}>{Number(Math.floor(hundredMeters.hundredMeters.a * Math.pow((hundredMeters.hundredMeters.b - Number(decas.data.hundredMeters)), hundredMeters.hundredMeters.c))) +
                    Number(Math.floor(longJump.longJump.a * Math.pow(Number(decas.data.longJump) * 100 - longJump.longJump.b, longJump.longJump.c))) +
                    Number(Math.floor(shotPut.shotPut.a * Math.pow((Number(decas.data.shotPut - shotPut.shotPut.b)), shotPut.shotPut.c))) +
                    Number(Math.floor(highJump.highJump.a * Math.pow((Number(decas.data.highJump * 100 - highJump.highJump.b)), highJump.highJump.c))) +
                    Number(Math.floor(fourHundred.fourHundred.a * Math.pow((fourHundred.fourHundred.b - Number(decas.data.fourHundredMeters)), fourHundred.fourHundred.c))) +
                    Number(Math.floor(hurdles.hurdles.a * Math.pow((hurdles.hurdles.b - Number(decas.data.hurdles)), hurdles.hurdles.c))) +
                    Number(Math.floor(discusThrow.discusThrow.a * Math.pow((Number(decas.data.discus) - discusThrow.discusThrow.b), discusThrow.discusThrow.c))) +
                    Number(Math.floor(poleVault.poleVault.a * Math.pow((Number(decas.data.poleVault) * 100 - poleVault.poleVault.b), poleVault.poleVault.c))) +
                    Number(Math.floor(javelinThrow.javelinThrow.a * Math.pow((Number(decas.data.javelin) - javelinThrow.javelinThrow.b), javelinThrow.javelinThrow.c))) +
                    Number(Math.floor(fifteenHundredMeters.fifteenHundredMeters.a * Math.pow((fifteenHundredMeters.fifteenHundredMeters.b - Number(decas.data.minutes * 60 + decas.data.seconds)), fifteenHundredMeters.fifteenHundredMeters.c)))}
                </td>
                <td><Button onClick={() => handleDeleteClick(decas.id)}>X</Button>
                    <Button variant="primary" onClick={() => {setUpdata(decas.data)
                         setModalShow(true)}}>
                        Edit
                    </Button>
                </td>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)} />
                    {/* daata = {updata} */}
            </tr>
            ))}
        </div>
    )
}
