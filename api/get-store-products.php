<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

include 'db_config.php';

// Initialize response array
$response = array(
    'success' => false,
    'message' => '',
    'products' => array()
);

// Check if store_id is provided
if (!isset($_POST['store_id'])) {
    $response['message'] = 'Store ID is required';
    echo json_encode($response);
    exit;
}

$store_id = $_POST['store_id'];

try {
    // Initialize products array
    $all_products = array();

    // 1. Fetch Car Products
    $car_query = "SELECT 
        car_ad_accessories_id,
        car_item_name,
        car_condition,
        car_location,
        car_category,
        car_sub_catagory,
        car_accessories_price as price,
        car_make,
        car_model,
        car_version,
        car_description as description,
        car_ad_privateortrade,
        caritem_image1 as image_1,
        post_status,
        'Car Accessories' as ad_for,
        post_created_date as created_date,
        user_id,
        store_id
        FROM car_ad_accessories 
        WHERE store_id = ?";

    $stmt = $conn->prepare($car_query);
    $stmt->bind_param("s", $store_id);
    $stmt->execute();
    $car_result = $stmt->get_result();
    
    while ($row = $car_result->fetch_assoc()) {
        $all_products[] = $row;
    }

    // 2. Fetch Bike Products
    $bike_query = "SELECT 
        bike_ad_accessories_id,
        bikeitem_name,
        bike_condition,
        bike_ad_location,
        bikeitem_category,
        bikeitem_subcategory,
        bikeitem_price as price,
        bike_ad_make,
        bike_ad_model,
        bike_version,
        bike_description as description,
        bike_ad_privateortrade,
        bikeitem_image1 as image_1,
        post_status,
        'Bike Accessory' as ad_for,
        post_created_date as created_date,
        user_id,
        store_id
        FROM bike_ad_accessories 
        WHERE store_id = ?";

    $stmt = $conn->prepare($bike_query);
    $stmt->bind_param("s", $store_id);
    $stmt->execute();
    $bike_result = $stmt->get_result();
    
    while ($row = $bike_result->fetch_assoc()) {
        $all_products[] = $row;
    }

    // 3. Fetch Commercial Vehicle Products
    $commercial_query = "SELECT 
        commercial_vehicle_access_ad_sale_id,
        item_name,
        item_for,
        vehicle_condition,
        vehicle_city,
        category,
        sub_category,
        vehicle_price as price,
        make,
        model,
        version,
        description,
        image_1,
        post_status,
        'Commercial Accessory' as ad_for,
        post_created_date as created_date,
        user_id,
        store_id
        FROM commercial_vehicle_access_ad_sale 
        WHERE store_id = ?";

    $stmt = $conn->prepare($commercial_query);
    $stmt->bind_param("s", $store_id);
    $stmt->execute();
    $commercial_result = $stmt->get_result();
    
    while ($row = $commercial_result->fetch_assoc()) {
        $all_products[] = $row;
    }

    // 4. Fetch Machinery Products
    $machinery_query = "SELECT 
        machinery_access_ad_sale_id,
        access_name,
        access_type,
        access_other_type,
        access_subtype,
        access_category,
        access_condition,
        access_hourused,
        access_weight,
        access_price as price,
        access_city,
        access_country,
        access_make,
        access_model,
        access_version,
        access_description as description,
        access_img1 as image_1,
        post_status,
        'Machinery Accessory' as ad_for,
        post_created_date as created_date,
        user_id,
        store_id
        FROM machinery_access_ad_sale 
        WHERE store_id = ?";

    $stmt = $conn->prepare($machinery_query);
    $stmt->bind_param("s", $store_id);
    $stmt->execute();
    $machinery_result = $stmt->get_result();
    
    while ($row = $machinery_result->fetch_assoc()) {
        $all_products[] = $row;
    }

    // 5. Fetch Plant Products
    $plant_query = "SELECT 
        plant_access_ad_sale_id,
        item_name,
        item_condition,
        item_for,
        item_other_sector,
        sub_sector,
        category,
        hour_used,
        gross_weight,
        price,
        city,
        country,
        description,
        image_1,
        post_status,
        'Plant Accessory' as ad_for,
        created_date,
        user_id,
        store_id
        FROM plant_access_ad_sale 
        WHERE store_id = ?";

    $stmt = $conn->prepare($plant_query);
    $stmt->bind_param("s", $store_id);
    $stmt->execute();
    $plant_result = $stmt->get_result();
    
    while ($row = $plant_result->fetch_assoc()) {
        $all_products[] = $row;
    }

    // Sort all products by created_date
    usort($all_products, function($a, $b) {
        return strtotime($b['created_date']) - strtotime($a['created_date']);
    });

    $response['success'] = true;
    $response['products'] = $all_products;
    $response['message'] = 'Products fetched successfully';

} catch (Exception $e) {
    $response['message'] = 'Error: ' . $e->getMessage();
}

echo json_encode($response);
$conn->close();
?> 