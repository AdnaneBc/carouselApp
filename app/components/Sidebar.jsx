import { PRODUCTS } from "@/assets/constants/data";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const Sidebar = ({ onCategorySelect }) => {
  return (
    <View style={styles.sidebar}>
      {PRODUCTS.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.tab, { backgroundColor: tab.color }]}
          onPress={() => onCategorySelect(tab.id)}
        >
          <Text style={styles.tabText}>{tab.categorie}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 80, // Width of the sidebar
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  tab: {
    width: "100%", // Full width of sidebar
    height: Dimensions.get("window").height * 0.2, // 20% of the screen height
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    writingDirection: "rtl", // Emulate vertical text direction
    transform: [{ rotate: "270deg" }], // Flip text to match vertical
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default Sidebar;
