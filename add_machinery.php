<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

include 'db_config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Get form data
        $user_id = $_POST['user_id'] ?? '';
        $store_id = $_POST['store_id'] ?? '';
        $access_name = $_POST['access_name'] ?? '';
        $access_type = $_POST['access_type'] ?? '';
        $access_other_type = $_POST['access_other_type'] ?? '';
        $access_subtype = $_POST['access_subtype'] ?? '';
        $access_category = $_POST['access_category'] ?? '';
        $access_condition = $_POST['access_condition'] ?? '';
        $access_hourused = $_POST['access_hourused'] ?? '';
        $access_weight = $_POST['access_weight'] ?? '';
        $access_price = $_POST['access_price'] ?? '';
        $access_city = $_POST['access_city'] ?? '';
        $access_country = $_POST['access_country'] ?? '';
        $access_make = $_POST['access_make'] ?? '';
        $access_model = $_POST['access_model'] ?? '';
        $access_version = $_POST['access_version'] ?? '';
        $access_description = $_POST['access_description'] ?? '';
        $access_privateortrade = $_POST['access_privateortrade'] ?? '';
        $access_featuretype = $_POST['access_featuretype'] ?? '';
        $ad_for = $_POST['ad_for'] ?? '';
        $post_status = $_POST['post_status'] ?? '';
        $post_created_date = $_POST['post_created_date'] ?? '';
        $post_updated_date = $_POST['post_updated_date'] ?? '';

        // Prepare SQL statement
        $sql = "INSERT INTO machinery_access_ad_sale (
            user_id, store_id, access_name, access_type, access_other_type,
            access_subtype, access_category, access_condition, access_hourused,
            access_weight, access_price, access_city, access_country,
            access_make, access_model, access_version, access_description,
            access_privateortrade, access_featuretype, ad_for, post_status,
            post_created_date, post_updated_date
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param(
            "ssssssssssssssssssssss",
            $user_id, $store_id, $access_name, $access_type, $access_other_type,
            $access_subtype, $access_category, $access_condition, $access_hourused,
            $access_weight, $access_price, $access_city, $access_country,
            $access_make, $access_model, $access_version, $access_description,
            $access_privateortrade, $access_featuretype, $ad_for, $post_status,
            $post_created_date, $post_updated_date
        );

        // Execute the statement
        if ($stmt->execute()) {
            $machinery_id = $conn->insert_id;
            $uploaded_files = [];

            // Handle image uploads
            for ($i = 1; $i <= 8; $i++) {
                $image_key = "access_img" . $i;
                if (isset($_FILES[$image_key]) && $_FILES[$image_key]['error'] === UPLOAD_ERR_OK) {
                    $file = $_FILES[$image_key];
                    $file_name = $file['name'];
                    $file_tmp = $file['tmp_name'];
                    $file_size = $file['size'];
                    $file_error = $file['error'];

                    // Generate unique filename
                    $file_ext = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
                    $new_file_name = uniqid('machinery_') . '.' . $file_ext;
                    $upload_path = 'uploads/machinery/' . $new_file_name;

                    // Create directory if it doesn't exist
                    if (!file_exists('uploads/machinery')) {
                        mkdir('uploads/machinery', 0777, true);
                    }

                    // Move uploaded file
                    if (move_uploaded_file($file_tmp, $upload_path)) {
                        // Update database with image path
                        $image_column = "access_img" . $i;
                        $update_sql = "UPDATE machinery_access_ad_sale SET $image_column = ? WHERE machinery_access_ad_sale_id = ?";
                        $update_stmt = $conn->prepare($update_sql);
                        $update_stmt->bind_param("si", $upload_path, $machinery_id);
                        $update_stmt->execute();
                        $uploaded_files[] = $upload_path;
                    }
                }
            }

            echo json_encode([
                'success' => true,
                'message' => 'Machinery added successfully',
                'machinery_id' => $machinery_id,
                'uploaded_files' => $uploaded_files
            ]);
        } else {
            throw new Exception("Error executing statement: " . $stmt->error);
        }

    } catch (Exception $e) {
        echo json_encode([
            'success' => false,
            'message' => 'Error: ' . $e->getMessage()
        ]);
    }
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method'
    ]);
}

$conn->close();
?> 