import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useRouter } from "next/navigation";

const DrawerList = ({ toggleDrawer }) => {
  const router = useRouter();
  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        {[
          { id: 1, text: "Головна", icon: <HomeIcon />, rout: "/" },
          {
            id: 2,
            text: "Усі пости",
            icon: <FormatListBulletedIcon />,
            rout: "/posts",
          },
          {
            id: 3,
            text: "Створити пост",
            icon: <AddCircleIcon />,
            rout: "/posts/create",
          },
        ].map((item, index) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => {
                router.push(item.rout);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DrawerList;
