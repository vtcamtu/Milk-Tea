import * as React from 'react';
import {Button, Text, View, FlatList, Image, Dimensions, Alert  } from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, StackActions, NavigationActions} from "react-navigation";
import Food from './Food.js';
import {styles} from './Styles.js';
import {flatListData, cartData, historyCart} from './FlatListData.js';

  
export default class Cart extends React.Component {
  
    constructor(props){
      super(props);

       this.state = {
         info: null,
         disabled: true,
         data: cartData,
         //data: flatListData,
         totalMoney: 0,
         heightScreen: Dimensions.get('screen').height, 
         refreshing: false,

       }
      // this.totalMoney =this.totalMoney.bind(this);
    }      

lengthData(data) {
  if(data != null) return data.length;
  
}
searchData0(data) {
  if (data != null) return data[0];
}
searchData1(data) {
  if (data != null)  return data[1];
}

concatData(data) {
  return data[0].concat(data[1]);
}

viDu = () => {
  alert('ok. thanh cong roi nhe.');
}

onPressThanhToan = () => {
    
   
    Alert.alert(
      'Thông Báo',
      'Chắc chắn rằng bạn muốn mua hàng',
      [
        {
          text: 'OK',
          onPress: () => {
                           
                            this.setState({disabled: true}); 
                            Alert.alert('Thông Báo','Bạn đã mua hàng thành công.');
                            for(var i = 0; i < this.lengthData(cartData); ++i) 
                            {
                                                              
                              historyCart.push(cartData[i]); 
                                              
                            }
                            cartData.splice(0); // xóa phần tử trong mảng
                            this.setState({data: cartData}); 
                            },
        },
        {
          text: 'Cancel',
          onPress: () => {Alert.alert('Thông Báo','Bạn đã hủy')}
        }
      ]
    );
    
}
onPressTaiDuLieu = () => {
 // this.setState({data: null}); 
  this.setState({data: cartData}); 
  if(this.lengthData(this.state.data) == 0) this.setState({disabled: true});
  else this.setState({disabled: false});
 // this.setState({data: cartData});
} 
onRefresh() {
  this.setState({refreshing: true}, function(){this.refreshData()});
}
refreshData = async () => {
  this.setState({
    data: cartData,
    refreshing: false,
  })
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


viewFlatList(data) {
  return (
    
      <FlatList  
            onRefresh = {() => {}}
            refreshing = {false}
            data = {data} 
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


// ham reder()
    render(){ 
      return (
        <View>
        <View>
          <Button 
            title = 'tải dữ liệu'
            color = 'tomato'
            onPress = {this.onPressTaiDuLieu}
          />
           
        </View>
        <View style = {{height: this.state.heightScreen - 200,  }}>
        
          {this.viewFlatList(this.state.data)}
          
          <View style = {{}}> 
            <View style = {{borderBottomWidth:1, borderTopWidth:1, margin: 10, flexDirection: 'row'}}> 
              <Text style =  {{fontSize: 18, flex:10}}> Tổng Tiền: </Text>
              <Text style =  {{fontSize: 18}}> {this.totalMoney(this.state.data)} [vnd] </Text>
            </View>
            <Button 
              color = 'red'
              title = 'Thanh Toán'
              onPress = {this.onPressThanhToan}
              disabled = {this.state.disabled} 
              
            /> 
          </View>
        </View>
          
        </View>
    );
  }
}

