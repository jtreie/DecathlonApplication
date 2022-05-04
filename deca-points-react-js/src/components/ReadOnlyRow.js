import React from "react";
import hundredMeters from "../Calculator/Decathlon/Runs/hundredMeters.js";
import longJump from "../Calculator/Decathlon/Jumps/longJump.js";
import shotPut from "../Calculator/Decathlon/Throws/shotPut.js";
import highJump from "../Calculator/Decathlon/Jumps/highJump.js";
import fourHundredMeters from "../Calculator/Decathlon/Runs/fourHundred.js";
import hurdles from "../Calculator/Decathlon/Runs/hurdles.js"
import discus from "../Calculator/Decathlon/Throws/discusThrow.js";
import poleVault from "../Calculator/Decathlon/Jumps/poleVault.js";
import javelin from "../Calculator/Decathlon/Throws/javelinThrow.js";
import fifteenHundredMeters from "../Calculator/Decathlon/Runs/fifteenHundredMeters.js"
// function pointss(competitor){
//           var p = a * Math.Pow((Number(competitor.longJump)*100 - b), c);
//      var points = Math.Floor(p);
//      return points;
// }

const ReadOnlyRow = ({ competitor, handleEditClick, handleDeleteClick}) => {
    const [minutes, seconds] = competitor.fifteenHundredMeters.split(':');
    return (
        <tr>
          <td>{competitor.fullName}</td>
          <td>{competitor.dateOfBirth}</td>
          <td>{competitor.hundredMeters}</td>
          <td>{competitor.longJump}</td>
          <td>{competitor.shotPut}</td>
          <td>{competitor.highJump}</td>
          <td>{competitor.fourHundredMeters}</td>
          <td>{competitor.hurdles}</td>
          <td>{competitor.discus}</td>
          <td>{competitor.poleVault}</td>
          <td>{competitor.javelin}</td>
          <td>{competitor.fifteenHundredMeters}</td>
          <td>{Math.floor(hundredMeters.hundredMeters.a*Math.pow((hundredMeters.hundredMeters.b-Number(competitor.hundredMeters)), hundredMeters.hundredMeters.c))+
          Math.floor(longJump.longJump.a*Math.pow((Number(competitor.longJump)*100-longJump.longJump.b), longJump.longJump.c))+
          Math.floor(shotPut.shotPut.a*Math.pow((Number(competitor.shotPut)-shotPut.shotPut.b), shotPut.shotPut.c))+
          Math.floor(highJump.highJump.a*Math.pow((Number(competitor.highJump)*100-highJump.highJump.b), highJump.highJump.c))+
          Math.floor(fourHundredMeters.fourHundred.a*Math.pow((fourHundredMeters.fourHundred.b-Number(competitor.fourHundredMeters)), fourHundredMeters.fourHundred.c))+
          Math.floor(hurdles.hurdles.a*Math.pow((hurdles.hurdles.b-Number(competitor.hurdles)), hurdles.hurdles.c))+
          Math.floor(discus.discusThrow.a*Math.pow((Number(competitor.discus)-discus.discusThrow.b), discus.discusThrow.c))+
          Math.floor(poleVault.poleVault.a*Math.pow((Number(competitor.poleVault)*100-poleVault.poleVault.b), poleVault.poleVault.c))+
          Math.floor(javelin.javelinThrow.a*Math.pow((Number(competitor.javelin)-javelin.javelinThrow.b), javelin.javelinThrow.c))+
          Math.floor(fifteenHundredMeters.fifteenHundredMeters.a*Math.pow(fifteenHundredMeters.fifteenHundredMeters.b-Number(60*minutes+Number(seconds)),fifteenHundredMeters.fifteenHundredMeters.c))}</td>
          <td> 
            <button type="button" onClick={(event) => handleEditClick(event, competitor)}>
          Edit</button>
            <button type="button" onClick={() => handleDeleteClick(competitor.id)}>
          Delete</button>
          </td></tr>
    );
};

export default ReadOnlyRow;