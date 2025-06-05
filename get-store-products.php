    // --- 1. Car Accessories ---
    $car_query = "SELECT 
        car_ad_accessories_id,
        car_item_name,
        car_condition,
        car_location,
        car_category,
        car_sub_catagory,
        car_accessories_price AS price,
        car_make,
        car_model,
        car_version,
        car_description AS description,
        car_ad_privateortrade,
        caritem_image1 AS image_1,
        post_status,
        'Car Accessories' AS ad_for,
        car_ad_normal_feature AS ad_type,
        post_created_date AS created_date,
        user_id,
        store_id
        FROM car_ad_accessories 
        WHERE store_id = ?";

    $stmt = $conn->prepare($car_query);
    $stmt->bind_param("s", $store_id);
    $stmt->execute();
    $car_result = $stmt->get_result();

    while ($row = $car_result->fetch_assoc()) {
        $row = formatImagePath($row, 'image_1', $image_base_url);
        error_log("Car Product ad_type: " . ($row['ad_type'] ?? 'not set'));
        $all_products[] = $row;
    }

    // --- 2. Bike Accessories ---
    $bike_query = "SELECT 
        bike_ad_accessories_id,
        bikeitem_name,
        bike_condition,
        bike_ad_location,
        bikeitem_category,
        bikeitem_subcategory,
        bikeitem_price AS price,
        bike_ad_make,
        bike_ad_model,
        bike_version,
        bike_description AS description,
        bike_ad_privateortrade,
        bikeitem_image1 AS image_1,
        post_status,
        'Bike Accessory' AS ad_for,
        bike_ad_normal_feature AS ad_type,
        post_created_date AS created_date,
        user_id,
        store_id
        FROM bike_ad_accessories 
        WHERE store_id = ?";

    $stmt = $conn->prepare($bike_query);
    $stmt->bind_param("s", $store_id);
    $stmt->execute();
    $bike_result = $stmt->get_result();

    while ($row = $bike_result->fetch_assoc()) {
        $row = formatImagePath($row, 'image_1', $image_base_url);
        error_log("Bike Product ad_type: " . ($row['ad_type'] ?? 'not set'));
        $all_products[] = $row;
    }

    // --- 3. Commercial Vehicle Accessories ---
    $commercial_query = "SELECT 
        commercial_vehicle_access_ad_sale_id,
        item_name,
        item_for,
        vehicle_condition,
        vehicle_city,
        category,
        sub_category,
        vehicle_price AS price,
        make,
        model,
        version,
        description,
        image_1,
        post_status,
        'Commercial Accessory' AS ad_for,
        vehicle_feature_type AS ad_type,
        post_created_date AS created_date,
        user_id,
        store_id
        FROM commercial_vehicle_access_ad_sale 
        WHERE store_id = ?";

    $stmt = $conn->prepare($commercial_query);
    $stmt->bind_param("s", $store_id);
    $stmt->execute();
    $commercial_result = $stmt->get_result();

    while ($row = $commercial_result->fetch_assoc()) {
        $row = formatImagePath($row, 'image_1', $image_base_url);
        error_log("Commercial Product ad_type: " . ($row['ad_type'] ?? 'not set'));
        $all_products[] = $row;
    }

    // --- 4. Machinery Accessories ---
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
        access_price AS price,
        access_city,
        access_country,
        access_make,
        access_model,
        access_version,
        access_description AS description,
        access_img1 AS image_1,
        post_status,
        'Machinery Accessory' AS ad_for,
        access_featuretype AS ad_type,
        post_created_date AS created_date,
        user_id,
        store_id
        FROM machinery_access_ad_sale 
        WHERE store_id = ?";

    $stmt = $conn->prepare($machinery_query);
    $stmt->bind_param("s", $store_id);
    $stmt->execute();
    $machinery_result = $stmt->get_result();

    while ($row = $machinery_result->fetch_assoc()) {
        $row = formatImagePath($row, 'image_1', $image_base_url);
        error_log("Machinery Product ad_type: " . ($row['ad_type'] ?? 'not set'));
        $all_products[] = $row;
    }

    // --- 5. Plant Accessories ---
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
        'Plant Accessory' AS ad_for,
        ad_type,
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
        $row = formatImagePath($row, 'image_1', $image_base_url);
        error_log("Plant Product ad_type: " . ($row['ad_type'] ?? 'not set'));
        $all_products[] = $row;
    } 