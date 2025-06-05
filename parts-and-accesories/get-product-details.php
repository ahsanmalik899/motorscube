<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Error handling
error_reporting(E_ALL);
ini_set('display_errors', 0); // Disable error display in output
ini_set('log_errors', 1); // Enable error logging
ini_set('error_log', __DIR__ . '/error.log'); // Set error log file

// Include database configuration
include 'db_config.php';

// Function to send JSON response
function sendJsonResponse($success, $message, $data = null) {
    $response = [
        'success' => $success,
        'message' => $message
    ];
    if ($data !== null) {
        $response['product'] = $data;
    }
    echo json_encode($response);
    exit;
}

// Get and validate parameters
$id = $_GET['id'] ?? '';
$type = $_GET['type'] ?? '';

if (empty($id) || empty($type)) {
    sendJsonResponse(false, 'Missing required parameters');
}

// Get database connection
$conn = getDbConnection();
if (!$conn) {
    sendJsonResponse(false, 'Database connection failed');
}

try {
    // Prepare query based on type
    $query = '';
    $params = [':id' => $id];

    switch ($type) {
        case 'car':
            $query = "SELECT * FROM car_ad_accessories WHERE car_ad_accessories_id = :id";
            break;
        case 'bike':
            $query = "SELECT * FROM bike_ad_accessories WHERE bike_ad_accessories_id = :id";
            break;
        case 'commercial':
            $query = "SELECT * FROM commercial_vehicle_access_ad_sale WHERE commercial_vehicle_access_ad_sale_id = :id";
            break;
        case 'machinery':
            $query = "SELECT * FROM machinery_access_ad_sale WHERE machinery_access_ad_sale_id = :id";
            break;
        case 'plant':
            $query = "SELECT * FROM plant_access_ad_sale WHERE plant_access_ad_sale_id = :id";
            break;
        default:
            sendJsonResponse(false, 'Invalid product type');
    }

    // Execute query
    $stmt = $conn->prepare($query);
    $stmt->execute($params);
    $product = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($product) {
        sendJsonResponse(true, 'Product found', $product);
    } else {
        sendJsonResponse(false, 'Product not found');
    }

} catch(PDOException $e) {
    error_log("Database Error: " . $e->getMessage());
    sendJsonResponse(false, 'Database error occurred');
}
?> 