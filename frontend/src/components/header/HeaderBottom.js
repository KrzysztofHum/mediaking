import React from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderBottom = () => {
  return (
    <div className="header-bottom py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center gap-30">
              <div>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="images/menu.svg" alt="" />
                    <span className="me-5 d-inline-block">Shop Categories</span>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item text-white" to="/">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="/">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="/">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menu-links">
                <div className="d-flex align-items-center gap-15">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/">Our Store</NavLink>
                  <NavLink to="/">Blogs</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
