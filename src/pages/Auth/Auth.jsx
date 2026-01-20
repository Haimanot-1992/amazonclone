import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./Auth.module.css";
import { auth } from "./../../Utility/firebase";
import { ClipLoader } from "react-spinners";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "./../../components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signin: false,
    signup: false, // Fixed typo: was 'singup'
  });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);
  const authHandler = async (e, action) => {
    e.preventDefault();

    if (action === "signin") {
      setLoading({ ...loading, signin: true });
      setError(""); // Clear previous errors

      signInWithEmailAndPassword(auth, email, password)
        .then((userinfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userinfo.user,
          });
          setLoading({ ...loading, signin: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signin: false });
          // Removed navigate("/") on error - user should stay on auth page
        });
    } else {
      setLoading({ ...loading, signup: true });
      setError(""); // Clear previous errors

      createUserWithEmailAndPassword(auth, email, password)
        .then((userinfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userinfo.user,
          });
          setLoading({ ...loading, signup: false });
          navigate(navStateData?.state?.redirect || "/"); // Navigate after successful signup
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signup: false });
          // Removed navigate("/") on error - user should stay on auth page
        });
    }
  };

  return (
    <section className={styles.login}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Amazon_2024.svg/2560px-Amazon_2024.svg.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className={styles.login_container}>
        <h1>Sign in</h1>
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        )}
        <form onSubmit={(e) => authHandler(e, "signin")}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className={styles.login_SignInbtn}
            disabled={loading.signin || loading.signup}
          >
            {loading.signin ? <ClipLoader size={15} color="#000" /> : "Sign In"}
          </button>
        </form>

        <p>
          By Signing in you agree to the Amazon Fake clone conditions of use
        </p>

        <button
          type="button"
          onClick={(e) => authHandler(e, "signup")}
          className={styles.login_registerbtn}
          disabled={loading.signin || loading.signup}
        >
          {loading.signup ? (
            <ClipLoader size={15} color="#000" />
          ) : (
            "Create Your Amazon Account"
          )}
        </button>

        {error && <small className={styles.error}>{error}</small>}
      </div>
    </section>
  );
}

export default Auth;
