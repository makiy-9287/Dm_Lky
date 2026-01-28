# SoloTech Solution Website - Fixed Image Links

## What Was Fixed

Your website had broken image links that were preventing images from loading. I've fixed all the image issues and added the missing files needed for your website to work properly.

## Changes Made

### 1. **Created `constants.tsx`** (New File)
This file contains all your website data including:
- **Working Unsplash image URLs** for all 6 services:
  - PC & Laptop Repair
  - CCTV Installation & Maintenance
  - Network Infrastructure
  - Data Recovery Services
  - Software Solutions
  - IT Consulting
- Contact information
- Testimonials
- All icon components

### 2. **Created `types.ts`** (New File)
TypeScript type definitions for:
- Theme context
- Service interface
- Testimonial interface
- Contact info interface

### 3. **Created `index.css`** (New File)
Additional styles including:
- Tailwind directives
- Custom scrollbar styling
- Smooth dark mode transitions

## Image URLs Used

All images are from Unsplash with proper licensing:

1. **Hero Background**: Tech/office workspace
2. **Contact Page**: Technician working on laptop
3. **Service Images**:
   - PC & Laptop Repair: Computer hardware repair
   - CCTV: Security camera installation
   - Network: Network infrastructure/cables
   - Data Recovery: Hard drive recovery
   - Software: Programming/code screen
   - IT Consulting: Business meeting/consultation

## How to Update Images

If you want to change any images, edit the `constants.tsx` file:

```tsx
// Example: Change PC Repair image
{
    id: 'pc-laptop-repair',
    imageUrl: 'https://your-new-image-url.com',  // Card image
    bannerUrl: 'https://your-new-banner-url.com', // Detail page banner
    // ... rest of the service data
}
```

## File Structure

```
solotech-website/
├── index.html          # Main HTML file
├── index.tsx          # React entry point
├── index.css          # Custom CSS
├── App.tsx            # Main app component
├── constants.tsx      # Data & images (NEW)
├── types.ts           # TypeScript types (NEW)
├── components/
│   ├── AnimatedSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   └── ServiceCard.tsx
└── pages/
    ├── HomePage.tsx
    ├── ServiceDetailPage.tsx
    └── ContactPage.tsx
```

## Contact Information

Update your actual contact details in `constants.tsx`:

```tsx
export const CONTACT_INFO = {
    name: "Malith Lakshan",
    email: "your-email@example.com",  // Change this
    phone: "+94 XX XXX XXXX",         // Change this
    location: "Negombo, Western Province, Sri Lanka",
    whatsappLink: "https://wa.me/94XXXXXXXXX"  // Change this
};
```

## Next Steps

1. Upload all files to your hosting service
2. Update contact information in `constants.tsx`
3. If needed, replace images with your own by updating the URLs in `constants.tsx`
4. Test all pages to ensure everything works correctly

## Notes

- All Unsplash images are free to use under their license
- Images are optimized for web with `?w=800&q=80` parameters
- The website is fully responsive and works on mobile devices
- Dark mode is fully supported
