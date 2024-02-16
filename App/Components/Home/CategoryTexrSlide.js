import React, { useState } from 'react'
import { View ,Text ,FlatList, TouchableOpacity,StyleSheet} from 'react-native'
import Color from '../../Shared/Color'
const CategoryTexrSlide = ({selectCategory}) => {
 
  const [active ,setActive] = useState(1)

  const categoryList = [
    {
      id :1,
      name:'Latest'
    },
    {
      id :2,
      name:'World'
    },
    {
      id :3,
      name:'Bussiness'
    },
    {
      id :4,
      name:'Sports'
    },
    {
      id :5,
      name:'Life'
    },
    {
      id :6,
      name:'Movie'
    },
  ]

  const onCategoryClick =(id)=>{
    setActive(id)
  }
  
  return (
     <View style={{marginTop:10}}>
         <FlatList 
         style={{paddingLeft:12}}
          data={categoryList}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>{onCategoryClick(item.id) , selectCategory(item.name)}}>
              <Text key={item.id} style={ item.id == active ? styles.selsectText :  styles.menuText}>{item.name}</Text>
            </TouchableOpacity>
          )}
         />
        
     </View>
  )
}

const styles = StyleSheet.create({
   menuText :{
    marginRight:20,
    fontSize:20,
    fontWeight:'bold',
    color: Color.gray
   },
   selsectText:{
    marginRight:20,
    fontSize:20,
    fontWeight:'bold',
    color : Color.primary
   }
})

export default CategoryTexrSlide