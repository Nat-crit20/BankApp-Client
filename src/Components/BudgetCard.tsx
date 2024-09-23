import {
  Box,
  Card,
  CardContent,
  LinearProgress,
  Typography,
} from "@mui/material";

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
      </Card>
    </Box>
  );
};
export default BudgetCard;
