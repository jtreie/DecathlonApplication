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
    const time = 60*Number(minutes)+Number(seconds);

    const hundredPoints = () => {
      var number = 0;
      if (competitor.hundredMeters === ''){
        number += 0;
      } else if(competitor.hundredMeters > 17.83 || competitor.hundredMeters < 9.5) 
      {number += 0;
      } else{
        number += Number(Math.floor(hundredMeters.hundredMeters.a*Math.pow((hundredMeters.hundredMeters.b-Number(competitor.hundredMeters)), hundredMeters.hundredMeters.c)))
      } 
      return number;
    }
    const longJumpPoints = () => {
      var number = 0;
      if(competitor.longJump === ''){
        number += 0;
      } else if (competitor.longJump > 9.49 || competitor.longJump < 2.25){
        number += 0;
      }else {
        number += Math.floor(longJump.longJump.a*Math.pow((Number(competitor.longJump)*100-longJump.longJump.b), longJump.longJump.c))
      } 
      return number;
    }
    const shotPutPoints = () => {
      var number = 0;
      if(competitor.shotPut === '') 
      {number += 0;
      }else if(competitor.shotPut > 23.99 || competitor.shotPut < 1.53) {
        number += 0;
      } 
      else {
        number +=  Math.floor(shotPut.shotPut.a*Math.pow((Number(competitor.shotPut)-shotPut.shotPut.b), shotPut.shotPut.c))
      } 
      return number;
    }
    const highJumpPoints = () => {
      var number = 0;
      if(competitor.highJump === '') 
      {number += 0
      } else if(competitor.highJump > 2.59 || competitor.highJump < 0.77){
        number += 0;
      } else {
        number += Math.floor(highJump.highJump.a*Math.pow((Number(competitor.highJump)*100-highJump.highJump.b), highJump.highJump.c))
      } 
      return number;
    }
    const fourHundredPoints = () => {
      var number = 0;
      if(competitor.fourHundredMeters === '') 
      {number += 0
      } else if(competitor.fourHundredMeters < 41.47 || competitor.fourHundredMeters > 81.21){
        number += 0;
      } else{
        number += Math.floor(fourHundredMeters.fourHundred.a*Math.pow((fourHundredMeters.fourHundred.b-Number(competitor.fourHundredMeters)), fourHundredMeters.fourHundred.c))
      } 
      return number;
    }
    const hurdlesPoints = () => {
      var number = 0;
      if(competitor.hurdles === '') 
      {number += 0
      } else if (competitor.hurdles < 12.00 || competitor.hurdles > 28.09) {
        number += 0;
      } else {
        number += Math.floor(hurdles.hurdles.a*Math.pow((hurdles.hurdles.b-Number(competitor.hurdles)), hurdles.hurdles.c))
      } 
      return number;
    }
    const discusPoints = () => {
      var number = 0;
      if(competitor.discus === '') 
      {number += 0
      } else if(competitor.discus > 70.41 || competitor.discus < 4.10) {
        number += 0;
      } else {
        number += Math.floor(discus.discusThrow.a*Math.pow((Number(competitor.discus)-discus.discusThrow.b), discus.discusThrow.c))
      } 
      return number;
    }
    const poleVaultPoints = () => {
      var number = 0;
      if(competitor.poleVault === '') 
      {number += 0
      } else if(competitor.poleVault > 6.49 || competitor.poleVault < 1.03){
        number += 0;
      } else {
        number += Math.floor(poleVault.poleVault.a*Math.pow((Number(competitor.poleVault)*100-poleVault.poleVault.b), poleVault.poleVault.c))
      } 
      return number;
    }
    const javelinPoints = () => {
      var number = 0;
      if(competitor.javelin === '') 
      {number += 0
      } else if (competitor.javelin > 102.85 || competitor.javelin < 7.12){
        number += 0;
      } else  {
        number += Math.floor(javelin.javelinThrow.a*Math.pow((Number(competitor.javelin)-javelin.javelinThrow.b), javelin.javelinThrow.c))
      } 
      return number;
      
    }
    const fifteenHundredPoints = () => {
      var number = 0;
      if(competitor.fifteenHundredMeters === '') 
      {number += 0
      } else if(time < 202.23 || time > 474.11) {
        number += 0;
      } else {
        number += Math.floor(fifteenHundredMeters.fifteenHundredMeters.a*Math.pow(fifteenHundredMeters.fifteenHundredMeters.b-Number(time),fifteenHundredMeters.fifteenHundredMeters.c))
      } 
      return number;
    }
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
          <td>{hundredPoints()+
          longJumpPoints()+
         shotPutPoints()+
          highJumpPoints()+
          fourHundredPoints()+
          hurdlesPoints()+
          discusPoints()+
          poleVaultPoints()+
          javelinPoints()+
          fifteenHundredPoints()}</td>
          <td> 
            <button type="button" onClick={(event) => handleEditClick(event, competitor)}>
          Edit</button>
            <button type="button" onClick={() => handleDeleteClick(competitor.id)}>
          Delete</button>
          </td>
          </tr>
    );
};

export default ReadOnlyRow;