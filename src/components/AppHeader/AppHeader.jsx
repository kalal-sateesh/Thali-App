import styles from "./AppHeader.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import route from "../../routes/route.json";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const AppHeader = () => {
  const data = useSelector((state) => state.cart.data);

  const navigate = useNavigate();

  const { isAuth, logoutHandler } = useContext(AuthContext);

  const linkStyleHandelr = ({ isActive }) =>
    isActive ? styles.navActive : styles.nav;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      style={{ backgroundColor: "#712CF9" }}
    >
      <Navbar.Brand className={`fs-4 `}>
        <NavLink to={route.HOME} className={styles.shop}>
          The Indian Grill
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavLink to={route.HOME} className={linkStyleHandelr}>
            HOME
          </NavLink>
          <NavLink to={route.ABOUT} className={linkStyleHandelr}>
            ABOUT
          </NavLink>
          <NavLink to={route.CONTACT_US} className={linkStyleHandelr}>
            CONTACTUS
          </NavLink>
        </Nav>
        {<Nav className="me-3">
          <Nav.Link className={styles.button}>
            {!isAuth && (
              <>
                <Button
                  onClick={() => navigate(route.LOGIN)}
                  variant="secondary"
                  className="me-2"
                >
                  Login
                </Button>
                <Button
                  onClick={() => navigate("signup")}
                  variant="secondary"
                  className="me-2"
                >
                  Signup
                </Button>
              </>
            )}
            {isAuth && (
              <Button
                onClick={logoutHandler}
                variant="secondary"
                className="me-2"
              >
                Logout
              </Button>
            )}
            <NavLink to={route.CART}>
              <Button variant="secondary">
                <i className="bi bi-cart  me-3"></i>
                <span className="fw-bold text-warning">{data.length}</span>
              </Button>
            </NavLink>
          </Nav.Link>
        </Nav>}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default AppHeader;
