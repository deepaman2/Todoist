import { View, Text, StyleSheet } from 'react-native';
import colorsPath from '../../constants/colorsPath';
import { moderateScale, moderateScaleVertical } from '../../styles/responsive';
const styles = StyleSheet.create({
    addmain: {
        flex: 1,
        backgroundColor: colorsPath.GREY
    
    },
   
   addtextstyle:{
    fontWeight:'bold',
    color:colorsPath.DARKBLACK
   
}
});

export default styles;