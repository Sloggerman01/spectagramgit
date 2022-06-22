import React from "react"
import {createDrawerNavigator} from "@react-navigation/drawer"
import TabNavigator from "./TabNavigator"
import Profile from  "../screens/Profile"

const Drawer = createDrawerNavigator();
const DrawerNavigator = ()=>{
return(
    <DrawerNavigator>
        drawerContent = {(props)=><CustomSidebarMenu{...props}/>}
        <Drawer.screen name = "Home" component={TabNavigator}/>
        <Drawer.screen name = "Profile" component={Profile}/>
    </DrawerNavigator>
)}
export default DrawerNavigator