import CreateCard from "@/components/CreateCard";
import { Box } from "@mui/material";

const CreateCardPage = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",

        py: 10,
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CreateCard />
    </Box>
  );
};

export default CreateCardPage;
