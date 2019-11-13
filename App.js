// mọi người ơi
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, FlatList, Image, DrawerLayoutAndroid, ImageBackground, TextInput, Picker  } from 'react-native';
import { Constants } from 'expo';
import { Ionicons, Icon } from '@expo/vector-icons';
//import file from
import  {Trang1, TongHaiSo, App1, SoB} from './Trang1';
import {styles} from './Styles.js';
//import { registerScreens } from './screens';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, StackActions, NavigationActions} from "react-navigation";
import {flatListData, cartData, imageBackground} from './FlatListData.js';
import Food from './Food.js';
import InfoFood from './InfoFood.js';
import Cart from './Cart.js';
import Example from './Example.js';
import HistoryCart from './HistoryCart.js';
import InfoUser from './InfoUser.js';

var flexDirectionView = 'column';
var horizontalView = false;

class Setting extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        viewItem: 'Chiều Dọc',
    }
  }
  horizontalApp() {
    if(this.state.viewItem == 'Chiều Dọc') return false;
    else return true;
  }
  viewView(){
    if(flexDirectionView == 'column' && horizontalView == false)
    {
      
      return this.state.viewItem;
    }
    else { 
     
      return this.state.viewItem;
    }
  }
  onPressTouch_ngang = () => {
    flexDirectionView = 'row', horizontalView = true, this.setState({viewItem: 'Chiều Ngang'})
  }
  onPressTouch_doc = () => {
    flexDirectionView = 'column', horizontalView = false, this.setState({viewItem: 'Chiều Dọc'})
  }
  render() {
    return (
      <View style = {{padding: 10}}> 
        <Text style = {{textAlign: 'center', fontSize: 40, borderWidth:1, marginBottom:20}}> Cài Đặt </Text>
        <View style = {{flexDirection: 'row', borderBottomWidth:1}}> 
          <View> 
            <Text style = {{ fontSize:18}}> Chế độ xem: </Text>
          </View>
          
           <Text style = {{fontSize: 18}}> {this.viewView()} </Text>
           <TouchableOpacity style = {{backgroundColor:'violet', width: 40}} onPress = {this.onPressTouch_ngang}> 
              <Text> - </Text>
          </TouchableOpacity>
          <TouchableOpacity style = {{backgroundColor:'orange', width: 40}} onPress = {this.onPressTouch_doc}> 
              <Text> | </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


class App extends React.Component { 
// headerLeft: neu là trả về thuộc tính thì phải là ngoặc tròn, không được ngoặc nhọn.
constructor(props){
  super(props);
  this.state = {
    refreshing: false,
    valueTextInput: '',
    nameFood: '',
    data: flatListData,
    haha: null,
  }
}


onRefresh() {
  this.setState({refreshing:true}, function() {this.onRefresh()})
}
onRefresh = () => {
  var leng = flatListData.pop();
  flatListData.unshift(leng);
  this.setState({
      data:flatListData,
      isFetching: false
  })
}
showPicker() {
  return (
    <View style = {{backgroundColor:'white'}}>
    <Picker
            
            selectedValue={this.state.nameFood}
            style={{height: 50, width: 200, borderBottomWidth:1}}
            onValueChange={(itemValue, itemIndex) =>
             { 
               var lili = [];
               this.setState({nameFood: itemValue});
               for(var i = 0 ; i < flatListData.length; i ++){
                 if(itemValue == flatListData[i].name){
                  lili.push(flatListData[i]);
                  lili.push(flatListData[i+1]) 
                  // this.setState({data: lili})
                 }
                
                 
               }
               
             }
            }>
            {this.viewPicker()}
            
          </Picker>
          <Text> {this.state.nameFood} {} </Text>
          <Button 
            title = 'tải'
            onPress = {() => {this.setState({data:this.searchData_name()})}}
          />
      </View>
  );
}
viewPicker() {
  var data = flatListData;
  var object = [];
  object.push(<Picker.Item label = 'Tất cả' value = 'Tất cả' />);
  for(var k = 0; k < data.length; k ++){
        object.push(<Picker.Item label = {data[k].name} value = {data[k].name} />);
  }
  return object;
}
searchData_name(){
  var data = flatListData;
  var search = [];
  var  con = this.state.valueTextInput.toLowerCase();
 if(con == 'tất cả') this.setState({data:flatListData});
  else {
    for(var i = 0; i < data.length; i ++){
      var cha = data[i].name.toLowerCase();
      
      var tam = cha.indexOf(con);
      if(tam >= 0)
      {
        search.push(data[i]);
      }

    }
    this.setState({data:search})
  }
}
viewTextInput() {
  return (
    <TextInput 
                style = {{borderBottomWidth: 0.5,  width: 280, marginStart: 5, flex: 10}}
                value = {this.state.valueTextInput}
                onChangeText = {(value_a) => {this.setState({valueTextInput: value_a})}}
                placeholder = 'Tìm kiếm...'
                />
  )
}
viewFood(data) {
  var _Setting = new Setting();
  return (
       <ImageBackground source = {{uri:imageBackground}} style={{width: '100%', height: '100%'}}>
       <View style = {{flexDirection: 'row', borderBottomWidth:1, alignItems: 'center', padding: 5, backgroundColor: 'violet'}}>
                {this.viewTextInput()}
                <Text> {this.state.haha} </Text>
                <TouchableOpacity 
                  onPress = {() => {this.searchData_name()}}
                >
                <Ionicons name = {'md-search'} size = {25} color = {'red'} />
                 
                </TouchableOpacity>

        </View>
        <View style = {{marginStart: 20, marginEnd:20}}>
              
              <FlatList 
                onRefresh = {() => {this.onRefresh()}}
                refreshing = {this.state.refreshing}
                style = {{ flexWrap: 'wrap',flexDirection: 'column', alignItems: 'center', }}  
                horizontal = {false} 
                data = {data}
                //data={[{'key': 'a'}, {'key': 'b'}]}
                renderItem = {({item, index}) => {
                  return (
                    
                    <TouchableOpacity 
                      style = {{marginBottom: 10 }}
                      onPress = {() => this.props.navigation.navigate('_InfoFood', {name1 : index})}
                      >  
                      
                      
                      
                      <View style = {{backgroundColor:parseInt(index) % 2 == 0  ? 'orange1': 'pink1', flexDirection: 'column',alignItems: 'center', width: 340, padding: 5,  }}> 
                        <View style = {{marginEnd:20, marginBottom: 2}}>
                          <Image   style = {{height: 250, width: 300, borderRadius:40, }} source = {{uri : item.image}}/> 
                        </View>                                
                        <Text style = {{borderBottomWidth:1, width: 340, textAlign: 'center', backgroundColor: 'pink', fontSize: 18}}> {item.name} </Text>
                        <Text style = {{borderBottomWidth:1, width: 340, textAlign: 'center', backgroundColor: 'pink', fontSize: 18, }}>  {item.money} vnd </Text>
                      </View>
                      
                    </TouchableOpacity>
                  )
                }}
              />  
          
              
            
          </View>
          </ImageBackground>
      
    );
}
  render() {
    var navigationView = (
        <View style={{flex: 1, backgroundColor: 'white',alignContent:'center', justifyContent: 'center'}}>
         

          <TouchableOpacity onPress = {() => this.props.navigation.navigate('_historyCart') }>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left', borderBottomWidth: 1, textDecorationColor: 'red'}}> Lịch Sử Giao Dịch </Text>
            
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => {this.props.navigation.navigate('_InfoUser')}}> 
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left', borderBottomWidth: 1}}> Thông Tin Người Dùng </Text>
          </TouchableOpacity>
          
          
        </View>
      );
    return (
      <DrawerLayoutAndroid
          drawerWidth={250}
          backgroundColor = {'green'}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>
          
          {this.viewFood(this.state.data)}
      </DrawerLayoutAndroid>
    );
  }
}
const AppStack1 = createStackNavigator({
  
  _SoB: SoB,
});
const AppStack2 = createStackNavigator({
  _App1: App1,
  
});
const HomeStack = createStackNavigator({
 // _example: Example,
 //_InfoUser: InfoUser,
  trangChu:App,
  _InfoFood: InfoFood,
  _historyCart: HistoryCart,
  _InfoUser: InfoUser,
});
const CartStack = createStackNavigator({
  _Cart: Cart,
  
  
});
const SettingStack = createStackNavigator({
  _Setting: Setting,
});
//const AppContainer = createAppContainer(AppStack1, AppStack2);
export default createAppContainer(createBottomTabNavigator(
  
  {  
    Home: HomeStack,
    Cart: CartStack,
    // mSetting: SettingStack,
  },
 // 
 
  {
    
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName == 'Home') {  
         // iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          iconName = "md-home";
        } else if (routeName === 'Cart') {
          iconName = 'md-cart';
        }
        else if(routeName == 'Setting'){
          iconName = 'md-settings';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
         return <Ionicons name={iconName} size={25} color={tintColor} />;
      },

    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        width: 100,
      },
      style: {
        backgroundColor: '#6495ED',
      },
    },
    
  },
  {
    
    title: 'Tieu de trang chu',
    headerStyle:{
      backgroundColor: 'while',
      //marginTop:100
     // marginBottom:30
    },
    foodterStyle:{
      backgroundColor: 'red',
    },
    headerTintColor: 'green',
    headerTitleStyle:{
      fontWeight:'bold',
    },
    headerLeft:(
      <Button
      title = 'info'
      onPress = {() => alert('hii. ta da thanh cong')}
      color = 'blue'
      />
    ),
    headerRight:(
      <Button
      title = 'info'
      onPress = {() => alert('hii. ta da thanh cong')}
      color = 'gray'/>
    ),
    
  },
  
  
  
),

);

//module.exports = {AppStack};

