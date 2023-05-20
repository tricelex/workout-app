import {Text, View} from "react-native";
import {NativeStackHeaderProps} from "@react-navigation/native-stack";

export default function TestScreen({navigation}: NativeStackHeaderProps) {

    return (
        <View>
            <Text>Test Screen</Text>
        </View>
    );
}