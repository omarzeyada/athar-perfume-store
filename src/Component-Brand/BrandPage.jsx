import BrandCardPage from "./BrandCardPage";
import {
  Box,
  Grid,
  Button,
  Container,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";
import Inventory from "@mui/icons-material/Inventory";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const titleStyle = {
  color: "#212529",
  fontWeight: 500,
  margin: "25px",
};

export default function BrandPage() {
  const brand = useSelector((brandState) => {
    return brandState.product.brands || [];
  });

  const navigate = useNavigate();

  const brandOnly = brand.filter((item) => item && item.category === "brand");

  if (brandOnly.length === 0)
    return (
      <Table sx={{ marginTop: "95px" }}>
        <TableBody>
          <TableRow>
            <TableCell colSpan={3} align='center' sx={{ py: 8 }}>
              <Inventory sx={{ fontSize: 60, color: "#cbd5e1", mb: 2 }} />
              <Typography color='textSecondary' variant='h6'>
                No Brands Available
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    const uniqueBrands = Array.from(new Set(brandOnly.map((b) => b.brand?.trim()).filter(Boolean)))

  return (
    <Container maxWidth='lg'>
      {uniqueBrands.map((brandName, brandIndex) => {
        const brandProducts = brand.filter(
          (product) => product.brand?.trim().toLowerCase() === brandName?.trim().toLowerCase(),
        );
        if (brandProducts.length === 0) return null;
        return (
          <Box key={brandIndex}>
            <Typography variant='h4' sx={titleStyle}>
              {brandName}
            </Typography>
            <Grid container spacing={6}>
              {brandProducts.slice(0, 3).map((prod, productIndex) => (
                <Grid
                  size={{ xs: 12, sm: 6, md: 4 }}
                  key={prod.id || productIndex}>
                  <BrandCardPage product={prod} />
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                display: brandOnly?.length ? "flex" : "none",
                justifyContent: "flex-end",
              }}>
              <Button
                variant='outlined'
                color='black'
                sx={{
                  backgroundColor: "#ffc107",
                  padding: "5px 15px",
                  marginTop: "30px",
                  marginBottom: "20px",
                  borderRadius: "10px",
                  color: "white",
                  fontSize: "19px",
                  fontWeight: "bold",
                }}
                onClick={() => navigate(`/brand/${brandName}`)}>
                See More
                <ArrowForwardIcon sx={{ marginLeft: "5px" }} />
              </Button>
            </Box>
          </Box>
        );
      })}
    </Container>
  );
}
