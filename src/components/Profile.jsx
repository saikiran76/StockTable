import React, { useState, useEffect } from "react";
import { auth, database } from "../utils/firebase";
// import { ref, set, get } from "firebase/database";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";


const Profile = ({ onClose }) => {
  const [preferences, setPreferences] = useState([]);
  const [user, setUser] = useState(null);
  const [newPreference, setNewPreference] = useState("");

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      loadPreferences(currentUser.uid);
    }
  }, []);

  const loadPreferences = async (userId) => {
    const userDocRef = doc(database, "users", userId);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      setPreferences(docSnap.data().preferences || []);
    }
  };

  const savePreferences = async () => {
    if (user) {
      const userDocRef = doc(database, "users", user.uid);
      await setDoc(userDocRef, { preferences }, { merge: true });
      alert("Your Market got Preferences saved successfully");
    }
  };

  const addPreference = () => {
    if (newPreference && !preferences.includes(newPreference)) {
      setPreferences([...preferences, newPreference]);
      setNewPreference("");
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 font-poppin">
      <div className="bg-[#374151] p-6 rounded-md shadow-md w-10/12 md:w-1/3">
        <h2 className="text-2xl mb-4 text-gray-300">User Profile</h2>
        <p className="text-gray-300">Email: {user?.email}</p>
        <input
          type="text"
          value={newPreference}
          onChange={(e) => setNewPreference(e.target.value)}
          placeholder="Add your Preference"
          className="w-full p-2 border rounded mt-4"
        />
        <button
          onClick={addPreference}
          className="mt-4 bg-blue-500 text-white p-2 rounded"
        >
          Add Preference
        </button>
        
        <ul className="mt-4">
          {preferences.map((pref, index) => (
            <li key={index} className="mb-2 text-gray-300">
              {pref}
            </li>
          ))}
        </ul>
        
        <button
          onClick={savePreferences}
          className="mt-4 bg-[#008000] text-white p-2 rounded mr-2"
        >
          Save Preferences
        </button>
        <button
          onClick={handleSignOut}
          className="mt-4 bg-[#28191E] text-white p-2 rounded mr-2"
        >
          Sign Out
        </button>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-500 text-white p-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Profile;
