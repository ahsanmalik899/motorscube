<?php
// Database configuration
define('DB_HOST', 'localhost');
define('DB_NAME', 'motorscube');
define('DB_USER', 'root');
define('DB_PASS', '');

// Error reporting for development
error_reporting(E_ALL);
ini_set('display_errors', 1);

try {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
    exit();
} 