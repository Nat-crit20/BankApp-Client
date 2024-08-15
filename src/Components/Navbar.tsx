import { Box, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
        width: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", width: "100%" }}
      >
        <Link to="/home">
          <Tab label="Dashboard" />
        </Link>
        <Link to="/transactions">
          <Tab label="Transactions" />
        </Link>
        <Link to="/accounts">
          <Tab label="Accounts" />
        </Link>
        <Link to="/settings">
          <Tab label="Settings" />
        </Link>
      </Tabs>
    </Box>
  );
};
export default Navbar;
