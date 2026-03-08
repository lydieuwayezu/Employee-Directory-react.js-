# Employee Directory - React Application

A modern React application that fetches and displays employee data from a public API with search, print, and download functionality.

## 📁 Project Structure

```
employee-directory/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── EmployeeCard.js     # Reusable employee card component
│   │   └── EmployeeCard.css    # Card styling
│   ├── App.js              # Main application component
│   ├── App.css             # Application styling
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Open terminal in the project folder

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:3000
```

## ✨ Features Implemented

### Core Features
- ✅ **API Integration**: Fetches employee data from JSONPlaceholder API
- ✅ **React Hooks**: Uses useState and useEffect for state management
- ✅ **Dynamic Rendering**: Uses .map() to render employee cards
- ✅ **Reusable Components**: EmployeeCard component receives data via props
- ✅ **Search Functionality**: Real-time filtering by name and email
- ✅ **Loading State**: Shows spinner while fetching data
- ✅ **Error Handling**: Displays error messages if API fails
- ✅ **Responsive Design**: Works on mobile, tablet, and desktop
- ✅ **Print Feature**: Print all visible cards with clean layout
- ✅ **Download Feature**: Download individual employee cards as text files

### Technical Highlights
- **Modern JavaScript**: Destructuring, spread operator, arrow functions
- **Component Architecture**: Clean separation of concerns
- **CSS Grid**: Responsive card layout
- **Hover Animations**: Smooth transitions and effects
- **Professional Design**: Clean, modern UI with gradient backgrounds

## 🎯 How It Works

### 1. Data Fetching (App.js)
```javascript
useEffect(() => {
  // Fetch data when component loads
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setEmployees(data));
}, []);
```

### 2. Search Filtering (App.js)
```javascript
useEffect(() => {
  // Filter employees based on search term
  const results = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredEmployees(results);
}, [searchTerm, employees]);
```

### 3. Dynamic Rendering (App.js)
```javascript
{filteredEmployees.map(employee => (
  <EmployeeCard key={employee.id} employee={employee} />
))}
```

### 4. Reusable Component (EmployeeCard.js)
```javascript
function EmployeeCard({ employee }) {
  const { id, name, email, phone, website, company } = employee;
  // Render card with employee data
}
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px (Multi-column grid)
- **Tablet**: 481px - 768px (2-column grid)
- **Mobile**: ≤ 480px (Single column)

## 🖨️ Print Functionality

Click "Print All Cards" button to print all visible employee cards. The print layout is optimized with:
- Clean white background
- No search bar or buttons
- Proper page breaks
- Professional formatting

## ⬇️ Download Functionality

Each employee card has a "Download Card" button that:
- Creates a text file with employee information
- Automatically downloads to your computer
- Filename format: `Employee_Name_card.txt`

## 🎨 Styling Features

- Gradient backgrounds
- Card hover effects
- Smooth animations
- Professional color scheme
- Clean typography
- Responsive grid layout

## 📚 Learning Outcomes

This project demonstrates:
- React Hooks (useState, useEffect)
- API integration and async/await
- Component-based architecture
- Props and data passing
- Array methods (.map, .filter)
- Object destructuring
- Event handling
- Responsive CSS Grid
- Print media queries
- File download functionality

## 🔧 Technologies Used

- React 18
- JavaScript ES6+
- CSS3 (Grid, Flexbox)
- JSONPlaceholder API

## 📝 Code Comments

All code includes detailed comments explaining:
- What each section does
- Why certain approaches were used
- How React Hooks work
- Complex logic explanations

## 🎓 Assignment Requirements Met

✅ API Integration with fetch
✅ useState for data, loading, and error states
✅ useEffect for API calls
✅ Destructuring for data extraction
✅ .map() for dynamic rendering
✅ Reusable EmployeeCard component
✅ Props for data passing
✅ Search by name and email
✅ Professional card design
✅ Responsive layout
✅ Print functionality
✅ Download functionality
✅ Clean folder structure
✅ Code comments

## 🚀 Future Enhancements (Optional)

- Add sorting by name or company
- Implement pagination
- Add loading skeleton cards
- Export as PDF or image
- Add dark mode toggle
- Include employee avatars

---

**Built with ❤️ for React learning**
