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
import { Goal } from "../lib/types";

interface BudgetCardProps {
  handleEditGoal: (editedGoal: Goal) => void;
  handleIncreaseAmount: (goalID: string, amount: number) => void';
  handleDecreaseAmount: (goalID: string, amount: number) => void;
  handleDeleteGoal: (goalID: string) => void';
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
