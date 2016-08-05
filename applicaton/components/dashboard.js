/* application/components/Dashboard.js */
import React, { Component } from 'react';
// import { TabBarIOS } from 'react-native';
import { View, Text, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';

import ActivityView from './activity/ActivityView';
import MessagesView from './messages/MessagesView';
import ProfileView from './profile/ProfileView';


class Dashboard extends Component{
  constructor(){
    super();
    this.state = {
      selectedTab: 'Activity'
    }
  }
  render(){
    return (

      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Activity'}
          title="Activity"
          renderIcon={() => <Icon name="ios-pulse" size={25} color="#ccc" />}
          renderSelectedIcon={() => <Icon name="ios-pulse" size={25} color="#4F8EF7" />}
          onPress={() => this.setState({ selectedTab: 'Activity' })}>
          <ActivityView />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'Messages'}
          title="Messages"
          renderIcon={() => <Icon name="ios-chatboxes" size={25} color="#ccc" />}
          renderSelectedIcon={() => <Icon name="ios-chatboxes" size={25} color="#4F8EF7" />}
          onPress={() => this.setState({ selectedTab: 'Messages' })}>
          <MessagesView />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'Profile'}
          title="Profile"
          renderIcon={() => <Icon name="ios-person" size={25} color="#ccc" />}
          renderSelectedIcon={() => <Icon name="ios-person" size={25} color="#4F8EF7" />}
          onPress={() => this.setState({ selectedTab: 'Profile' })}>
          <ProfileView />
        </TabNavigator.Item>
      </TabNavigator>

    )
  }
}

export default Dashboard;