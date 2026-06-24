import React from "react";
import MultiActionAreaCard from "./OffersCards";
import {
  Box,
  Button,
  Container,
  Grid,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";
import Inventory from "@mui/icons-material/Inventory";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function OffersList() {
  const navigate = useNavigate();

  const handleOpenOfferPage = () => {
    navigate("/offersPage");
  };

  const offers = useSelector((offerState) => {
    return offerState.product.offers;
  });

  const offerOnly = offers.filter(
    (offerItem) => offerItem.category === "offer",
  );

  const homeOnly = offerOnly.slice(0, 4);

  return (
    <>
      <Box dir='ltr' sx={{ margin: { md: "48px 70px 0" } }}>
        <Container maxWidth='lg'>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "0 0 30px 0",
            }}></div>
          <Grid container spacing={4}>
            {homeOnly.map((offer, index) => (
              <Grid size={{ xs: 12, sm: 4, md: 3 }} key={offer.id || index}>
                <MultiActionAreaCard product={offer} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: homeOnly?.length ? "flex" : "none",
              justifyContent: "flex-end",
            }}>
            <Button
              variant='outlined'
              color='black'
              onClick={handleOpenOfferPage}
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
          {offerOnly.length === 0 && (
            <Table sx={{ marginTop: "40px" }}>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={3} align='center' sx={{ py: 8 }}>
                    <Inventory sx={{ fontSize: 60, color: "#cbd5e1", mb: 2 }} />
                    <Typography color='textSecondary' variant='h6'>
                      No Offers Available
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
