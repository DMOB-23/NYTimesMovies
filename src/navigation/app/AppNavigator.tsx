import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "./interface";
import { Home } from "../../screens/home";
import { Details } from "../../screens/details";

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    )
}

export default AppNavigator