import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, Image, FlatList } from 'react-native';
import { Constants } from 'expo';
import {styles} from './Styles.js';
import {flatListData, cartData} from './FlatListData.js'
//import MyScreen from './MyScreen';
//import { registerScreens } from './screens';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, StackActions, NavigationActions} from "react-navigation";
import InfoFood from './InfoFood.js';
//import {AppStack} from './App.js';
import {SoB} from './Trang1.js';
import Cart from './Cart.js';

class CreateData extends React.Component {
  constructor(props){
    super(props);
    flatListData.splice(1,0,cartData);
    this.state = {
      a : '10',
    };
  }
    render() 
    {
      return (
        <View> 
          <Text> {this.state.a} </Text>
        </View>
            );
    }
}
  


 //export default
  class Food extends React.Component{
  constructor(props){
    super(props);
  }
  /*
    this.state = {
      dataSource: ['hang 1]', 'hang 2', 'hang 3', 'hang 3']
    };
*/

  render() {
   
    return (
       <View style={styles.container}>
              <FlatList 
                style = {{padding: 1, height:300,borderBottomWidth:10}}  
                data = {flatListData}
                //data={[{'key': 'a'}, {'key': 'b'}]}
                renderItem = {({item, index}) => {
                  return (
                    
                    <TouchableOpacity 
                      style = {{}}
                      onPress = {() => this.props.navigation.navigate('_InfoFood', {name1 : index})}
                      >  
                      
                      
                      <View style = {{ flexDirection:'row'}}> 
                        
                        <Text style = {{flex: 9,backgroundColor: 'gray' }}> {item.name} </Text>
                        <Text style = {{flex:0, backgroundColor: 'green', }}>  [{item.money}] vnd </Text>
                      </View>
                      <View style = {{backgroundColor:parseInt(index) % 2 == 0  ? 'orange': 'pink', flexDirection: 'row', marginBottom: 20, height: 150}}>
                        
                        <Text style = {{flex: 0, padding: 10}}>  {index + 1} </Text>
                        <Image   style = {{height: 150, width: 50, flex: 3}} source = {{uri : item.image}}/>                      
                      </View>
                      
                    </TouchableOpacity>
                  )
                }}
              />  
          
              
            
            
          </View>
      
    );
  }
}

const AppStack = createStackNavigator(
  {
  _Food: Food,
  _InfoFood: InfoFood,
  _SoB: SoB,
  _Cart: Cart,
  
  },
  
);
export default createAppContainer(AppStack);
//export default createAppContainer(AppStack);