import {  Image, Text, View } from "react-native"
import {homeStyles} from"./Home.ts"
import {ClassicButton} from "../button/Button.tsx"
import { useNavigation } from "@react-navigation/native"


export const Home = () =>{
    const navigation = useNavigation<any>();
    return <View style={homeStyles.screen}> 
        <View style={homeStyles.topScreen}>
            <Image source={require("../images/home-logo.png")} style={{width: 168, height: 168}} />
            <Text style={homeStyles.text}>Shoppe</Text>
        </View> 
        <View style={homeStyles.bottomScreen}> 
            

            <ClassicButton onPress={()=>navigation.navigate('Login')} title="Let's get started" customStyle={{width: 340, height: 60}} />
            <ClassicButton title="I already have an account" variant="white" customStyle={{width: 250, height: 50}}/>
        </View>
    </View>
}

