import React, { useRef } from "react";
import { useState } from "react";
import { checkValidDateSignIn, checkValidDateSignUp } from "../utils/validate";
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const WithSignUp = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name  = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

   const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = isSignInForm ? null : name.current?.value;

    console.log("Email entered:", emailValue);
    console.log("Password entered:", passwordValue);
    console.log("Name entered:",nameValue);

    const message = isSignInForm
    ? checkValidDateSignIn(emailValue, passwordValue)
    : checkValidDateSignUp(emailValue, passwordValue, nameValue);

    setErrorMessage(message);

    // If validation failed
    if(message !== null) return;

    // Otherwise run signin/signup authentication logic 
    if(!isSignInForm){
        // Sign up logic
        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
         .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, 
          photoURL: "https://avatars.githubusercontent.com/u/77329187?v=4"
        }).then(() => {
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL}));
          
          navigate("/Browse");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
        console.log(user);
        navigate('/Browse');

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    else{
        // Sign In logic
        signInWithEmailAndPassword(auth, emailValue, passwordValue).then((userCredential) => {
        // Signed in 
           const user = userCredential.user;
           console.log(user);
           navigate('/Browse');

        }).catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setErrorMessage(errorCode + "-" + errorMessage);
    });

   }
  };
  

  return (
    <div className="relative min-h-screen text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-80"
        />
        {/* Optional overlay for darkness */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-3 z-20">
        <div className="w-3/12 sm:w-2/12 md:w-2/12 lg:w-2/12 xl:w-3/12 my-2 mx-10 xl:px-20">
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix Logo"
          />
        </div>
      </div>

      {/* Login form */}
      <div className="flex justify-center items-center py-32 sm:py-40 px-4">
        <form onSubmit={(e) => e.preventDefault()} className="w-9/12 sm:w-8/12 md:w-7/12 lg:w-4/12 xl:w-4/12 p-6 sm:p-12 bg-black bg-opacity-80 rounded-lg shadow-lg z-20">
          <h2 className="mb-8 font-bold text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
          {!isSignInForm && (
             <input
             ref={name}
             type="text"
             placeholder="Full name"
             className="p-3 mb-4 w-full rounded bg-black border border-gray-500 text-white placeholder-gray-500"
           />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email or Mobile number"
            className="p-3 mb-4 w-full rounded bg-black border border-gray-500 text-white placeholder-gray-500"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 mb-4 w-full rounded bg-black border border-gray-500 text-white placeholder-gray-500"
          />
          <p className="text-red-700 py-2 font-bold">{errorMessage}</p>
          <button className="p-3 mb-4 w-full bg-red-600 rounded font-semibold hover:bg-red-700 transition text-white" 
            onClick={handleButtonClick}>
           {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-center mb-4">OR</p>
          <button className="p-3 mb-4 w-full bg-gray-600 rounded font-semibold hover:bg-gray-700 transition text-white bg-opacity-60">
            Use a sign-in code
          </button>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-400 mb-6 gap-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-red-600" />
              <span>Remember me</span>
            </label>
            <a href="/" className="hover:underline text-white">
              Forgot password?
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            <p className="mb-2 text-white hover:underline cursor-pointer" onClick={toggleSignInForm}>
                {isSignInForm ? " New to Netflix? Sign up now" : "Already registered? Sign In"}
             
            </p>
            <p className="text-xs">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <a href="/" className="text-blue-500 hover:underline">
                Learn more.
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black bg-opacity-90 text-gray-300 text-sm px-6 sm:px-16 py-8 lg:px-40 lg:py-20 z-20">
        <p className="mb-6">
          Questions? Call{" "}
          <a href="tel:0008009191743" className="underline">
            000-800-919-1743
          </a>{" "}
          (Toll-Free)
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
          <a href="/" className="hover:underline">
            FAQ
          </a>
          <a href="/" className="hover:underline">
            Help Centre
          </a>
          <a href="/" className="hover:underline">
            Terms of Use
          </a>
          <a href="/" className="hover:underline">
            Privacy
          </a>
          <a href="/" className="hover:underline">
            Cookie Preferences
          </a>
          <a href="/" className="hover:underline">
            Corporate Information
          </a>
        </div>

        <div>
          <select
            id="language-select"
            className="bg-transparent border border-gray-500 text-white p-2 rounded"
            defaultValue="en"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </footer>
    </div>
  );
};

export default WithSignUp;
