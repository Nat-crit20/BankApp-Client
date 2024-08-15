import FormControl from "@mui/material/FormControl";
import { TextField, Button } from "@mui/material";
import BankHead from "../assets/BankingHeadingImg.png";

function LoginView() {
  return (
    <div>
      <div>
        <img src={BankHead} alt="" />
      </div>
      <h1>Log in</h1>
      <FormControl>
        <TextField id="standard-basic" label="Username" variant="standard" />
        <TextField id="standard-basic" label="Password" variant="standard" />
        <Button variant="contained">Submit</Button>
      </FormControl>
    </div>
  );
}
export default LoginView;
