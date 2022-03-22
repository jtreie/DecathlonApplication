import { Action, Reducer } from "redux";
import React, {FunctionComponent} from "react";
import { Table } from "reactstrap";

type Contestant = {
 id: number;
 name: string;
 gender: string;
 hundredMeters: number;
 longJump: number;
 shotPut: number;
 highJump: number;
 fourHundredMeters: number;
 hurdles: number;
 discusThrow: number;
 poleVault: number;
 javelin: number;
 fifteenHundredMeters: string;
 totalPoints: number;
}
type ContestantState = {
 contestant: Contestant[]
}

// interface RecieveContestantAction {
//   type: "RECIEVE_CONTESTANTS";
//   contestants: Contestant[];
// }

// export const actionCreaters = {
//   requestContestants: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
//     const appState = getState();
//     if (appState && appState.contestants) {
//       fetch(`api/contestants`).then(response => response.json() as Promise<Contestant[]>).then(data => {dispatch({ type: "RECIEVE_CONTESTANTS", contestants: data});
//          });
//     }
//   }
// };

export class Contestants extends React.PureComponent<{}, ContestantState> {
  state ={
    contestant: [
    {id: 1, name: "Mary Jane", gender: "female", hundredMeters: 10.9, longJump: 7.29, shotPut: 14.23, highJump: 1.90, fourHundredMeters: 49.9, hurdles: 14.9, discusThrow: 38.2, poleVault: 4.20, javelin: 52, fifteenHundredMeters: "4:23.2", totalPoints: 3200},
    {id: 2, name: "Jerry Crow", gender: "male", hundredMeters: 10.2, longJump: 7.09, shotPut: 12.53,highJump: 1.90, fourHundredMeters: 49.9, hurdles: 14.9, discusThrow: 38.2, poleVault: 4.20, javelin: 52, fifteenHundredMeters: "4:23.2", totalPoints: 3200},
  ]
 }
 render() {
  return (
   <>
    <h1>Contestants</h1>
    <Table striped hover aria-labelledby="tabelLabel">
     <thead>
      <tr> 
       <th>Name</th>
       <th>Gender</th>
       <th>100m</th>
       <th>Long Jump</th>
       <th>Shot Put</th>
       <th>High Jump</th>
       <th>400m</th>
       <th>110m hurdles</th>
       <th>Discus</th>
       <th>Pole Vault</th>
       <th>Javelin</th>
       <th>1500m</th>
       <th>Total Score</th>
      </tr>
     </thead>
     <tbody>
      {this.state.contestant.map((contestant: Contestant) => <ContestantDataRow contestant={contestant} key={contestant.id}/>)}
     </tbody>
    </Table>
   </>
  );
 }
}

 type ContestantDataProps = {contestant: Contestant }
 const ContestantDataRow: FunctionComponent<ContestantDataProps> = (props) => (
  <tr>
    <td>{props.contestant.name}</td>
    <td>{props.contestant.gender}</td>
    <td>{props.contestant.hundredMeters}</td>
    <td>{props.contestant.longJump}</td>
    <td>{props.contestant.shotPut}</td>
    <td>{props.contestant.highJump}</td>
    <td>{props.contestant.fourHundredMeters}</td>
    <td>{props.contestant.hurdles}</td>
    <td>{props.contestant.discusThrow}</td>
    <td>{props.contestant.poleVault}</td>
    <td>{props.contestant.javelin}</td>
    <td>{props.contestant.fifteenHundredMeters}</td>
    <td>{props.contestant.totalPoints}</td>
  </tr>  
 );

//  const reducer: Reducer<ContestantState> = (
//    state: ContestantState | undefined, incomingAction: Action): ContestantState => {
//      if (state === undefined) {
//        return unloadedState;
//      }

//      const action = incomingAction as KnownAction;
//      switch(action.type) {
//        case "RECIEVE_CONTESTANTS":
//          return {
//            contestants: action.contestants};
//         default:
//           return state;
//      }
//    };
 