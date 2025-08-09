import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useAuthStore();

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUser(userCredential.user);
      navigate("/");
    } catch (error) {
      console.log("error", error.message);
    }
  };
  console.log("ZustandUser", user);
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <input
        className="border p-2 mb-2 w-full"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 mb-2 w-full"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-yellow-500 text-white p-2 rounded w-full"
        onClick={handleSignup}
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUpPage;
