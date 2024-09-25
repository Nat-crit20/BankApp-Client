import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ChangeEvent } from "react";
import Modal from "@mui/material/Modal";
import { Goal } from "../lib/types";

import FormControl from "@mui/material/FormControl";
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
interface BudgetModalProps {
  handleCreateGoal: (a: Goal) => void;
}

const BudgetModal: React.FC<BudgetModalProps> = ({ handleCreateGoal }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [budget, setBudget] = useState<string>("");
  const [category, setCategory] = useState<string>("");
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
  const handleSubmit = () => {
    const goal: Goal = {
      category: category,
      amount: budget,
    };
    handleCreateGoal(goal);
    handleClose();
    return;
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormControl fullWidth onSubmit={handleSubmit}>
            <TextField
              id="category-amount-label"
              label="Category"
              variant="standard"
              value={category}
              onChange={handleCategoryChange}
            />
            <TextField
              id="category-amount-label"
              label="Amount to Save"
              variant="standard"
              value={budget}
              onChange={handleBudgetChange}
            />
            <Button type="submit">Submit</Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
};
export default BudgetModal;
