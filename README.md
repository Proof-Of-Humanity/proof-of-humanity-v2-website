
## About Proof of Humanity

Proof of Humanity is a protocol that combines social verification with advanced dispute resolution to create a sybil-proof list of humans. It enables applications to distinguish between humans and bots, ensuring fair airdrops, democratic governance, and authentic social interactions.


## Tech Stack

- **Framework**: Next.js 15.3.2 with App Router
- **Runtime**: React 19 with TypeScript 5
- **Styling**: Tailwind CSS 4.1.5 with PostCSS 8
- **Build Tool**: Turbopack (development), Next.js compiler (production)
- **Linting**: ESLint 9 with JSX a11y plugin
- **Formatting**: Prettier 3.5.3 with Tailwind plugin

## Repository Setup

### Prerequisites

```bash
node --version  # v22.0.0 or higher required
npm --version   # v22.0.0 or higher recommended
```

### Clone and Install

```bash
# Clone repository
git clone https://github.com/kleros/proof-of-humanity-v2-website.git
cd proof-of-humanity-v2-website

# Install dependencies
npm install  # Use ci for production-like install

# Verify installation
npm run lint
```

### Development Environment

```bash
# Start development server with Turbopack
npm run dev

# Development server will start on http://localhost:3000
# Hot reload enabled for all file changes
```

### Build and Production

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## Data Management System

The website uses a JSON-based content management system located in the `/data` directory. This approach enables non-technical content updates without code changes.

### Data Directory Structure

```
data/
├── claimHumanity.json      # CTA section configuration
├── footer.json             # Footer links and metadata
├── header.json             # Navigation and branding
├── hero.json               # Main hero section content
├── integrateSection.json   # Integration documentation
├── partnerSection.json     # Partner logos and information
├── sharePohCard.json       # Social sharing configuration
└── useCases.json           # Use case cards and descriptions
```

### Content Update Process

1. **Locate Target File**: Identify the JSON file corresponding to the section you want to edit
2. **Edit Content**: Modify the JSON structure while maintaining the schema
3. **Validate JSON**: Ensure valid JSON syntax (use JSON validator)
4. **Test Changes**: Run `npm run dev` to preview changes locally
5. **Deploy**: Changes are automatically reflected after deployment

### Asset Management

#### Static Assets Location
```
public/
├── assets/
│   ├── icons/              # SVG icons for UI elements
│   └── illustrations/      # Hero and section illustrations
├── brand/
│   ├── partners/           # Partner logos (SVG format)
│   └── poh/               # PoH brand assets
└── product/
    ├── flows/             # Process flow illustrations
    ├── personas/          # User persona images
    ├── tokens/            # Cryptocurrency logos
    └── use-cases/         # Use case specific icons
```

#### Adding New Assets

1. **Icons**: Add SVG files to `/public/assets/icons/`
2. **Images**: Add optimized images to relevant `/public/` subdirectory
3. **Partner Logos**: Add SVG logos to `/public/brand/partners/`
4. **Update References**: Update corresponding JSON data file

## Project Architecture

### Component Structure
```
app/components/
├── icons/                  # Icon components
│   └── BuildByKlerosIcon.tsx
├── Arrow.tsx              # Reusable arrow component
├── Button.tsx             # Button component with variants
├── ChallengeFlow.tsx      # Challenge process visualization
├── ClaimHumanity.tsx      # Main CTA component
├── Footer.tsx             # Site footer
├── Header.tsx             # Site navigation
├── Hero.tsx               # Hero section
├── IntegrateSection.tsx   # Developer integration guide
├── PageContainer.tsx      # Layout wrapper
├── PartnerSection.tsx     # Partners showcase
├── ProfileCard.tsx        # User profile display
├── ProfileSubmissionFlow.tsx  # Submission process
├── SectionTitle.tsx       # Consistent section headers
├── SharePohCard.tsx       # Social sharing widget
├── SkipLink.tsx          # Accessibility navigation
├── UseCaseCard.tsx       # Individual use case display
└── UseCases.tsx          # Use cases section
```

## Support

For support and questions:
- Visit [Proof of Humanity](https://proofofhumanity.id)
- Join the [Kleros Community](https://kleros.io)
- Follow [@Kleros_io](https://twitter.com/Kleros_io) on Twitter
