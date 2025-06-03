<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Get form data
        $user_id = $_POST['user_id'] ?? '';
        $store_id = $_POST['store_id'] ?? '';
        $bikeitem_name = $_POST['bikeitem_name'] ?? '';
        $bike_condition = $_POST['bike_condition'] ?? '';
        $bike_ad_location = $_POST['bike_ad_location'] ?? '';
        $bikeitem_category = $_POST['bikeitem_category'] ?? '';
        $bikeitem_subcategory = $_POST['bikeitem_subcategory'] ?? '';
        $bikeitem_price = $_POST['bikeitem_price'] ?? '';
        $bike_ad_make = $_POST['bike_ad_make'] ?? '';
        $bike_ad_model = $_POST['bike_ad_model'] ?? '';
        $bike_version = $_POST['bike_version'] ?? '';
        $bike_description = $_POST['bike_description'] ?? '';
        $bike_ad_privateortrade = $_POST['bike_ad_privateortrade'] ?? 'private';
        $post_status = $_POST['post_status'] ?? 'Pending';
        $ad_for = $_POST['ad_for'] ?? 'Bike Accessory';
        $post_created_date = date('Y-m-d H:i:s');
        $post_updated_date = date('Y-m-d H:i:s');

        // Validate required fields
        if (empty($user_id) || empty($bikeitem_name) || empty($bike_condition) || 
            empty($bike_ad_location) || empty($bikeitem_category) || empty($bikeitem_price)) {
            throw new Exception('Required fields are missing');
        }

        // Handle image uploads
        $uploaded_files = [];
        $image_fields = [
            'bikeitem_image1', 'bikeitem_image2', 'bikeitem_image3', 'bikeitem_image4',
            'bikeitem_image5', 'bikeitem_image6', 'bikeitem_image7', 'bikeitem_image8'
        ];

        foreach ($image_fields as $field) {
            if (isset($_FILES[$field]) && $_FILES[$field]['error'] === UPLOAD_ERR_OK) {
                $file = $_FILES[$field];
                $file_name = time() . '_' . basename($file['name']);
                $target_path = 'uploads/bike_accessories/' . $file_name;
                
                if (move_uploaded_file($file['tmp_name'], $target_path)) {
                    $uploaded_files[] = $target_path;
                }
            }
        }

        // Prepare SQL statement
        $sql = "INSERT INTO bike_ad_accessories (
            user_id, store_id, bikeitem_name, bike_condition, bike_ad_location,
            bikeitem_category, bikeitem_subcategory, bikeitem_price, bike_ad_make,
            bike_ad_model, bike_version, bike_description, bike_ad_privateortrade,
            bikeitem_image1, bikeitem_image2, bikeitem_image3, bikeitem_image4,
            bikeitem_image5, bikeitem_image6, bikeitem_image7, bikeitem_image8,
            post_status, ad_for, post_created_date, post_updated_date
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $stmt = $conn->prepare($sql);
        
        // Bind parameters
        $stmt->bind_param("sssssssssssssssssssssssss",
            $user_id, $store_id, $bikeitem_name, $bike_condition, $bike_ad_location,
            $bikeitem_category, $bikeitem_subcategory, $bikeitem_price, $bike_ad_make,
            $bike_ad_model, $bike_version, $bike_description, $bike_ad_privateortrade,
            $uploaded_files[0] ?? null, $uploaded_files[1] ?? null, $uploaded_files[2] ?? null,
            $uploaded_files[3] ?? null, $uploaded_files[4] ?? null, $uploaded_files[5] ?? null,
            $uploaded_files[6] ?? null, $uploaded_files[7] ?? null, $post_status, $ad_for,
            $post_created_date, $post_updated_date
        );

        if ($stmt->execute()) {
            $bike_ad_accessories_id = $stmt->insert_id;
            echo json_encode([
                'success' => true,
                'message' => 'Bike accessory added successfully',
                'accessory_id' => $bike_ad_accessories_id,
                'uploaded_files' => $uploaded_files
            ]);
        } else {
            throw new Exception('Failed to add bike accessory');
        }

    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => $e->getMessage()
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed'
    ]);
}
?> 