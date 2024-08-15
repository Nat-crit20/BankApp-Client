import FormControl from "@mui/material/FormControl";
import { TextField, Button } from "@mui/material";
import BankHead from "../assets/BankingHeadingImg.png";
import "./SignUpView.css";

function SignUpView() {
  return (
    <div className="sign-up-view">
      <div className="img-container">
        <img src={BankHead} alt="" />
      </div>
      <div className="form-container">
        <h1>Sign up</h1>
        <FormControl>
          <TextField
            id="standard-basic"
            label="First Name"
            variant="standard"
          />
          <TextField id="standard-basic" label="Last Name" variant="standard" />
          <TextField id="standard-basic" label="Username" variant="standard" />
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />
          <Button variant="contained">Submit</Button>
        </FormControl>
      </div>
    </div>
  );
}
export default SignUpView;
