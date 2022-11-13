import React, { useEffect } from "react";
import { Text, View, Image } from "react-native";

export default function ListingDetails({ route, navigation }) {
  const {  image, title, price, category, description  } = route.params ?? {};
  useEffect(() => navigation.setOptions({ title }), []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {title && <Text>{title}</Text>}
      {price && <Text>{price}</Text>}
      {category && <Text>{category}</Text>}
      {description && <Text>{description}</Text>}
      {image && (
        <Image
          accessibilityIgnoresInvertColors={true}
          source={{ uri: image }}
          resizeMode="cover"
          style={{ height: 200, width: 200, alignSelf: "center" }}
        />
      )}
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
}
