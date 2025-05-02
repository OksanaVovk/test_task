"use client";

import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerList from "./DrawerList";
import { usePathname } from "next/navigation";
import Comments from "./Comments";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Місяць
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Сонце

const Header = ({ mode, setMode }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleToggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const getTitle = () => {
    if (pathname === "/") return "DOiT MVP";
    if (pathname === "/posts") return "Усі пости";
    if (pathname === "/posts/create") return "Створити пост";
    if (pathname.startsWith("/posts/")) {
      const postId = pathname.split("/")[2];
      return `Пост #${postId}`;
    }
    return "Сторінка";
  };

  const isPostPage = /^\/posts\/\d+$/.test(pathname);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={(theme) => ({ backgroundColor: theme.palette.primary.main })}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Drawer open={open} onClose={toggleDrawer(false)}>
            <DrawerList toggleDrawer={toggleDrawer(false)} />
          </Drawer>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {getTitle()}
          </Typography>

          <IconButton color="inherit" onClick={handleToggleTheme}>
            {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
          {isPostPage && <Comments />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
