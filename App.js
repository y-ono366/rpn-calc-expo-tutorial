import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS == 'ios' ? 20 : StatusBar.currentHeight;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.results}>
          <View style={styles.resultLine}>
          </View>
          <View style={styles.resultLine}>
          </View>
          <View style={styles.resultLine}>
          </View>
        </View>

        <View style={styles.buttons}>
          <View styles={styles.buttonLists}>
          </View>
          <View styles={styles.buttonLists}>
          </View>
          <View styles={styles.buttonLists}>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: STATUSBAR_HEIGHT,
  },
  results: {
    flex: 3,
    backgroundColor: '#FFF',
  },
  resultLine: {
    flex: 1,
    borderBottomWidth:1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttons: {
  }
});
