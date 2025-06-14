import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const BrowseHeader = () => {
 
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/login");
    }).catch((error) => {
      navigate("/errorPage");
    });
  }

  return (
    <div className="absolute flex justify-between items-center w-full px-8 top-0 bg-gradient-to-b from-black">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
        className="h-20"
      />
      <div className="flex items-center space-x-2">
        <img
          alt="userIcon"
          className="h-8"
          // src="https://avatars.githubusercontent.com/u/77329187?v=4"
          src={user.photoURL}
        />
        <button onClick={handleSignOut} className="text-white font-bold">Sign Out</button>
      </div>
    </div>
  );
};

export default BrowseHeader;