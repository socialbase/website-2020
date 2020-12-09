<!DOCTYPE html>
<html lang="pt-BR">
  <head>

    <title>Login SocialBase</title>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- <meta name="title" content="Teste o SocialBase + HR Bot agora mesmo" />
    <meta name="description" content="SocialBase. Soluções para revolucionar sua comunicação corporativa." /> -->

    <meta name="robots" content="noindex, nofollow" />

    <link rel="shortcut icon" type="image/png" href="<?= ASSETS_IMAGES_URI; ?>/logos/socialbase-favicon.png" />

    <style>
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('../../assets/layout/fonts/montserrat/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2') format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('../../assets/layout/fonts/montserrat/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2') format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('../../assets/layout/fonts/montserrat/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2') format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('../../assets/layout/fonts/montserrat/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2') format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('../../assets/layout/fonts/montserrat/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
    </style>
    <link rel="stylesheet" href="<?= ASSETS_URI; ?>/plugins/bootstrap-4.5.2/css/bootstrap-grid.min.css?v=<?= VERSION; ?>" />
    <link rel="stylesheet" href="<?= ASSETS_URI; ?>/layout/css/components/components.min.css?v=<?= VERSION; ?>" />
    <link rel="stylesheet" href="<?= ASSETS_URI; ?>/layout/css/login.min.css?v=<?= VERSION; ?>" />

  </head>
  <body>

    <main>
