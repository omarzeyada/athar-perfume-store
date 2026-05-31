import React, { useState } from "react";
import { Button, TextField, Card, Box } from "@mui/material";

export default function NewAccount() {
  const [text, setText] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleCreateAccount = () => {
    alert(`Account created for ${text.name} with email ${text.email} and phone ${text.phone}`);
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "50px auto", padding: "30px" }}>
      <form id='subscription-form'>
        <TextField
          margin='dense'
          id='name'
          name='name'
          label='Full Name'
          type='text'
          fullWidth
          variant='standard'
          value={text.name}
          onChange={(e) => {
            setText({ ...text, name: e.target.value });
          }}
        />
        <TextField
          margin='dense'
          id='phone'
          name='phone'
          label='Phone Number'
          type='tel'
          fullWidth
          variant='standard'
          value={text.phone}
          onChange={(e) => {
            setText({ ...text, phone: e.target.value });
          }}
        />
        <TextField
          autoFocus
          required
          margin='dense'
          id='email'
          name='email'
          label='Email Address'
          type='email'
          fullWidth
          variant='standard'
          value={text.email}
          onChange={(e) => {
            setText({ ...text, email: e.target.value });
          }}
        />
        <TextField
          margin='dense'
          id='password'
          name='password'
          label='Password'
          type='password'
          fullWidth
          variant='standard'
          value={text.password}
          onChange={(e) => {
            setText({ ...text, password: e.target.value });
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 20px 0",
          }}>
          <Button
            type='submit'
            form='subscription-form'
            variant='outlined'
            color='black'
            onClick={handleCreateAccount}
            sx={{
              backgroundColor: "#ffc107",
              padding: "5px 25px",
              borderRadius: "10px",
              color: "white",
              fontSize: "17px",
              fontWeight: "400",
            }}>
            Create Account
          </Button>
        </Box>
      </form>
    </Card>
  );
}
