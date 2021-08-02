import React, {useState, useEffect, useRef} from 'react';
import {
  StatusBar,
  Animated,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {originalName as alias} from 'react';
const {width, height} = Dimensions.get('screen');

// https://www.flaticon.com/packs/retro-wave
// inspiration: https://dribbble.com/shots/11164698-Onboarding-screens-animation
// https://twitter.com/mironcatalin/status/1321180191935373312

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
  {
    key: '3571572',
    title: 'Scan anything in HD, wherever you are...',
    description:
      'Simply launch the AirScan app and scan any document,papers or real world photographs is seconds',
    image:
      'http://www.simpleimageresizer.com/_uploads/photos/6be1ac20/Frame_65_3_91.png',
  },
  {
    key: '3571747',
    title: 'Navigate work documents like a Pro',
    description:
      'Scan and organize your work documents in structured folders.Scan single or multiple documents in one swift go. Merge scans into PDFs, recorder pages and share them on the fly',
    image:
      'http://www.simpleimageresizer.com/_uploads/photos/6be1ac20/Frame_66_2_93.png',
  },
  {
    key: '3571680',
    title: 'Less time scanning homework= more time for fun',
    description:
      'Scanning of homework and assignments ara a breeze with AirScan. Caoture scans, generate PDFs and push them to any app installed on your phone. Its that easy!',
    image:
      'http://www.simpleimageresizer.com/_uploads/photos/6be1ac20/Frame_67_1_85.png',
  },
  {
    key: '3571603',
    title: 'Convert Pictures to Text with our nest generation offline OCR',
    description:
      'Leverage our cutting edge machine learning OCR to convert documents to text in seconds with accurate results. Share OCR scans as Doc files of PDFs in seconds',
    image:
      'http://www.simpleimageresizer.com/_uploads/photos/6be1ac20/Frame_67_1_1_85.png',
  },
];

const Indicator = ({scrollX}) => {
  return (
    <View style={{position: 'absolute', bottom: 50, flexDirection: 'row'}}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.5, 0.8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: '#49A6FC',
              margin: 10,
              transform: [{scale}],
              opacity,
            }}
          />
        );
      })}
    </View>
  );
};
export default function Carosuel({navigation}) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const myIcon1 = <Icon name="rightcircle" size={60} color="#49A6FC" />;

  // for navigation
  const onPressHandler = () => {
    navigation.navigate('ScanDeatails_sc');
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Animated.FlatList
        data={DATA}
        keyExtractor={item => item.key}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        // contenentContainerStyle={{paddingBottom: 100}}
        showHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item}) => {
          return (
            <View style={{width, alignItems: 'center'}}>
              <View style={{flex: 0.6, justifyContent: 'center', padding: 10}}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    width: 300,
                    height: 300,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View style={{flex: 0.3}}>
                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 27,
                    marginBottom: 10,
                    marginTop: -20,
                    margin: 25,
                    fontFamily: 'SF Pro Rounded',
                    color: '#000000',
                    textAlign: 'center',
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontWeight: '300',
                    margin: 25,
                    fontSize: 15,
                    textAlign: 'center',
                  }}>
                  {item.description}
                </Text>
              </View>

              {item.key == 3571603 && (
                <TouchableOpacity
                  onPress={() => {
                    // navigation.navigate('ScanDeatails_sc');
                    onPressHandler();
                  }}
                  style={styles.blueIcons}>
                  {myIcon1}
                </TouchableOpacity>
              )}
            </View>
          );
        }}
      />
      <Indicator scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueIcons: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginLeft: 275,
    marginBottom: -40,
  },
});
