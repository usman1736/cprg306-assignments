"use client";
import { useUserAuth } from "../context/AuthContext";
import { useState } from "react";
import React from "react";
import Link from "next/link";

function page() {
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function signIn() {
    try {
      await gitHubSignIn();
      setLoggedIn(!loggedIn);
    } catch (error) {
      setError(error.message);
    }
  }

  async function signOut() {
    try {
      await firebaseSignOut();
      setLoggedIn(!loggedIn);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <main>
      {!user ? (
        <div className="flex flex-col justify-center items-center h-screen bg-white">
          <header>
            <h1 className="font-bold text-3xl text-stone-700">
              Welcome to My Shopping List
            </h1>
          </header>
          <button
            className="font-bold text-xl w-100 bg-gray-500 border-3 text-stone-700 rounded-lg p-2 mt-20"
            onClick={signIn}
          >
            Log in
          </button>
          {error ? <p className="text-red-700">{error}</p> : null}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen bg-white">
          <header>
            <h1 className="font-bold text-3xl text-stone-700">
              {" "}
              Welcome, {user.displayName} ({user.email})
            </h1>
          </header>
          <p className="font-bold text-xl w-100 bg-gray-500 border-3 text-stone-700 rounded-lg p-2 mt-10 flex justify-center items-center">
            <Link href="/week-9/shopping-list">Access Shopping-List</Link>
          </p>
          <button
            className="font-bold text-xl w-100 bg-gray-500 border-3 text-stone-700 rounded-lg p-2 mt-5"
            onClick={signOut}
          >
            Log Out
          </button>
        </div>
      )}
    </main>
  );
}

export default page;
