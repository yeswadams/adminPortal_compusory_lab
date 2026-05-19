# Coffee Admin Portal

A React-based application for managing a coffee shop inventory. This project allows users to browse different coffee brands, search and filter by origin, and provides an admin portal for adding and managing coffee products.

## Features

- **Home Page**: A welcoming landing page with a hero section introducing the website.
- **Shop**: Browse all available coffee brands.
  - **Search**: Real-time search by name, description, or origin.
  - **Filter**: Filter coffees by their origin/location.
- **Admin Portal**: A dedicated space to add new coffee brands to the inventory.
  - **Form Management**: Implemented using **Formik** for robust state handling.
  - **Validation**: Uses **Yup** for schema-based form validation.
- **Coffee Management**:
  - **Inline Editing**: Quickly update coffee prices directly on the shop cards (powered by Formik).
  - **Deletion**: Securely remove coffee brands with a confirmation step.
- **Persistent Data**: Uses `json-server` to mock a REST API and persist data in `db.json`.

## Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **Form Management**: Formik
- **Validation**: Yup
- **Routing**: React Router DOM
- **Backend**: JSON Server (Mock API)


## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone git@github.com:yeswadams/adminPortal_compusory_lab.git
   cd summative-lab
   ```

2. **Install dependencies**: 
   ```bash
   npm install
   ```

3. **Start the JSON Server**:
   In a separate terminal, run:
   ```bash
   npm run server
   ```
   This will start the mock backend on `http://localhost:3000`.

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

## 📁 Project Structure

- `src/root`: Contains the root component that renders the overall layout for the application and nests the other pages (`RootLayout`).
- `src/root/pages`: Contains main page components (`HomePage`, `Shop`, `AdminPortal`).
- `src/components/ui`: Reusable UI components like `CoffeeCard` and `Input`.
- `src/hooks`: Custom hooks like `useCoffee` for data fetching and operations.
- `db.json`: The database file for `json-server`.

## Implementation Notes

- **Formik Integration**: Manual form states were replaced with Formik to improve maintainability and scalability.
- **Yup Validation**: Centralized validation schemas ensure consistent data entry across the application.
- **Surgical Updates**: Components were refactored to minimize side effects while ensuring all form logic follows the new standards.
