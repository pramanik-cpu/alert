import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class RedButton extends Component {
  displayAlert(){
    alert('playing track 1');
  }
  render(){
    return(
      <Button color="red" title="sound 1" onPress={this.displayAlert}/>
    )
  }
}

class PinkButton extends Component{
  displayAlert(){
    alert('volume is at its max');
  }
  render(){
    return(
      <Button color="pink" title="sound2" onPress={this.displayAlert}/>
    )
  }
} 

class GreenButton extends Component{
  displayAlert(){
    alret('playing track 3');
  }
  render(){
    return(
      <Button color="pink" title="sound 3" onPress={this.displayAlert}/>
    )

  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <RedButton />
       <Text>Track1</Text>
        <PinkButton/>
        <Text>track2 </Text>
        <GreenButton/>
        <Text>track3</Text>

      </View>
    );
  }
}
