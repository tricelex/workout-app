import {useEffect} from "react";
import {useState} from "react/index";
import * as font from "expo-font"
import {clearWorkouts, getWorkouts, initWorkouts} from "../storage/workout";

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = useState(false);
    useEffect(() => {

        async function loadResourcesAndDataAsync() {
            try {
                await clearWorkouts();
                await initWorkouts();
                // Load fonts
                await font.loadAsync({
                    "montserrat": require("../assets/fonts/Montserrat-Regular.ttf"),
                    "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
                })
            } catch (e) {
                console.warn(e)
            } finally {
                await getWorkouts()
                setLoadingComplete(true)
            }
        }

        loadResourcesAndDataAsync()
    }, []);

    return isLoadingComplete;
}