# 📊 Staff Wall — Employee Management Dashboard

A clean, scalable, and professional **React + AG Grid dashboard** built to display employee data efficiently using client-side rendering.

Live demo: 👉 [https://staff-wall.vercel.app/](https://staff-wall.vercel.app/)

---

## 🛠 Tech Stack

| Layer        | Technology                                  |
| ------------ | ------------------------------------------- |
| Frontend     | React (Vite)                                |
| Grid / Table | AG Grid (ag-grid-react + ag-grid-community) |
| UI Styling   | TailwindCSS                                 |
| Language     | JavaScript / TypeScript                     |
| Build Tool   | Vite                                        |

---

## 📁 Project Structure

Based on your repo, here’s how everything is organized:

```
staff-wall/
├── components/
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── KPISection.jsx
│   ├── EmployeeGrid.jsx
│   ├── Filters.jsx
│   └── …other UI components
├── data/
│   └── employees.json
├── src/
│   └── …React app entry / screens
├── public/
│   └── assets
├── tailwind.config.ts
├── package.json
├── vite.config.ts
└── README.md
```

> This structure reflects clean separation of layout, data, and logic.

---

## 🚀 Features

### ✅ Grid & Table

* AG Grid client-side rendering
* Pagination
* Sorting & Filtering
* Floating filters
* Column resizing
* CSV export support
* Custom cell renderers

---

### 📊 Dashboard Layout

* Top navigation header
* Sidebar navigation (minimal)
* KPI summary cards
* Responsive layout with TailwindCSS

---

### 📈 KPI Highlights

Dynamic metrics include:

* **Total Employees**
* **Active Employees**
* **Average Salary**
* **Average Performance Rating**

All metrics are computed using efficient React Hooks (`useMemo`) to avoid unnecessary renders.

---

## 🧠 Design & Architecture

This dashboard is built with scalability and maintainability in mind:

### 📦 Component-Driven

* Reusable UI components
* Minimal inline styles
* Tailwind utility classes for consistency

### ⚡ Performance Optimizations

* Memoized column definitions
* Clean separation of data and presentation
* Prepared for larger datasets with AG Grid

---

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/vidit19sharma/staff-wall.git
cd staff-wall
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 🔧 TailwindCSS Setup (if you want to customize further)

Default Tailwind config file included:

```bash
tailwind.config.ts
postcss.config.js
```

Make sure to restart the dev server after edits.

---

## 🧠 Why This Approach

This dashboard reflects industry best practices:

✔ Modular React components
✔ Scalable architecture
✔ Clean, responsive UI
✔ Efficient AG Grid usage
✔ Performance-aware patterns

Perfect for both small data and future large datasets.

---

## 📈 Future Enhancements

Here are some ideas to take this even further:

* Server-side AG Grid row model
* Detailed employee profile modals
* Search bar with debounced queries
* Graph/chart analytics per department
* Dark mode toggle
* Unit tests & component tests

---


## 🙌 Author

**Vidit Sharma**
Full Stack Developer
GitHub: [https://github.com/vidit19sharma](https://github.com/vidit19sharma)

