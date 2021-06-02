import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.image_container}>
          <Image
            style={styles.logo}
            source={require("../Images/onepoint-logo-black.png")}
          />
        </View>
        <View style={styles.content_container}>
          <View style={styles.presentation_container}>
            <Text style={styles.headline}>Test technique React-Native</Text>
            <Text style={styles.presentation_text}>Réalisé par Gary Schwab</Text>
            <Text style={styles.presentation_text}>Le 03/06/2021</Text>
          </View>
          <TouchableOpacity
            style={styles.button_container}
            onPress={() => this.props.navigation.navigate("Data")}
          >
            <Text style={styles.button_text}>Accéder au test</Text>
            <Image
              style={styles.arrow_icon}
              source={require("../Images/right_arrow_white.png")}
            />
          </TouchableOpacity>
          <Text style={styles.version_text}>Version de React-Native utilisée : 0.63.2</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
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
})

export default HomeScreen;
