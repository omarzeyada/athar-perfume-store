import React from "react";
import { useParams } from "react-router-dom"; 
import { useSelector } from "react-redux";
import BrandCardPage from "./BrandCardPage";
import { Grid, Container, Typography } from "@mui/material";

const titleStyle = {
  color: "#212529",
  fontWeight: 500,
  margin: "40px 0 25px 0",
};

export default function SingleBrandPage() {
  
  const { brandName } = useParams();

  
  const brand = useSelector((brandState) => brandState.product.brands || []);
  const brandOnly = brand.filter((item) => item && item.category === "brand");

  
  const allBrandProducts = brandOnly.filter(
    (product) =>
      product.brand?.trim().toLowerCase() === brandName?.trim().toLowerCase(),
  );

  return (
    <Container maxWidth='lg' sx={{ pb: 8 }}>
      
      <Typography variant='h3' sx={titleStyle}>
        {brandName}
      </Typography>

      
      <Grid container spacing={6}>
        {allBrandProducts.map((prod, productIndex) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={prod.id || productIndex}>
            <BrandCardPage product={prod} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
