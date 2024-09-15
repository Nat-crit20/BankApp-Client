import { Box, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100vh",
      }}
    >
      <Tabs
        orientation="vertical"
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", width: "12rem" }}
      >
        <Link to="/home">
          <Tab label="Dashboard" />
        </Link>
        <Link to="/transactions">
          <Tab label="Transactions" />
        </Link>
        <Link to="/budget">
          <Tab label="Budget Planner" />
        </Link>
        <Link to="/settings">
          <Tab label="Settings" />
        </Link>
      </Tabs>
    </Box>
  );
};
export default Navbar;
