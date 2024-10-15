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
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface BudgetCardProps {
  handleEditGoal: () => void;
  handleIncreaseAmount: () => void;
  handleDecreaseAmount: () => void;
  handleDeleteGoal: () => void;
}

const BudgetCard: React.FC<BudgetCardProps> = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography>Entertainment</Typography>
        <LinearProgress variant="determinate" color="success" value={45} />
        <Box sx={{ minWidth: 35 }}>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
          >{`45%`}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <TextField variant="outlined" />
        <Fab color="error" aria-label="subtract">
          <RemoveIcon />
        </Fab>
        <Fab color="success" aria-label="add">
          <AddIcon />
        </Fab>
        <DeleteIcon />
        <EditIcon />
      </CardActions>
    </Card>
  );
};
export default BudgetCard;
