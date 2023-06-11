import {containsKey, getData, removeData, storeData} from "."
import data from "../data.json"


export const getWorkouts = async () => {
    return await getData("workout-data");
}

export const initWorkouts = async () => {
    const hasWorkouts = await containsKey("workout-data");
    if (!hasWorkouts) {
        console.log("Storing data");
        await storeData("workout-data", data);
        return true;
    }
    return false;
}

export const clearWorkouts = async () => {
    return await removeData("workout-data");
}
