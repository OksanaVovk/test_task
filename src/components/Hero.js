"use client";

import { Box, Button, Typography, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const Hero = () => {
  const router = useRouter();

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
      <Box
        sx={{
          borderRadius: "10px",
          padding: "40px 20px",
          background:
            "linear-gradient(315deg, rgba(252, 227, 238, 1) 0%, rgba(197, 232, 252, 1) 100%)",
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom textAlign="center">
          Ласкаво просимо до DOiT MVP
        </Typography>
        <Typography variant="h6" component="p" gutterBottom textAlign="center">
          Ми працюємо над MVP освітньої платформи. Приєднуйтесь до команди!
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          mt={4}
        >
          <Button
            variant="contained"
            startIcon={<FormatListBulletedIcon />}
            sx={{ backgroundColor: "#2196f3" }}
            size="large"
            onClick={() => router.push("/posts")}
          >
            Переглянути пости
          </Button>
          <Button
            variant="outlined"
            startIcon={<AddCircleIcon />}
            sx={{ color: "#2196f3" }}
            size="large"
            onClick={() => router.push("/posts/create")}
          >
            Додати пост
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
