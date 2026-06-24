import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: "#111",
        color: "#ffffff",
        pt: 6,
        pb: 3,
      }}>
      <Container maxWidth='lg'>
        <Grid container spacing={4} justifyContent='space-between'>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant='h6'
              sx={{ fontWeight: "bold", mb: 2, color: "#ffd700" }}>
              Athr
            </Typography>
            <Typography
              variant='body2'
              sx={{ color: "#b3b3b3", lineHeight: 1.8, mb: 2 }}>
              Your first destination for high-quality perfumes at competitive
              prices.
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                sx={{ color: "#ffffff", "&:hover": { color: "#1877f2" } }}
                component='a'
                href='#'>
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{ color: "#ffffff", "&:hover": { color: "#e1306c" } }}
                component='a'
                href='#'>
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{ color: "#ffffff", "&:hover": { color: "#1da1f2" } }}
                component='a'
                href='#'>
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography
              variant='subtitle1'
              sx={{ fontWeight: "bold", mb: 2, color: "#ffffff" }}>
              Quick links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Link
                href='/'
                underline='none'
                sx={{ color: "#b3b3b3", "&:hover": { color: "#ffd700" } }}>
                Home
              </Link>
              <Link
                href='/aboutPage'
                underline='none'
                sx={{ color: "#b3b3b3", "&:hover": { color: "#ffd700" } }}>
                About Us
              </Link>
              <Link
                href='/contact'
                underline='none'
                sx={{ color: "#b3b3b3", "&:hover": { color: "#ffd700" } }}>
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography
              variant='subtitle1'
              sx={{ fontWeight: "bold", mb: 2, color: "#ffffff" }}>
              Quick links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Link
                href='/brandPage'
                underline='none'
                sx={{ color: "#b3b3b3", "&:hover": { color: "#ffd700" } }}>
                Brands
              </Link>
              <Link
                href='/giftPage'
                underline='none'
                sx={{ color: "#b3b3b3", "&:hover": { color: "#ffd700" } }}>
                Gifts
              </Link>
              <Link
                href='/productPage'
                underline='none'
                sx={{ color: "#b3b3b3", "&:hover": { color: "#ffd700" } }}>
                Products
              </Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography
              variant='subtitle1'
              sx={{ fontWeight: "bold", mb: 1, color: "#ffffff" }}>
              Leave your message
            </Typography>
            <Box sx={{ position: "relative" }}>
              <TextField
                id='outlined-multiline-static'
                label='Write A Message'
                multiline
                fullWidth
                rows={4}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#ffffff",
                    borderRadius: "0 4px 4px 0",
                    height: "100%",
                  },
                  "& fieldset": { border: "none" },
                }}
              />
              <Button
                variant='contained'
                sx={{
                  backgroundColor: "#ffd700",
                  color: "#ffffff",
                  textTransform: "none",
                  borderRadius: "4px",
                  px: 3,
                  fontWeight: "bold",
                  boxShadow: "none",
                  position: "absolute",
                  right: "10px",
                  bottom: "-10px",
                  transform: "translateY(-50%)",
                  "&:hover": {
                    backgroundColor: "#e6ae04",
                    boxShadow: "none",
                  },
                }}>
                Send
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid #333333",
            mt: 5,
            pt: 3,
            textAlign: "center",
          }}>
          <Typography variant='body2' sx={{ color: "#888888" }}>
            All rights reserved to Store{" "}
            <span style={{ color: "#ffd700" }}>
              {new Date().getFullYear()} ©
            </span>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
