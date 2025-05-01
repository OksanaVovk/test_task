"use client";
import { useRouter } from "next/navigation";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AddIcon from "@mui/icons-material/Add";
import PostAddIcon from "@mui/icons-material/PostAdd";

const PostSpeedDial = () => {
  const router = useRouter();

  const actions = [
    {
      icon: <PostAddIcon />,
      name: "Створити пост",
      onClick: () => router.push("/posts/create"),
    },
  ];

  return (
    <SpeedDial
      ariaLabel="Швидкі дії"
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      icon={<AddIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.onClick}
        />
      ))}
    </SpeedDial>
  );
};

export default PostSpeedDial;
