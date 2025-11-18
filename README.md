# 🚀 Personal Fans Page - 3D Animated Digital Space

Selamat datang di personal fans page dengan konsep futuristic 3D animated! Website ini adalah ruang digital pribadi yang menampilkan portfolio, artikel, dan update pribadi dengan smooth scroll animations dan interactive 3D experiences.

## ✨ Features

- 🎨 **Dark Futuristic Design** - Modern UI dengan neon cyan/purple accents
- 🌟 **Enhanced 3D Hero** - Interactive sphere dengan orbiting torus dan floating cubes
- 🎲 **3D Floating Cards** - Parallax depth effect dengan mouse tracking
- 🧬 **DNA Helix Animation** - Decorative rotating double helix
- 💎 **Holographic Card Effect** - Rainbow gradient following mouse position
- 🌊 **Animated Wave Background** - Dynamic 3D wave mesh di Articles
- ⚡ **Floating Geometric Shapes** - Interactive wireframe 3D objects
- 🌀 **Rotating Rings** - Multi-axis animated 3D rings
- ✨ **Particle Background** - Connected floating particles
- 🖱️ **Custom Cursor** - Smooth animated cursor
- 📱 **Fully Responsive** - Perfect di semua devices
- 🎭 **Smooth Transitions** - Framer Motion animations
- 📝 **Dynamic Feed** - Timeline dengan 3D card effects
- 🎯 **Projects Gallery** - 3D showcase dengan filtering
- ✍️ **Articles System** - Blog dengan 3D wave background
- 👤 **About Page** - Profile dengan geometric shapes
- 🔍 **SEO Optimized** - Meta tags lengkap

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router v6

## 🚀 Getting Started

### Installation

```bash
# Clone repository
git clone <YOUR_GIT_URL>
cd <PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

Server akan berjalan di `http://localhost:8080`

### Build for Production

```bash
# Build aplikasi
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/              # Reusable components
│   ├── CustomCursor.tsx     # Animated cursor
│   ├── Navbar.tsx           # Navigation bar
│   ├── ThreeScene.tsx       # Simple 3D sphere (legacy)
│   ├── EnhancedThreeScene.tsx   # Advanced 3D hero scene
│   ├── ParticlesBackground.tsx  # Particle connections
│   ├── FloatingCard3D.tsx       # 3D card wrapper with parallax
│   ├── GeometricShapes.tsx      # Floating wireframe shapes
│   ├── WaveBackground.tsx       # Animated 3D wave mesh
│   ├── RotatingRings.tsx        # Multi-axis rotating rings
│   ├── DNAHelix.tsx             # DNA double helix animation
│   ├── HolographicCard.tsx      # Holographic hover effect
│   ├── PostCard.tsx         # Post display card
│   └── ProjectCard.tsx      # Project display card
├── data/                    # JSON data files
│   ├── posts.json
│   └── projects.json
├── pages/                   # Page components
│   ├── Index.tsx            # Feed with enhanced 3D hero + DNA helix
│   ├── Projects.tsx         # With rotating rings + floating cards
│   ├── Articles.tsx         # With 3D wave background
│   ├── ArticleDetail.tsx    # Single article view
│   └── About.tsx            # With geometric shapes
├── App.tsx                  # Main app with transitions
└── index.css                # Design system & styles
```

## 📝 How to Update Content

### Adding New Posts (Articles/Status)

Edit `src/data/posts.json`:

```json
{
  "id": 6,
  "title": "Your Post Title",
  "type": "article",  // or "status", "project"
  "date": "2025-11-13",
  "tags": ["tag1", "tag2"],
  "excerpt": "Short description...",
  "content": "# Full Content\n\nYour article content in markdown format..."
}
```

### Adding New Projects

Edit `src/data/projects.json`:

```json
{
  "id": 7,
  "title": "Your Project Title",
  "description": "Project description...",
  "tech": ["React", "Node.js", "etc"],
  "image": "https://your-image-url.jpg",
  "demo": "https://demo-link.com",
  "github": "https://github.com/...",
  "featured": true
}
```

### Customizing Design

All design tokens are in `src/index.css`:

```css
:root {
  --primary: 180 100% 50%;      /* Neon Cyan */
  --secondary: 280 100% 60%;    /* Purple */
  --accent: 320 100% 60%;       /* Pink */
  /* ... more colors */
}
```

## 🎨 3D Elements Overview

Website ini menggunakan berbagai macam 3D elements untuk menciptakan pengalaman yang immersive:

### Hero Section (Homepage)
- **Enhanced 3D Scene**: Central glowing sphere dengan MeshDistortMaterial
- **Orbiting Torus**: 2 torus rings yang orbit di sekitar sphere
- **Floating Cubes**: Wireframe cubes yang bergerak naik-turun
- **DNA Helix**: Double helix animation di sisi kanan (desktop only)
- **Auto-rotation**: Smooth camera rotation

### Projects Page  
- **Rotating Rings**: 3 multi-axis rotating wireframe rings sebagai background
- **Floating Cards**: Setiap project card punya parallax 3D effect saat hover
- **Holographic Effect**: Rainbow gradient mengikuti mouse position

### Articles Page
- **Wave Background**: Animated 3D wave mesh yang terus bergerak
- **Grid Surface**: 50x50 segments dengan dynamic vertex animation

### About Page
- **Geometric Shapes**: 5 floating wireframe objects (box, sphere, torus, octahedron)
- **Particle Network**: Connected floating particles di background

### Interactive Features
- **FloatingCard3D**: Mouse tracking untuk parallax rotation effect
- **HolographicCard**: Radial gradient mengikuti cursor position
- **All 3D scenes**: Auto-rotate dengan OrbitControls enabled

### Performance
- Wireframe rendering untuk performance optimal
- Reduced particle count di mobile
- Lazy loading untuk 3D components
- Optimized geometry dengan lower segment counts

### Customizing 3D Elements

Edit 3D components untuk mengubah effects:

**Enhanced Hero Scene** (`src/components/EnhancedThreeScene.tsx`):
- Warna objects (sphere, torus, cubes)
- Speed rotasi dan orbit
- Lighting effects
- Material properties (wireframe, opacity, etc.)

**Floating Cards** (`src/components/FloatingCard3D.tsx`):
- Intensity parameter (rotation strength)
- Adjust 3D perspective dan depth

**Wave Background** (`src/components/WaveBackground.tsx`):
- Wave amplitude dan frequency
- Grid resolution (segments)
- Animation speed

**Geometric Shapes** (`src/components/GeometricShapes.tsx`):
- Shape types (box, sphere, torus, octahedron)
- Positions dan scale
- Colors dan opacity

**Rotating Rings** (`src/components/RotatingRings.tsx`):
- Ring sizes dan tube thickness
- Rotation speeds per axis
- Colors

## 🎨 Design System

### Colors
- **Primary**: Neon Cyan (`#00ffff`)
- **Secondary**: Purple (`#a855f7`)
- **Accent**: Pink (`#ec4899`)
- **Background**: Dark (`#0a0a0f`)
- **Foreground**: Light text

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold with gradient text effects
- **Body**: Regular with good contrast

### Animations
- **Page Transitions**: Fade + slide animations
- **Hover Effects**: Scale and color transitions
- **3D Objects**: Auto-rotate with interactive controls
- **Particles**: Floating with connection lines

## 🔧 Customization Guide

### Change Your Name

1. Update `src/pages/Index.tsx` - Hero section
2. Update `src/pages/About.tsx` - Profile section
3. Update `src/components/Navbar.tsx` - Logo text
4. Update `index.html` - Meta tags

### Change Social Links

Edit `src/pages/About.tsx`:

```typescript
const socialLinks = [
  { icon: Mail, label: 'Email', href: 'mailto:your@email.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/yourusername' },
  // ... add more
];
```

### Disable Custom Cursor

Remove or comment out `<CustomCursor />` in `src/App.tsx` and update `body` style in `src/index.css`:

```css
body {
  cursor: default; /* instead of cursor: none */
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Deploy automatically!

### Deploy to Netlify

1. Push code ke GitHub
2. Import project di [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy via Lovable

Click the **Publish** button di top-right Lovable editor.

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

> Note: WebGL support required untuk 3D features

## 🤝 Contributing

Feel free to fork dan customize sesuai kebutuhan Anda!

## 📄 License

This project is open source and available under the MIT License.

---

Made with ❤️ using Lovable

**Live Demo**: [Your deployed URL]
**GitHub**: [Your repo URL]
# sertiman-app
