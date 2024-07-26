import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

import "./styles.css";

function Header() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const userStoraged = localStorage.getItem("athena:user");
    setCurrentUser(JSON.parse(userStoraged));
  }, []);

  function handleSignOut() {
    localStorage.removeItem("athena:user");
    navigate("/", { replace: true });
  }

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-infor">
          <span>{currentUser?.name}</span>
          <span>{currentUser?.email}</span>
        </div>

        <div className="profile-preview">{currentUser?.name?.slice(0, 2)}</div>

        <button className="button-logout" onClick={handleSignOut}>
          <LogOut size={20} />
        </button>
      </div>
    </div>
  );
}

export default Header;
