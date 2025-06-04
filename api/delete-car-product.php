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
    $select_query = "SELECT caritem_image1, caritem_image2, caritem_image3, caritem_image4, 
                    caritem_image5, caritem_image6, caritem_image7, caritem_image8 
                    FROM car_ad_accessories WHERE car_ad_accessories_id = ?";
    
    $stmt = $conn->prepare($select_query);
    $stmt->bind_param("i", $product_id);
    $stmt->execute();
    $result = $stmt->get_result();
    $product = $result->fetch_assoc();

    // Delete the product
    $delete_query = "DELETE FROM car_ad_accessories WHERE car_ad_accessories_id = ?";
    $stmt = $conn->prepare($delete_query);
    $stmt->bind_param("i", $product_id);
    
    if ($stmt->execute()) {
        // Delete associated images
        $upload_dir = "../uploads/car-accessories/";
        for ($i = 1; $i <= 8; $i++) {
            $image_field = "caritem_image" . $i;
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