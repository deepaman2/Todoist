import { View, Text, StyleSheet } from 'react-native';
import colorsPath from '../../constants/colorsPath';
import { moderateScale, moderateScaleVertical } from '../../styles/responsive';
const styles = StyleSheet.create({
    homestyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colorsPath.GREY
    },
    textHome: {
        marginTop: moderateScaleVertical(50),
        fontSize: 25,
        fontWeight: 'bold',
        color: colorsPath.PURPLE
    },
    textHome2: {
        marginTop: moderateScaleVertical(15),
        fontWeight: '400',
        marginRight: moderateScale(90)
    },
    touchstyle: {
        marginTop: moderateScaleVertical(40),
        backgroundColor: colorsPath.PURPLE,
        height: moderateScaleVertical(40),
        width: moderateScale(330),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: moderateScale(30)
    },
    touchtext: {
        color: 'white',
        fontWeight: '600'
    },
    logtext: {
        fontWeight: '700',
        color: colorsPath.PURPLE
    },
    viewtwo: {
        flexDirection: 'row'
    }

});
export default styles;