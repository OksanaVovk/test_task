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
      <Button
        onClick={onEdit}
        sx={(theme) => ({ color: theme.palette.primary.main })}
        variant="plain"
      >
        Редагувати
      </Button>
      <Button
        onClick={onBtnClick}
        sx={(theme) => ({ backgroundColor: theme.palette.primary.main })}
        variant="contained"
      >
        Підтвердити
      </Button>
    </DialogActions>
  </Dialog>
);

export default PreviewDialog;
