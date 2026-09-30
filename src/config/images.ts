/**
 * ---------------------------------------------------------------------------
 * IMAGE CONFIGURATION
 * ---------------------------------------------------------------------------
 * The site currently ships with NO external image dependencies. Every visual
 * (the hero's underwater gradient, light beams and sonar rings) is generated
 * with pure CSS, so there are no broken links and nothing to license.
 *
 * To use real photography instead:
 *   1. Drop the file into `public/images/` (e.g. public/images/hero.jpg), then
 *      set `heroBackground: '/images/hero.jpg'`. Local files are preferred —
 *      they keep the site self-contained and offline-capable.
 *   2. Or paste a full external URL, e.g. 'https://example.com/hero.jpg'.
 *      Only use images you are legally permitted to use.
 *   3. In `src/components/Hero.tsx`, uncomment the `heroImageStyle` block.
 *
 * Always set a meaningful `alt` value for any <img> you add.
 */
export const images = {
  /** Empty string = use the CSS-generated underwater background. */
  heroBackground: '',
  heroAlt: 'Abstract underwater light and sonar-inspired data patterns',
};

/**
 * FONTS: Fraunces + Inter are loaded from Google Fonts in `index.html`.
 * To self-host them instead, download the .woff2 files into `public/fonts/`,
 * add @font-face rules at the top of `src/index.css`, and remove the
 * <link rel="stylesheet" href="https://fonts.googleapis.com/..."> tag.
 */
