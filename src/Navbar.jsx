// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <div className="container-fluid mb-5">
//         <div className="row ">
//           <div className=" col-10 mx-auto">
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//               <NavLink className="navbar-brand" to="/">
//                 Z K Abid
//               </NavLink>
//               <button
//                 class="navbar-toggler"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarTogglerDemo01"
//                 aria-controls="navbarTogglerDemo01"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span class="navbar-toggler-icon"></span>
//               </button>
//               {/* <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button> */}
//               <div
//                 className="collapse navbar-collapse"
//                 id="navbarSupportedContent"
//               >
//                 <ul className="navbar-nav ml-auto">
//                   <li className="nav-item active text-center">
//                     <NavLink
//                       exact
//                       activeClassName="menu_active"
//                       className="nav-link"
//                       to="/"
//                     >
//                       Home <span className="sr-only">(current)</span>
//                     </NavLink>
//                   </li>
//                   <li className="nav-item text-center">
//                     <NavLink
//                       activeClassName="menu_active"
//                       className="nav-link"
//                       to="/service"
//                     >
//                       Services
//                     </NavLink>
//                   </li>
//                   <li className="nav-item text-center">
//                     <NavLink
//                       activeClassName="menu_active"
//                       className="nav-link"
//                       to="/about"
//                     >
//                       About
//                     </NavLink>
//                   </li>
//                   <li className="nav-item text-center">
//                     <NavLink
//                       activeClassName="menu_active"
//                       className="nav-link"
//                       to="/contact"
//                     >
//                       Contact
//                     </NavLink>
//                   </li>
//                 </ul>
//                 <li className="dropdown">
//                   <NavLink
//                     className="dropdown-toggle"
//                     data-toggle="dropdown"
//                     to="/"
//                   >
//                     Page 1 <span class="caret"></span>
//                   </NavLink>
//                   <ul className="dropdown-menu">
//                     <li>
//                       <NavLink to="/">Page 1-1</NavLink>
//                     </li>
//                     <li>
//                       <NavLink to="/">Page 1-2</NavLink>
//                     </li>
//                     <li>
//                       <NavLink to="/">Page 1-3</NavLink>
//                     </li>
//                   </ul>
//                 </li>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Navbar;

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <>
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">
                  Z K Abid
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <NavLink
                        exact
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/"
                      >
                        Home <span class="sr-only">(current)</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/service"
                      >
                        Service
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
