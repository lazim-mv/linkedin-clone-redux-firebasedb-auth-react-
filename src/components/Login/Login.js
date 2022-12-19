import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/counter/userSlice";
import { auth } from "../../Firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [profilename, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const dispatch = useDispatch();

  const loginApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email,password).then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        profileUrl: userAuth.user.photoURL,
      }));
    }).catch((error) => alert(error));
  };
  const register = () => {
    if (!profilename) {
      return alert("Please Enter A Full Name");
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: profilename,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: profilename,
              photoUrl: profilePic,
            })
          );
        });
    }).catch(error => alert(error));
  };

  return (
    <div>
      <div className="login">
        <img
          src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG10.png"
          alt=""
        />

        <form action="">
          <input
            value={profilename}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name (Required)"
          />

          <input
            value={profilePic}
            onChange={(e) => setprofilePic(e.target.value)}
            type="text"
            placeholder="Profile Picture URL"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />

          <button type="submit" onClick={loginApp}>
            Sign In
          </button>
        </form>

        <p>
          Not a member?&nbsp;
          <span className="login_register" onClick={register}>
            Register Now
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
