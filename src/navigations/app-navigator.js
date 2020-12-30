import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GRAY_DARK } from '_styles/colors';

import SearchScreen from '../scenes/search';
import HelpScreen from '../scenes/help';
import ContactScreen from '../scenes/contact';

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="식품검색" component={SearchScreen} options={{
            drawerIcon: () => <MaterialCommunityIcons name="folder-search-outline" color={GRAY_DARK} size={26}/>
        }}/>
        <Drawer.Screen name="도움말" component={HelpScreen} options={{
            drawerIcon: () => <MaterialCommunityIcons name="help" color={GRAY_DARK} size={26}/>
        }}/>
        <Drawer.Screen name="문의하기" component={ContactScreen} options={{
            drawerIcon: () => <MaterialCommunityIcons name="chat-outline" color={GRAY_DARK} size={26}/>
        }}/>
    </Drawer.Navigator>
)

export default AppNavigator;