# React Contact Cards Manager (SPA Project)

A modern, fully responsive Single Page Application (SPA) built with **React** and **JavaScript** for creating, editing, validating, searching, and dynamically displaying contact cards.

Designed specifically for internship project submissions, featuring modular component architecture, state persistence, input validation, and local storage synchronization.

---

## 📁 Component Folder Structure & Architecture

```
react-contact-cards/
├── index.html                  # HTML5 entry document
├── package.json                # Project dependencies & scripts
├── vite.config.js              # Vite server configuration
├── src/
│   ├── main.jsx                # React DOM root entrypoint
│   ├── index.css               # Global CSS variables (Light/Dark themes)
│   ├── App.jsx                 # Central SPA Container & State Manager
│   └── components/
│       ├── Header.jsx          # Top navbar branding & theme switcher
│       ├── StatsSummary.jsx    # Metrics cards (Total, Favorites, Roles)
│       ├── UserForm.jsx        # Input form component for creating/editing cards
│       ├── UserList.jsx        # Parent container component for cards grid
│       ├── UserCard.jsx        # Reusable individual contact card item
│       ├── SearchBar.jsx       # Real-time search & role filter bar
│       └── Notification.jsx    # Toast notification component
└── README.md                   # Comprehensive documentation & React guide
```

---

## 🎓 Complete React Learning & Project Explanation (Internship Guide)

### 1. Single Page Application (SPA) Architecture
In traditional websites, navigating between pages requires requesting new HTML documents from a server. In this **React SPA**:
- The browser loads `index.html` once.
- JavaScript dynamically mounts and updates components inside `<div id="root"></div>` without page reloads.

### 2. Component Modularization & Reusability
Each visual part of the site is isolated into its own file under `src/components/`:
- **`UserForm.jsx`**: Manages user creation inputs and validation independently.
- **`UserList.jsx`**: Acts as the parent container that dynamically displays card components.
- **`UserCard.jsx`**: A reusable UI template. Instead of writing duplicate HTML for 50 users, React renders `<UserCard key={user.id} user={user} />` dynamically.

### 3. State Management (`useState`) vs Props
- **`useState`**: Used to hold mutable data that changes over time (e.g., list of contacts, current form values, active search query, dark/light theme).
- **Props (Properties)**: Read-only data passed from parent components down to child components (e.g., `App.jsx` passes `users={filteredContacts}` down to `UserList.jsx`).

### 4. Controlled Components & Form Validation
In `UserForm.jsx`, every `<input>` value is tied to React state via `formData`:
- As the user types, `onChange` updates `formData`.
- Before adding a contact, `validate()` checks:
  - Required text inputs are non-empty.
  - Email contains `@` and valid format regex (`/\S+@\S+\.\S+/`).
  - Phone contains valid numeric character formatting.
- Error messages render conditionally below each field if invalid.

### 5. Dynamic Rendering & Immutability
- **Dynamic List Mapping**: `UserList.jsx` uses JavaScript's `.map()` array method to convert an array of user objects into `<UserCard />` elements.
- **State Immutability**: React state should never be modified directly (e.g., `contacts.push(newCard)` is prohibited). Instead, we use spread operators:
  ```js
  setContacts(prevContacts => [newCard, ...prevContacts]);
  ```

### 6. Persistence with `useEffect`
- `useEffect` handles side-effects like reading from and writing to `localStorage`.
- When `contacts` state updates, `localStorage.setItem('react_contact_cards_data', ...)` automatically saves the dataset.

---

## 🚀 How to Run the Project Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v16+) installed.

### Execution Steps
1. Open your terminal inside the project directory:
   ```bash
   cd react-contact-cards
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the displayed URL in your browser (default: `http://localhost:3000`).

---

## 👥 Sample Data

For immediate evaluator review, the app comes pre-populated with initial contact cards including:
- **Sri Guru Viyas RM** (Web Developer)
- **Ananya Sharma** (UI/UX Designer)
- **Rohan Verma** (Full Stack Developer)
