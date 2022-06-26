import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface User {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleSubmit() {
    toast.success("This works");
  }

  return (
    <Container sx={{ marginTop: 10 }}>
      <Grid
        sx={{
          textAlign: "center",
          maxWidth: 500,
          width: 500,
          justifyContent: "center",
          margin: "0 auto",
          backgroundColor: "lightgrey",
          padding: 5,
          borderRadius: 5,
        }}
      >
        <Typography sx={{ fontWeight: 600 }} variant="h4">
          Login email
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
              fullWidth
              placeholder="email"
              sx={{ marginTop: 2 }}
              type="text"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
              fullWidth
              placeholder="password"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleSubmit} fullWidth variant="contained">
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
