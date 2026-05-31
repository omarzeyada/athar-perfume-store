import React from "react";
import BrandCard from "./BrandCard";
import { Box, Container, Grid } from "@mui/material";

// Images
import image31 from "../Images/Image-31.jpeg";
import image20 from "../Images/Image-20.jpeg";
import image48 from "../Images/Image-48.jpeg";
import image46 from "../Images/Image-46.jpeg";
import image8 from "../Images/Image-8.jpeg";
import image14 from "../Images/Image-14.jpeg";

export default function BrandList() {
  
  return (
    <>
      <Box
        sx={{
          margin: { md: "48px 70px 0" },
        }}>
        <Container maxWidth='lg'>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <BrandCard name='Dior' image={image20} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <BrandCard name='Tom Ford' image={image48} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <BrandCard name='Giorgio Armani' image={image8} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <BrandCard name='Versaci' image={image46} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <BrandCard name='Chanel' image={image14} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <BrandCard name='Prada' image={image31} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
