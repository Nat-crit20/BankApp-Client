import {
  Box,
  Card,
  CardActions,
  CardContent,
  Fab,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const BudgetCard = () => {
  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <Typography>Entertainment</Typography>
          <LinearProgress color="success" value={45} />
          <Box sx={{ minWidth: 35 }}>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
            >{`45%`}</Typography>
          </Box>
        </CardContent>
        <CardActions>
          <TextField variant="outlined" />
          <Fab color="warning" aria-label="subtract">
            <RemoveIcon />
          </Fab>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </CardActions>
      </Card>
    </Box>
  );
};
export default BudgetCard;
