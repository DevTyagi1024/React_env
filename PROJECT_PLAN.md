# Project Plan

## Project

REACT_ENV

## Goal

Track the project tasks, implementation steps, and verification notes.

## Action Plan: Create Basic Pages

- [x] Create Home page component with a simple heading.
- [x] Create About page component with a simple heading.
- [x] Create Contact page component with a simple heading.
- [x] Create Product Listing page component with a simple heading.
- [x] Create Demo page component with a simple heading.
- [ ] Connect pages to application routes when routing is requested.

## Action Plan: Task Two - Create Responsive Header

- [x] Create a reusable header component.
- [x] Add logo and project name branding.
- [x] Build menu links from a mapped navigation array.
- [x] Include Home, About, Contact, Product Listing, and Demo menu items.
- [x] Add responsive desktop and mobile menu styling.
- [x] Apply a dark body background with light navigation colors.
- [ ] Connect header links to real routes when routing is requested.

## Action Plan: Task Three - Setup Sass

- [x] Convert global styles from CSS to SCSS.
- [x] Convert app styles from CSS to SCSS.
- [x] Update React style imports to use SCSS files.
- [x] Create a dedicated Sass folder structure for abstracts, base, layout, and component styles.
- [x] Add variables, mixins, and helpers partials.
- [x] Add Sass variables for font sizes, line heights, font weights, colors, buttons, hover states, and animations.
- [x] Rename Sass variables to a simpler token format such as `$font-12`, `$lh-12`, `$fw-400`, and compact color names.
- [x] Create font-size and line-height variable scales from 10px to 100px in 2px steps.
- [x] Add three project font families: Inter, Space Grotesk, and Plus Jakarta Sans.
- [x] Add reusable basic button classes and animation keyframes.
- [x] Map component and layout partials into the master `index.scss` file.
- [x] Install the Sass compiler dependency.
- [x] Verify lint and production build.

## Action Plan: Task Four - Create Responsive Footer

- [x] Create a reusable footer component.
- [x] Add footer logo and project branding.
- [x] Reuse mapped menu items from shared navigation data.
- [x] Add responsive footer navigation.
- [x] Add copyright content with the current year.
- [x] Style the footer with project typography, Sass tokens, hover states, and responsive layout.
- [x] Align header, page content, and footer with a shared site container.
- [ ] Add social or legal links when final content is available.

## Action Plan: Task Five - Create Responsive Banner

- [x] Create a reusable banner component.
- [x] Use a dummy image asset for the banner background.
- [x] Position text content over the banner image.
- [x] Add responsive desktop, tablet, and mobile banner styling.
- [x] Add banner buttons using shared button classes.
- [x] Map banner styles into the master `index.scss` file.

## Action Plan: Task Six - Add Page Routing

- [x] Install React Router.
- [x] Wrap the application with `BrowserRouter`.
- [x] Create routes for Home, About, Contact, Product Listing, and Demo pages.
- [x] Replace manual `window.location.pathname` page switching with router routes.
- [x] Update header, footer, and banner links to use React Router navigation.
- [x] Add active route styling for navigation links.

## Action Plan: Task Seven - Create Product Card Listing Component

- [x] Create ProductCard component to display individual product cards.
- [x] Create ProductCardListing component with dummy product data.
- [x] Add product card styling with images, names, prices, descriptions, and add-to-cart buttons.
- [x] Design responsive 3-column grid layout on desktop, 2 columns on tablet, 1 column on mobile.
- [x] Implement add-to-cart button with state feedback ("Added ✓").
- [x] Add hover effects with card elevation and image zoom.
- [x] Add spacing and color variables to the Sass token system.
- [x] Import product card styles into the master `index.scss` file.
- [x] Integrate ProductCardListing component into ProductListingPage.
- [ ] Connect add-to-cart functionality to a shopping cart system when ready.

## Action Plan: Task Eight - Add Global Newsletter Section

- [x] Create a reusable NewsletterSection component with a subscription input.
- [x] Add responsive newsletter styling using existing design tokens.
- [x] Place the newsletter section globally so it appears on every route.
- [x] Use the shared container pattern from the app layout.
- [ ] Connect the subscription form to a real email backend when ready.

## Action Plan: Task Nine - Create Responsive Contact Page Form

- [x] Add a new ContactSection component with a 60/40 form and contact info layout.
- [x] Build a responsive contact form with name, email, subject, and message fields.
- [x] Display address, phone, email, and business hours in the contact info panel.
- [x] Show a thank you message after form submission.
- [x] Use existing button and input design patterns for visual consistency.
- [ ] Connect form submissions to an API backend when ready.

## Action Plan: Task Ten - Enhance Demo Page

- [x] Add a DemoFeatureSection component to showcase key project strengths.
- [x] Build responsive feature cards for the demo page.
- [x] Keep the product listing section in place for interactive preview.
- [ ] Add additional demo interactivity or live API examples later.

## Notes

- This document was created in the project root directory.
