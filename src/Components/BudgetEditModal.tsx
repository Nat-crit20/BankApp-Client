import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ChangeEvent } from "react";
import Modal from "@mui/material/Modal";
import { Goal } from "../lib/types";

import FormControl from "@mui/material/FormControl";
import EditIcon from "@mui/icons-material/Edit";
import { TextField } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
interface BudgetEditModalProps {
  handleEditGoal: (a: Goal) => void;
  goal: Goal;
}

const BudgetEditModal: React.FC<BudgetEditModalProps> = ({
  handleEditGoal,
  goal,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [budget, setBudget] = useState<string>(goal.budget);
  const [amount, setAmount] = useState<string>(goal.amount);
  const [category, setCategory] = useState<string>(goal.category);
  const handleOpen = () => {
    setBudget("");
    setCategory("");
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };
  const handleBudgetChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (isNaN(Number(event.target.value))) {
      return;
    }
    setBudget(value);
  };
  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (isNaN(Number(event.target.value))) {
      return;
    }
    setAmount(value);
  };
  const handleSubmit = () => {
    const updatedGoal: Goal = {
      category: category,
      budget: budget,
      amount: goal.amount,
      id: goal.id,
    };
    handleEditGoal(updatedGoal);
    handleClose();
    return;
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <EditIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <TextField
                id="category-label"
                label="Category"
                variant="standard"
                value={category}
                onChange={handleCategoryChange}
              />
              <TextField
                id="category-budget-label"
                label="Amount to Save"
                variant="standard"
                value={budget}
                onChange={handleBudgetChange}
              />
              <TextField
                id="category-amount-label"
                label="Amount saved"
                variant="standard"
                value={amount}
                onChange={handleAmountChange}
              />
              <Button type="submit">Submit</Button>
            </FormControl>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default BudgetEditModal;
