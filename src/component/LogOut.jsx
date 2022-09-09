import React from "react";
import { auth } from "../firebase";

const style = {
  button: `font-mono bg-teal-700 rounded-full px-4 py-2 hover:bg-teal-600 `,
};

const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  };
  return (
    <button onClick={() => auth.signOut()} className={style.button}>
      Logout
    </button>
  );
};

export default LogOut;
