<View>
          
        </View>

searchData: flatListData.slice(indexFood,indexFood + 1),
onPress = {() => {flatListData.push(cartData)}}
var rand = myArray[Math.floor(Math.random() * myArray.length)];
const HomeStack = createStackNavigator({
 trangChu:App,
  trang1: TongHaiSo,
  //soB: SoB,
  /*
  createBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
      Settings: { screen: SettingsScreen },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'yellow',
      },
    }
  )
 //initialRouteName: 'List',
 */
});

<View style={styles.container}>
        <Text style={styles.paragraph}>
          Mang hinh trang chu
        </Text>
       <Button
        title = "Button trang chu"
        onPress = { () => this.props.navigation.navigate('trang1', {movieName: 'haha', soA: '5678'})}
        />
</View>
      // để tiếp tục đi sâu hơn 1 màn hình:
        // onPres = {() ==> this.props.navigation.push('manHinh1)}

class SlackIcon extends React.Component {
  render() {
    return (
      <Image
        source={require('https://hinhanhdephd.com/wp-content/uploads/2017/06/hinh-nen-may-tinh-thien-nhien-4.jpg')}
       // fadeDuration={0}
        style={{width: 20, height: 20}}
      />
    );
  }
}
