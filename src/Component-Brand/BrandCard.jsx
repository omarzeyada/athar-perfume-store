import { Card, CardMedia, Typography, CardActionArea } from "@mui/material";

export default function BrandCard({ name, image }) {
  
  return (
    <>
      <Card
        sx={{
          minWidth: 345,
          borderRadius: "10px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
        }}>
        <CardActionArea>
          <CardMedia
            component='img'
            image={image}
            alt='green iguana'
            height='280px'
          />
        </CardActionArea>
      </Card>

      <Typography
        variant='h5'
        sx={{
          color: "#ffc107",
          textAlign: "center",
          fontWeight: "bold",
          m: "20px",
        }}>
        {name}
      </Typography>
    </>
  );
}
