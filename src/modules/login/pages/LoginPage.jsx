import classes from "../styles/LoginPage.module.css";
import global from "../../../Global.module.css"
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.card}>
          <h1 className={`row ${global.centerItems} ${classes.login}`}>
            Login
          </h1>
          <div className={`row ${global.margin}`}>
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="Enter your username" />
          </div>
          <div className={`row ${global.margin}`}>
            <label htmlFor="Password">Password:</label>
            <input type="text" placeholder="Enter your password" />
          </div>
          <div className={`row ${global.margin}`}>
            <button className={`${classes.forgotPass}`}>
              {" "}
              Forgot password?
            </button>
          </div>
          <div className={`row ${global.margin}`}>
            <Link to="/dashboard">
              <button className={`${classes.button}`}>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
