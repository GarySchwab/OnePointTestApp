import { StyleSheet } from "react-native";

/**
 * HomeScreenStyles.js
 * Ce fichier contient toutes les propriétés de style utilisées dans la vue HomeScreen.
 */

export default StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "#222"
  },
  image_container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 300,
    height: 100,
  },
  content_container: {
    flex: 7,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5
  },
  presentation_container: {
    alignItems: "center"
  },
  headline: {
    color: "white",
    fontSize: 28,
    marginBottom: 20
  },
  presentation_text: {
    color: "white",
    fontSize: 22
  },
  button_container: {
    backgroundColor: "#0091CD",
    width: 200,
    height: 40,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button_text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  arrow_icon: {
    marginLeft: 5,
    height: 20,
    width: 20,
  },
  version_text: {
    color: "white",
    textAlign: "center"
  }
});
