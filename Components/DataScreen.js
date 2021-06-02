import React from "react";
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";

class DataScreen extends React.Component {

  constructor(props) {
    super(props);
    this.elementToAdd = "";
    this.textInputRef = React.createRef();
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
    const action = { type: "addElement", value: this.elementToAdd };
    this.textInputRef.current.clear();
    this.props.dispatch(action);
  }

  render() {
    const { stringsArray } = this.props;
    let keyCounter = 0;
    const testArray = ["Première chaine", "Deuxième test de la chaine", "Lorem ipsum dolor sit amensLorem ipsum dolor sit amensLorem ipsum dolor sit amensLorem ipsum dolor sit amensLorem ipsum dolor sit amens", "Première chaine", "Deuxième test de la chaine","Première chaine", "Deuxième test de la chaine","Première chaine", "Deuxième test de la chaine","Première chaine", "Deuxième test de la chaine","Première chaine", "Deuxième test de la chaine","Première chaine", "Deuxième test de la chaine","Première chaine", "Deuxième test de la chaine","Première chaine", "Deuxième test de la chaine","Première chaine", "Deuxième test de la chaine","Première chaine", "Deuxième test de la chaine","Première chaine", "Deuxième test de la chaine","Première chaine", "Deuxième test de la chaine", "woogle"];
    return (
      <View style={styles.main_container}>
        <Text style={styles.headline}>Liste de données</Text>
        <View style={styles.data_list_container}>
          <FlatList
            contentContainerStyle={styles.data_list}
            data={stringsArray}
            ListEmptyComponent={this._displayListEmptyComponent}
            keyExtractor={() => (++keyCounter).toString()}
            renderItem={({item}) =>
              <Text style={styles.list_item}>- {item}</Text>
            }
          />
        </View>
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
          <TouchableOpacity
            style={styles.add_element_button}
            onPress={() => this._sendElementToAdd()}
          >
            <Image
              style={styles.send_icon}
              source={require("../Images/send_arrow_white.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "#222",
    paddingHorizontal: 10
  },
  headline: {
    color: "white",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 30,
    fontSize: 30
  },
  data_list_container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "white",
    paddingHorizontal: 10
  },
  data_list: {
    flexGrow: 1
  },
  list_item: {
    color: "white",
    fontSize: 20,
    textAlign: "justify"
  },
  empty_list_view: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center"
  },
  empty_list_text: {
    color: "white",
    fontSize: 20
  },
  add_element_container: {
    paddingVertical: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  add_element_textinput: {
    backgroundColor: "white",
    width: "100%",
    height: 30,
    paddingLeft: 5,
    borderRadius: 3
  },
  add_element_button: {
    marginLeft: 20,
    width: 50,
    height: 50,
    backgroundColor: "#0091CD",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button_label: {
    color: "white"
  },
  send_icon: {
    width: 25,
    height: 25
  }
});

const mapStateToProps = state => {
  return {
    stringsArray: state.stringsArray
  }
}

export default connect(mapStateToProps)(DataScreen);
