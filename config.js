/**
 * Riverside Pizza — Site Configuration
 *
 * SANITY CMS SETUP:
 *  1. Create a free Sanity project at https://www.sanity.io/
 *  2. Replace 'REPLACE_WITH_YOUR_PROJECT_ID' below with your project ID
 *     (found in sanity.io/manage → your project → API)
 *  3. Set USE_SANITY to true
 *  4. Run `cd studio && npm install && npx sanity deploy` to publish the studio
 *  5. Add menu items in your Sanity studio — they'll appear on the order page live
 *
 * TOAST ORDERING:
 *  To add online ordering for a location, get the store's Toast URL from
 *  your Toast dashboard and add it to the LOCATIONS array in takeout.html.
 */
window.RP_CONFIG = {
  USE_SANITY:        false,
  SANITY_PROJECT_ID: 'REPLACE_WITH_YOUR_PROJECT_ID',
  SANITY_DATASET:    'production',
};
