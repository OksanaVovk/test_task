"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { postsSelectors } from "@/redux/posts/postsSelectors";
import {
  Badge,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";

const Comments = () => {
  const [open, setOpen] = useState(false);
  const comments = useSelector(postsSelectors.selectPostsComments);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const newCommentsCount = comments ? comments.length : 0;

  return (
    <>
      <IconButton edge="end" color="inherit" onClick={handleClickOpen}>
        <Badge badgeContent={newCommentsCount} color="error">
          <CommentIcon />
        </Badge>
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Коментарі</DialogTitle>
        <DialogContent dividers>
          {comments.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              Немає коментарів для цього посту.
            </Typography>
          ) : (
            <List>
              {comments.map((comment) => (
                <ListItem key={comment.id}>
                  <ListItemText
                    primary={comment.name}
                    secondary={comment.body}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Comments;
