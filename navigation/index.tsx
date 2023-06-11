import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";

import {Entypo, FontAwesome} from "@expo/vector-icons";
import WorkoutDetailScreen from "../screens/WorkoutDetailScreen";


export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator();
function RootNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="WorkoutDetail" component={WorkoutDetailScreen} options={{title: 'Workout Info'}}/>
        </Stack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen name="Home" component={HomeScreen}
                              options={{
                                  tabBarIcon: ({color, size}) => <FontAwesome name="home" size={size} color={color}/>
                              }}/>
            <BottomTab.Screen name="Planner" component={PlannerScreen}
                              options={{
                                  tabBarIcon: ({color, size}) => <Entypo name="add-to-list" size={size} color={color}/>
                              }}/>
        </BottomTab.Navigator>
    );
}