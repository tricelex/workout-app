import {FlatList, StyleSheet, View, Text, Pressable} from "react-native";
import {NativeStackHeaderProps} from "@react-navigation/native-stack";

import data from "../data.json";
import WorkoutItem from "../components/WorkoutItem";
import {Workout} from "../types/data";

export default function HomeScreen({navigation}: NativeStackHeaderProps) {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>New Workouts</Text>
            <FlatList
                data={data as Workout[]}
                keyExtractor={item => item.slug}

                renderItem={({item}) => {
                    return (
                        <Pressable onPress={() => alert(`I am pressed - ${item.name}`)}>
                            <WorkoutItem item={item}/>
                        </Pressable>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: "bold",
    }
})