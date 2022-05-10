import React, { useEffect, useState } from 'react'
import {collection, doc, getDocs } from "firebase/firestore"
import { db } from '../firebase';

function ListDeca() {
    const [decathletes, setDecathletes] = useState([])

    useEffect(() => {
        getDecathletes()
    }, [])

    useEffect(() => {
        console.log(decathletes)
    }, [decathletes])

    function getDecathletes() {
        const decathletesCollectionRef = collection(db, 'decaTable');
        getDocs(decathletesCollectionRef)
        .then(response => {
            const deca = response.docs.map(doc => ({data: doc.data(), id:doc.id}))
            setDecathletes(deca)
        })
        .catch(e => console.log(e.message));


    }
  return (
    <div>
        <header className='App-header'><h3>List of Decathletes</h3></header>
        <main><h4>List of asdasd</h4>
        <ul>
            {decathletes.map(decas => <li key={decas.id}>{decas.data.name}</li>)}</ul></main>
    </div>
  )
}

export default ListDeca