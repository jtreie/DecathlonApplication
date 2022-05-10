import { db } from '../firebase'
function getAllCompetitors() {
   return new Promise((resolve, reject) => {
      db.collection("multievent-project").get().then((allCompetitors) => {
           resolve(allCompetitors);
      }).catch((e) => {
           reject(e);
      })
   })
}
export default { getAllCompetitors }