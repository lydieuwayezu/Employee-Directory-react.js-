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

  // Handle search functionality
  // This function runs every time the user types in the search box
  useEffect(() => {
    // Filter employees based on search term
    const results = employees.filter((employee) => {
      // Convert search term and employee data to lowercase for case-insensitive search
      const searchLower = searchTerm.toLowerCase();
      const nameMatch = employee.name.toLowerCase().includes(searchLower);
      const emailMatch = employee.email.toLowerCase().includes(searchLower);
      
      // Return true if name OR email matches
      return nameMatch || emailMatch;
    });
    
    setFilteredEmployees(results);
  }, [searchTerm, employees]); // Runs when searchTerm or employees change

  // Function to handle printing
  const handlePrint = () => {
    window.print(); // Browser's built-in print function
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
        <h1>Employee Directory</h1>
        <p>Total Employees: {filteredEmployees.length}</p>
      </header>

      {/* Search and Actions Section */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input
          className="search-input"
        />
        <button onClick={handlePrint} className="print-button">
          🖨️ Print All Cards
        </button>
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
