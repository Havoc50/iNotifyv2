import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import NotesCard from './NotesCard';
import TasksCard from './TasksCard';
import EventsCard from './EventsCard';
import RemindersCard from './RemindersCard';

import AppLoading from 'expo-app-loading';
import { FlatList } from 'react-native-gesture-handler';
import * as Font from 'expo-font';

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

let noteslog = require('./TempNotes.json');
let taskslog = require('./TempTasks.json');
let eventslog = require('./TempEvents.json');
let reminderslog = require('./TempReminders.json');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = ({ item: nlog }) => {
    return <NotesCard nlog={nlog} navigation={this.props.navigation} />;
  };

  renderItem = ({ item: tlog }) => {
    return <TasksCard tlog={tlog} navigation={this.props.navigation} />;
  };

  renderItem = ({ item: elog }) => {
    return <EventsCard elog={elog} navigation={this.props.navigation} />;
  };

  renderItem = ({ item: rlog }) => {
    return <RemindersCard rlog={rlog} navigation={this.props.navigation} />;
  };

  keyExtractor = (item, index) => index.toString();

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require('../assets/snack-icon.png')}
                style={styles.iconImage}></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Storytelling App</Text>
            </View>
          </View>

          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={noteslog, taskslog}
              renderItem={this.renderItem}
            />
          </View>

          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={taskslog}
              renderItem={this.renderItem}
            />
          </View>

          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={eventslog}
              renderItem={this.renderItem}
            />
          </View>

          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={reminderslog}
              renderItem={this.renderItem}
            />
          </View>
          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.25,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  cardContainer: {
    flex: 0.85,
  },
});
