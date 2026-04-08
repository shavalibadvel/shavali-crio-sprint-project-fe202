import React, { useState, createContext, useContext } from "react";

const GlobalStateContext = createContext();

const AccountSettings = () => {
  const { count, setCount } = useContext(GlobalStateContext);

  return (
    <div
      style={{
        padding: "10px",
        border: "1px dashed #007bff",
        marginTop: "10px",
      }}
    >
      <h4>Account Settings (Grandchild)</h4>
      <p>
        Value from Context: <strong>{count}</strong>
      </p>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  );
};

const ProfileSection = () => {
  return (
    <div
      style={{ padding: "10px", border: "1px solid #ccc", marginTop: "10px" }}
    >
      <h4>Profile Section (Child)</h4>
      <AccountSettings />
    </div>
  );
};

const UserDashboardQuizz = () => {
  const [count, setCount] = useState(0);

  return (
    <GlobalStateContext.Provider value={{ count, setCount }}>
      <div
        style={{ padding: "20px", border: "2px solid #333", maxWidth: "450px" }}
      >
        <h2>User Dashboard (Parent)</h2>
        <p>State is defined here, but used 2 levels down.</p>

        <ProfileSection />
      </div>
    </GlobalStateContext.Provider>
  );
};

export default UserDashboardQuizz;
