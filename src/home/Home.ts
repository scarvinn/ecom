import { StyleSheet } from "react-native"

export const homeStyles =   StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: "White"
    },
    topScreen:{
        flex:0.6,
        justifyContent:"flex-end",
        alignItems:"center",
        backgroundColor: "white"
    },
    bottomScreen:{
        flex: 0.4,
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