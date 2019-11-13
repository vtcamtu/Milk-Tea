import * as React from 'react';
import {Button, Text, View, FlatList, Image,  ImageBackground  } from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, StackActions, NavigationActions} from "react-navigation";
import Food from './Food.js';
import {styles} from './Styles.js';
import {flatListData, cartData, imageInfoFood, imageBackground} from './FlatListData.js';

var image_Tu = 'https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-pearl-milk-tea-poster-background-material-image_151491.jpg';
var image_camtu = 'https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-pearl-milk-tea-poster-background-material-image_151491.jpg';

 
export default class InfoUser extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    return (
      <View> 
        <View style = {{alignItems: 'center', marginTop: 30}}> 
          <FlatList 
            refreshing = {false}
            onRefresh = {() => {}}
            data = {[{image:image_Tu}]}
            renderItem = {({item, index}) => {
              return(
                <View>
                  <Image 
                    source = {{uri: item.image}}
                    style = {{width: 300, height: 300, borderRadius: 300}}
                  />
                  <View style = {{marginTop:30,}}> 
                    <Text style = {{borderBottomWidth: 1, fontSize: 20}}> Tên:Vũ Thị Cẩm Tú</Text>
                    <Text style = {{borderBottomWidth: 1, fontSize: 20}}> MSSV: 43.01.103.052</Text>
                    <Text style = {{borderBottomWidth: 1, fontSize: 20}}> Phone: 0396343556 0354937381</Text>
                    <Text style = {{borderBottomWidth: 1, fontSize: 20}}> Email: vuthicamtuvb1999@gmail.com </Text>
                  </View>

                  
                  
                </View>
              );
            }}
            
          />
        </View>
      </View>
    );
  }
}