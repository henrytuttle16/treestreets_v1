# Tree Streets Woodworks Website

A modern, responsive website for a solo woodworker to showcase their portfolio and accept custom project requests.

## Features

- **Responsive Design**: Mobile-first approach that works beautifully on all devices
- **Portfolio Gallery**: Interactive image gallery with modal/lightbox viewer
- **Products Showcase**: Display available items with pricing and descriptions
- **Contact Form**: Custom form with email integration (no backend required)
- **Modern Tech Stack**: Pure HTML5, CSS3, and vanilla JavaScript (no frameworks)
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support
- **Performance**: Optimized images, lazy loading support, minimal dependencies

## Project Structure

```
treestreets_v1/
├── index.html              # Home page
├── portfolio.html          # Portfolio gallery with modal viewer
├── products.html           # Products and services showcase
├── contact.html            # Contact form page
├── css/
│   ├── styles.css          # Main stylesheet with design system
│   ├── portfolio.css       # Gallery and modal styles
│   └── contact.css         # Form-specific styles
├── js/
│   ├── main.js             # Core functionality (navigation, utilities)
│   ├── gallery.js          # Portfolio modal/lightbox functionality
│   └── form.js             # Contact form validation and handling
├── assets/
│   ├── favicon.ico         # Site favicon
│   └── img/                # Images (20 files)
│       ├── intro.jpg       # Hero background
│       ├── about.jpg       # About section image
│       ├── portfolio-*.jpg # Portfolio gallery images (6)
│       ├── products-*.jpg  # Product images (4)
│       └── ...
└── README.md               # This file
```

## Setup Instructions

### 1. Basic Setup

The website is ready to use as-is. Simply open `index.html` in a web browser to view locally.

For development, you can use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### 2. Contact Form Setup (Required for Email Functionality)

The contact form uses **FormSubmit.co** to send emails without requiring a backend server or sign-up.

#### Steps to activate the contact form:

1. **Update contact.html**
   - Open `contact.html` in a text editor
   - Find line 76 (the form tag):
     ```html
     <form id="contactForm" action="https://formsubmit.co/placeholder@email.com" method="POST" class="contact-form">
     ```
   - Replace `placeholder@email.com` with your actual email address:
     ```html
     <form id="contactForm" action="https://formsubmit.co/yourname@gmail.com" method="POST" class="contact-form">
     ```
   - Save the file

2. **Test the form**
   - Open `contact.html` in your browser
   - Fill out and submit the form
   - For the first submission, FormSubmit will send a confirmation email to verify your email address
   - Click the confirmation link in that email
   - After confirmation, all future form submissions will be sent to your email

That's it! No sign-up or account creation required.

#### Alternative Email Services

If you prefer a different service, you can use:
- **Formspree** (https://formspree.io/) - More features, requires free account
- **EmailJS** (https://www.emailjs.com/) - More features, requires API key
- **Netlify Forms** (if hosting on Netlify) - Built-in form handling

### 3. Customization

#### Update Colors

Edit `css/styles.css` (lines 13-23) to change the color scheme:

```css
:root {
  --color-primary: #5a3e2b;        /* Main brand color */
  --color-secondary: #d4a574;      /* Accent color */
  --color-accent: #c87941;         /* Call-to-action color */
  /* ... */
}
```

#### Update Content

- **Company Name**: Search and replace "Tree Streets Woodworks" across all HTML files
- **Instagram Handle**: Update `@treestreet_woodworks` in all pages
- **Product Pricing**: Edit pricing in `products.html`
- **Portfolio Images**: Update image descriptions in `portfolio.html`

#### Add/Remove Images

- Place new images in `assets/img/`
- Update image references in HTML files
- Recommended image sizes:
  - Hero images: 1920x1080px
  - Portfolio images: 800x800px
  - Product images: 600x600px

### 4. Deployment

#### Option 1: GitHub Pages (Free)

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial website commit"

# Create a repository on GitHub, then:
git remote add origin https://github.com/yourusername/treestreets-woodworks.git
git branch -M main
git push -u origin main

# Enable GitHub Pages in repository settings
# Your site will be live at: https://yourusername.github.io/treestreets-woodworks/
```

#### Option 2: Netlify (Free)

1. Sign up at https://netlify.com
2. Drag and drop the `treestreets_v1` folder onto Netlify
3. Your site will be live in seconds with a free subdomain

#### Option 3: Traditional Web Hosting

Upload all files via FTP to your web hosting provider's public directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Mobile Responsiveness

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Small mobile (< 480px)

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for all interactive elements
- Alt text for all images
- Color contrast meets WCAG AA standards

## Performance Optimizations

- Minimal external dependencies (only Google Fonts)
- Optimized CSS with mobile-first approach
- Lazy loading support for images
- Smooth scroll behavior
- Sticky navigation for better UX

## Design System

### Typography
- **Primary Font**: Raleway (sans-serif)
- **Secondary Font**: Lora (serif)

### Color Palette
- **Primary**: #5a3e2b (Rich Walnut Brown)
- **Secondary**: #d4a574 (Light Oak/Tan)
- **Accent**: #c87941 (Amber/Honey)
- **Dark**: #2d1f16 (Deep Charcoal Brown)
- **Light**: #f8f6f3 (Warm Off-White)

## Maintenance

### Regular Updates
- Update portfolio images as new projects are completed
- Add new products to the products page
- Keep pricing current
- Respond to form submissions promptly

### Image Optimization
To keep the site fast, compress images before uploading:
- Use tools like TinyPNG (https://tinypng.com/)
- Target file sizes: <500KB for large images, <200KB for thumbnails

## Support

For issues or questions:
- Check browser console for JavaScript errors
- Verify FormSubmit.co email is correct if form isn't working
- Ensure all file paths are correct and case-sensitive
- Test on multiple devices and browsers

## Credits

- Design and Development: Custom built for Tree Streets Woodworks
- Fonts: Google Fonts (Raleway, Lora)
- Form Service: FormSubmit.co
- Icons: Unicode symbols

## License

All rights reserved. This website is custom-built for Tree Streets Woodworks.

---

**Version**: 2.0
**Last Updated**: November 2024
**Tech Stack**: HTML5, CSS3, Vanilla JavaScript
