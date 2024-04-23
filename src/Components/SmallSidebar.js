import React from "react";
import { FaTimes } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NOT_ACTIVE_SMALL } from "../Redux/Constants/SidebarConstant";
import { useEffect, useState } from "react";
const SmallSidebar = ({ showSection, data, activeSection }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const setSmallSidebar = useSelector((state) => state.setSmallSidebar);
  const { isSidebarActivee } = setSmallSidebar;
  console.log(isSidebarActivee);

  const closeSidebar = () => {
    dispatch({ type: NOT_ACTIVE_SMALL });
  };
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const closeSidebarr = () => {
    dispatch({ type: NOT_ACTIVE_SMALL });
  };
  return (
    <>
      <div
        className={
          isSidebarActivee
            ? "small-sidebar-wrapper d-lg-none "
            : " not-active-sidebar"
        }
      >
        <div className="small-sidebar">
          <FaTimes className="times" onClick={() => closeSidebar()} />
          <div className="mt-5 small-sidebar-main">
            {" "}
            <Link to={"/"}>
              <img
                src="https://kindergarten.thimpress.com/demo-3/wp-content/uploads/sites/6/2019/02/logo-03.png"
                className="img-fluid log"
              />
            </Link>
            <div className=" small-sidebar-section mt-3">
              {data?.map((item, index) => (
                <Link
                  onClick={() => showSection(item.section)}
                  className="side"
                >
                  <div
                    className="d-flex gap-2 justify-content-center align-items-center mt-4 hgg"
                    onClick={closeSidebar}
                  >
                    <span
                      className={
                        activeSection === item.section
                          ? "fa-sidebar-icon  active"
                          : "fa-sidebar-icon "
                      }
                    >
                      {item.icon}
                    </span>
                    <p className="ou">{item.label}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallSidebar;
