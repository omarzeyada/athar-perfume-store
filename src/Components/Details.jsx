import {
  Container,
  Grid,
  CardActionArea,
  CardMedia,
  Typography,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Box,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";

export default function Details() {
  const det = useSelector((detState) => {
    return detState.product.selectedProduct;
  });

  if (!det) {
    return (
      <Typography variant='h5' sx={{ textAlign: "center", mt: 5, p: "175px" }}>
        No Product selected.
      </Typography>
    );
  }

  return (
    <>
      
      <Container maxWidth='xl' sx={{ m: "50px auto" }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 12, md: 3 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={det.image || "product"}
                alt='green iguana'
              />
            </CardActionArea>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Typography
              variant='h6'
              sx={{ mb: "10px", pb: "10px", borderBottom: "2px solid #ddd" }}>
              {det.description}
            </Typography>
            <Box sx={{ p: "20px", borderBottom: "2px solid #ddd" }}>
              <Typography variant='h4' sx={{ mb: " 10px" }}>
                {det.price} EGP
              </Typography>
              <Typography variant='h5'>
                Brand Name
                <span
                  style={{
                    color: "#4b2a98",

                    marginLeft: "50px",
                    marginBottom: " 10px",
                  }}>
                  {det.name}
                </span>
              </Typography>
              <Typography variant='h5'>
                Product Shape
                <span
                  style={{
                    color: "#4b2a98",
                    marginLeft: "20px",
                    marginBottom: " 10px",
                  }}>
                  {det.shape}
                </span>
              </Typography>
              <Typography variant='h5'>
                Product Size
                <span
                  style={{
                    color: "#4b2a98",
                    marginLeft: "45px",
                    marginBottom: " 10px",
                  }}>
                  {det.size} ml
                </span>
              </Typography>
              <Typography variant='h5'>
                Scent
                <span
                  style={{
                    color: "#4b2a98",
                    marginLeft: "125px",
                    marginBottom: " 10px",
                  }}>
                  {det.brand}
                </span>
              </Typography>

              <Typography variant='h5'>
                Age Group
                <span
                  style={{
                    color: "#4b2a98",
                    marginLeft: "65px",
                    marginBottom: " 10px",
                  }}>
                  {det.age}
                </span>
              </Typography>
              <Typography variant='h5'>
                Gender
                <span
                  style={{
                    color: "#4b2a98",
                    marginLeft: "65px",
                    marginBottom: " 10px",
                  }}>
                  {det.gender}
                </span>
              </Typography>
              <Typography variant='h5'>
                Product Weight
                <span
                  style={{
                    color: "#4b2a98",
                    marginLeft: "10px",
                    marginBottom: " 10px",
                  }}>
                  {det.wight} g
                </span>
              </Typography>
              <Typography variant='h5'>
                Free of material type
                <span
                  style={{
                    color: "#4b2a98",
                    marginLeft: "20px",
                    marginBottom: " 10px",
                  }}>
                  {det.freeOf}
                </span>
              </Typography>
            </Box>
            <Typography variant='h4' sx={{ marginBottom: " 10px", mt: "20px" }}>
              About this item
            </Typography>
            <ul style={{ p: "20px" }}>
              <li style={{ marginBottom: " 10px", fontSize: "19px" }}>
                Inspired by Dior Sauvage, providing a similar style and
                identity.
              </li>
              <li style={{ marginBottom: " 10px", fontSize: "19px" }}>
                Scent Family: Fresh and woody, ideal for all seasons.
              </li>
              <li style={{ marginBottom: " 10px", fontSize: "19px" }}>
                Top Notes: Calabrian bergamot and pepper for a bright and spicy
                opening.
              </li>
              <li style={{ marginBottom: " 10px", fontSize: "19px" }}>
                Middle Notes: Sichuan pepper, lavender, pink pepper, vetiver,
                patchouli, geranium, and elemi.
              </li>
              <li style={{ marginBottom: " 10px", fontSize: "19px" }}>
                Base Notes: Ambroxan, cedar, and labdanum for a rich and
                long-lasting finish.
              </li>
            </ul>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 3 }}
            sx={{ border: "2px solid #ddd", mb: "12px", p: "20px" }}>
            <Typography variant='h5' sx={{ mb: "7px" }}>
              {det.price} EGP
            </Typography>
            <Typography variant='h6' sx={{ mb: "7px", textAlign: "center" }}>
              Sunday, May 24
            </Typography>
            <Typography variant='h6' sx={{ mb: "7px", textAlign: "center" }}>
              Or Tomorrow, May 23
            </Typography>
            <IconButton
              sx={{ color: " #4b2a98", fontSize: "19px", mb: "10px" }}>
              Delivery to Nwe Cairo City - Update Location <LocationOnIcon />
            </IconButton>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Age</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  label='Age'>
                  <MenuItem>1</MenuItem>
                  <MenuItem>2</MenuItem>
                  <MenuItem>3</MenuItem>
                  <MenuItem>4</MenuItem>
                  <MenuItem>5</MenuItem>
                  <MenuItem>6</MenuItem>
                  <MenuItem>7</MenuItem>
                  <MenuItem>8</MenuItem>
                  <MenuItem>9</MenuItem>
                  <MenuItem>10</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant='outlined'
                color='black'
                fullWidth
                sx={{
                  background:
                    "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                  marginTop: "25px",
                  borderRadius: "800px",
                  color: "white",
                }}>
                Add to cart
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Typography variant='h5' sx={{ mt: "40px", mb: "10px" }}>
          Product Information
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Accordion>
              <AccordionSummary
                sx={{
                  background:
                    "linear-gradient(135deg, #ffc107 0%, rgba(255, 87, 34, 0.87) 100%)",
                }}
                expandIcon={<ExpandMoreIcon />}>
                <Typography component='span'>Item Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  sx={{
                    borderBottom: "2px solid #ddd",
                    pb: "7px",
                    pt: "7px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <Typography variant='h5'>Brand Name</Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      color: "#4b2a98",
                      m: "auto",
                    }}>
                    {det.name}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    borderBottom: "2px solid #ddd",
                    pb: "7px",
                    pt: "7px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <Typography variant='h5'>Age Group</Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      color: "#4b2a98",
                      m: "auto",
                    }}>
                    {det.age}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    borderBottom: "2px solid #ddd",
                    pb: "7px",
                    pt: "7px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <Typography variant='h5'>Country of Origin</Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      color: "#4b2a98",
                      m: "auto",
                    }}>
                    {det.country}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    borderBottom: "2px solid #ddd",
                    pb: "7px",
                    pt: "7px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <Typography variant='h5'>Model Name</Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      color: "#4b2a98",
                      m: "auto",
                    }}>
                    {det.name}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    borderBottom: "2px solid #ddd",
                    pb: "7px",
                    pt: "7px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <Typography variant='h5'>Manufacturer</Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      color: "#4b2a98",
                      m: "auto",
                    }}>
                    {det.brand}
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Accordion>
              <AccordionSummary
                sx={{
                  background:
                    "linear-gradient(135deg, #ffc107 0%, rgba(255, 87, 34, 0.87) 100%)",
                }}
                expandIcon={<ExpandMoreIcon />}>
                <Typography component='span'>
                  Features and specifications
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  sx={{
                    borderBottom: "2px solid #ddd",
                    pb: "7px",
                    pt: "7px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <Typography variant='h5'>Product Shape</Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      color: "#4b2a98",
                      m: "auto",
                    }}>
                    {det.shape}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    borderBottom: "2px solid #ddd",
                    pb: "7px",
                    pt: "7px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <Typography variant='h5'>Scent</Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      color: "#4b2a98",
                      m: "auto",
                    }}>
                    {det.name}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    borderBottom: "2px solid #ddd",
                    pb: "7px",
                    pt: "7px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <Typography variant='h5'>Special Fanciful</Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      color: "#4b2a98",
                      m: "auto",
                    }}>
                    {det.special}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    borderBottom: "2px solid #ddd",
                    pb: "7px",
                    pt: "7px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <Typography variant='h5'>Fragrance Concentration</Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      color: "#4b2a98",
                      m: "auto",
                    }}>
                    {det.concentration}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    borderBottom: "2px solid #ddd",
                    pb: "7px",
                    pt: "7px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <Typography variant='h5'>Scent Longevity</Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      color: "#4b2a98",
                      m: "auto",
                    }}>
                    {det.longevity}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    borderBottom: "2px solid #ddd",
                    pb: "7px",
                    pt: "7px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <Typography variant='h5'>Application Mode</Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      color: "#4b2a98",
                      m: "auto",
                    }}>
                    {det.mode}
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{
                  background:
                    "linear-gradient(135deg, #ffc107 0%, rgba(255, 87, 34, 0.87) 100%)",
                }}
                expandIcon={<ExpandMoreIcon />}>
                <Typography component='span'>Measurements</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  sx={{
                    borderBottom: "2px solid #ddd",
                    pb: "7px",
                    pt: "7px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <Typography variant='h5'>Item Size</Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      color: "#4b2a98",
                      m: "auto",
                    }}>
                    {det.size} ml
                  </Typography>
                </Box>
                <Box
                  sx={{
                    borderBottom: "2px solid #ddd",
                    pb: "7px",
                    pt: "7px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <Typography variant='h5'>Item Weight</Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      color: "#4b2a98",
                      m: "auto",
                    }}>
                    {det.weight} g
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{
                  background:
                    "linear-gradient(135deg, #ffc107 0%, rgba(255, 87, 34, 0.87) 100%)",
                }}
                expandIcon={<ExpandMoreIcon />}>
                <Typography component='span'>Material and Care</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  sx={{
                    borderBottom: "2px solid #ddd",
                    pb: "7px",
                    pt: "7px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <Typography variant='h5'>Material Type Free</Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      color: "#4b2a98",
                      m: "auto",
                    }}>
                    {det.freeOf}
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
