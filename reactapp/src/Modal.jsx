import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import QRCode from "qrcode";
import { useState, useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid white",
  width: { xs: "90%", sm: "50%", lg: "600px" },
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: 24,
  p: 4,
};

export default function Modals(props) {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState("");

  useEffect(() => {
    if (props.click) {
      setOpen(true);
      QRCode.toDataURL(props.obj.link).then(setSrc);
    }
  }, [props.click]);

  const handleClose = () => {
    props.func();
    setOpen(false);
  };

  return (
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
          sx={{
            fontSize: "1.7rem",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          {props.obj.title}
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, fontSize: "1.2rem" }}
        >
          Click the Link:{" "}
          <a href={props.obj.link} target="_blank" className="text-[#0065CC]">
            {props.obj.option}
          </a>
        </Typography>
        <div className="flex flex-col gap-3 mt-5 justify-center items-center">
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontSize: "1.2rem" }}
          >
            Or scan the QR Code Below:{" "}
          </Typography>
          <img src={src}></img>
        </div>
      </Box>
    </Modal>
  );
}
