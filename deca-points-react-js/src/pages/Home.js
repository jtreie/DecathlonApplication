import React, {useState, useEffect}from "react";
import { Link, useNavigate, Router } from "react-router-dom";
import { auth, db, signInWithGoogle } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "../visuals/Login.css";
import { Table } from "react-bootstrap";
import { async } from "@firebase/util";

function Home() {

    const [competitors, setCompetitors] = useState([]);
    useEffect(() => {
      fetchCompetitors();
    }, [])

    const fetchCompetitors = async() => {
      const response = db.collection("decaTable");
      const data = await response.get();
      data.docs.array.forEach(element => {
        setCompetitors([...competitors, element.data()])
      });
    }
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
      if (loading) {
      // maybe trigger a loading screen
      return;
      }
      if (user) navigate("/");
      }, [user, loading]);
  return(
        
        <div>
          <div class="text-center"><button type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "http://localhost:3000/decathlon";
          }}>Mens Decathlon</button> <button type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://localhost:3000/heptathlon"
            }}>Womens Heptathlon</button></div>
        <div className="login">
        <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
        <h1>
            Rakendus nimega Kümps.
        </h1>
        <h3>
            See rakendus valmib Tal Tech Äriinfotehnoloogia eriala üliõpilase lõputööna 2022 aastal.
        </h3>
      </div>
  )
            
}
export default Home;