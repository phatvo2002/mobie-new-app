import React from "react";
import { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Share, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Color from "../Shared/Color";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
const ReadNews = () => {
  const news = useRoute().params.news;
  const navigation = useNavigation()
  useEffect(() => {
   
  }, []);
 
  const shareNew =()=>
  {
     Share.share({
        message:news.title + "\nRead More"+ news.description
     })
  }
  return (
    <ScrollView style={{ backgroundColor: Color.white, flex: 1, padding: 12 }}>
      <View
        style={{
          marginBottom: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> shareNew()}>
          <FontAwesome6 name="share" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: news.urlToImage }}
        style={{ width: "100%", height: 300, padding: 10, borderRadius: 10 }}
      />
      <Text style={{ marginTop: 10, color: Color.primary, fontSize: 16 }}>
        {news.source.name}
      </Text>
      <Text style={{ marginTop: 10, fontSize: 22, fontWeight: "bold" }}>
        {news.title}
      </Text>
      <Text
        style={{
          marginTop: 10,
          fontSize: 16,
          color: Color.gray,
          lineHeight: 30,
        }}
      >
        {news.description}
      </Text>

     <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(news.url)}>
     <Text
        style={{
          marginTop: 10,
          fontSize: 22,
          fontWeight: "bold",
          color: Color.primary,
        }}
      >
        Read More
      </Text>
     </TouchableOpacity>
      
    </ScrollView>
  );
};

export default ReadNews;
