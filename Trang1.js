import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Constants } from 'expo';
import {createStackNavigator, createAppContainer, StackActions, NavigationActions} from "react-navigation";

//import { registerScreens } from './screens';



class Trang1 extends React.Component{
  constructor(props){
  super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Mang hinh trang1: {this.props.navigation.getParam('soA')}
        </Text>
       
      </View>
      // để tiếp tục đi sâu hơn 1 màn hình:
        // onPres = {() ==> this.props.navigation.push('manHinh1)}
    );
  }
}

 class TongHaiSo extends React.Component{
  constructor(props){
  super(props);
  //this.state = {};
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Mang hinh trang1: haha. ta da thanh cong. {this.props.navigation.getParam('soA')}
        </Text>
       
      </View>
    );
  }
}
class App1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          thanh cong roi nha
        </Text>     
        <Button 
          title = 'Chi tiet'
          onPress = {() => this.props.navigation.navigate('hihi')}/>

          <Button
        title = "Tiep tuc di chuyen 2"
        onPress = {() => this.props.navigation.push('manHinh1')}/>
      </View>

      
    );
  }
}
 class SoB extends React.Component{
  render(){
    return (
      <View style = {styles.container}> 
        <Text> Day la SoB </Text>
      </View>
    );
  }
} 
module.exports = {TongHaiSo, Trang1, App1, SoB};


//export default createAppContainer(AppNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});