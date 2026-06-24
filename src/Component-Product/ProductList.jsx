import React from "react";
import ProductCard from "./ProductCard";
import {
  Box,
  Container,
  Grid,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Inventory from "@mui/icons-material/Inventory";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BrandList() {
  const navigate = useNavigate();
  const handleOpenProductPage = () => {
    navigate("/productPage");
  };

  const items = useSelector((itemState) => {
    return itemState.product.products;
  });

  const homeItems = items?.slice(0, 3);

  return (
    <>
      <Box dir='ltr' sx={{ margin: { md: "48px 70px " } }}>
        <Container maxWidth='lg'>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "0 0 30px 0",
            }}></div>
          <Grid container spacing={8}>
            {homeItems?.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id || index}>
                <ProductCard product={item} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: homeItems?.length ? "flex" : "none",
              justifyContent: "flex-end",
            }}>
            <Button
              variant='outlined'
              color='black'
              onClick={handleOpenProductPage}
              sx={{
                padding: "5px 25px",
                margin: "20px",
                borderRadius: "800px",
                border: "1px solid #000",
                fontSize: "19px",
                "&:hover": {
                  backgroundColor: "#ffd700",
                  color: "#fff",
                  borderColor: "#ffd700",
                },
              }}>
              See More
              <ArrowForwardIcon sx={{ marginLeft: "5px" }} />
            </Button>
          </Box>
          {items.length === 0 && (
            <Table sx={{ marginTop: "40px" }}>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={3} align='center' sx={{ py: 8 }}>
                    <Inventory sx={{ fontSize: 60, color: "#cbd5e1", mb: 2 }} />
                    <Typography color='textSecondary' variant='h6'>
                      No Products Available
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          )}
        </Container>
      </Box>
    </>
  );
}
