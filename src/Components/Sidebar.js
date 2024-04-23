import React from "react";

import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
const Sidebar = ({ showSection, data, activeSection }) => {
  const setSidebar = useSelector((state) => state.setSidebar);
  const { isSidebarActive } = setSidebar;

  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const { pathname } = useLocation();
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);


  return (
    <>
      <div
        className={
          isSidebarActive ? "side-bar-main" : "side-bar-main not-active"
        }
      >
        <div className="sidebar-section">
          <div className="d-flex mt-3 px-4 align-items-center">
            <Link to={"/"}>
              <img
                src="https://kindergarten.thimpress.com/demo-3/wp-content/uploads/sites/6/2019/02/logo-03.png"
                className="img-fluid log"
              />
            </Link>
          </div>

          {data?.map((item, index) => (
            <div className={`mt-${index === 0 ? "5" : "0"} hey`} key={item.id}>
              <Link onClick={() => showSection(item.section)} to={item.section==="learn" && "/learn"}>
                <div className="sidebar-content d-flex align-items-center justify-content-center">
                  <div className="d-flex side align-items-center ">
                    <span
                      className={
                        activeSection === item.section
                          ? "fa-sidebar-icon  active"
                          : "fa-sidebar-icon "
                      }
                    >
                      {item.icon}
                    </span>
                    <p className="mb-0">{item.label}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
