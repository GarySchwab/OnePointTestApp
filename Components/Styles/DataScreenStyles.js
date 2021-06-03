import { StyleSheet } from "react-native";

/**
 * DataScreenStyles.js
 * Ce fichier contient toutes les propriétés de style utilisées dans la vue DataScreen.
 */

export default StyleSheet.create({
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
