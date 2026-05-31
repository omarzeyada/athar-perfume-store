import OffersList from "./OffersList";

export default function OffersPage() {
  
  return (
    <>
      <OffersList />
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
    </>
  );
}
