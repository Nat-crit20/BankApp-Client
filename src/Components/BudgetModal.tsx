import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BudgetModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [budget, setBudget] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
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
          <FormControl fullWidth>
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
            />
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
};
export default BudgetModal;
