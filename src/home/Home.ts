import { StyleSheet } from "react-native"

export const homeStyles =   StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: "white"
    },
    topScreen:{
        flex:0.55,
        justifyContent:"flex-end",
        alignItems:"center",
        backgroundColor: "white"
    },
    bottomScreen:{
        flex: 0.45,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "white"
    },
    text:{
        fontFamily: "Raleway",
        fontSize: 50,
        fontWeight: 'bold',
    }
});