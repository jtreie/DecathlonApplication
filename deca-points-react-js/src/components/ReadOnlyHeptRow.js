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
    const time = 60*Number(minutes)+Number(seconds);
    const hurdlesPoints = () => {
      var number = 0;
      if(heptathlete.hurdles === '') 
      {number += 0
      } else if(heptathlete.hurdles < 11.50 || heptathlete.hurdles > 26.40){
        number += 0;
      } else  {
      
        number += Math.floor(hurdles.hurdles.a*Math.pow((hurdles.hurdles.b-Number(heptathlete.hurdles)), hurdles.hurdles.c))
      } 
      return number;
    }
    const highJumpPoints = () => {
      var number = 0;
      if(heptathlete.highJump === '') 
      {number += 0
      } else if(heptathlete.highJump > 2.19 || heptathlete.highJump < 0.76) {
        number += 0;
      } else {
        number += Math.floor(highJump.highJump.a*Math.pow((Number(heptathlete.highJump)*100-highJump.highJump.b), highJump.highJump.c))
      } 
      return number;
    }
    const shotPutPoints = () => {
      var number = 0;
      if(heptathlete.shotPut === '') 
      {number += 0
      } else if (heptathlete.shotPut > 24.40 || heptathlete.shotPut < 1.53){
        number += 0;
      } else {
        number += Math.floor(shotPut.shotPut.a*Math.pow((Number(heptathlete.shotPut)-shotPut.shotPut.b), shotPut.shotPut.c))
      } 
      return number;
    }
    const twoHundredPoints = () => {
      var number = 0;
      if(heptathlete.twoHundredMeters === '') 
      {number += 0
      } else if(heptathlete.twoHundredMeters < 20.50 || heptathlete.twoHundredMeters > 42.08) {
        number += 0;
      } else {
        number += Math.floor(twoHundredMeters.twoHundredMeters.a*Math.pow((twoHundredMeters.twoHundredMeters.b-Number(heptathlete.twoHundredMeters)), twoHundredMeters.twoHundredMeters.c))
      } 
      return number;
    }
    
    
    const longJumpPoints = () => {
      var number = 0;
      if(heptathlete.longJump === '') 
      {number += 0
      } else if(heptathlete.longJump > 7.99 || heptathlete.longJump < 2.14){
        number += 0;
      } else {
        number += Math.floor(longJump.longJump.a*Math.pow((Number(heptathlete.longJump)*100-longJump.longJump.b), longJump.longJump.c))
      } 
      return number;
    }
    const javelinPoints = () => {
      var number = 0;
      if(heptathlete.javelin === '') 
      {number += 0
      } else if(heptathlete.javelin > 82.63 || heptathlete.javelin < 3.87) {
        number += 0;
      }else{
        number += Math.floor(javelin.javelin.a*Math.pow((Number(heptathlete.javelin)-javelin.javelin.b), javelin.javelin.c))
      } 
      return number;
      
    }
    const eightHundredPoints = () => {
      var number = 0;
      if(heptathlete.eightHundredMeters === '') 
      {number += 0
      } else if(time < 11150.71 || time > 250.79) {
        number += 0;
      } else {
        number += Math.floor(eightHundredMeters.eightHundredMeters.a*Math.pow(eightHundredMeters.eightHundredMeters.b-time,eightHundredMeters.eightHundredMeters.c))
      } 
      return number;
    }
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
          <td>{hurdlesPoints() +
            shotPutPoints()+
            highJumpPoints()+
            twoHundredPoints()+
            longJumpPoints()+
            javelinPoints()+
            eightHundredPoints()}</td>
          <td> 
            <button type="button" onClick={(event) => handleEditClick(event, heptathlete)}>
          Edit</button>
            <button type="button" onClick={() => handleDeleteClick(heptathlete.id)}>
          Delete</button>
          </td>
          <td>{eightHundredPoints()}</td></tr>
    );
};

export default ReadOnlyHeptRow;