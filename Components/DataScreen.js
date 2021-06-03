import React from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./Styles/DataScreenStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from "react-redux";

/**
 * DataScreen.js
 * Cette vue contient la liste de données que l'utilisateur peut consulter et modifier.
 * Les données de la liste sont récupérées depuis l'AsyncStorage à chaque fois que cette vue est affichée.
 */

class DataScreen extends React.Component {

  constructor(props) {
    super(props);
    this.elementToAdd = "";
    this.textInputRef = React.createRef();
  }

  componentDidMount() {
    // On récupère les données depuis l'AsyncStorage
    AsyncStorage.getItem("stringsArray", (error, result) => {
      if (!error) {
        
        /* Si l'élément demandé n'est pas trouvé, le résultat est null
           Mais on souhaite que stringsArray soit initialisé comme un tableau vide et non à null */
        let parsedResult = JSON.parse(result);
        let stringsArray = parsedResult ? parsedResult : [];

        // On envoie les données récupérer au reducer
        const action = { type: "hydrateStoreFromAsyncStorage", value: stringsArray }
        this.props.dispatch(action);

      }
      else console.error(error);
    });
  }
  
  _displayListEmptyComponent() {
    return (
      <View style={styles.empty_list_view}>
        <Text style={styles.empty_list_text}>La liste est vide.</Text>
      </View>
    );
  }

  _addElementTextChanged(text) {
    this.elementToAdd = text;
  }

  _sendElementToAdd() {
    // On envoie l'élément à ajouter au reducer
    const action = { type: "addElement", value: this.elementToAdd };
    this.elementToAdd = "";
    this.textInputRef.current.clear();
    this.props.dispatch(action);
  }

  _resetElements() {
    // On envoie l'instruction de réinitialisation au reducer
    const action = { type: "resetElements" };
    this.props.dispatch(action);
  }

  render() {
    const { stringsArray } = this.props;
    let keyCounter = 0;
    return (
      <View style={styles.main_container}>
        
        {/* Titre de la vue */}
        <Text style={styles.headline}>Liste de données</Text>
        
        {/* Liste de données */}
        <View style={styles.data_list_container}>
          <FlatList
            contentContainerStyle={styles.data_list}
            data={stringsArray}
            ListEmptyComponent={this._displayListEmptyComponent} // Affiche une phrase quand la liste est vide
            keyExtractor={() => (keyCounter++).toString()}
            renderItem={ ({item}) => <Text style={styles.list_item}>- {item}</Text> }
          />
        </View>
        
        {/* TextInput et boutons utilisateur */}
        <View style={styles.add_element_container}>
          <View style={{flex: 1}}>
            <TextInput
              style={styles.add_element_textinput}
              ref={this.textInputRef}
              placeholder="Ajouter un élément..."
              onChangeText={(text) => this._addElementTextChanged(text)}
              onSubmitEditing={() => this._sendElementToAdd()}
            />
          </View>
          {/* Bouton d'ajout d'éléments */}
          <TouchableOpacity
            style={[ styles.add_element_button, styles.button ]}
            onPress={() => this._sendElementToAdd()}
          >
            <Image
              style={styles.send_icon}
              source={require("../Images/send_arrow_white.png")}
            />
          </TouchableOpacity>
          {/* Bouton de réinitialisation */}
          <TouchableOpacity
            style={[ styles.clear_button, styles.button ]}
            onPress={() => this._resetElements()}
          >
            <Image
              style={styles.clear_icon}
              source={require("../Images/trash_white.png")}
            />
          </TouchableOpacity>
        </View>

      </View>
    )
  }

}

const mapStateToProps = state => {
  return {
    stringsArray: state.stringsArray
  }
}

export default connect(mapStateToProps)(DataScreen);
