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
    },
    item: {
        margin: 5,
        padding: 5,
        color: "slategray",
        backgroundColor: "ghostwhite",
        textAlign: "center",
    },
    progress:{
        width: 170,
    },

    progressText:{
        fontSize: 12,
        textAlign: 'center',
    },
    filter: {
        height: 40,
        width: 200
    },

    controls: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: "white",
    }
})