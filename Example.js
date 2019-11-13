import React, { Component } from 'react'
import { Text, View,StyleSheet,FlatList,Dimensions,Image,TouchableHighlight } from 'react-native'

import {flatListData} from './FlatListData.js';

    export default class Home extends Component {

        constructor(props) 
        {
            super(props);
        this.state = {
            data : flatListData,
            gender : "",
            isFetching: false,
        }
        }

    componentWillMount()
    {

        this.searchRandomUser()
    }

    onRefresh() {
        this.setState({ isFetching: true }, function() { this.searchRandomUser() });
     }

    searchRandomUser =  () => 
    {
      /*
       const RandomAPI = await fetch('https://randomuser.me/api/?results=20')
       const APIValue = await RandomAPI.json();
        const APIResults = APIValue.results
          console.log(APIResults[0].email);
          
          */
         var leng = flatListData.pop();
         flatListData.unshift(leng);
          this.setState({
              data:flatListData,
              isFetching: false
          })

    }

      render() {
        return (
          <View style = {styles.container}>
     <TouchableHighlight
              onPress = {this.searchRandomUser}
              style = {{width:deviceWidth - 32, height:45,backgroundColor: 'green',justifyContent:"center",alignContent:"center"}}>
              <Text style = {{fontSize:22,color: 'white',fontWeight: 'bold',textAlign:"center"}}>Reload Data</Text>
         </TouchableHighlight>
     <FlatList
            
           // onRefresh={() => this.onRefresh()}
          //refreshing={this.state.isFetching}
            //keyExtractor = { (item, index) => index.toString() }
            onRefresh = {() => {}}
            refreshing = {this.state.isFetching}
            data={this.state.data}
            renderItem={({item}) =>
            <View style = {styles.ContainerView}>
            <View>
            <Image
            source={{uri : item.image}}
            style = {{height:100,width:100,borderRadius: 50,marginLeft: 4}}
            resizeMode='contain'
    />
    </View>

    <View style = {{flexDirection: 'column',marginLeft:16,marginRight: 16,flexWrap:'wrap',alignSelf:"center",width: deviceWidth-160}}>
    <Text>Email Id : {item.email}</Text>

    

    </View>

    </View>
            }
            />
          </View>
        )
      }
    }
    const deviceWidth = Dimensions.get('window').width
    const deviceHeight = Dimensions.get('window').height
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop:22
        },
        ContainerView:
        {
            // backgroundColor:'grey',
            marginBottom:20,
            paddingVertical:10,
            backgroundColor: '#F5F5F5',

            borderBottomWidth:0.5,
            borderBottomColor:'grey',
            width: deviceWidth-40,
            marginLeft:20,
            marginRight:20,
            marginTop:20,
            flexDirection:'row'
        }
      });











/*import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, FlatList, Image, DrawerLayoutAndroid, Dimensions, Alert, Picker } from 'react-native';
import { Constants } from 'expo';
import { Ionicons, Icon } from '@expo/vector-icons';
//import file from
import  {Trang1, TongHaiSo, App1, SoB} from './Trang1';
import {styles} from './Styles.js';
//import { registerScreens } from './screens';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, StackActions, NavigationActions} from "react-navigation";
import {flatListData, cartData} from './FlatListData.js';
import Food from './Food.js';
import InfoFood from './InfoFood.js';
import Cart from './Cart.js'


export default class Example extends React.Component { 
// headerLeft: neu là trả về thuộc tính thì phải là ngoặc tròn, không được ngoặc nhọn.
constructor(props){
  super(props);
  //flatListData.splice(1,0,cartData);
  this.state = {
    data1: flatListData,
    view: false,
    data: cartData,
    language: 'vietnamme',
    };
}
viewPicker() {
  var data = this.state.data1;
  var object = [];
  for(var i  = 0; i <data.length; i ++) {
    
     object.push(<Picker.Item label = {data[i].name} value = {data[i].name} />) ;
    
  }
  return object;
}
view() {
  return (
    <View> 
        <Picker
          
          selectedValue={this.state.language}
          style={{height: 50, width: 200, borderBottomWidth:1}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          {this.viewPicker()}
          {this.viewPicker()}
        </Picker>
        <Text> {this.state.language} </Text>
    </View>
  );
}
  length() {
    return this.state.data1.length;
  }
  search() {
    for(var i = 0; i <= this.length();i++ ) {
        if( i == 0)
          return this.state.data1.slice(i,i+1);
    }
    
  }
  search1() {
    for(var i = 0; i <= this.length();i++ ) {
        if( i == 1)
          return this.state.data1.slice(i,i+1);
    }
    
  }
combineSeach() {
 var data = this.search().concat(this.state.data1, this.search() );
  return data; 
}


spliceErase() {
  var data = this.combineSeach();
  data.splice(2,1);
  return data;
  
}
spliceAdd() {
  var a = this.combineSeach();
  var b = this.search();
  var tong = null;
  tong = a.concat(b);
  return tong;
}
toString() {
  return this.search().toString();
}



   widthWindow = Dimensions.get('window').width;
   heightWindow = Dimensions.get('window').height;
   widthScreen = Dimensions.get('screen').width;
   heightScreen = Dimensions.get('screen').height;
   haha = 100;
   
  showAlert1() {  
          Alert.alert(  
              'Thông Báo',  
              'Đây là NVT',  
              [  
                  {  
                      text: 'Bỏ',  
                      onPress: () => {Alert.alert('Cảnh báo', 'Bạn dã hủy')},  
                      style: 'cancel',  
                  },  
                  {text: 'OK nha', onPress: () => { return(<Text> Có thể lắm </Text>) }},  
              ]  
          );  
      }  

thanhToan(data) {
  var tong = 0;
  for(var i = 0; i < data.length; i ++){
    tong = tong + 1;
  }
  return data.length;
}
  render() {
    return (
      <View> 
        <Text> {this.length()} </Text>
        <Text> {this.combineSeach().length} </Text> 
        {this.view()}
        <View style = {{backgroundColor: 'yellow', width: 300, height: 100}}> 
          <FlatList 
            data = {this.spliceAdd()}
            renderItem = {({item, index}) => {
              return (
                <View>
                  <Text> {item.name} </Text>
                 
                </View>
              );
            } }
          />
        </View>
        <View>
          <Button 
            title = 'Mở'
            onPress = {() => {this.showAlert1()}}
          />
        </View>
        <View>
          
        </View>
        <View>
           
           <Text> ok-- {this.widthScreen} </Text>
           <Text> ok-- {this.heightScreen} </Text>
           <Text> {this.thanhToan(cartData)} </Text>
        </View>
      </View>
    );
  }
}



*/

