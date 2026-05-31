import GiftCard from "./GiftCard";
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
import Inventory from "@mui/icons-material/Inventory";
import { useSelector } from "react-redux";

export default function GiftPage() {
  const brandItems = useSelector((brandState) => {
    return brandState.product.gifts;
  });

  const brandOnly = brandItems.filter(
    (brandItem) => brandItem.category === "gift",
  );

  return (
    <>
      <Box sx={{ margin: "48px 70px 10px" }}>
        <Container maxWidth='xl'>
          <Grid container spacing={4}>
            {brandOnly.map((brandItem, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={brandItem.id || index}>
                <GiftCard product={brandItem} />
              </Grid>
            ))}
          </Grid>
          {brandOnly.length === 0 && (
            <Table sx={{ marginTop: "40px" }}>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={3} align='center' sx={{ py: 8 }}>
                    <Inventory sx={{ fontSize: 60, color: "#cbd5e1", mb: 2 }} />
                    <Typography color='textSecondary' variant='h6'>
                      No Gifts Available
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
