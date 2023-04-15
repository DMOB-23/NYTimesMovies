import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type AppStackParamList = {
    Home: undefined,
    Details: undefined,
}

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>
