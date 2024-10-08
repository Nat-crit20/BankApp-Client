import FormControl from "@mui/material/FormControl";
import { TextField, Button } from "@mui/material";
import BankHead from "../assets/BankingHeadingImg.png";
import { Link } from "react-router-dom";
import "./LoginView.css";

function LoginView() {
  return (
    <div className="login-view">
      <div className="img-container">
        <img src={BankHead} alt="" />
      </div>
      <div className="form-container">
        <h1>Log in</h1>
        <FormControl sx={{ width: "20rem" }}>
          <TextField
            sx={{ margin: "1rem" }}
            id="standard-basic"
            label="Username"
            variant="standard"
          />
          <TextField
            sx={{ margin: "1rem" }}
            id="standard-basic"
            label="Password"
            variant="standard"
          />
          <Button sx={{ margin: "1rem" }} variant="contained">
            Submit
          </Button>
        </FormControl>
        <Link to="/register">Need to Sing Up?</Link>
      </div>
    </div>
  );
}
export default LoginView;
