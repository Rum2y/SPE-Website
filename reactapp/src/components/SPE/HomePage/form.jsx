import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid white",
  width: { xs: "90%", sm: "50%", lg: "600px" },
  height: "20%",
  borderRadius: "10px",
  boxShadow: 24,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  p: 4,
};

export default function Forms() {
  const CssTextField = styled(TextField)({
    "& .MuiInput-underline:after": {
      borderBottomColor: "#0D4C94",
      color: "#0D4C94",
    },
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_FORM_API_URL}`,
        data // or `data` if sending FormData
      );
      // Success: Reset form and show success message
      e.target.reset();
      handleOpen();
      console.log("Success:", response.data);
    } catch (error) {
      // Error handling
      console.error("Error:", error);
      if (error.response) {
        alert(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        alert("Network error. Please check your connection.");
      } else {
        alert("Request setup error.");
      }
    }
  };
  return (
    <>
      <form className="text-center flex justify-center" onSubmit={handleSubmit}>
        <Stack
          direction="column"
          spacing={3}
          className="xs:w-[90%] lg:w-[75%] w-1/2"
        >
          <Stack direction="row" spacing={3}>
            <CssTextField
              type="text"
              name="Name"
              label="Name"
              variant="standard"
              className="w-full"
              required
            />
            <CssTextField
              type="email"
              name="Email"
              label="Email"
              variant="standard"
              className="w-full"
              required
            />
          </Stack>
          <Stack direction="row" spacing={3}>
            <CssTextField
              type="number"
              name="PhoneNumber"
              label="Phone Number"
              variant="standard"
              className="w-full"
              required
            />
            <CssTextField
              type="text"
              name="Address"
              label="Address"
              variant="standard"
              className="w-full"
            />
          </Stack>
          <CssTextField
            type="text"
            name="Message"
            label="Type your message here..."
            variant="standard"
            multiline
            rows={7}
            className="w-full"
            required
          />
          <Button
            variant="contained"
            className="rounded-none"
            color="primary"
            sx={{
              borderRadius: 0,
              height: 50,
              boxShadow: "none",
              backgroundColor: "#0D4C94",
              "&:hover": {
                backgroundColor: "#2167b8",
              },
            }}
            type="submit"
          >
            Submit
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ textAlign: "center" }}
              >
                Thank you! Your form has been successfully submitted.
              </Typography>
            </Box>
          </Modal>
        </Stack>
      </form>
    </>
  );
}
