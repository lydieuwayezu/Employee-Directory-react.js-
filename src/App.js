import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeCard from './components/EmployeeCard';

function App() {
  // State management using React Hooks
  const [employees, setEmployees] = useState([]); // Store all employee data
  const [filteredEmployees, setFilteredEmployees] = useState([]); // Store filtered results
  const [searchTerm, setSearchTerm] = useState(''); // Store search input
  const [loading, setLoading] = useState(true); // Track loading status
  const [error, setError] = useState(null); // Track any errors
  const [sortBy, setSortBy] = useState('name'); // Track sorting option

  // useEffect Hook - Runs when component first loads
  // This is where we fetch data from the API
  useEffect(() => {
    // Define async function to fetch employee data
    const fetchEmployees = async () => {
      try {
        setLoading(true); // Show loading state
        
        // Fetch data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Check if response is successful
        if (!response.ok) {
          throw new Error('Failed to fetch employee data');
        }
        
        // Convert response to JSON format
        const data = await response.json();
        
        // Update state with fetched data
        setEmployees(data);
        setFilteredEmployees(data); // Initially show all employees
        setLoading(false); // Hide loading state
      } catch (err) {
        // Handle any errors that occur during fetch
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEmployees(); // Call the function
  }, []); // Empty array means this runs only once when component mounts

  // Handle search and sorting functionality
  // This function runs every time the user types in the search box or changes sort option
  useEffect(() => {
    // Filter employees based on search term
    let results = employees.filter((employee) => {
      // Convert search term and employee data to lowercase for case-insensitive search
      const searchLower = searchTerm.toLowerCase();
      const nameMatch = employee.name.toLowerCase().includes(searchLower);
      const emailMatch = employee.email.toLowerCase().includes(searchLower);
      
      // Return true if name OR email matches
      return nameMatch || emailMatch;
    });
    
    // Sort the filtered results based on selected option
    results = results.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name); // Sort alphabetically by name
      } else if (sortBy === 'email') {
        return a.email.localeCompare(b.email); // Sort alphabetically by email
      } else if (sortBy === 'company') {
        return a.company.name.localeCompare(b.company.name); // Sort by company name
      }
      return 0;
    });
    
    setFilteredEmployees(results);
  }, [searchTerm, employees, sortBy]); // Runs when searchTerm, employees, or sortBy change

  // Function to handle printing
  const handlePrint = () => {
    window.print(); // Browser's built-in print function
  };

  // Function to clear search
  const handleClearSearch = () => {
    setSearchTerm(''); // Reset search term to empty
  };

  // Show loading message while fetching data
  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <h2>Loading employees...</h2>
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  // Show error message if something went wrong
  if (error) {
    return (
      <div className="container">
        <div className="error">
          <h2>Error: {error}</h2>
          <p>Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1>🏢 Employee Directory</h1>
        <div className="stats-container">
          <div className="stat-badge">
            <span className="stat-number">{employees.length}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat-badge active">
            <span className="stat-number">{filteredEmployees.length}</span>
            <span className="stat-label">Showing</span>
          </div>
        </div>
      </header>

      {/* Search and Actions Section */}
      <div className="controls-wrapper">
        <div className="search-container">
          <input
            type="text"
            placeholder="🔍 Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input
            className="search-input"
          />
          {searchTerm && (
            <button onClick={handleClearSearch} className="clear-button">
              ✕
            </button>
          )}
        </div>
        
        <div className="actions-container">
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="name">Sort by Name</option>
            <option value="email">Sort by Email</option>
            <option value="company">Sort by Company</option>
          </select>
          
          <button onClick={handlePrint} className="print-button">
            🖨️ Print
          </button>
        </div>
      </div>

      {/* Employee Cards Grid */}
      <div className="cards-container">
        {/* Use .map() to render each employee card dynamically */}
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            // Pass employee data to EmployeeCard component via props
            <EmployeeCard key={employee.id} employee={employee} />
          ))
        ) : (
          // Show message when no results found
          <div className="no-results">
            <h3>No employees found</h3>
            <p>Try a different search term</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
