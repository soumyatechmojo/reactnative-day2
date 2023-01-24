import React, { useState,useLayoutEffect } from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native';
import { Ionicons} from '@expo/vector-icons';
import Colors from '../constants/colors';

const ListButtons= ({ title,color,navigation,onDelete }) => {
    return (
        <TouchableOpacity onPress={() => {navigation.navigate('Projectlist', {title,color}) }} style={[styles.itemContainer, {backgroundColor:color}]}>
            <View>
                <Text style={styles.itemTitle}>{title}</Text>
            </View>

            <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>{ }}>
                <Ionicons name='options' size={24} color="green" />
            </TouchableOpacity>  
                
            <TouchableOpacity onPress={onDelete}>
                <Ionicons name='trash' size={24} color="red" />
            </TouchableOpacity>
            </View>
        </TouchableOpacity>

    )
}

//add project component



const projectList = 
[   
    {title: "Bank-Design Phase", color: Colors.green},
    {title:"Mutual Fund- Analysis Phase", color:Colors.blue},
    {title: "Food App- Testing Phase", color: Colors.purple}
]

const Home = ({navigation}) =>{
    const [projects,setProjects] = useState(projectList)

    const removeProject = (index) => {
        const projectsCopy = [...projects];
        projectsCopy.splice(index, 1);
        setProjects(projectsCopy);
    };
    
    //Add Project
    const addProject = (project)=>{
        setProjects([...projects,projects])
    }

    

    useLayoutEffect(()=>{
        navigation.setOptions({
            headrRight:()=>renderAddListIcon(addProject)
        })
    })
    return (
        <View style={styles.container}>
            <Text>Hi, Soumyadeep! Welcome to the world</Text>
            <FlatList data={projects} renderItem= {({item:{title,color}, index}) =>{
                return(
                    <ListButtons 
                    title={title} 
                    color={color} 
                    navigation={navigation}
                    onDelete = {()=>removeProject(index)} 
                    />
                )
            }} />
        </View>
    )
}


export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
    },
    itemTitle: { fontSize: 24, padding: 5, color: "white" },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        flex: 1,
        borderRadius: 30,
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 5,
        backgroundColor:Colors.blue
    },
    icon: {
        padding: 5,
        fontSize: 24,
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});