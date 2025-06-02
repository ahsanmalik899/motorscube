<?php
// Include database configuration
include 'db_config.php';

// Set CORS headers
header('Access-Control-Allow-Origin: http://localhost:8100');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Set content type to JSON
header('Content-Type: application/json');

// Initialize response array
$response = [];

try {
    // Get form data
    $car_item_name = $_POST['car_item_name'] ?? '';
    $car_condition = $_POST['car_condition'] ?? '';
    $car_location = $_POST['car_location'] ?? '';
    $car_category = $_POST['car_category'] ?? ''; // This will be the ID
    $car_sub_category = $_POST['car_sub_category'] ?? ''; // This will be the ID
    $car_accessories_price = $_POST['car_accessories_price'] ?? 0;
    $car_make = $_POST['car_make'] ?? '';
    $car_model = $_POST['car_model'] ?? '';
    $car_version = $_POST['car_version'] ?? '';
    $car_description = $_POST['car_description'] ?? '';
    $user_type = $_POST['userType'] ?? '';
    $car_ad_normal_feature = 'General';
    $user_id = $_POST['userId'] ?? 0;
    $store_id = $_POST['store_id'] ?? 0;
    $post_status = $_POST['post_status'] ?? 'active';
    $ad_for = 'Car Accessory';

    // Create uploads directory if it doesn't exist
    $uploadDir = __DIR__ . '/uploads/car_accessories/';
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    // Initialize image fields array
    $imageFields = array_fill(0, 8, '');
    $uploadedFiles = [];

    // Process each image field
    for ($i = 1; $i <= 8; $i++) {
        $fileKey = 'caritem_image' . $i;
        
        if (isset($_FILES[$fileKey]) && $_FILES[$fileKey]['error'] === UPLOAD_ERR_OK) {
            $file = $_FILES[$fileKey];
            
            // Validate file type
            $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
            if (!in_array($file['type'], $allowedTypes)) {
                throw new Exception("Invalid file type for image $i. Only JPEG, PNG and GIF are allowed.");
            }

            $fileName = uniqid() . '_' . basename($file['name']);
            $targetPath = $uploadDir . $fileName;
            
            if (move_uploaded_file($file['tmp_name'], $targetPath)) {
                $imageFields[$i-1] = $fileName;
                $uploadedFiles[] = [
                    'original_name' => $file['name'],
                    'saved_name' => $fileName,
                    'path' => $targetPath
                ];
            }
        }
    }

    // Store image values in variables
    $img1 = $imageFields[0] ?: '';
    $img2 = $imageFields[1] ?: '';
    $img3 = $imageFields[2] ?: '';
    $img4 = $imageFields[3] ?: '';
    $img5 = $imageFields[4] ?: '';
    $img6 = $imageFields[5] ?: '';
    $img7 = $imageFields[6] ?: '';
    $img8 = $imageFields[7] ?: '';

    // Prepare SQL statement
    $sql = "INSERT INTO car_ad_accessories (
        car_item_name, 
        car_condition, 
        car_location, 
        car_category, 
        car_sub_catagory,
        car_accessories_price, 
        car_make, 
        car_model, 
        car_version, 
        car_description, 
        car_ad_privateortrade,
        car_ad_normal_feature, 
        user_id, 
        store_id,
        post_status,
        ad_for,
        caritem_image1,
        caritem_image2,
        caritem_image3,
        caritem_image4,
        caritem_image5,
        caritem_image6,
        caritem_image7,
        caritem_image8,
        item_ad_postdate,
        post_created_date,
        post_updated_date
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), NOW())";

    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        throw new Exception("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param("sssssdssssssiissssssssss", 
        $car_item_name,
        $car_condition,
        $car_location,
        $car_category,
        $car_sub_category,
        $car_accessories_price,
        $car_make,
        $car_model,
        $car_version,
        $car_description,
        $user_type,
        $car_ad_normal_feature,
        $user_id,
        $store_id,
        $post_status,
        $ad_for,
        $img1,
        $img2,
        $img3,
        $img4,
        $img5,
        $img6,
        $img7,
        $img8
    );

    if (!$stmt->execute()) {
        throw new Exception("Execute failed: " . $stmt->error);
    }

    $accessory_id = $conn->insert_id;
    $stmt->close();

    // Return success response
    echo json_encode([
        'success' => true,
        'accessory_id' => $accessory_id,
        'uploaded_files' => $uploadedFiles
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
} 