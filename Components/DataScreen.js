import React from "react";
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from "react-redux";

class DataScreen extends React.Component {

  constructor(props) {
    super(props);
    this.elementToAdd = "";
    this.textInputRef = React.createRef();
  }

  componentDidMount() {
    AsyncStorage.getItem("stringsArray", (error, result) => {
      if (!error) {
        const action = { type: "hydrateStoreFromAsyncStorage", value: JSON.parse(result) }
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
    const action = { type: "addElement", value: this.elementToAdd };
    this.elementToAdd = "";
    this.textInputRef.current.clear();
    this.props.dispatch(action);
  }

  _resetElements() {
    const action = { type: "resetElements" };
    this.props.dispatch(action);
  }

  render() {
    const { stringsArray } = this.props;
    let keyCounter = 0;
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
            style={[ styles.add_element_button, styles.button ]}
            onPress={() => this._sendElementToAdd()}
          >
            <Image
              style={styles.send_icon}
              source={require("../Images/send_arrow_white.png")}
            />
          </TouchableOpacity>
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
    fontSize: 34,
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
  button: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center"
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
    marginLeft: 15,
    backgroundColor: "#0091CD",
  },
  send_icon: {
    width: 25,
    height: 25
  },
  clear_button: {
    marginLeft: 15,
    backgroundColor: "#B00",
  },
  clear_icon: {
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
