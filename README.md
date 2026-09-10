# Contact Cards Manager

A clean single page application built with React, ES6 JavaScript, and modern CSS for creating, viewing, and organizing digital contact cards.

Repository: https://github.com/sriguruviyas/contacts-card

Author: Sri Guru Viyas (https://github.com/sriguruviyas)

## Project Overview

This project provides a clean digital business card organizer designed with a modular React architecture. Users can add new contacts through an interactive form and filter cards in realtime by name or company.

## Core Capabilities

1. Dynamic Card Creation
Add new contacts with their name, organization, phone number, email address, bio, and avatar link without reloading the page.

2. Reusable Modular Architecture
Built with separated components including ContactForm for collecting inputs, ContactCard for displaying individual cards, ContactList for responsive grid rendering, and App for state composition.

3. Realtime Search and Filter
Type in the search field to filter the displayed cards in realtime through case insensitive matching on names and organizations.

4. Thoughtful Design
Card elevation shadows, rounded corners, responsive grid layout, SVG icons, and smooth hover transitions.

## Project Structure

src/main.jsx (Application root mount)

src/App.jsx (Main application component with state management)

src/index.css (Clean layout and card styling)

src/components/ContactForm.jsx (Input form for collecting contact details)

src/components/ContactCard.jsx (Individual card displaying user information)

src/components/ContactList.jsx (Responsive grid displaying all active cards)

## Running Locally

1. Install dependencies:
npm install

2. Start the local development server:
npm run dev

Open http://localhost:3000 in your browser.

3. Build production bundle:
npm run build
