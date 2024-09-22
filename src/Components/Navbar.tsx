import { Box, Tabs, Tab, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        height: "100vh",
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          width: "12rem",
          height: "100vh",
        }}
      >
        <Tabs
          orientation="vertical"
          aria-label="Vertical tabs example"
          sx={{
            height: "80vh",
          }}
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

        <Button
          variant="contained"
          color="error"
          sx={{
            margin: "1rem",
          }}
        >
          Log Out
        </Button>
      </Tabs>
    </Box>
  );
};
export default Navbar;
