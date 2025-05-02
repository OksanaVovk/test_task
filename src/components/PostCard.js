"use client";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const PostCard = ({ post, onDelete, onOpen, isLoading }) => {
  return (
    <Card>
      {isLoading ? (
        <CircularProgress
          sx={{ display: "block", margin: "auto", padding: "20px" }}
        />
      ) : (
        <>
          <CardHeader
            avatar={<Avatar>{post.title.charAt(0).toUpperCase()}</Avatar>}
            title={post.title}
            subheader={`User ${post.userId}`}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              startIcon={<DeleteIcon />}
              variant="contained"
              sx={(theme) => ({
                backgroundColor: theme.palette.red.main,
                "&:hover": {
                  backgroundColor: theme.palette.darkRed.main,
                },
              })}
              onClick={() => onDelete(post.id)}
            >
              Видалити
            </Button>
            <Button
              variant="outlined"
              size="small"
              startIcon={<KeyboardBackspaceIcon />}
              sx={(theme) => ({
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: "#e3f2fd",
                  borderColor: "#1976d2",
                },
              })}
              onClick={onOpen}
            >
              До списку
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
};

export default PostCard;
