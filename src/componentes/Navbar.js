import React from "react";

const links = ["About", "Carrer", "Events", "Product", "Support"];

const Navbar = () => {
  const createLinks = (linksArray) => {
    return linksArray.map((e, i) => (
      <li className="nav-item" key={i}>
        <a className="nav-link active" aria-current="page" href="#">
          {e}
        </a>
      </li>
    ));
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid ">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">{createLinks(links)}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// {
//     {
//       <li class="nav-item">
//         <a class="nav-link active" aria-current="page" href="#">
//           {element}
//         </a>
//       </li>;
//     }
//   }
