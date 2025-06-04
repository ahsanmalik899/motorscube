<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

require_once 'config.php';

try {
    // Get form data
    $item_name = $_POST['item_name'] ?? '';
    $item_for = $_POST['item_for'] ?? 'sale';
    $vehicle_condition = $_POST['vehicle_condition'] ?? '';
    $vehicle_city = $_POST['vehicle_city'] ?? '';
    $category = $_POST['category'] ?? '';
    $sub_category = $_POST['sub_category'] ?? '';
    $vehicle_price = $_POST['vehicle_price'] ?? 0;
    $make = $_POST['make'] ?? '';
    $model = $_POST['model'] ?? '';
    $version = $_POST['version'] ?? '';
    $description = $_POST['description'] ?? '';
    $vehicle_private_trader = $_POST['vehicle_private_trader'] ?? 'no';
    $vehicle_feature_type = $_POST['vehicle_feature_type'] ?? 'regular';
    $user_id = $_POST['user_id'] ?? '';
    $store_id = $_POST['store_id'] ?? null;
    $post_status = $_POST['post_status'] ?? 'Pending';
    $ad_for = $_POST['ad_for'] ?? 'Commercial Vehicle';

    // Validate required fields
    $required_fields = [
        'item_name', 'vehicle_condition', 'vehicle_city', 'category',
        'vehicle_price', 'make', 'model', 'version', 'description',
        'vehicle_private_trader', 'vehicle_feature_type', 'user_id'
    ];

    foreach ($required_fields as $field) {
        if (empty($_POST[$field])) {
            throw new Exception("$field is required");
        }
    }

    // Handle image uploads
    $upload_dir = '../uploads/commercial_vehicles/';
    if (!file_exists($upload_dir)) {
        mkdir($upload_dir, 0777, true);
    }

    $image_fields = [];
    for ($i = 1; $i <= 8; $i++) {
        $image_key = "image_$i";
        if (isset($_FILES[$image_key]) && $_FILES[$image_key]['error'] === UPLOAD_ERR_OK) {
            $file = $_FILES[$image_key];
            $file_type = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
            
            // Validate file type
            $allowed_types = ['jpg', 'jpeg', 'png', 'gif'];
            if (!in_array($file_type, $allowed_types)) {
                throw new Exception("Invalid file type for image $i. Only JPG, JPEG, PNG & GIF files are allowed.");
            }

            // Generate unique filename
            $filename = uniqid() . '_' . basename($file['name']);
            $target_path = $upload_dir . $filename;

            if (move_uploaded_file($file['tmp_name'], $target_path)) {
                $image_fields[$image_key] = $filename;
            } else {
                throw new Exception("Failed to upload image $i");
            }
        }
    }

    // Prepare SQL statement
    $sql = "INSERT INTO commercial_vehicle_access_ad_sale (
        item_name, item_for, vehicle_condition, vehicle_city, category,
        sub_category, vehicle_price, make, model, version, description,
        vehicle_private_trader, vehicle_feature_type, user_id, store_id,
        post_status, ad_for, post_created_date, post_updated_date";

    // Add image fields if any images were uploaded
    if (!empty($image_fields)) {
        $sql .= ", " . implode(", ", array_keys($image_fields));
    }

    $sql .= ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())";

    // Prepare values array
    $values = [
        $item_name, $item_for, $vehicle_condition, $vehicle_city, $category,
        $sub_category, $vehicle_price, $make, $model, $version, $description,
        $vehicle_private_trader, $vehicle_feature_type, $user_id, $store_id,
        $post_status, $ad_for
    ];

    // Add image values if any images were uploaded
    if (!empty($image_fields)) {
        $values = array_merge($values, array_values($image_fields));
    }

    // Execute the query
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        throw new Exception("Failed to prepare statement: " . $conn->error);
    }

    $stmt->bind_param(str_repeat('s', count($values)), ...$values);

    if ($stmt->execute()) {
        $vehicle_id = $conn->insert_id;
        echo json_encode([
            'success' => true,
            'message' => 'Commercial vehicle added successfully',
            'vehicle_id' => $vehicle_id
        ]);
    } else {
        throw new Exception("Failed to add commercial vehicle: " . $stmt->error);
    }

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}

$conn->close();
?> 