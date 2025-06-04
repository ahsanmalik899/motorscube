<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

include 'db_config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Get form data
        $item_name = $_POST['item_name'] ?? '';
        $item_condition = $_POST['item_condition'] ?? '';
        $item_for = $_POST['item_for'] ?? '';
        $item_other_sector = $_POST['item_other_sector'] ?? '';
        $sub_sector = $_POST['sub_sector'] ?? '';
        $category = $_POST['category'] ?? '';
        $hour_used = $_POST['hour_used'] ?? 0;
        $gross_weight = $_POST['gross_weight'] ?? 0;
        $price = $_POST['price'] ?? 0;
        $description = $_POST['description'] ?? '';
        $city = $_POST['city'] ?? '';
        $country = $_POST['country'] ?? '';
        $seller_type = $_POST['seller_type'] ?? 'private';
        $ad_type = $_POST['ad_type'] ?? 'sale';
        $user_id = $_POST['user_id'] ?? '';
        $store_id = $_POST['store_id'] ?? '';
        $post_status = $_POST['post_status'] ?? 'Pending';
        $ad_for = $_POST['ad_for'] ?? 'plant';
        $created_date = date('Y-m-d H:i:s');
        $post_updated_date = date('Y-m-d H:i:s');

        // Prepare SQL statement
        $sql = "INSERT INTO plant_access_ad_sale (
            item_name, item_condition, item_for, item_other_sector, sub_sector,
            category, hour_used, gross_weight, price, description, city, country,
            seller_type, ad_type, user_id, store_id, post_status, ad_for,
            created_date, post_updated_date
        ) VALUES (
            ?, ?, ?, ?, ?,
            ?, ?, ?, ?, ?,
            ?, ?, ?, ?, ?,
            ?, ?, ?, ?, ?
        )";

        $stmt = $conn->prepare($sql);
        
        // Bind parameters
        $stmt->bind_param("ssssssddssssssssssss",
            $item_name, $item_condition, $item_for, $item_other_sector, $sub_sector,
            $category, $hour_used, $gross_weight, $price, $description,
            $city, $country, $seller_type, $ad_type, $user_id,
            $store_id, $post_status, $ad_for, $created_date, $post_updated_date
        );

        // Execute the statement
        $stmt->execute();
        $plant_access_ad_sale_id = $conn->insert_id;

        // Handle image uploads
        $uploaded_files = [];
        $upload_dir = '../uploads/plant-access/';
        
        // Create directory if it doesn't exist
        if (!file_exists($upload_dir)) {
            mkdir($upload_dir, 0777, true);
        }

        // Process up to 8 images
        for ($i = 1; $i <= 8; $i++) {
            $image_key = "image_$i";
            if (isset($_FILES[$image_key]) && $_FILES[$image_key]['error'] === UPLOAD_ERR_OK) {
                $file = $_FILES[$image_key];
                $file_extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
                $new_filename = $plant_access_ad_sale_id . '_' . $i . '_' . time() . '.' . $file_extension;
                $upload_path = $upload_dir . $new_filename;

                if (move_uploaded_file($file['tmp_name'], $upload_path)) {
                    $uploaded_files[] = $new_filename;
                    
                    // Update the corresponding image column in the database
                    $image_column = "image_$i";
                    $update_sql = "UPDATE plant_access_ad_sale SET $image_column = ? WHERE plant_access_ad_sale_id = ?";
                    $update_stmt = $conn->prepare($update_sql);
                    $update_stmt->bind_param("si", $new_filename, $plant_access_ad_sale_id);
                    $update_stmt->execute();
                }
            }
        }

        // Return success response
        echo json_encode([
            'success' => true,
            'message' => 'Plant access ad created successfully',
            'plant_access_ad_sale_id' => $plant_access_ad_sale_id,
            'uploaded_files' => $uploaded_files
        ]);

    } catch (Exception $e) {
        // Return error response
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Database error: ' . $e->getMessage()
        ]);
    }
} else {
    // Return error for non-POST requests
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed'
    ]);
}
?> 