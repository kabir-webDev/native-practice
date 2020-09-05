import React from "react";
import { View, Button, TextInput } from "react-native";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }
  submit() {
    console.warn(this.state);
  }
  render() {
    return (
      <View style={{ margin: 20, marginTop: 100, backgroundColor: "teal" }}>
        <TextInput
          placeholder="enter your name"
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          style={{ borderWidth: 2, borderColor: "skyblue", margin: 20 }}
        />
        <TextInput
          placeholder="enter your email"
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
          style={{ borderWidth: 2, borderColor: "skyblue", margin: 20 }}
        />
        <TextInput
          placeholder="enter your password"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
          style={{ borderWidth: 2, borderColor: "skyblue", margin: 20 }}
        />
        <Button
          title="Submit"
          onPress={() => {
            this.submit();
          }}
        />
      </View>
    );
  }
}

export default App;
