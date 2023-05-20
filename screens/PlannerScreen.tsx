import {Button, Text, View} from "react-native";
import {NativeStackHeaderProps} from "@react-navigation/native-stack";
import {useEffect} from "react";

export default function PlannerScreen({navigation}: NativeStackHeaderProps) {

    useEffect(() => {
        console.log("Rending Planner Screen");

        return () => console.log("Unmounting Planner Screen")
    }, [])


    return (
        <View>
            <Text>I am Planner Screen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")}/>
        </View>
    );
}