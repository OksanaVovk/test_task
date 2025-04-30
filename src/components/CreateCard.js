"use client";
import { Box, Stack, Button, TextField, InputAdornment } from "@mui/material";
import ButtonStepper from "./Stepper";
import PreviewDialog from "./PreviewDialog";
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import TitleIcon from "@mui/icons-material/Title";
import SubjectIcon from "@mui/icons-material/Subject";
import { useDispatch } from "react-redux";
import { createPost } from "@/redux/posts/operations";

const CreateCard = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [value, setValue] = useState({ title: "", text: "" });
  const [isOpenPreview, setIsOpenPreview] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value: newValue } = event.target;
    setValue((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const onBtnNextClick = () => {
    if (activeStep === 2) {
      setActiveStep((prev) => prev + 1);
      setIsOpenPreview(true);
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const onBtnSaveClick = () => {
    console.log(value);
    dispatch(
      createPost({
        title: value.title,
        body: value.text,
        userId: 1,
      })
    );
    setValue({ title: "", text: "" });
    setActiveStep(1);
  };

  const onEdit = () => {
    setActiveStep(1);
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
        {activeStep == 1 && (
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
        {activeStep == 2 && (
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
            disabled={activeStep === 1}
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
            onClick={activeStep <= 2 ? onBtnNextClick : onBtnSaveClick}
          >
            {activeStep <= 2 ? `Далі` : `Зберегти`}
          </Button>
        </Stack>
      </Box>
      <PreviewDialog
        data={value}
        isOpenPreview={isOpenPreview}
        onEdit={onEdit}
        onBtnClick={() => setIsOpenPreview(false)}
      />
    </>
  );
};
export default CreateCard;
