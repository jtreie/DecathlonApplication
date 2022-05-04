import React from "react";

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
        <td>
            <input type="text" placeholder="Enter a name.." 
            name="fullName" value={editFormData.fullName} onChange={handleEditFormChange}/>
        </td>
        <td>
            <input type="text" name="dateOfBirth" 
            value={editFormData.dateOfBirth} onChange={handleEditFormChange}/>
            </td>
        <td><input type="decimal" name="hurdles" value={editFormData.hurdles} onChange={handleEditFormChange}/></td>
        <td><input type="decimal" name="shotPut" value={editFormData.shotPut} onChange={handleEditFormChange}/></td>
        <td><input type="decimal" name="highJump" value={editFormData.highJump} onChange={handleEditFormChange}/></td>
        <td><input type="decimal" name="twoHundredMeters" value={editFormData.twoHundredMeters} onChange={handleEditFormChange}/></td>
        <td><input type="decimal" name="longJump" value={editFormData.longJump} onChange={handleEditFormChange}/></td>
        <td><input type="decimal" name="javelin" value={editFormData.javelin} onChange={handleEditFormChange}/></td>
        <td><input type="text" name="eightHundredMeters" value={editFormData.eightHundredMeters} onChange={handleEditFormChange}/></td>
        <td>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
        </td>
        </tr>
    );
};

export default EditableRow;