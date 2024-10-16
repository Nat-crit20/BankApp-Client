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
import { Goal } from "../lib/types";
import { ChangeEvent, useState } from "react";
import BudgetEditModal from "./BudgetEditModal";

interface BudgetCardProps {
  goal: Goal;
  handleEditGoal: (editedGoal: Goal) => void;
  handleIncreaseAmount: (goalID: string, amount: number) => void;
  handleDecreaseAmount: (goalID: string, amount: number) => void;
  handleDeleteGoal: (goalID: string) => void;
}

const BudgetCard: React.FC<BudgetCardProps> = ({
  goal,
  handleDecreaseAmount,
  handleDeleteGoal,
  handleEditGoal,
  handleIncreaseAmount,
}) => {
  const calcCompletion = (savedAmount: number): number => {
    return Math.floor((savedAmount / Number(goal.budget)) * 100);
  };

  const [amount, setAmount] = useState<number>(0);
  const [completion, setCompletion] = useState<number>(
    Math.floor((Number(goal.amount) / Number(goal.budget)) * 100)
  );

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (isNaN(value)) {
      return;
    }
    setAmount(value);
  };
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography>{goal.category}</Typography>
        <LinearProgress
          variant="determinate"
          color="success"
          value={completion}
        />
        <Box sx={{ minWidth: 35 }}>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
          >{`${completion}%`}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <TextField
          variant="outlined"
          value={amount}
          onChange={handleAmountChange}
        />
        <Fab
          color="error"
          aria-label="subtract"
          onClick={() => {
            handleDecreaseAmount(goal.id, amount);
            const savedAmount = Number(goal.amount) - amount;
            setCompletion(() => calcCompletion(savedAmount));
            setAmount(0);
          }}
        >
          <RemoveIcon />
        </Fab>
        <Fab
          color="success"
          aria-label="add"
          onClick={() => {
            handleIncreaseAmount(goal.id, amount);

            const savedAmount = Number(goal.amount) + amount;
            setCompletion(() => calcCompletion(savedAmount));
            setAmount(0);
          }}
        >
          <AddIcon />
        </Fab>
        <DeleteIcon
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            handleDeleteGoal(goal.id);
          }}
        />
        <BudgetEditModal handleEditGoal={handleEditGoal} goal={goal} />
      </CardActions>
    </Card>
  );
};
export default BudgetCard;
