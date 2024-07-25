import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/feature/user/userSlice";
import ConfirmLogoutProvider from "./ConfirmLogoutProvider";

export default function ProfileDropdown({ onLogout }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const [userName, setUserName] = useState("Adm inh");
  const [userRole, setUserRole] = useState("User");

  const trigger = useRef(null);
  const dropdown = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [dropdownOpen]);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [dropdownOpen]);

  const handleButtonClick = (path) => {
    navigate(path);
    setDropdownOpen(false);
  };

  const openLogoutModal = () => {
    setLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setLogoutModalOpen(false);
  };

  const confirmLogout = () => {
    dispatch(logout());
    onLogout();
    navigate("/"); 
    setLogoutModalOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      <section className="bg-gray-2 py-20 dark:bg-dark">
        <div className="container">
          <div className="flex justify-center">
            <div className="relative inline-block">
              <button
                ref={trigger}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center text-left"
              >
                <div className="relative mr-4 h-[42px] w-[42px] rounded-full">
                  <img
                    src="public/image/image1/profile.png"
                    alt="avatar"
                    className="h-full w-full rounded-full object-cover object-center"
                  />
                  <span className="absolute -right-0.5 -top-0.5 block h-[14px] w-[14px] rounded-full border-[2.3px] border-white bg-[#219653] dark:border-dark"></span>
                </div>
              </button>
              <div
                ref={dropdown}
                className={`absolute right-0 top-full z-50 w-[200px] space-y-1 rounded bg-white p-2 shadow-card border dark:bg-dark-2 dark:shadow-box-dark ${dropdownOpen ? "block" : "hidden"}`}
              >
                <div className="px-3 py-2">
                  <p className="text-base font-medium text-dark dark:text-white">
                    {userName}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {userRole}
                  </p>
                </div>
                <a
                  href="#0"
                  className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3 hover:bg-Primary hover:text-white"
                  onClick={() => handleButtonClick('/dashboard-user')}
                >
                  Dashboard
                </a>
                <a
                  href="#0"
                  className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3 hover:bg-Primary hover:text-white"
                  onClick={() => handleButtonClick('/user-setting')}
                >
                  Profile setting
                </a>
                <a
                  href="#0"
                  className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3 hover:bg-Primary hover:text-white"
                  onClick={() => handleButtonClick('/user-favorite')}
                >
                  My favorite
                </a>
                <a
                  href="#0"
                  className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3 hover:bg-Primary hover:text-white"
                  onClick={openLogoutModal}
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ConfirmLogoutProvider
        show={logoutModalOpen}
        onClose={closeLogoutModal}
        onConfirm={confirmLogout}
      />
    </>
  );
}
