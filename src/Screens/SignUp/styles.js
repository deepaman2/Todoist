import { View, Text, StyleSheet } from 'react-native';
import colorsPath from '../../constants/colorsPath';
import { moderateScale, moderateScaleVertical } from '../../styles/responsive';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorsPath.GREY
    },
    loginView: {
        marginTop: 30,
        alignItems: 'flex-start',
        marginLeft: 20
    },
    loginstyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colorsPath.PURPLE,
    },
    logintextstyle: {
        backgroundColor: 'white',
        height: 40,
        margin: 11,
        padding: 15,
        fontWeight: '100',
        borderRadius: 10,
        marginHorizontal: 20,
    },
    touchstyle: {
        fontWeight: 'bold',
        fontSize: 11,
        paddingRight: 30,
        color: 'grey'
    },
    touchstylelog: {
        marginTop: moderateScaleVertical(20),
        backgroundColor: colorsPath.PURPLE,
        height: moderateScaleVertical(40),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 20
    },
    touchtext: {
        color: 'white',
        fontWeight: '600'
    },
    viewtwo: {
        flexDirection: 'row',
        flex: 1,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'flex-end'

    },
    logtext: {
        fontWeight: '700',
        color: colorsPath.PURPLE
    },
    orstyle: {
    alignItems: 'center',
    marginTop:moderateScaleVertical(15) ,
    color: 'grey'    
}
});
export default styles;