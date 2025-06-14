import { useState, useContext } from "react";
import {
  signInWithEmailAndPassword,
  auth,
} from "../firebase/firebase";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"

export default function Signin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      toast.success("Sign-in successful !");
      navigate("/");
    } catch (e) {
      toast.error(e.message)
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      toast.success("Sign-in with google is successful !");
      navigate("/");
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#212121]">
      <div className="bg-[#2a2a2a] p-8 rounded-xl shadow-lg w-96 text-white">
        <h2 className="text-2xl font-bold text-yellow-500 mb-6">Sign In</h2>
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
          onClick={handleSignin}
          className="w-full bg-yellow-500 text-[#212121] font-semibold p-3 rounded mb-4 hover:bg-yellow-400"
        >
          Sign In
        </button>

        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-3 bg-[#333] text-gray-200 border border-yellow-300 p-2 rounded mb-3 hover:shadow-md transition"
        >
          <img
            src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="font-medium">Sign Up with Google</span>
        </button>

        <p className="mt-4 text-center text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-yellow-400">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
