import { Text, TouchableOpacity, TouchableOpacityProps, ViewStyle,StyleProp } from "react-native"
import {styles} from "./Button.ts"

interface MyTouchableInterface extends TouchableOpacityProps{
    title: string,
    variant?: "default" | "white"
    customStyle?: StyleProp<ViewStyle>,

}
export const ClassicButton: React.FC<MyTouchableInterface> = ({variant="default",title, customStyle, ...props})    =>{
    return(
        <TouchableOpacity {...props} style={[styles.button, styles[variant], customStyle]} >
            <Text style={variant==="default" ? styles.textDefault : styles.textWhite}>{title}</Text>
        </TouchableOpacity>
    )

}
