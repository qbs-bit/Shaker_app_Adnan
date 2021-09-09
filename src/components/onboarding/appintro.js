import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SliderIntro from 'react-native-slider-intro'

const CustomText = () => {
    return (
        <View>
            <Text style={{ fontSize: 20 }}> Hello Ahmed </Text>
        </View>
    );
}

const slides = [
    {
        index: 1,
        title: '',
        text: 'Sign up to the app',
        image: require('../../../assets/images/image1.png'),
        backgroundColor: '#299371',
    },
    {
        index: 2,
        title: '',
        text: 'Submit your complaint',
        image: require('../../../assets/images/image1.png'),
        backgroundColor: '#299371',
    },
    {
        index: 3,
        title: '',
        text: 'Recieve complaint number',
        image: require('../../../assets/images/image2.png'),
        backgroundColor: '#299371',
    }
]


const renderNextButton = () => {
    return (
        <View style={styles.nextButton}>
            <Text style={styles.text}>Next</Text>
        </View>
    );
};

const renderDoneButton = () => {
    return (
        <View style={styles.nextButton}>
            <Text style={styles.text}>Done</Text>
        </View>
    );
};

const renderSkipButton = () => {
    return (
        <View>
            <Text style={styles.text}>Skip</Text>
        </View>
    );
};

const AppIntro = ({ navigation }) => {

    const toLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <SliderIntro
            renderNextButton={renderNextButton}
            renderDoneButton={renderDoneButton}
            renderSkipButton={renderSkipButton}
            onDone={toLogin}
            onSkip={toLogin}
            fixDotBackgroundColor={'black'}
            animateSlideSpeed={20}
            animateDotSpeed={10}
            navContainerMaxSizePercent={0.3}
            navigationBarHeight={150}
            navigationBarBottom= {10}
            columnButtonStyle={true}
            data={slides}
        />
    );

};

const styles = StyleSheet.create({
    text: {
        color: 'white',
        backgroundColor: '#299371',
        fontSize: 15,
    },
})

export default AppIntro