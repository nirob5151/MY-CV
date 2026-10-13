# Nirob's Personal Portfolio Website

A clean, modern, and minimal portfolio website built for **Nirob** — Graphic Designer and Computer Science student at **Bangladesh University of Business and Technology (BUBT)**.

Built with **plain HTML5, CSS3, and JavaScript** (no dependencies, no build steps, no frameworks). Fast-loading, fully responsive across mobile, tablet, and desktop, with dark/light mode toggle and a centralized data architecture.

---

## 📁 Project Folder Structure

```text
MY CV/
├── index.html                  # 1. Home Page (Hero, Tools, 3 Featured Projects preview)
├── academic.html               # 2. Academic Page (CS Projects & Coursework)
├── leadership.html             # 3. Leadership & Activities Page (Activity Tree, Internships, Clubs & Volunteering)
├── design.html                 # 4. Graphic Design Page (Filterable gallery & Detail view)
├── certificates.html           # 5. Certificates & Achievements Page (Tab switcher & Lightbox)
├── contact.html                # 6. Contact Page (Interactive form, Social profiles, CV download)
├── favicon.svg                 # Custom modern vector favicon
├── assets/
│   ├── css/
│   │   └── style.css           # Complete design system, dark/light theme tokens, responsive styles
│   ├── js/
│   │   ├── data.js             # ⭐ THE SINGLE DATA FILE: Edit all content here!
│   │   ├── main.js             # Theme toggle, mobile drawer, scroll animations, image zoom lightbox
│   │   ├── home.js             # Home page rendering logic
│   │   ├── academic.js         # Academic cards rendering logic
│   │   ├── leadership.js       # Leadership & Extracurricular Activity Tree & Category Filters
│   │   ├── design.js           # Graphic design filter buttons & project detail modal
│   │   ├── certificates.js     # Certificates tab switcher & certificate zoom viewer
│   │   └── contact.js          # Contact form handler, email & social profile bindings
│   ├── images/
│   │   ├── profile.svg         # Hero portrait illustration (replace with your real photo)
│   │   ├── projects/           # Design mockups (Posters, Banners, Social, Branding, UI)
│   │   │   ├── poster-1.svg
│   │   │   ├── branding-1.svg
│   │   │   ├── social-1.svg
│   │   │   ├── banner-1.svg
│   │   │   └── ui-clubconnect.svg
│   │   └── certificates/       # Certificate documents (cert-1, cert-2, cert-3)
│   │       ├── cert-1.svg
│   │       ├── cert-2.svg
│   │       └── cert-3.svg
│   └── cv/
│       └── Nirob_CV.pdf        # Your resume file for the "Download CV" button
└── README.md                   # This instruction guide
```

---

## 🛠️ (1) How to Replace Content

All dynamic content is organized in one single file: **[`assets/js/data.js`](assets/js/data.js)**.  
You do **not** need to touch the HTML or CSS layouts!

### 1. Update Personal & Contact Info
Open `assets/js/data.js` and edit the `profile` object:
```javascript
profile: {
  name: "Nirob",
  fullName: "Md Masudur Rahman Nirob",
  email: "your-real-email@gmail.com",       // Replace placeholder
  location: "Dhaka, Bangladesh",
  photo: "assets/images/profile.svg",       // Point to your JPG/PNG photo
  resumePdf: "assets/cv/Nirob_CV.pdf",      // Put your actual PDF in assets/cv/
  
  social: {
    linkedin: "https://www.linkedin.com/in/your-username",
    behance: "https://www.behance.net/your-username",
    facebook: "https://www.facebook.com/your-username",
    github: "https://github.com/your-username"
  }
}
```

### 2. Replace the Profile Picture & Resume PDF
- **Profile Photo:** Save your portrait photo as `assets/images/my-photo.jpg`, then in `data.js` change `photo: "assets/images/my-photo.jpg"`.
- **CV / Resume:** Put your real PDF into `assets/cv/` (e.g. named `Nirob_CV.pdf`).

---

## 🎨 (2) How to Add New Items

### Adding a New Graphic Design Project
Open `assets/js/data.js` and append an object to `graphicDesignProjects`:
```javascript
{
  id: "my-new-project-slug",
  title: "Your Project Title Here",
  category: "Posters", // Choose: "Posters", "Banners", "Social Media", "Branding", or "UI Design"
  featured: true,       // Set true if you want it previewed on the Home page
  coverImage: "assets/images/projects/your-new-image.jpg",
  gallery: ["assets/images/projects/your-new-image.jpg"],
  client: "Client or Club Name",
  brief: "What the client or event needed.",
  role: "Lead Graphic Designer",
  tools: ["Adobe Photoshop", "Adobe Illustrator"],
  process: "Your creative approach, sketches, and typography choices.",
  result: "Print-ready high-resolution files and digital distribution."
}
```
*Tip: Keep "Club Connect" (UI Design) as the last item in the list to maintain the order requested.*

### Adding an Academic Project
In `assets/js/data.js`, add an item to `academicProjects`:
```javascript
{
  id: "acad-new-project",
  title: "Project Name",
  course: "Course Name / Subject",
  semester: "Semester Number",
  role: "Your Role (e.g. UI Designer & Frontend Developer)",
  description: "Short summary of what the system does.",
  technologies: ["HTML5", "CSS3", "JavaScript"],
  githubUrl: "https://github.com/your-profile/repo-name",
  demoUrl: "https://your-demo-link.com" // Leave as "" if no live link
}
```

### Adding a Certificate or Achievement
- To add a certificate, add an object to `certificates` with `title`, `issuer`, `date`, and image path in `assets/js/data.js`.
- To add an award or honor, add an object to `achievements` with `title`, `organization`, `year`, and `description`.

---

## 🚀 (3) How to Publish Your Site for Free

You can host this website 100% free with custom HTTPS and ultra-fast global loading on either **GitHub Pages** or **Netlify**.

### Option A: Publish on GitHub Pages (Recommended)
1. Create a free account at [GitHub.com](https://github.com) if you haven't already.
2. Create a new repository named:
   - `yourusername.github.io` (for automatic root URL `https://yourusername.github.io`)  
     *OR*
   - `my-portfolio` (or any name you prefer).
3. Push or upload all the files in this folder (`index.html`, `academic.html`, `leadership.html`, `design.html`, `certificates.html`, `contact.html`, `favicon.svg`, and the `assets/` folder) to the main branch of your repository.
4. Go to **Repository Settings** > **Pages** (under the "Code and automation" section).
5. Under **Branch**, select `main` and folder `/ (root)`, then click **Save**.
6. Your portfolio website will be live in ~1 minute at:
   `https://yourusername.github.io` (or `https://yourusername.github.io/my-portfolio/`).

### Option B: Publish on Netlify (Drag & Drop in 30 Seconds)
1. Go to [Netlify.com](https://www.netlify.com) and log in.
2. Go to **Sites** and look for the **"Want to deploy a new site without connecting to Git? Drag and drop your site folder here"** area.
3. Drag your entire `MY CV` folder directly into the browser window.
4. Netlify will deploy your site instantly and give you a live URL (e.g., `https://nirob-portfolio.netlify.app`).
5. You can also connect your custom domain for free anytime.

---

## 💡 Key Design & Tech Features
- **Zero Frameworks:** Pure semantic HTML5, CSS3, and JavaScript — works offline and everywhere.
- **Dark & Light Mode:** Toggle instantly switches themes and remembers your preference via `localStorage` with fallback to system settings.
- **One Accent Color:** Elegant Royal Indigo (`#4f46e5` / `#818cf8`) balanced with modern typography (*Plus Jakarta Sans*).
- **Lightbox Zoom:** Click any graphic design or certificate image to view it full-screen in high resolution.
- **SEO Optimized:** Distinct page titles, OpenGraph social sharing meta tags, semantic headings, and descriptive alt texts.
#   M Y - C V  
 