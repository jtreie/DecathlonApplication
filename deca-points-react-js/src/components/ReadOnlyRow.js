import React from "react";

const ReadOnlyRow = ({ competitor }) => {
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
        </tr>
    );
};

export default ReadOnlyRow;