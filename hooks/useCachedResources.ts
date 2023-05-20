import {useEffect} from "react";
import {useState} from "react/index";
import * as font from "expo-font"

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = useState(false);
    useEffect(() => {
        async function loadresourcesAndDataAsync() {
            try {
                // Load fonts
                await font.loadAsync({
                    "montserrat": require("../assets/fonts/Montserrat-Regular.ttf"),
                    "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
                })
            } catch (e) {
                console.warn(e)
            } finally {
                setLoadingComplete(true)
            }
        }

        loadresourcesAndDataAsync()
    }, []);

    return isLoadingComplete;
}