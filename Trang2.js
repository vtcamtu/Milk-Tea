

this.state = {
      dataSource: ['hang 1]', 'hang 2', 'hang 3', 'hang 3']
    };

  render() {
    console.log(this.state.dataSource);
    return (
      <FlasList style = {styles.container}
      data = {this.state.dataSource}
      enableEmptySections = {true}
      renderItem = {(itemData) => { return (<Text> {itemData.item} </Text> )}}
      
      keyExtractor = {(item, index) => index.toString()}
      ItemSeparatorComponent = {(sectionID, rowID, adjacentRowHighlighted) => 
      <View key = {rowID}> }/>
    )
  };