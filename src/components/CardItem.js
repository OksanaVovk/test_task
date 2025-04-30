import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Button,
  Skeleton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArticleIcon from "@mui/icons-material/Article";

const CardItem = ({ post, onDelete, onOpen, isLoading }) => {
  if (isLoading) {
    return (
      <Card sx={{ maxWidth: 400, margin: 2 }}>
        <CardHeader
          avatar={<Skeleton variant="circular" width={40} height={40} />}
          title={<Skeleton height={10} width="80%" />}
          subheader={<Skeleton height={10} width="40%" />}
          action={<Skeleton variant="circular" width={32} height={32} />}
        />
        <CardContent>
          <Skeleton height={10} style={{ marginBottom: 6 }} />
          <Skeleton height={10} width="80%" />
        </CardContent>
        <CardActions>
          <Skeleton variant="rectangular" width={120} height={36} />
        </CardActions>
      </Card>
    );
  }

  return (
    <Card sx={{ maxWidth: 400, margin: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#2196f3" }}>
            {post.title.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={post.title}
        subheader={`ID: ${post.id}`}
        action={
          <IconButton onClick={() => onDelete(post.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          endIcon={<ArticleIcon />}
          onClick={() => onOpen(post.id)}
        >
          Перейти до поста
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
