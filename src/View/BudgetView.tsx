import { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import BasicPie from "../Components/PieChart";
import Context from "../Context";
import { getTransactions } from "../lib/utilities";
import { Transaction } from "../lib/types";
import BudgetModal from "../Components/BudgetModal";
import BudgetCard from "../Components/BudgetCard";
import { Goal } from "../lib/types";
const style = {
  display: "flex",
};

const BudgetView = () => {
  const { accountAccess } = useContext(Context);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [goals, setGoals] = useState<Goal[]>([]);
  const handleCreateGoal = (goal: Goal) => {
    setGoals((prev) => {
      return [...prev, goal];
    });
  };

  const handleIncreaseAmount = (goalID: string, amount: number) => {
    setGoals((prev: Goal[]): Goal[] => {
      return prev.map((goal) => {
        if (goal.id === goalID) {
          const newAmount = String(Number(goal.amount) + amount);
          return {
            budget: goal.budget,
            category: goal.category,
            amount: newAmount,
            id: goalID,
          };
        } else {
          return goal;
        }
      });
    });
  };
  const handleDecreaseAmount = (goalID: string, amount: number) => {
    setGoals((prev: Goal[]): Goal[] => {
      return prev.map((goal) => {
        if (goal.id === goalID) {
          const newAmount = String(Number(goal.amount) - amount);
          return {
            budget: goal.budget,
            category: goal.category,
            amount: newAmount,
            id: goalID,
          };
        } else {
          return goal;
        }
      });
    });
  };

  const handleEditGoal = (editedGoal: Goal) => {
    setGoals((prev: Goal[]): Goal[] => {
      return prev.map((goal) => {
        if (goal.id === editedGoal.id) {
          return editedGoal;
        } else {
          return goal;
        }
      });
    });
  };

  const handleDeleteGoal = (goalID: string) => {
    setGoals((prev: Goal[]): Goal[] => {
      return prev.filter((goal) => {
        if (goal.id !== goalID) {
          return goal;
        } else {
          return;
        }
      });
    });
  };

  useEffect(() => {
    if (accountAccess) {
      const loadTransactions = async () => {
        const data: Transaction[] = await getTransactions();
        setTransactions(data);
      };

      // Call the function to load transactions
      loadTransactions();
    }
  }, [accountAccess]);
  return (
    <>
      <h1>Budget Tab</h1>

      <Box sx={style}>
        <BasicPie transactions={transactions} />
        <Box>
          <BudgetModal handleCreateGoal={handleCreateGoal} />
          {goals.map((goal) => {
            console.log(goal);
            return (
              <BudgetCard
                goal={goal}
                handleEditGoal={handleEditGoal}
                handleIncreaseAmount={handleIncreaseAmount}
                handleDecreaseAmount={handleDecreaseAmount}
                handleDeleteGoal={handleDeleteGoal}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
};
export default BudgetView;
