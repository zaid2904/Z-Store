import * as React from "react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Avatar,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { motion } from "framer-motion";
import profilePic from "./profilePic2.1.png"; // Replace with your image
import Footer from "./Footer"; // Custom footer component (optional)

const ReadmeComponent = () => {
  const [open, setOpen] = useState(false);
  const [hasSeenReadme, setHasSeenReadme] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  useEffect(() => {
    setTimeout(() => {
      const hasSeen = localStorage.getItem("hasSeenReadme");
      if (!hasSeen) {
        setOpen(true);
      }
    }, 3000);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setHasSeenReadme(true);
    localStorage.setItem("hasSeenReadme", "true");
  };

  return (
    <>
      {!hasSeenReadme && (
        <Dialog
          onClose={handleClose}
          TransitionComponent={Transition}
          keepMounted
          open={open}
          PaperProps={{
            sx: {
              borderRadius: "1rem",
              maxHeight: "70vh",
            },
          }}
        >
          <DialogTitle disableTypography>
            <div className="flex flex-row justify-between items-center h-16">
              <Typography variant="h6">
                <span className="text-blue-500 hover:underline text-base md:text-lg">
                  <a href="https://github.com/zaid2904/Z-Store" target="_blank" rel="noreferrer">
                    Z Store - Project Readme
                  </a>
                </span>
              </Typography>
              <IconButton>
                <a
                  href="https://github.com/zaid2904"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar
                    alt="Siddiqui Zaid"
                    src={profilePic}
                    sx={{
                      width: isMobile ? "60px" : "70px",
                      height: "auto",
                      border: "2px solid #3B82F6",
                    }}
                  />
                </a>
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent dividers>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant={isMobile ? "body2" : "body1"}
                textAlign="center"
                paragraph
                className="text-readable"
                style={{ fontSize: isMobile ? ".9rem" : "1.25rem" }}
              >
                ⚡ Hi, I'm Siddiqui Zaid — a passionate React.js developer and final-year IT engineering student.
              </Typography>
              <Typography
                variant={isMobile ? "body2" : "body1"}
                textAlign="center"
                paragraph
                className="text-readable"
                style={{ fontSize: isMobile ? "1rem" : "1.25rem" }}
              >
                Z Store is a modern e-commerce website built using React, Vite, Tailwind CSS, Firebase, React Router, and Context API.
              </Typography>
              <Divider />
              <Typography
                paragraph
                className="text-readable"
                style={{
                  fontSize: isMobile ? "1rem" : "1.25rem",
                  marginTop: "1rem",
                  fontWeight: "bold",
                }}
              >
                Key Features:
              </Typography>
              <ul className="flex flex-col gap-2 ml-3 md:ml-6 mb-4 text-sm md:text-base text-readable list-none">
                <li>✅ Multi-language support (English, Hindi, Gujarati, Urdu)</li>
                <li>✅ Fast product search and filtering</li>
                <li>✅ Secure Firebase authentication</li>
                <li>✅ Cart and wishlist features</li>
                <li>✅ Fully responsive design across devices</li>
              </ul>
              <Footer />
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ReadmeComponent;
