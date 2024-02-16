import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from "react-native";
import GlobalApi from "../../Services/GlobalApi";
import Color from "../../Shared/Color";
import { useNavigation } from '@react-navigation/native';
const TopHeadingSlide = ({newsList}) => {
  
  const navigation = useNavigation()

  return (
    <View style={{padding:12 ,marginTop:10}}>
      <FlatList
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>navigation.navigate('read-news', {news :item})} style={{width:Dimensions.get('screen').width *0.8,marginRight:15 }}>
            <Image source={{ uri: item.urlToImage }} style={{ height: Dimensions.get('screen').width *0.77 ,borderRadius:10}} />
            <Text numberOfLines={3} style={{marginTop:10,fontSize:20,fontWeight:'bold'}} >{item.title}</Text>
            <Text style={{marginTop:5,color:Color.primary}}>{item?.source?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TopHeadingSlide;
