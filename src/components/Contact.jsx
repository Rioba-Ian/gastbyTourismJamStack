import React from "react";
import Title from "./Title";
import "../css/contact.css";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

const Contact = () => {
  return (
    <section>
      <Title title="Contact" subtitle="us" />
      <div className="form-container">
        <form action="">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
            />
          </Box>
        </form>
      </div>
    </section>
  );
};

export default Contact;
