import React from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { useState,useEffect } from "react";
import CategoryTexrSlide from "../Components/Home/CategoryTexrSlide";
import Color from "../Shared/Color";
import { EvilIcons } from "@expo/vector-icons";
import TopHeadingSlide from "../Components/Home/TopHeadingSlide";
import HeadingList from "../Components/Home/HeadingList";
import GlobalApi from "../Services/GlobalApi";
const Home = () => {

  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    getTopHeading();
    // getNewByCategory('latest');
  }, []);

 const getNewByCategory = async (category)=>{
    setLoading(true);
    const result = (await GlobalApi.getByCategory(category)).data
    setNewsList(result.articles)
    setLoading(false)
 }

  const getTopHeading = async () => {
    const result = (await GlobalApi.getTopHeading).data;
    setNewsList(result.articles);
  };

  return (
    <ScrollView style={{backgroundColor:Color.white}}>
      <View style={{ display:'flex', flexDirection:'row',justifyContent:'space-between',padding:12}}>
        <Text style={styles.textLogo}>Báo mới</Text>
        <EvilIcons name="bell" size={30} color="black" />
      </View>
      <CategoryTexrSlide  selectCategory={(category)=>getNewByCategory(category)} />
      <TopHeadingSlide newsList={newsList}/>
      <HeadingList newsList={newsList}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textLogo: {
    fontSize: 24,
    fontWeight: "bold",
    
    color: Color.primary,
  },
});

export default Home;
