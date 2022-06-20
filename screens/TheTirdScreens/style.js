import { StyleSheet, StatusBar } from "react-native"



export const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
    },
    header: {
        padding: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'

    },
    headerText: {
        fontSize: 28,
        fontWeight: '500',
        width: "50%"
    },
    candyType: {
        paddingLeft: 40,
        flexDirection: 'row',
        overflow: 'scroll',

    },
    candyTypeText: {
        marginRight: 40,
        fontSize: 16,
        fontWeight: '500',



    },
    candyContainer: {
        padding: 20,
        width: 150,
        height: 200,
        //backgroundColor: "#e76f51",
        borderRadius: 50,
        justifyContent: 'center',
        marginRight: 20,
        marginTop: 40,


    },
    addBtn: {
        width: 40,
        height: 40,
        //backgroundColor: '#e63946',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,

    },
    candyContainerTitle: {
        width: 100,
        color: "#e9ecef",
        fontSize: 22,
        fontWeight: "500",

    },
    candyContainerPrice: {
        marginTop: 20,
        color: "#e9ecef",
        fontSize: 16,
        fontWeight: "500",

    },
    moreBtnWapper: {
        flex: 1,
        position: 'absolute',
        height: 150,
        width: "100%",
        bottom: 0,
        //backgroundColor: "#fdffb6",
        justifyContent: 'flex-end',
        alignItems: 'flex-end',

    },
    moreBtn: {
        flexDirection: 'row',
        height: 70,
        width: "50%",
        //backgroundColor: "#e63946",
        borderBottomLeftRadius: 40,
        borderTopLeftRadius: 40,
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    images: {
        height: 70,
        width: 70,
        borderRadius: 8,
    },
    TopmarketsWapper: {
        paddingHorizontal: 40,

    },
    TopmarketsWapperTitle: {
        fontSize: 28,
        marginBottom: 12,

    },
    marketsWapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,


    },
    marketsWapperTitle: {
        fontSize: 18,
        fontWeight: '500',

    },
    marketsWapperLocation: {
        color: '#8e9aaf',
        marginTop: 8,
    },
    candyImages: {
        position: 'absolute',
        top: -20,
        width: 90,
        height: 60,
        zIndex: 10,
        left: 0,


    },
})