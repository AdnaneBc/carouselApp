import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Modal,
  Button,
  PanResponder,
} from "react-native";
import Sidebar from "./components/Sidebar"; // Adjust the path if necessary
import { PRODUCTS } from "@/assets/constants/data";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [orientation, setOrientation] = useState("portrait");

  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get("window");
      setOrientation(width > height ? "landscape" : "portrait");
    };

    Dimensions.addEventListener("change", updateOrientation);

    // Initial check
    updateOrientation();

    return () => {
      Dimensions.removeEventListener("change", updateOrientation);
    };
  }, []);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedIndex(0); // Reset to the first image when a new category is selected
  };

  const handleCardPress = (index) => {
    setSelectedIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleNextImage = () => {
    const products =
      PRODUCTS.find((category) => category.id === selectedCategory)?.products ||
      [];
    if (selectedIndex < products.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) =>
      Math.abs(gestureState.dx) > Math.abs(gestureState.dy),
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > 50) {
        // Swipe Right
        handlePreviousImage();
      } else if (gestureState.dx < -50) {
        // Swipe Left
        handleNextImage();
      }
    },
  });

  const isLandscape = orientation === "landscape";
  const products =
    PRODUCTS.find((category) => category.id === selectedCategory)?.products ||
    [];

  return (
    <View style={styles.container}>
      <View style={styles.sidebarContainer}>
        <Sidebar
          onCategorySelect={handleCategorySelect}
          activeCategory={selectedCategory}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.heading}>
          {PRODUCTS.find((category) => category.id === selectedCategory)
            ?.categorie || "Select a Category"}
        </Text>
        <ScrollView contentContainerStyle={styles.cardContainer(isLandscape)}>
          {products.map((product, index) => (
            <TouchableOpacity
              key={product.id}
              style={styles.card(isLandscape)}
              onPress={() => handleCardPress(index)}
            >
              <Image source={product.imgUrl} style={styles.image} />
              <Text style={styles.productName}>{product.name}</Text>
            </TouchableOpacity>
          )) || (
            <Text style={styles.placeholder}>
              No products available. Please select a category.
            </Text>
          )}
        </ScrollView>
      </View>

      {/* Full-Screen Image Modal with Sliding */}
      {modalVisible && (
        <Modal visible={modalVisible} animationType="slide" transparent={false}>
          <View
            style={styles.modalContent}
            {...panResponder.panHandlers} // Attach PanResponder handlers here
          >
            <Image
              source={products[selectedIndex]?.imgUrl}
              style={styles.fullImage}
            />
            <View style={styles.backButtonContainer}>
              <Button title="Back" onPress={closeModal} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  sidebarContainer: {
    width: 80,
    backgroundColor: "#1f2937",
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9fafb",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  cardContainer: (isLandscape) => ({
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  }),
  card: (isLandscape) => ({
    width: isLandscape ? "23%" : "30%",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  }),
  image: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  placeholder: {
    fontSize: 18,
    color: "#9ca3af",
    textAlign: "center",
    marginTop: 20,
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  fullImage: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  backButtonContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },
});

export default App;
