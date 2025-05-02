"use client";

import { Box, Button, Typography, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const Hero = () => {
  const router = useRouter();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        borderRadius: "10px",
        padding: "40px 20px",
        background: isDarkMode
          ? "linear-gradient(315deg, rgb(47, 25, 136) 0%, rgba(44, 39, 39, 0.9) 100%)"
          : "linear-gradient(315deg, rgba(252, 227, 238, 1) 0%, rgba(197, 232, 252, 1) 100%)",
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
          sx={(theme) => ({ backgroundColor: theme.palette.primary.main })}
          size="large"
          onClick={() => router.push("/posts")}
        >
          Переглянути пости
        </Button>
        <Button
          variant="outlined"
          startIcon={<AddCircleIcon />}
          sx={(theme) => ({ color: theme.palette.primary.main })}
          size="large"
          onClick={() => router.push("/posts/create")}
        >
          Додати пост
        </Button>
      </Stack>
    </Box>
  );
};

export default Hero;
