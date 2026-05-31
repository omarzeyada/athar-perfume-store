import {
  Typography,
  Grid,
  TextField,
  Box,
  Container,
  Button,
  IconButton,
} from "@mui/material";
import BrowseGalleryOutlinedIcon from "@mui/icons-material/BrowseGalleryOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationPinIcon from "@mui/icons-material/LocationPin";

const cardStyle = {
  bgcolor: "white",
  padding: "20px 40px",
  margin: "20px",
  borderRadius: "13px",
  boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
  maxWidth: "470px",
};
const cardTowStyle = {
  bgcolor: "white",
  padding: "20px 30px",
  margin: "20px",
  borderRadius: "13px",
  boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
  textAlign: "center",
};

export default function Contact() {
  return (
    <>
      <Typography variant='h5' sx={{ textAlign: "center", m: "40px 0" }}>
        We'd love to here from you. Get in touch with us for any inquiries about
        our luxury fragrances.
      </Typography>
      <Container>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <form
              action=''
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                padding: "30px 40px",
                margin: "20px",
                borderRadius: "10px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
              }}>
              <label style={{ margin: "20px 0", fontSize: "20px" }}>
                Your Name :
              </label>
              <TextField
                id='outlined-basic'
                label='Name'
                variant='outlined'
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                  },
                }}
              />
              <label style={{ margin: "20px 0", fontSize: "20px" }}>
                Email Address :
              </label>
              <TextField
                id='outlined-basic'
                label='Email'
                variant='outlined'
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                  },
                }}
              />
              <label style={{ margin: "20px 0", fontSize: "20px" }}>
                Your Number :
              </label>
              <TextField
                id='outlined-basic'
                label='Phone Number'
                variant='outlined'
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                  },
                }}
              />
              <label style={{ margin: "20px 0", fontSize: "20px" }}>
                Message :
              </label>
              <TextField
                id='outlined-multiline-static'
                label='Multiline'
                multiline
                rows={4}
                defaultValue='Default Value'
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                  },
                }}
              />
              <Button
                variant='outlined'
                color='black'
                fullWidth
                sx={{
                  background:
                    "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                  marginTop: "25px",
                  borderRadius: "15px",
                  color: "white",
                }}>
                Sand Message
              </Button>
            </form>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Box sx={{ float: "right" }}>
              <Box sx={cardStyle}>
                <Typography variant='h6' sx={{ mb: "30px" }}>
                  <BrowseGalleryOutlinedIcon
                    sx={{ m: "-7px 7px", fontSize: "30px" }}
                  />
                  Business Hours
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "27px",
                    fontSize: "22px",
                  }}>
                  <Typography variant='span'>Saturday - Thursday</Typography>
                  <Typography variant='span'>
                    09 : 00 AM - 10 : 00 PM
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "22px",
                  }}>
                  <Typography variant='span'>Friday</Typography>
                  <Typography variant='span'>
                    02 : 00 PM - 10 : 00 PM
                  </Typography>
                </div>
              </Box>
              <Box sx={cardStyle}>
                <Typography variant='h6' sx={{ mb: "20px" }}>
                  Connect With Us
                </Typography>
                <Typography variant='h6'>
                  Follow us on social media for the latest updates, new
                  releases, and exclusive offers
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "center",
                    mt: "15px",
                  }}>
                  <IconButton
                    sx={{ color: "#000", "&:hover": { color: "#1877f2" } }}
                    component='a'
                    href='#'>
                    <FacebookIcon sx={{ fontSize: "40px" }} />
                  </IconButton>
                  <IconButton
                    sx={{ color: "#000", "&:hover": { color: "#e1306c" } }}
                    component='a'
                    href='#'>
                    <InstagramIcon sx={{ fontSize: "40px" }} />
                  </IconButton>
                  <IconButton
                    sx={{ color: "#000", "&:hover": { color: "#1da1f2" } }}
                    component='a'
                    href='#'>
                    <TwitterIcon sx={{ fontSize: "40px" }} />
                  </IconButton>
                </Box>
              </Box>
              <Box sx={cardStyle}>
                <Typography variant='h6' sx={{ mb: "20px" }}>
                  Whatsapp Support
                </Typography>
                <Typography variant='h6'>
                  Get instant support through WhatsApp. Our team is ready to
                  assist you!
                </Typography>
                <Button
                  variant='outlined'
                  color='black'
                  fullWidth
                  sx={{
                    background:
                      "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                    marginTop: "25px",
                    borderRadius: "15px",
                    color: "white",
                  }}>
                  Chat on WhatsApp
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ m: "20px auto" }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box sx={cardTowStyle}>
              <Typography variant='h6' sx={{ mb: "20px" }}>
                <LocalPhoneIcon sx={{ mr: "7px" }} /> Phone Numbers
              </Typography>
              <Typography variant='h6' sx={{ mb: "5px" }}>
                +966549641576
              </Typography>
              <Typography variant='h6' sx={{ mb: "5px" }}>
                +966587894217
              </Typography>

              <Typography variant='div'>Available 24/7</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box sx={cardTowStyle}>
              <Typography variant='h6' sx={{ mb: "20px" }}>
                <EmailIcon sx={{ mr: "7px" }} /> Email Address
              </Typography>
              <Typography variant='h6' sx={{ mb: "5px" }}>
                info@ather.com
              </Typography>
              <Typography variant='h6' sx={{ mb: "5px" }}>
                support@ather.com
              </Typography>
              <Typography variant='div'>We reply with in 24 hours</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box sx={cardTowStyle}>
              <Typography variant='h6' sx={{ mb: "20px" }}>
                <LocationPinIcon sx={{ mr: "7px" }} /> Our Location
              </Typography>
              <Typography variant='h6' sx={{ mb: "5px" }}>
                123 Perfume Boulevard
              </Typography>
              <Typography variant='h6' sx={{ mb: "5px" }}>
                Riyadh, Saudi Arabia
              </Typography>
              <Typography variant='div'>Visit our flagship</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Typography
          variant='h4'
          sx={{ m: "45px 25px", textAlign: "center", fontWeight: "bold" }}>
          Location
        </Typography>
        <Box sx={{ width: "100%", mt: 4, textAlign: "center" }}>

          <Box
            component='div'
            sx={{
              width: "100%",
              height: "400px",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              mb: "20px",
            }}>
            <iframe
              title='Athar Location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3419.123456789!2d30.9999999!3d30.7888888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ3JzIwLjAiTiAzMMKwNTknNjAuMCJF!5e0!3m2!1sen!2seg!4v1234567890123'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'></iframe>
          </Box>
        </Box>
      </Container>
    </>
  );
}
