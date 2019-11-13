import {StyleSheet, Text} from 'react-native';
import { Constants } from 'expo';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    borderWidth: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button1:{
    margin: 10,
    borderWidth:1,
    width:100,
    height:100,
    borderRadius:10,

  },
  vidu:{
    fontSize: 20,
    backgroundColor: 'green',
    borderRadius: 1,
  },
  flatList:{
    
  }
});

module.exports = {styles};