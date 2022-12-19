import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Feed from "./components/MainSection/Feed";
import Sidebar from "./components/MainSection/Sidebar";
import  Widgets  from "./components/MainSection/Widgets";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import { auth } from "./Firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  });

  return (
    <div className="App">
      <Header />
      {/* App Body */}

      
      {!user ? (
        <Login />
      ) : (
        <section>
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets  />
          </div>
        </section>
      )}

    </div>
  );
}

export default App;
