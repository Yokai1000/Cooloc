import React from 'react';
import {
  View, Text, Animated, StyleSheet,
} from 'react-native';

export default class Home extends React.Component {
  constructor() {
    super();
    // this.fadeAnime =  new Animated.Value(0);
  }

  // animatedText = () => {
  //     Animated.timing(this.fadeAnime, {
  //         toValue: 100,
  //         duration: 2000
  //     }).start()
  //     Animated.timing(this.fadeAnime, {
  //         toValue: 0,
  //         duration: 2000
  //     }).start()
  // }

  render() {
    return (
      <View style={styles.container}>
        {/* Animate first time here opacity = 1 */}
        {/* Animate second time here opacity = 0 */}
        <Animated.View
          style={styles.fadingContainer}
        >
          <Text style={styles.titleContainer}>
            Bienvenue sur Cooloc !
          </Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: '#191970',
  },
  container: {
    textAlign: 'center',
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'fa8072',
    borderRadius: '20px',
  },
});
