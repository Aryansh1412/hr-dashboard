# 🧑‍💼 HR Dashboard

A feature-rich HR Dashboard built with **Next.js 14**, **Tailwind CSS**, and **Context API**. It helps HR teams visualize and manage employee data effectively.

## 📸 Screenshots

### 🏠 Dashboard Homepage
![Dashboard Screenshot](public/screenshots/dashboard.png)

### 👤 Employee Profile Page
![Employee Page Screenshot](public/screenshots/employee-page.png)

### 📌 Bookmark Manager
![Bookmark Screenshot](public/screenshots/bookmarks.png)

### 📊 Analytics Page
![Analytics Screenshot](public/screenshots/analytics-1.png)
![Analytics Screenshot](public/screenshots/analytics-2.png)


---

## 🚀 Features Implemented

### 1. 🏠 **Dashboard Homepage**
- Fetches data from `https://dummyjson.com/users?limit=20`
- Displays:
  - Full Name, Email, Age, Department (mocked)
  - Performance rating (1–5 stars)
  - Action buttons: `View`, `Bookmark`, `Promote`

### 2. 🔍 **Search & Filter**
- Search bar (name/email/department, case-insensitive)
- Multi-select filter:
  - Departments
  - Rating levels

### 3. 👤 **Dynamic Employee Page**
- Route: `/employee/[id]`
- Shows:
  - Full Profile: Address, Phone, Bio (mocked)
  - Performance history
  - Tabbed UI: `Overview`, `Projects`, `Feedback`

### 4. 📌 **Bookmark Manager**
- Route: `/bookmarks`
- View and manage bookmarked employees
- Supports:
  - Remove from bookmarks
  - Trigger `Promote` / `Assign to Project` (UI only)

### 5. 📊 **Analytics Page**
- Route: `/analytics`
- Charts with:
  - Avg. rating per department
  - Bookmark trends (mocked data)
- Built using `chart.js`

---

## 🛠 Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/Aryansh1412/hr-dashboard.git
cd hr-dashboard
---

### 🔗 App Routes & Navigation

You can directly access key pages of the dashboard using the following routes:

- **🏠 Dashboard Homepage**  
  `/` – Displays the main employee dashboard.

- **👤 Employee Profile Page**  
  `/employee/[id]` – View an individual employee’s full profile.  
  Example: `/employee/5`

- **📌 Bookmark Manager**  
  `/bookmarks` – View and manage your bookmarked employees.

- **📊 Analytics Page**  
  `/analytics` – Visualize employee and department performance trends.

---

### 🧭 How to Use

You can manually navigate by typing routes into your browser’s address bar:

```text
https://hr-dashboard-m7gi.vercel.app/bookmarks
https://hr-dashboard-m7gi.vercel.app/employee/3
https://hr-dashboard-m7gi.vercel.app/analytics
