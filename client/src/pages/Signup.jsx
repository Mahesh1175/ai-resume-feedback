import React, { useState } from "react";
import { createUserWithEmailAndPassword, auth, db } from "../firebase/firebase";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { useContext } from "react";


export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleSignup = async () => {
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;

      const userData = { username, email };

      await setDoc(doc(db, "users", user.uid), userData);

      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);

      toast.success("Sign-up successful!");

      navigate("/");
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#212121]">
      <div className="bg-[#2a2a2a] p-8 rounded-xl shadow-lg w-96 text-white">
        <h2 className="text-2xl font-bold text-yellow-500 mb-6">Create Account</h2>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-[#333] p-3 rounded mb-3"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#333] p-3 rounded mb-3"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-[#333] p-3 rounded mb-5"
          value={pass}
          onChange={e => setPass(e.target.value)}
        />
        <button
          onClick={handleSignup}
          className="w-full bg-yellow-500 text-[#212121] font-semibold p-3 rounded mb-4 hover:bg-yellow-400"
        >
          Sign Up
        </button>

        <p className="text-center text-gray-400 mb-4">or</p>

        <GoogleButton />

        <p className="mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/signin" className="text-yellow-400">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

function GoogleButton() {
  const { signInWithGoogle } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <>
      <button
        onClick={handleGoogle}
        className="w-full flex items-center justify-center gap-3 bg-[#333] text-gray-200 border border-yellow-300 p-2 rounded mb-3 hover:shadow-md transition"
      >
        <img
          src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw"
          alt="Google"
          className="w-5 h-5"
        />
        <span className="font-medium">Continue with Google</span>
      </button>

      {err && <p className="text-red-400">{err}</p>}
    </>
  );
}
