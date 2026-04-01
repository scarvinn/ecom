import { StyleSheet } from 'react-native';

export const signupStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    backImage: {
        flex: 0.45,
        backgroundColor: '#ffffff',
    },
    titleText: {
        padding: 30,
        marginTop: 40,
        color: '#202020',
        fontFamily: 'Raleway',
        fontWeight: 'bold',
        fontSize: 50,
    },
    bottomView: {
        marginTop: 30,
        flex: 0.55,
        justifyContent: 'center',
    },
    noAvaImage: {
        marginLeft: 25,
        marginTop: 30,
    },
    activityIndecs: {
        marginTop: 30,
    },
    doneButton: {
        justifyContent: 'center',
        margin: 5,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 50,
    },
    cancelButton: {
        justifyContent: 'center',
        margin: 5,
        marginLeft: 16,
        marginRight: 16,
    },
});
