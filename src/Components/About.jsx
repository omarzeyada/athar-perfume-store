import { Box, Container, Grid, Typography } from "@mui/material";

const weStyle = {
  background: "linear-gradient(135deg, #982a2a 0%, #1e3c72 100%)",
  borderRadius: "10px",
  textAlign: "center",
  color: "white",
  p: "34px",
  transition: "0.3s",

  "&:hover": {
    background: "linear-gradient(135deg, #982a2a 0%, rgba(0, 0, 0, 0.87) 100%)",
  },
};
const Challenges = {
  background: "linear-gradient(135deg, #982a2a 0%, #1e3c72 100%)",
  borderRadius: "10px",
  textAlign: "center",
  color: "white",
  p: "25px",
  transition: "0.3s",
  "&:hover": {
    background: "linear-gradient(135deg, #982a2a 0%, rgba(0, 0, 0, 0.87) 100%)",
  },
};

export default function About() {
  return (
    <>
      <Typography
        variant='h3'
        sx={{ textAlign: "center", m: "70px 0", fontWeight: "bold" }}>
        Our Story
      </Typography>
      <Container maxWidth='lg' sx={{ margin: "30px auto" }}>
        <Grid container spacing={4} className='about-container'>
          <Grid size={{ xs: 12, sm: 12, md: 8 }}>
            <Typography
              variant='p'
              component='p'
              sx={{ fontSize: "18px", lineHeight: "1.2", mb: "20px" }}>
              Ather was born from a simple idea: that scent is more than just a
              fragrance—it's a feeling, a memory, and a statement of identity.
              We wanted to create a space where everyone can discover scents
              that truly represent who they are, whether bold and unforgettable
              or soft and comforting.
            </Typography>

            <Typography
              variant='p'
              component='p'
              sx={{ fontSize: "18px", lineHeight: "1.2" }}>
              Our journey started with a passion for curating unique fragrances
              that suit every mood, season, and personality. From fresh summer
              notes to deep, warm winter blends, Ather brings together carefully
              selected collections designed to elevate everyday experiences. We
              believe that choosing a fragrance should be easy, enjoyable, and
              inspiring. That's why we focus on simplicity, clean design, and a
              seamless browsing experience—helping you find your signature scent
              without the noise. At Ather, every scent tells a story. Now, it's
              time to tell yours.
            </Typography>
            <Typography
              variant='p'
              component='p'
              sx={{ fontSize: "22px", mt: "30px" }}>
              At Ather, every scent tells a story. Now, it's time to tell yours.
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 4 }}
            className='image-grid-container'>
            <div className='grid-box box-1'></div>
            <div className='grid-box box-2'></div>
            <div className='grid-box box-3'></div>
            <div className='grid-box box-4'></div>
          </Grid>
        </Grid>
      </Container>
      <Typography
        variant='h3'
        sx={{ textAlign: "center", m: "70px 0", fontWeight: "bold" }}>
        Challenges
      </Typography>
      <div>
        <Container maxWidth='lg' sx={{ margin: "30px auto" }}>
          <Grid container spacing={8}>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Box sx={Challenges}>
                <Typography variant='h6' sx={{ mb: "7px" }}>
                  Too many options
                </Typography>
                <Typography variant='p' component='p'>
                  Organized into clear, easy categories
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Box sx={Challenges}>
                <Typography variant='h6' sx={{ mb: "7px" }}>
                  Can't smell online
                </Typography>
                <Typography variant='p' component='p'>
                  Strong descriptions with supporting visuals
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Box sx={Challenges}>
                <Typography variant='h6' sx={{ mb: "7px" }}>
                  Confusing navigation
                </Typography>
                <Typography variant='p' component='p'>
                  Simple, user-friendly layout
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Box sx={Challenges}>
                <Typography variant='h6' sx={{ mb: "7px" }}>
                  Weak connection
                </Typography>
                <Typography variant='p' component='p'>
                  Storytelling to reflect mood & identity
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Typography
        variant='h3'
        sx={{
          textAlign: "center",
          mb: "70px",
          mt: "100px",
          fontWeight: "bold",
        }}>
        How we are
      </Typography>
      <Container maxWidth='lg' sx={{ margin: "30px auto" }}>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Box sx={weStyle}>
              <Typography variant='h6' sx={{ mb: "7px" }}>
                Our Vision
              </Typography>
              <Typography variant='p' component='p'>
                To become a go-to destination for discovering fragrances that
                reflect personality, mood, and identity.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Box
              sx={{
                background: "linear-gradient(135deg, #982a2a 0%, #1e3c72 100%)",
                borderRadius: "10px",
                textAlign: "center",
                color: "white",
                p: "25px",
                transition: "0.3s",

                "&:hover": {
                  background:
                    "linear-gradient(135deg, #982a2a 0%, rgba(0, 0, 0, 0.87) 100%)",
                },
              }}>
              <Typography variant='h6' sx={{ mb: "7px" }}>
                Our Mission
              </Typography>
              <Typography variant='p' component='p'>
                To simplify the fragrance shopping experience through clean
                design, curated selections, and meaningful storytelling.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Box sx={weStyle}>
              <Typography variant='h6' sx={{ mb: "7px" }}>
                Our Goal
              </Typography>
              <Typography variant='p' component='p'>
                To help users easily discover and choose fragrances that truly
                match their Personality and mood.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
