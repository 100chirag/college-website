# BMSIT&M College Website Preview

A responsive, multi-page static college website preview built with semantic HTML, CSS Grid/Flexbox, and vanilla JavaScript. No build step or package installation is required.

## Project structure

```text
college-website/
  index.html          Home page
  about.html          Background, mission, values, and leadership placeholders
  academics.html      Sample course catalog with search and department filters
  admissions.html     Sample admissions guidance and local-only enquiry form
  campus.html         Sample facilities and accessible image gallery
  student-life.html   Clubs, activities, and achievement placeholders
  news-events.html    Sample news and upcoming event listings
  contact.html        Contact placeholders and local-only contact form
  styles.css          Shared responsive design system and page styles
  script.js           Navigation, filtering, validation, gallery, and utilities
  README.md           Setup, limitations, and testing checklist
```

## Run locally

1. Open this folder in VS Code or File Explorer.
2. Open `index.html` in a current browser. The pages work as static files; no server or build tool is required.
3. An optional local static server can be used for testing, for example VS Code Live Server or `npx serve .` from this folder if Node.js is already installed.

The site loads fonts and photography from external providers, so those assets require internet access. Replace those URLs with institution-approved/local assets for a self-contained production deployment.

## Implemented

- Eight linked pages with consistent navigation and footer.
- Responsive mobile navigation, visible keyboard focus, skip links, semantic landmarks, descriptive image text, and reduced-motion handling.
- Course search and department filters, including a no-results message.
- Browser-side required-field, email, and minimum-length validation with accessible status messaging.
- Native image-viewing dialog with descriptive alternatives, Escape support, and focus returned to the triggering image.
- Back-to-top anchor, current-year footer, page titles, and meta descriptions.
- College-specific facts, event dates, statistics, course details, biographies, and contacts are labeled as examples/placeholders.

## Backend or external services needed

- Admission application processing, account creation, file upload, payment, and application status require a secure official admissions service.
- Contact and admission enquiry delivery/storage require a backend endpoint, server-side validation, spam controls, privacy notice, consent/retention policy, and secure handling. The current forms only validate locally; they transmit and store nothing.
- A verified map/directions link requires an official location and may use an external map provider.
- Fonts and campus images currently use external URLs. Use licensed/approved local assets or verify provider terms and availability before launch.
- Real news, calendar feeds, search indexing, analytics, and any student records require an approved content/backend service and privacy review.

## Before launch

- Verify the official institutional name, branding, address, phone, email, office hours, programs, eligibility, fees, dates, statistics, affiliations, accreditations, leadership, and policies.
- Replace all sample content and imagery; obtain required permissions and student consent.
- Connect forms only to a secure backend and add server-side validation, abuse protection, and clear privacy terms.
- Add official application, map, library, calendar, and academic-resource destinations.
- Test all routes and external assets in the final hosting environment.

## Testing checklist

- [ ] Open each HTML page and follow every main-navigation, footer, and call-to-action link.
- [ ] On a narrow viewport, toggle navigation with mouse, Enter/Space, and Escape; confirm `aria-expanded` updates and navigation links close the menu.
- [ ] On Academics, search for a course, filter a department, combine both, and confirm the no-match empty state.
- [ ] Submit each demo form empty, with malformed email, and with valid input; confirm errors/status are understandable and no network request or success claim of delivery occurs.
- [ ] On Campus, open gallery images by keyboard and pointer, close with Escape/button/backdrop, and confirm focus returns to the selected image.
- [ ] Check 320px mobile, tablet, and desktop widths for overflow, readable text, and usable controls.
- [ ] Navigate using keyboard only; verify focus visibility, skip link, heading order, labels, image alternatives, and status announcements.
- [ ] Test current Chrome, Edge, Firefox, and Safari; check console/network failures and external image/font availability.
- [ ] Run an HTML validator and an accessibility checker; manually assess contrast and zoom/reflow.
