# React Contact Cards Manager (SPA)

A clean single-page application (SPA) built with React (functional components + hooks), ES6+ JavaScript, and modern CSS for adding, searching, and managing digital contact/business cards.

## 🚀 Features

- **Dynamic Contact Creation**: Input form component to collect Full Name, Job Title/Company, Phone, Email, Bio/Description, and optional Avatar URL. Submissions add contact cards dynamically to state without refreshing the page.
- **Modular Component Architecture**:
  - `ContactForm`: Controlled input handling and form submission.
  - `ContactCard`: Reusable component displaying individual contact details with fallback avatar initials and direct communication links (`tel:`, `mailto:`).
  - `ContactList`: Renders cards in a responsive CSS grid layout.
  - `App`: Central component managing state, derived search filtering, and composition.
- **Real-Time Search & Filtering**: Instant, case-insensitive partial match filtering on contact names and companies using derived state.
- **Clean Styling**: Card shadows, rounded corners, responsive grid layout, and interactive hover elevation effects.

## 📁 Project Structure

```
react-contact-cards/
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── src/
│   ├── main.jsx                # React DOM render entry
│   ├── App.jsx                 # Main component managing state & composition
│   ├── index.css               # Clean styling for cards & layout
│   └── components/
│       ├── ContactForm.jsx     # Form component (handles input + submit)
│       ├── ContactCard.jsx     # Reusable card component
│       └── ContactList.jsx     # Responsive grid parent component
└── README.md
```

## 💻 Getting Started Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```
