import { Box, Tabs, Tab, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100vh",
        padding: "1rem",
      }}
    >
      <Tabs
        orientation="vertical"
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          width: "12rem",
        }}
      >
        <Tabs orientation="vertical" aria-label="Vertical tabs example">
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

        <Button variant="contained" color="error">
          Log Out
        </Button>
      </Tabs>
    </Box>
  );
};
export default Navbar;
