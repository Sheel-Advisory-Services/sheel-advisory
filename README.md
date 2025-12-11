# Sheel Advisory Services Website

A modern, professional website built with Next.js featuring a dark blue-steel theme for owner representative and project management consulting services.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed on your computer
- A code editor (VS Code recommended)
- Git (for version control and Vercel deployment)

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd sheel-advisory
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
sheel-advisory/
├── app/                      # Next.js app directory
│   ├── globals.css          # Global styles and Tailwind
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── TargetClients.tsx   # Who you serve
│   ├── Services.tsx        # Services offered
│   ├── About.tsx           # About section
│   ├── Props.tsx           # Articles, awards, podcast
│   ├── Testimonials.tsx    # Client testimonials
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Site footer
├── content/                 # Markdown files for easy editing
│   ├── about.md            # About page content
│   ├── articles.md         # Published articles
│   ├── awards.md           # Awards and recognition
│   ├── podcast.md          # Podcast information
│   └── testimonials.md     # Client testimonials
├── public/                  # Static files (images, etc.)
└── package.json            # Project dependencies
```

## ✏️ Updating Content

All content can be easily updated through markdown files in the `/content` directory:

### About Section
Edit `content/about.md` to update:
- Professional biography
- Credentials and certifications
- Experience statistics
- Professional affiliations

### Articles
Edit `content/articles.md` to add or update published articles.

### Awards
Edit `content/awards.md` to add or update awards and recognition.

### Podcast
Edit `content/podcast.md` to update podcast information and episodes.

### Testimonials
Edit `content/testimonials.md` to add or update client testimonials.

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.ts`. Current theme uses:
- Steel grays (dark theme)
- Blue accent (`#60a5fa`)
- Cyan accent (`#22d3ee`)

To change colors, edit the `colors` section in the Tailwind config.

### Fonts
Fonts are configured in `app/layout.tsx`:
- **Body text:** Inter
- **Display/Headings:** Urbanist

### Images
Add images to the `/public` directory and reference them in components.

## 🚢 Deployment to Vercel

### Method 1: Using Git (Recommended)

1. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a GitHub repository** and push your code:
   ```bash
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

### Method 2: Using Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts** to link your project and deploy.

## 📝 Development Workflow

1. Make changes to components or content
2. See changes instantly at `http://localhost:3000` (dev server must be running)
3. When satisfied, commit changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. Vercel will automatically deploy the new version

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Next Steps

1. **Update content** in the `/content` markdown files
2. **Add professional photos** to the About section
3. **Configure contact form** to actually send emails (requires backend setup)
4. **Add your actual contact information** (email, phone)
5. **Get client testimonials** and add them to `content/testimonials.md`
6. **Add real statistics** to replace placeholder numbers
7. **Set up analytics** (Google Analytics, Plausible, etc.)

## 📞 Support

For questions about the website, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## 📄 License

Copyright © 2024 Sheel Advisory Services. All rights reserved.
