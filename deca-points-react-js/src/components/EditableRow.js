import React from "react";

const EditableRow = () => {
    return (
        <tr>
        <td><input type="text" required="required" placeholder="Enter a name.." name="fullName"></input></td>
        <td><input type="text" name="dateOfBirth" required="required"/></td>
        <td><input type="decimal" name="hundredMeters" required="required"/></td>
        <td><input type="decimal" name="longJump" required="required"/></td>
        <td><input type="decimal" name="highJump" required="required"/></td>
        <td><input type="decimal" name="fourHundredMeters" required="required"/></td>
        <td><input type="decimal" name="hurdles" required="required"/></td>
        <td><input type="decimal" name="shotPut" required="required"/></td>
        <td><input type="decimal" name="discus" required="required"/></td>
        <td><input type="decimal" name="poleVault" required="required"/></td>
        <td><input type="decimal" name="javelin" required="required" /></td>
        <td><input type="text" name="fifteenHundredMeters" required="required" /></td>
        <td><input type="number" name="totalScore" required="required"/></td>
        </tr>
    );
};

export default EditableRow