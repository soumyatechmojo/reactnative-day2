import React from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";
import useFetch from "./useFetch";

export default ()=>{
    const url ="https://jsonplaceholder.typicode.com/users"

    const {loading,error,data=[]} = useFetch(url)

    if(error) return <View><Text>Error!</Text></View>
    if(loading) return <View><ActivityIndicator size="large" /></View>


    return (
        <View>
        <View>
            <Text>
                Users for this Project Only!
            </Text>
        </View>
        <FlatList
        data={data}
        renderItem={({item:{id,email},index})=>{
            return (
                <View>
                    <Text>{id}-{email}</Text>
                </View>
            )
        }}>
        </FlatList>       
    </View>
    )
 }


