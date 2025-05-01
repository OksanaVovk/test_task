"use client";
import {
  Box,
  Stack,
  Button,
  TextField,
  InputAdornment,
  Snackbar,
} from "@mui/material";
import ButtonStepper from "./ButtonStepper";
import PreviewDialog from "./PreviewDialog";
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import TitleIcon from "@mui/icons-material/Title";
import SubjectIcon from "@mui/icons-material/Subject";
import { useDispatch } from "react-redux";
import { createPost } from "@/redux/posts/operations";

const CreateCard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [value, setValue] = useState({ title: "", text: "" });
  const [isOpenPreview, setIsOpenPreview] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value: newValue } = event.target;
    setValue((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const onBtnNextClick = () => {
    if (activeStep === 1) {
      setActiveStep((prev) => prev + 1);
      setIsOpenPreview(true);
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const onBtnSaveClick = () => {
    try {
      dispatch(
        createPost({
          title: value.title,
          body: value.text,
          userId: 1,
        })
      );
      setValue({ title: "", text: "" });
      setActiveStep(0);
      setOpen(true);
    } catch (error) {
      console.error("Помилка збереження поста:", error);
    }
  };

  const onEdit = () => {
    setActiveStep(0);
    setIsOpenPreview(false);
  };

  return (
    <>
      <Box
        sx={{
          width: "50vw",
          borderRadius: "10px",
          padding: "40px 20px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ButtonStepper activeStep={activeStep} />
        {activeStep == 0 && (
          <TextField
            label="Заголовок"
            name="title"
            value={value.title}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TitleIcon />
                </InputAdornment>
              ),
            }}
            sx={{ marginTop: "35px" }}
          />
        )}
        {activeStep == 1 && (
          <TextField
            label="Тіло"
            variant="outlined"
            name="text"
            value={value.text}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SubjectIcon />
                </InputAdornment>
              ),
            }}
            sx={{ marginTop: "35px" }}
          />
        )}

        <Stack
          width="100%"
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          mt={4}
        >
          <Button
            variant="plain"
            disabled={activeStep === 0}
            sx={{ color: "#2196f3" }}
            size="large"
            onClick={() => setActiveStep((prev) => prev - 1)}
          >
            Назад
          </Button>
          <Button
            variant="contained"
            endIcon={
              <SaveIcon
                sx={{
                  color: "inherit",
                }}
              />
            }
            sx={{ backgroundColor: "#2196f3" }}
            size="large"
            onClick={activeStep <= 1 ? onBtnNextClick : onBtnSaveClick}
          >
            {activeStep <= 1 ? `Далі` : `Зберегти`}
          </Button>
        </Stack>
      </Box>
      <PreviewDialog
        data={value}
        isOpenPreview={isOpenPreview}
        onEdit={onEdit}
        onBtnClick={() => setIsOpenPreview(false)}
      />
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
        message="Пост успішно створено!"
      />
    </>
  );
};
export default CreateCard;
