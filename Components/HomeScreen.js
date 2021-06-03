import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./Styles/HomeScreenStyles";

/**
 * HomeScreen.js
 * Cette vue est la page d'accueil de l'application.
 * Elle affiche les détails du projet ainsi qu'on bouton pour accéder à la liste de données.
 */

class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        
        {/* Logo OnePoint */}
        <View style={styles.image_container}>
          <Image
            style={styles.logo}
            source={require("../Images/onepoint_logo_white.png")}
          />
        </View>
        
        <View style={styles.content_container}>
          
          {/* Texte de présentation du projet */}
          <View style={styles.presentation_container}>
            <Text style={styles.headline}>Test technique React-Native</Text>
            <Text style={styles.presentation_text}>Réalisé par Gary Schwab</Text>
            <Text style={styles.presentation_text}>Du 1er au 3 juin 2021</Text>
          </View>
          
          {/* Bouton de navigation vers la prochaine vue */}
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

export default HomeScreen;
