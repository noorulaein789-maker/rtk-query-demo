# RTK Query User Management App

A React application demonstrating **Redux Toolkit Query (RTK Query)** for fetching and displaying user data from an API. The project provides a simple user management interface with a refresh option to retrieve the latest available user data.

## 🚀 Features

- **API Data Fetching:** Fetches user information using RTK Query.
- **User List Display:** Displays user names, email addresses, usernames, and cities.
- **Refresh Users:** Allows users to trigger a new request to fetch user data.
- **Redux Store Integration:** Configures the Redux store to manage RTK Query's API state.
- **Caching:** Uses RTK Query's built-in caching to manage fetched API data.
- **Loading and Error Handling:** Supports handling API loading states and request errors, if implemented in the application.
- **Responsive UI:** Provides a clean interface for viewing user information.

## 🛠️ Technology Stack

- **React** – Builds the user interface.
- **JavaScript** – Implements application logic.
- **Redux Toolkit** – Provides Redux state management tools.
- **RTK Query** – Handles API requests, caching, and data fetching.
- **React Redux** – Connects React components to the Redux store.
- **Vite** – Provides the development server and build tooling.
- **CSS** – Styles the application.

## 📁 Project Structure

```text
rtk-query-demo/
├── public/
├── src/
│   ├── app/
│   │   └── store.js
│   ├── services/
│   │   └── usersApi.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md
```

*Note: The structure above is an example. Adjust the filenames and folders to match your actual project.*

## ⚙️ Getting Started

### Prerequisites

- Node.js
- npm
- A code editor such as Visual Studio Code

### 1. Clone the Repository

```bash
git clone https://github.com/noorulaein789-maker/rtk-query-demo.git
```

### 2. Navigate to the Project Directory

```bash
cd rtk-query-demo
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL shown in your terminal, usually:

http://localhost:5173

### 5. Build for Production

```bash
npm run build
```

## 🔄 How It Works

1. The Redux store is configured to include the RTK Query API reducer and middleware.
2. The API service defines the endpoint used to fetch user data.
3. RTK Query manages the API request and caches the response.
4. The React component uses the generated query hook to access the user data and request status.
5. The user interface displays the fetched users.
6. Clicking **Refresh Users** triggers a new data-fetching request.

## 🎯 Learning Objectives

This project demonstrates the practical use of:

- Creating an API service with `createApi`.
- Configuring API requests with `fetchBaseQuery`.
- Generating and using query hooks.
- Integrating RTK Query with a Redux store.
- Fetching and displaying API data in React.
- Using RTK Query caching and refetching.
- Building a component-based user interface.

## 👩‍💻 Author

**Noor Ul Ain**

GitHub: [noorulaein789-maker](https://github.com/noorulaein789-maker)
