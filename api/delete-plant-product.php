<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

include 'db_config.php';

$response = array(
    'success' => false,
    'message' => ''
);

if (!isset($_POST['product_id'])) {
    $response['message'] = 'Product ID is required';
    echo json_encode($response);
    exit;
}

$product_id = $_POST['product_id'];

try {
    // First, get the image filenames
    $select_query = "SELECT image_1, image_2, image_3, image_4, 
                    image_5, image_6, image_7, image_8 
                    FROM plant_access_ad_sale 
                    WHERE plant_access_ad_sale_id = ?";
    
    $stmt = $conn->prepare($select_query);
    $stmt->bind_param("i", $product_id);
    $stmt->execute();
    $result = $stmt->get_result();
    $product = $result->fetch_assoc();

    // Delete the product
    $delete_query = "DELETE FROM plant_access_ad_sale 
                    WHERE plant_access_ad_sale_id = ?";
    $stmt = $conn->prepare($delete_query);
    $stmt->bind_param("i", $product_id);
    
    if ($stmt->execute()) {
        // Delete associated images
        $upload_dir = "../uploads/plant-accessories/";
        for ($i = 1; $i <= 8; $i++) {
            $image_field = "image_" . $i;
            if (!empty($product[$image_field])) {
                $image_path = $upload_dir . $product[$image_field];
                if (file_exists($image_path)) {
                    unlink($image_path);
                }
            }
        }
        
        $response['success'] = true;
        $response['message'] = 'Product deleted successfully';
    } else {
        $response['message'] = 'Failed to delete product';
    }
} catch (Exception $e) {
    $response['message'] = 'Error: ' . $e->getMessage();
}

echo json_encode($response);
$conn->close();
?> 