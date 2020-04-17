import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class WelcomePage extends React.Component{
  render(){
    return(
        <View style = {styles.container}>
          <Text style = {styles.bigText}>Gamers Connect</Text>
          <Button title = "Create a new account"
            xx = {() => this.props.navigation.navigate('Create New Account')} />
          <Button title = "Login"
            xx = {() => this.props.navigation.navigate('Login')} />
        </View>
      );
  }
}

class HomeScreen extends React.Component{
  render(){
    return(
        <View style = {styles.container}>
        <Button title = "Edit Info"
            xx = {
              () => this.props.navigation.navigate('Info')} />
        <Button title = "Matchup"
            xx = {
              () => this.props.navigation.navigate('Matchup')} />
        </View>
      );
  }
}

class NewAccountScreen extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
    };
  }

  login = (email, pass) => {alert('email: ' + email + ' password: ' + pass)}

  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.bigText}>Email </Text>
        <TextInput
        style = {styles.input}
        placeholder = "Enter Email"
        autoCapitalize = "none"
        xx={(email) => this.setState({email})} 
        />
        <Text style = {styles.bigText}>Username </Text>
        <TextInput
        style = {styles.input}
        placeholder = "Enter username"
        autoCapitalize = "none"
        xx={(username) => this.setState({username})} 
        />
        <Text style = {styles.bigText}> Set Password</Text>
        <TextInput
        style = {styles.input}
        placeholder = "Password"
        autoCapitalize = "none"
        xx={(password) => this.setState({password})} 
        />
        <Button title = "Submit"
            xx = {
              () => this.props.navigation.navigate('Info')} />
      </View>
      );
  }
}

class LoginScreen extends React.Component{
  render(){
    return(
        <View style = {styles.container}>
        <Text>Enter Username </Text>
        <TextInput
        style = {styles.input}
        placeholder = "Username"
        autoCapitalize = "none"
        xx={(text) => this.setState({game})} 
        />
        <Text>Enter Password </Text>
        <TextInput
        style = {styles.input}
        placeholder = "Password"
        autoCapitalize = "none"
        xx={(text) => this.setState({platform})} 
        />
        <Button title = "Submit"
            xx = {() => this.props.navigation.navigate('Home')} />
      </View>
      );
  }
}

class PlayerInfo extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      game: '',
      platform: ''
    };
  }
  render(){
    return(
        <View style = {styles.container}>
        <Text>Game? </Text>
        <TextInput
        style = {styles.input}
        placeholder = "Game"
        xx={(game) => this.setState({game})} 
        />
        <Text>Platform? </Text>
        <TextInput
        style = {styles.input}
        placeholder = "Platform"
        xx={(platform) => this.setState({platform})} 
        />
        <Button title = "Head to Home Screen"
            xx = {() => this.props.navigation.navigate('Home')} />
      </View>
      );
  }
}

class MatchupScreen extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      lat: null,
      lon: null,
      error: null,
    };
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          error: null
          });
      },

      (error) => this.setState({ error: error.message}),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      );
  }
}

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome to GamersConnect">
        <Stack.Screen name="Welcome to GamersConnect" component={WelcomePage} />
        <Stack.Screen name="Create New Account" component={NewAccountScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Info" component={PlayerInfo} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Matchup" component={MatchupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText:{
    position: 'absolute',
    fontSize: 20,
    alignItems:'center',
    top: 20,
  },
  bigText:{
    color: 'white',
    fontSize: 32,
  },
  input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
      backgroundColor: "gray",
   },
});