# Company Logos Collection - Dark Mode Optimized

This directory contains 16 company logos in SVG format, **optimized for dark backgrounds** with proper contrast and readability.

## Included Logos

1. **Y Combinator** - Startup accelerator
2. **Sequoia Capital** - Venture capital firm  
3. **Notion** - Productivity and note-taking software
4. **Figma** - Collaborative design tool
5. **Adobe** - Creative software company
6. **Vercel** - Frontend cloud platform
7. **Stripe** - Payment processing platform
8. **OpenAI** - AI research company
9. **Meta** - Social media and technology company
10. **Google** - Technology and search company
11. **Microsoft** - Software and cloud services company
12. **Amazon** - E-commerce and cloud computing company
13. **Anthropic** - AI safety and research company
14. **ZFellows** - One-week startup accelerator by Cory Levy
15. **Google Ventures (GV)** - Venture capital arm of Alphabet Inc.
16. **Neo** - Scholar and accelerator program by Ali Partovi

## Dark Mode Optimization

**All logos have been optimized for dark backgrounds:**

- **Notion**: White version (full wordmark) - 173px × 60px
- **Vercel**: Black circle with white triangle icon - 60px × 60px (square)
- **Google Ventures (GV)**: White version - 95px × 60px
- **Neo**: Blue text (#60A5FA) - 150px × 60px
- **ZFellows**: Blue text (#4169E1) - 225px × 60px
- All other logos use their standard colored versions which are visible on dark backgrounds

## Dimensions

All logos are proportionally sized for a **60px height container**. Widths vary based on each logo's aspect ratio.

### Dimension Details

| Company | Width (px) | Height (px) | Aspect Ratio | Notes |
|---------|------------|-------------|--------------|-------|
| Y Combinator | 60 | 60 | 1:1 | Square, colored |
| Sequoia Capital | 450 | 60 | 7.5:1 | Very wide wordmark |
| Notion | 173 | 60 | 2.88:1 | White wordmark for dark mode |
| Figma | 40 | 60 | 2:3 | Tall, colored |
| Adobe | 54 | 60 | ~1:1 | Colored |
| Vercel | 60 | 60 | 1:1 | Black circle + white triangle |
| Stripe | 144 | 60 | 2.4:1 | Colored |
| OpenAI | 59 | 60 | ~1:1 | Colored |
| Meta | 90 | 60 | 1.5:1 | Colored |
| Google | 183 | 60 | ~3:1 | Colored |
| Microsoft | 60 | 60 | 1:1 | Square, colored |
| Amazon | 60 | 60 | 1:1 | Square, colored |
| Anthropic | 87 | 60 | 1.45:1 | Colored |
| ZFellows | 225 | 60 | 3.75:1 | Blue text |
| Google Ventures | 95 | 60 | 1.58:1 | White for dark mode |
| Neo | 150 | 60 | 2.5:1 | Blue text |

## Usage

### JavaScript/React

```javascript
const logos = [
    {
        src: "/company-logos/ycombinator.svg",
        alt: "Y Combinator",
        width: 60,
        height: 60
    },
    {
        src: "/company-logos/vercel.svg",
        alt: "Vercel",
        width: 60,
        height: 60
    },
    {
        src: "/company-logos/notion.svg",
        alt: "Notion",
        width: 173,
        height: 60
    },
    // ... see logo-config.js for complete configuration
];
```

### HTML

```html
<img src="/company-logos/ycombinator.svg" alt="Y Combinator" width="60" height="60">
<img src="/company-logos/vercel.svg" alt="Vercel" width="60" height="60">
<img src="/company-logos/neo.svg" alt="Neo" width="150" height="60">
```

## File Format

- **Format**: SVG (Scalable Vector Graphics)
- **Color**: Optimized for dark backgrounds
- **Optimization**: Crisp, legible, web-ready
- **License**: Logos are property of their respective companies

## Key Features

✅ **Dark Mode Ready** - All logos tested and optimized for dark backgrounds
✅ **High Contrast** - White/light colored versions where needed
✅ **Crisp Rendering** - SVG format ensures sharp display at any size  
✅ **Proper Proportions** - All dimensions maintain original aspect ratios
✅ **Consistent Height** - All logos scale to 60px height for uniform appearance

## Notes

- **Sequoia Capital** is the widest logo (450px) due to its full wordmark
- **ZFellows** is wide (225px) with full text branding
- **Notion** uses the full white wordmark (173px) for maximum readability on dark backgrounds
- **Vercel** features a black circle with white triangle - clean and iconic
- **Neo** and **ZFellows** use blue text for brand consistency and visibility
- Square logos (Y Combinator, Vercel, Microsoft, Amazon) are all 60×60px

## Files

- `*.svg` - 16 individual logo files (all dark mode optimized)
- `logo-config.js` - JavaScript configuration with all logo metadata
- `README.md` - This documentation file

