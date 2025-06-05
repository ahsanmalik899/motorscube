<?php
// Database configuration
$host = 'localhost';
$dbname = 'motorscube';
$username = 'root';
$password = '';

// Error handling
error_reporting(E_ALL);
ini_set('display_errors', 0); // Disable error display in output
ini_set('log_errors', 1); // Enable error logging
ini_set('error_log', __DIR__ . '/error.log'); // Set error log file

// Function to handle database connection
function getDbConnection() {
    global $host, $dbname, $username, $password;
    
    try {
        $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conn;
    } catch(PDOException $e) {
        error_log("Database Connection Error: " . $e->getMessage());
        return null;
    }
}
?> 