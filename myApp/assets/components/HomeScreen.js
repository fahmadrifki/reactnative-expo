import React from 'react';
import { Button, View, Text } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={textStyle}>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Text style={textStyle}>Link Gallery</Text>
        <Button
          title="Go to Gallery"
          onPress={() => this.props.navigation.navigate('Gallerys')}
        />
      </View>
    );
  }
}

const textStyle = {
  color: '#666666',
  margin: 16,
};

export default HomeScreen;