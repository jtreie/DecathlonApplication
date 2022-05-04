import React from "react";
import longJump from "../Calculator/Heptathlon/Jumps/longJump.js";
import shotPut from "../Calculator/Heptathlon/Throws/shotPut.js";
import highJump from "../Calculator/Heptathlon/Jumps/highJump.js";
import twoHundredMeters from "../Calculator/Heptathlon/Runs/twoHundredMeters";
import hurdles from "../Calculator/Heptathlon/Runs/hurdles.js"
import javelin from "../Calculator/Heptathlon/Throws/javelin";
import eightHundredMeters from "../Calculator/Heptathlon/Runs/eightHundredMeters.js"

const ReadOnlyHeptRow = ({ heptathlete, handleEditClick, handleDeleteClick}) => {
    const [minutes, seconds] = heptathlete.eightHundredMeters.split(':');
    return (
        <tr>
          <td>{heptathlete.fullName}</td>
          <td>{heptathlete.dateOfBirth}</td>
          <td>{heptathlete.hurdles}</td>
          <td>{heptathlete.shotPut}</td>
          <td>{heptathlete.highJump}</td>
          <td>{heptathlete.twoHundredMeters}</td>
          <td>{heptathlete.longJump}</td>
          <td>{heptathlete.javelin}</td>
          <td>{heptathlete.eightHundredMeters}</td>
          <td>{Math.floor(hurdles.hurdles.a*Math.pow((hurdles.hurdles.b-Number(heptathlete.hurdles)), hurdles.hurdles.c)) +
            Math.floor(shotPut.shotPut.a*Math.pow((Number(heptathlete.shotPut)-shotPut.shotPut.b), shotPut.shotPut.c))+
            Math.floor(highJump.highJump.a*Math.pow((Number(heptathlete.highJump)*100-highJump.highJump.b), highJump.highJump.c))+
            Math.floor(twoHundredMeters.twoHundredMeters.a*Math.pow((twoHundredMeters.twoHundredMeters.b-Number(heptathlete.twoHundredMeters)), twoHundredMeters.twoHundredMeters.c))+
            Math.floor(longJump.longJump.a*Math.pow((Number(heptathlete.longJump)*100-longJump.longJump.b), longJump.longJump.c))+
            Math.floor(javelin.javelin.a*Math.pow((Number(heptathlete.javelin)-javelin.javelin.b), javelin.javelin.c))+
            Math.floor(eightHundredMeters.eightHundredMeters.a*Math.pow(eightHundredMeters.eightHundredMeters.b-Number(60*minutes+Number(seconds)),eightHundredMeters.eightHundredMeters.c))}</td>
          <td> 
            <button type="button" onClick={(event) => handleEditClick(event, heptathlete)}>
          Edit</button>
            <button type="button" onClick={() => handleDeleteClick(heptathlete.id)}>
          Delete</button>
          </td></tr>
    );
};

export default ReadOnlyHeptRow;