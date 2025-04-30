import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const PreviewDialog = ({ isOpenPreview, data, onEdit, onBtnClick }) => (
  <Dialog open={isOpenPreview} fullWidth maxWidth="sm">
    <DialogTitle>Попередній перегляд</DialogTitle>
    <DialogContent dividers>
      <Typography variant="h5">{data.title}</Typography>
      <Typography variant="body1">{data.text}</Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={onEdit} sx={{ color: "#2196f3" }} variant="plain">
        Редагувати
      </Button>
      <Button
        onClick={onBtnClick}
        sx={{ backgroundColor: "#2196f3" }}
        variant="contained"
      >
        Підтвердити
      </Button>
    </DialogActions>
  </Dialog>
);

export default PreviewDialog;
