import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        marginVertical: 3
    },

    boxContainer: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        flexWrap: 'wrap',
        width: '100%',
    },

    box: {
        backgroundColor:'#9c33ff',
        borderRadius: 10,
        borderColor: 'orange',
        shadowOpacity: 0.2,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        height: 200,
        width: '40%',
        margin: 10,
    },

    boxText: {
        color: "darkslategray",
        fontWeight: "bold",
    },

    img: {
        width: 30,
        height: 30
    }
})