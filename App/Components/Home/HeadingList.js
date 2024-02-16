import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Color from "../../Shared/Color";
import { useNavigation } from '@react-navigation/native';
const HeadingList = ({ newsList }) => {
  const navigation = useNavigation()
  return (
    <View style={{ padding: 12 }}>
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <View>
            <View style={{height:2 , backgroundColor:Color.lightGray,marginTop:7, marginBottom:5}}>
           </View>
            <TouchableOpacity onPress={()=>navigation.navigate('read-news', {news :item})}
              style={{
                marginBottom: 20,
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={{ width: 100, height: 100, borderRadius: 10 }}
              />
              <View style={{ marginLeft: 15, marginRight: 10 }}>
                <Text
                  numberOfLines={4}
                  style={{ fontSize: 18, fontWeight: "bold" }}
                >
                  {item.title}
                </Text>
                <Text style={{ color: Color.primary, marginTop: 6 }}>
                  {item?.source?.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default HeadingList;
