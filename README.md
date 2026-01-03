# Amity | Campus Event & Opportunity Hub 🤝

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.x-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)

A sophisticated, industry-standard React application designed to facilitate seamless interaction between university students and event organizers. **Amity** leverages modern web technologies to provide a secure, role-based environment for campus opportunity management.

---

## 🏛️ Technical Architecture

The frontend is built on a **Component-Based Architecture**, emphasizing modularity, dry principles (Don't Repeat Yourself), and a strict separation of concerns between UI presentation and business logic.



### 1. State Management & Hooks
* **Local State**: Utilizes `useState` for granular control of form inputs and UI toggles (e.g., Modals, Search bars).
* **Side Effects**: Implements `useEffect` for synchronized data fetching and authentication lifecycle management.
* **Navigation**: Powered by `useNavigate` and `useLocation` for programmatic routing and route-change detection.

### 2. Industry-Grade Logic Implementations

#### **A. Secure JWT Authentication Flow**
Unlike basic auth systems, Amity uses **JWT (JSON Web Token)** for stateless authentication.
* **Logic**: Tokens are stored securely in `localStorage`.
* **Token Decoding**: Integrated `jwt-decode` to parse payload data (Claims) on the client side. This allows the application to dynamically change the UI (e.g., showing Admin dashboards vs. Student profiles) without redundant API calls.
* **Auth Interceptors**: Configured Axios to automatically attach Bearer tokens to the `Authorization` header for protected endpoints.

#### **B. Dynamic Role-Based Dispatching**
I implemented a **Dispatcher Pattern** for the profile routes. Instead of hardcoding separate pages, a central `ProfileDispatcher` component analyzes the user's role and renders either `UserProfileContent` or `OrgProfileContent`. This reduces routing overhead and improves maintainability.

#### **C. Form Logic & Data Serialization**
* **Complex Forms**: Handled multi-input states using single-handler functions (`handleChange`) with object computed property names.
* **Schema Alignment**: Implemented logic to transform React state into ISO-standard `LocalDate` and `LocalTime` strings to meet **Spring Boot/Hibernate** entity requirements.

#### **D. Responsive Design System**
* **Tailwind CSS**: Custom configuration for a dark-themed, professional aesthetic.
* **Glassmorphism**: Implemented `backdrop-blur` on the navigation system for a premium, modern feel.
* **UX Enhancements**: Replaced standard browser `alert()` methods with custom-built Tailwind modals that manage their own animation lifecycle.



---

## 🚀 Key Modules

* **Opportunity Feed**: Real-time listing of workshops, hackathons, and seminars.
* **Organizer Dashboard**: A restricted environment for event creation, allowing for rich-text descriptions and banner image URL integration.
* **Profile Management**: Personalized spaces for users to track their activity and organizers to manage their impact stats.
* **Smart Search**: Client-side filtering logic for rapid discovery of events.

---

## 📂 Directory Structure

```text
src/
 ├── assets/          # Localized university icons and brand assets
 ├── components/      # Atomized UI (Navbar, Modals, EventCards)
 ├── pages/           # Logic-heavy views (Homepage, Opportunities)
 ├── utils/           # Helper functions for JWT and Date formatting
 └── App.js           # Core routing and Context provider setup