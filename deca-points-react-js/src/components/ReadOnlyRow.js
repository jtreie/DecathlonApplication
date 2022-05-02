import React from "react";

const ReadOnlyRow = ({ competitor, handleEditClick, handleDeleteClick}) => {
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
          <td>{competitor.totalScore}</td>
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