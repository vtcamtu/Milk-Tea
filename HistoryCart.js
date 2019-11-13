import * as React from 'react';
import {Button, Text, View, FlatList, Image, Dimensions, Alert, Picker  } from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, StackActions, NavigationActions} from "react-navigation";
import Food from './Food.js';
import {styles} from './Styles.js';
import {flatListData, cartData, historyCart} from './FlatListData.js';

  
export default class HistoryCart extends React.Component {
  
    constructor(props){
      super(props);

       this.state = {
         info: null,
         disabled: true,
         data: historyCart,
         //data: flatListData,
         totalMoney: 0,
         heightScreen: Dimensions.get('screen').height, 
         nameFood: '(trống)',
         refreshing: false,
       }
      // this.totalMoney =this.totalMoney.bind(this);
    }      

searchData_name(){
  var data = historyCart;
  var search = [];
  if(this.state.nameFood == 'Tất cả') return historyCart;
  else {
    for(var i = 0; i < data.length; i ++){
      if(data[i].name == this.state.nameFood)
        search.push(data[i]);
      
    }
    return search;
  }
}
onRefresh() {
  this.setState({refreshing: true}, function() {this.set_onRefresh()});
}
set_onRefresh =  () => {
  var lili = historyCart.pop();
  historyCart.unshift(lili);
  this.setState({
    refreshing: false,
    data: historyCart,
  })
}
viewPicker() {
  var defaultData = flatListData;
  var data = historyCart;
  var object = [];
  object.push(<Picker.Item label = 'Tất cả' value = 'Tất cả' />);
  for(var k = 0; k < defaultData.length; k ++){
   // object.push(<Picker.Item label = {defaultData[k].name} value = {defaultData[k].name} />);
    for(var i = 0; i < data.length; i ++) {
      if(defaultData[k].name == data[i].name){
        object.push(<Picker.Item label = {data[i].name} value = {data[i].name} />);
        break;
      } 
    }
  }
  return object;
}
viewFlatList() {
  return (
    
    <FlatList 
             onRefresh = {() => {}}
             refreshing = {this.state.refreshing}
             data = {this.state.data} 
             renderItem = {({item, index}) => {
             
              return( 
                
                <View style = {{marginBottom: 20, padding: 5, flexDirection: 'row',}}> 

                  <Image style = {{width: 100, height: 100, borderRadius: 20,marginEnd:5}} source = {{uri: item.image }} />

                  <View style = {{padding:5, borderWidth: 0.5, width: 240, borderRadius: 20, borderBottomColor: 'red', }}>
                    <View style = {{flexDirection: 'row'}}> 
                      <Text style = {{flex: 10}}> Tên loại: </Text> 
                      <Text> {item.name} </Text>
                    </View>
                    <View style = {{flexDirection: 'row'}}> 
                      <Text style = {{flex: 10}}> Giá tiền:  </Text> 
                      <Text> {item.money} </Text>
                    </View>
                    <View style = {{flexDirection: 'row'}}> 
                      <Text style = {{flex: 10}}> Số lượng: </Text> 
                      <Text>  {item.amount} </Text>
                    </View>
                    <View style = {{flexDirection: 'row'}}> 
                      <Text style = {{flex: 10}} > Tổng giá tiền:  </Text>
                      <Text style = {{fontSize: 18}}> {item.total_money} </Text>
                    </View> 
                    
                  </View>

                </View>
              );
            }}
          />
          
  );
}
totalMoney(data) {
      var tong = 0;
      if(data != null) 
      {
        for(var i = 0; i < data.length; i ++)
        {
          tong = tong + data[i].total_money;
        }
      }
        return tong;
       
    }

showPicker() {
  return (
    <View>
    <Picker
            
            selectedValue={this.state.nameFood}
            style={{height: 50, width: 200, borderBottomWidth:1}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({nameFood: itemValue})
            }>
            {this.viewPicker()}
            
          </Picker>
          <Text> {this.state.nameFood} </Text>
          <Button 
            title = 'tải'
            onPress = {() => {this.setState({data:this.searchData_name()})}}
          />
      </View>
  );
}
// ham reder()
    render(){ 
      return (
        <View>
        
        <View style = {{height: this.state.heightScreen - 140,  }}>
          
          {this.viewFlatList()}
          <View style = {{borderBottomWidth:1, borderTopWidth:1, margin: 10, flexDirection: 'row'}}> 
              <Text style =  {{fontSize: 18, flex:10}}> Tổng Tiền: </Text>
              <Text style =  {{fontSize: 18}}> {this.totalMoney(this.state.data)} [vnd] </Text>
          </View>
        </View>
          
        </View>
    );
  }
}

