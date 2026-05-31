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
} from "@mui/material";
import { useSelector } from "react-redux";
import { Inventory } from "@mui/icons-material";

export default function ProductPage() {
  const items = useSelector((itemState) => {
    return itemState.product.products || [];
  });

  const productOnly = items.filter(
    (item) => item && item.category === "product",
  );

  return (
    <>
      <Box sx={{ margin: "48px 70px" }}>
        <Container maxWidth='xl'>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "0 0 30px 0",
            }}></div>

          <Grid container spacing={4}>
            {productOnly.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id || index}>
                <ProductCard product={item} />
              </Grid>
            ))}
          </Grid>
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
