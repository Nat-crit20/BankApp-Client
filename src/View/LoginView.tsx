import FormControl from "@mui/material/FormControl";
import { TextField, Button } from "@mui/material";
import BankHead from "../assets/BankingHeadingImg.png";
import "./LoginView.css";

function LoginView() {
  return (
    <div className="login-view">
      <div className="img-container">
        <img src={BankHead} alt="" />
      </div>
      <div className="form-container">
        <h1>Log in</h1>
        <FormControl>
          <TextField id="standard-basic" label="Username" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />
          <Button variant="contained">Submit</Button>
        </FormControl>
      </div>
    </div>
  );
}
export default LoginView;
