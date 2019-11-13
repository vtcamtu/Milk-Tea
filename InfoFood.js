import * as React from 'react';
import {Button, Text, View, FlatList, Image,  ImageBackground  } from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, StackActions, NavigationActions} from "react-navigation";
import Food from './Food.js';
import {styles} from './Styles.js';
import {flatListData, cartData, imageInfoFood, imageBackground} from './FlatListData.js';



export default class InfoFood extends React.Component {
    
    constructor(props){
      super(props);
      this.state = {
        amount: 1,
        data: cartData,
      };
      
    }
    phepTru() {
      var tru = this.state.amount;
      if(tru <= 1) this.setState({amount: 1});
      else this.setState({amount: this.state.amount - 1});
    }
    render(){
      // khai bao bien
      var indexFood = parseInt(this.props.navigation.getParam('name1'));
      var searchData = flatListData.slice(indexFood,indexFood + 1);
      var _dataCart = {
        key: null,
        name: null,
        money: null,
        amount: null,
        image: null,
        total_money: null,
        info: null,
      };
      
      return (
        <ImageBackground source = {{uri:imageInfoFood}} style={{width: '100%', height: '100%', alignItems: 'center'}}>
          <FlatList 
          onRefresh = {() => {}}
          refreshing = {false}
          style = {{padding: 1, alignItems: 'center'}}
          data = {searchData}
          renderItem = {({item, index}) =>{ return(
            
            
            <View style = {{padding: 20, }}>
                  <View style = {{alignItems: 'center', marginBottom: 5}}>
                      <Image style = {{height: 250, width: 320, borderRadius:40} } source ={{uri: item.image}} />
                      
                  </View>  

              

              
                
                  <View style = {{backgroundColor: 'white', borderRadius: 10, marginBottom: 5}}>
                      <Text style = {{fontSize: 18, borderBottomWidth: 1}}> Tên: {item.name} </Text>
                      <Text style = {{fontSize: 22, borderBottomWidth: 1}}> Giá: {item.money} </Text>
                      <Text style = {{fontSize: 16, padding: 5,}}> Thông tin chung: {item.info} </Text>
                      
                  </View>
                  
                  <View style = {{flexDirection: 'row',padding: 30, borderWidth:1, borderRadius:20, backgroundColor:'lavenderblush' }}> 
                    
                        <View style = {{flexDirection: 'row', flex: 1, height:35 }}> 
                            <Button title = '-' style = {{height: 20, width: 20, padding: 10}} 
                                    onPress = {() => {this.phepTru()}}
                            />
                            <Text style = {{fontZise: 30, padding: 10, backgroundColor: 'white' }}> {this.state.amount} </Text>
                            <Button title = '+' style = {{height: 20, width: 20, padding: 10}} 
                                    onPress = {() => {this.setState({amount: this.state.amount + 1 });}}
                            />
                        </View>
                        <View style = {{borderRadius: 10, flex:2, height: 30}}>
                          <Button 
                            title = 'Mua hàng'  
                            style = {{}}
                            onPress = {() => {cartData.push(_dataCart = {
                                                                          key: item.key,
                                                                          name: item.name,
                                                                          money: item.money,
                                                                          amount: this.state.amount,
                                                                          image: item.image,
                                                                          total_money: parseInt(item.money)*parseInt(this.state.amount), 
                                                                          info: item.info,
                                                                        },
                                                            );
                                              alert('Bạn đã mua hàng thành công.');
                                              
                                              }
                                      }
                          />
                        </View>
                    </View>
            </View>
          )}
          }
          >
            
          </FlatList>
         
      </ImageBackground>
    );
  }
}
