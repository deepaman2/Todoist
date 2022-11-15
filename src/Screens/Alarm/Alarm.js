import { View, Text, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { moderateScale, moderateScaleVertical } from '../../styles/responsive'
import colorsPath from '../../constants/colorsPath'



export default function Alarm() {

    const [data, setData] = useState([])
    const[off,setOff]=useState(0)

    useEffect(() => {
        myData()

    }, [])

    const myData = async () => {
        try {
            
            const res = await axios.get(`https://dummyjson.com/products?limit=20&skip=${off}`)
            const mainData = res?.data?.products
            console.log("my api data", mainData)
            setData([...data,...mainData])
            setOff(off+20)
          
        } catch (error) {
            console.log("error riased")
        }
    }

    const renderItem = ({ item, index }) => {
        return (
            <SafeAreaView style={{ margin: moderateScale(16),flexDirection:'row', padding: moderateScale(30), borderRadius: moderateScale(10),borderBottomWidth:2, backgroundColor:'white' }}>
                <View>
                <Image style={{height:150,width:100}}
                source={{uri:item?.thumbnail}}/>
           </View>
           <View style={{flexWrap:'wrap',alignItems:"center",marginLeft:20,flex:1, padding:10}}>
            <Text style={{fontWeight:'bold'}}>{item.title}</Text>
                <Text style={{marginTop:20}}>{item.description}</Text>
                <Text style={{fontWeight:'bold'}}>Price. {item.price}</Text>
                <Text style={{marginTop:10}}>Stock. {item.stock}</Text>
                <Text>Rating.{item.rating}</Text>
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                onEndReached={()=>{
                    myData()
                }}

            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorsPath.GREY
        // alignItems: 'center',
        // justifyContent: "center"
    }
})