# Fruitasty - Premium Multi-Page Website

A fully animated, production-ready website for FRUITASTY, India's fastest-growing health food franchise.

## Features

- **Multi-Page Navigation**: Separate pages for Home, About, Brands, Franchise, and Gallery
- **Premium Animations**: Smooth Framer Motion animations throughout
- **Contact Form**: EmailJS integration for franchise inquiries
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Production Ready**: Optimized for deployment on Vercel

## Tech Stack

- React 18 with TypeScript
- Vite for fast development
- React Router for multi-page navigation
- Framer Motion for animations
- Tailwind CSS for styling
- EmailJS for contact form
- Lucide React for icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Copy your Service ID, Template ID, and Public Key
5. Create a `.env` file and add your credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables for EmailJS
4. Deploy

### Environment Variables

Make sure to add these environment variables in your Vercel project settings:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Pages

- **Home**: Hero section with brand overview and preview sections
- **About**: Company vision, mission, and achievements
- **Brands**: Detailed information about Fruitasty, Burgerz, and Yum Yum Waffles
- **Franchise**: Investment details, FOFO model, and support information
- **Gallery**: Visual showcase of stores and products

## Project Structure

```
src/
├── components/
│   ├── ContactModal.tsx    # Franchise inquiry form
│   ├── FloatingFruits.tsx  # Animated background
│   ├── Footer.tsx          # Site footer
│   ├── Layout.tsx          # Main layout wrapper
│   └── Navbar.tsx          # Navigation header
├── pages/
│   ├── About.tsx           # About page
│   ├── Brands.tsx          # Brands page
│   ├── Franchise.tsx       # Franchise page
│   ├── Gallery.tsx         # Gallery page
│   └── Home.tsx            # Home page
├── App.tsx                 # Router configuration
└── main.tsx               # App entry point
```

## Brand Information

**FRUITASTY**
- Domain: fruitasty.in
- Founded: 2013
- Core Business: Juices, Smoothies, Shakes, Waffles, Burgers
- Model: FOFO (Franchise Owned Franchise Operated)
- Investment: ₹3.5 Lakhs
- Payback: 10-14 Months
- Profit Margin: 25-35%

## License

© 2024 Fruitasty India. All rights reserved.
