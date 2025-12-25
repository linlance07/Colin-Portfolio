# Colin Rolance D - Portfolio Website

A modern, animated portfolio website showcasing my skills, projects, and achievements as a Software Developer Engineer.

## 🌟 Features

- **Modern Design**: Clean, professional UI with dark theme
- **Smooth Animations**: CSS animations and JavaScript interactions throughout
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, parallax scrolling, and dynamic content
- **Performance Optimized**: Fast loading with lazy loading and optimized code
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript**: Vanilla JS for interactivity
- **Font Awesome**: Icon library
- **Google Fonts**: Poppins and Fira Code fonts

## 📁 Project Structure

```
Colin-Portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── img/
│   ├── profile.jpg     # Profile picture (PLACEHOLDER)
│   └── projects/       # Project images (PLACEHOLDER)
│       ├── wingman.jpg
│       ├── test-data-service.jpg
│       └── slack-bot.jpg
├── lib/                # Third-party libraries
│   ├── animate/
│   ├── lightbox/
│   ├── owlcarousel/
│   └── ...
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- (Optional) A local web server for development

### Installation

1. Clone the repository:
```bash
git clone https://github.com/linlance07/Colin-Portfolio.git
cd Colin-Portfolio
```

2. Replace placeholder images:
   - Add your profile picture as `img/profile.jpg`
   - Add project images in `img/projects/` folder

3. Update content:
   - Edit `index.html` to update personal information
   - Look for `<!-- PLACEHOLDER: ... -->` comments to add more content

4. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

## 📝 Customization Guide

### Adding New Projects

1. Find the projects section in `index.html`
2. Copy a project card template
3. Update the image, title, description, and links
4. Add corresponding image in `img/projects/`

### Updating Skills

1. Locate the skills section in `index.html`
2. Add new skill items within the appropriate category
3. Use Font Awesome icons for consistency

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #6C63FF;    /* Main brand color */
    --secondary-color: #4CAF50;   /* Accent color */
    --accent-color: #FF6B6B;      /* Highlight color */
    /* ... other colors */
}
```

### Adding Social Links

1. Find the social links section in `index.html`
2. Add new links following the existing pattern
3. Use appropriate Font Awesome icons

## 🎨 Placeholders to Fill

The following items are marked with `<!-- PLACEHOLDER: ... -->` comments:

1. **Profile Image**: Replace `img/profile.jpg` with your photo
2. **Project Images**: Add images for all projects in `img/projects/`
3. **Social Links**: Update GitHub, LinkedIn, and other profile URLs
4. **Additional Skills**: Add more language/framework skills
5. **More Projects**: Add additional projects you've worked on
6. **Contact Form**: Integrate with a backend service (EmailJS, Formspree, etc.)
7. **Certifications**: Add more certifications and courses
8. **Experience**: Add more work experience entries

## 📧 Contact Form Integration

The contact form currently logs to console. To make it functional, integrate with:

- **EmailJS**: https://www.emailjs.com/
- **Formspree**: https://formspree.io/
- **Netlify Forms**: https://www.netlify.com/products/forms/
- **Your own backend API**

Example with EmailJS:
```javascript
emailjs.send("service_id", "template_id", formData)
    .then(function(response) {
        alert('Message sent successfully!');
    });
```

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select the branch (usually `main`) and root folder
4. Your site will be live at `https://[username].github.io/Colin-Portfolio/`

### Netlify

1. Connect your GitHub repository to Netlify
2. Deploy with default settings
3. Optionally add a custom domain

### Vercel

1. Import your GitHub repository
2. Deploy with zero configuration
3. Automatic deployments on push

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Fast loading with optimized assets
- Lazy loading for images
- Debounced scroll events

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Colin Rolance D**

- Email: colinrolance2001@gmail.com
- Phone: +91 6384322912
- GitHub: [@linlance07](https://github.com/linlance07)
- LinkedIn: [Colin Rolance D](https://linkedin.com/in/colinrolance)

---

⭐ If you found this helpful, please star the repository!

Built with ❤️ using HTML, CSS, and JavaScript
