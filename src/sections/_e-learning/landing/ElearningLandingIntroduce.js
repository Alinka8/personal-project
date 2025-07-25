// @mui
import { Typography, Stack, Container, Box, Unstable_Grid2 as Grid } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Image from 'src/components/images';
import MySecPhoto from '../../../components/images/portrait3.png';
import ImpactCollage from '../../../components/images/impact-collage.png'; // Adjust path as needed

// ----------------------------------------------------------------------

export default function ElearningLandingIntroduce() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <>
      <Container
        sx={{
          py: { xs: 8, md: 15 },
        }}
      >
        <Typography
          variant="overline"
          sx={{
            display: 'block',
            color: 'primary.main',
            mb: { xs: 2, md: 10 },
          }}
        >
          A Couple of words about myself
        </Typography>

        <Grid
          container
          spacing={3}
          alignItems={{ md: 'center' }}
          justifyContent={{ md: 'space-between' }}
        >
          {isMdUp && (
            <Grid xs={12} md={6} lg={5}>
              <Image alt="about" src={MySecPhoto} ratio="4/6" sx={{ borderRadius: 2 }} />
            </Grid>
          )}

          <Grid xs={12} md={6} lg={6}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Frontend Web Developer
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              I&apos;m a Frontend Web Developer with nearly 4 years of experience creating
              responsive, accessible, and user-focused web applications. I started my journey in QA
              testing, which taught me the value of clean code, usability, and performance. That
              foundation now drives how I approach frontend development.
            </Typography>

            <Stack
              direction={{ xs: 'column', md: 'column' }}
              spacing={{ xs: 5, md: 10 }}
              sx={{ mt: { xs: 8, md: 10 } }}
            >
              <Stack spacing={3}>
                <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
                <Typography sx={{ color: 'text.secondary' }}>
                  I specialize in React.js, JavaScript, HTML5, and CSS3, and have experience with
                  tools like Tailwind CSS, Bootstrap, GitHub, and Vercel. I&apos;ve also worked with
                  headless CMS platforms, third-party API integrations, and cross-browser QA testing
                  to deliver polished, high-performance websites.{' '}
                </Typography>
              </Stack>

              <Stack spacing={3}>
                <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
                <Typography sx={{ color: 'text.secondary' }}>
                  With a strong eye for detail and a passion for intuitive design, I enjoy building
                  web experiences that are not only functional, but delightful to use.
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Container
        sx={{
          py: { xs: 8, md: 15 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="overline"
          sx={{
            display: 'block',
            color: 'primary.main',
            mb: { xs: 2, md: 10 },
          }}
        >
          Impact & Community Involvement
        </Typography>
        <Image
          alt="Impact Collage"
          src={ImpactCollage}
          sx={{
            borderRadius: 2,
            maxWidth: '100%',
            boxShadow: 3,
            margin: '0 auto',
          }}
        />
      </Container>
    </>
  );
}
