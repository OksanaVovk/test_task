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
              sx={{
                backgroundColor: "#e03636",
                "&:hover": {
                  backgroundColor: "#b42d2d",
                },
              }}
              onClick={() => onDelete(post.id)}
            >
              Видалити
            </Button>
            <Button
              variant="outlined"
              size="small"
              startIcon={<KeyboardBackspaceIcon />}
              sx={{
                color: "#2196f3",
                borderColor: "#2196f3",
                "&:hover": {
                  backgroundColor: "#e3f2fd",
                  borderColor: "#1976d2",
                },
              }}
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
