// Note: CustomDrawer navigation component...!

import React, { useState } from 'react'
import {
    ImageBackground,
    StyleSheet,
    View,

}
    from "react-native";

import {
    Avatar,
    Title,
    Caption,
    Drawer,
    TouchableRipple,
    Switch,
    Text
}
    from "react-native-paper";

import { DrawerContentScrollView } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconsFromIonicons from "react-native-vector-icons/Ionicons";
import IconsFromFontAwesome from "react-native-vector-icons/FontAwesome";
import IconsFromMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconsFromMaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons"
import IconsFromFontAwesome5 from "react-native-vector-icons/FontAwesome5";

const CustomDrawer = (props) => {
    console.log(props);

    // Note: Function to logout user...!
    const logOut = () => {
        props.navigation.closeDrawer();
    }

    // Note: setting modal state 

    const [modalVisible, setModalVisible] = useState(false);

    //Note: setting switch state

    const [isEnglish, setIsEnglish] = useState(false);


    const toggleLang = () => {

        setIsEnglish(!isEnglish);

    }

    const popupModal = () => {



    }

    return (
        <React.Fragment>
            {/* Note: Main container */}
            <ImageBackground source={require('../../../assets/images/menubg.png')} style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>

                    {/* Note: Drawer scrolling container */}
                    <DrawerContentScrollView {...props}>

                        {/* Note: Drawer content container */}
                        <View style={styles.drawerContent}>

                            {/* Note: user information container */}
                            <View style={styles.userInfoSection}>
                                <View style={{ flexDirection: "row", marginTop: 15 }}>
                                    <Avatar.Image
                                        source={require('./images/default.png')}
                                        size={50}
                                    />
                                    <View style={{ flexDirection: "column", marginLeft: 15 }}>
                                        <Title style={styles.title}> Your Name </Title>
                                        <Caption style={styles.caption}> example@email.com </Caption>
                                    </View>
                                </View>
                            </View>

                            {/* Note: Drawer navigation screen container */}
                            <Drawer.Section style={styles.drawerSection}>

                                {/* Note: Home screen */}
                                <Drawer.Item style={styles.itemSection}
                                    icon={
                                        ({ color, size }) => (
                                            <IconsFromFontAwesome5
                                                name="user-alt"
                                                color="#299371"
                                                size={size}
                                            />
                                        )
                                    }
                                    label=" My Profile"
                                    onPress={() => {
                                        props.navigation.navigate('Edit Profile')
                                    }}
                                >
                                </Drawer.Item>

                                {/* Note: TicketForm Screen */}
                                <Drawer.Item style={styles.itemSection}
                                    icon={
                                        ({ color, size }) => (
                                            <Icon
                                                name="lock"
                                                color="#299371"
                                                size={size}
                                            />
                                        )
                                    }
                                    label="Update Password"
                                    onPress={() => {
                                        props.navigation.navigate('Change Password');
                                    }}
                                >
                                </Drawer.Item>

                                {/* Note: Notification screen */}
                                <Drawer.Item style={styles.itemSection}
                                    icon={
                                        ({ color, size }) => (
                                            <IconsFromIonicons
                                                name="power"
                                                color="#299371"
                                                size={size}
                                            />
                                        )
                                    }
                                    label="Logout"
                                    onPress={() => {
                                        props.navigation.navigate('Login')
                                    }}
                                >
                                </Drawer.Item>



                                <TouchableRipple onPress={() => { toggleLang() }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={styles.switchContainer}>
                                            <Text>English</Text>
                                            <View style={{ borderWidth: 1, borderColor: '#299371', borderRadius: 10 }} pointerEvents="none">
                                                <Switch value={isEnglish}
                                                    color={'#299371'}
                                                />
                                            </View>
                                            <Text>عربي</Text>
                                        </View>
                                        <View style={styles.switchTextContainer}>
                                            {
                                                (isEnglish)
                                                    ?
                                                    (
                                                        <Text>Arabic version is under construction</Text>

                                                    )
                                                    :
                                                    (
                                                        <Text>Selected Language is English</Text>
                                                    )
                                            }
                                        </View>
                                    </View>

                                </TouchableRipple>

                            </Drawer.Section>
                        </View>
                    </DrawerContentScrollView>

                </View>
            </ImageBackground>
        </React.Fragment>
    );
}

// Note: Handeling styling here...!
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },

    userInfoSection: {
        borderBottomWidth: 1,
        borderBottomColor: "silver",
        paddingLeft: 20,
        paddingBottom: 5
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 3
    },

    caption: {
        fontSize: 14,
        lineHeight: 14
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20
    },

    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15
    },

    drawerSection: {
        marginTop: 15,
        paddingTop: 30
    },

    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: 'silver',
        borderTopWidth: 1
    },
    itemSection: {
        marginVertical: 15
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 25,
    },
    switchTextContainer: {
        alignContent: 'center',
        paddingLeft: 24,
        paddingVertical: 10
    }

});

export { CustomDrawer };