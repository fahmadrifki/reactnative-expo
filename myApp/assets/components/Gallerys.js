import React, {Component} from 'React';
import { View, Text } from 'react-native';

class Gallery extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Gallery Screen</Text>
      </View>
    );
  }
}

export default Gallery;