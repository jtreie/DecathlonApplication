import { db } from '../firebase'
import React, { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'

export default function EditDecathlete() {
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


    function handleSubmit(e) {
        e.preventDefault();
        if (name === '') {
            return
        }
        const docRef = doc(db, 'decaTable', id)
        updateDoc(docRef, {
            name, dateOfBirth, hundredMeters, longJump, shotPut, highJump, fourHundredMeters,
            hurdles, discus, poleVault, javelin, minutes, seconds,
        }).then(response => {
            console.log(response)
        })
            .catch(error => console.log(error.message))
    }



    return (
        <div>
            <h4>Edit an athlete</h4>
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
                <button name='btnName' type="submit">Update</button>
            </form>
        </div>
    )
}
