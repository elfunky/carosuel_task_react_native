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
  SafeAreaView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/ionicons';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-material-cards';
import Icon from 'react-native-vector-icons/AntDesign';
import {originalName as alias} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from 'react-native-dynamic-search-bar';
const {width, height} = Dimensions.get('screen');

export default function ScanDeatails({navigation}) {
  const myIcon2 = <Icon name="pluscircle" size={60} color="#49A6FC" />;
  const myIcon3 = <Icon name="setting" size={25} color="#161616" />;
  return (
    <SafeAreaView>
      <LinearGradient
        colors={[
          'rgba(222, 221, 221, 1)',
          'rgba(255, 255, 255, 0)',
          'rgba(255, 255, 255, 1)',
        ]}>
        <View style={styles.container}>
          <View>
            <Text
              style={{
                flexDirection: 'row',
                fontWeight: '700',
                fontSize: 34,
                fontFamily: 'SF Pro Rounded',
                padding: 20,
              }}>
              Good Evening
              {/* <Image style={{width:40,height:200,backgroundColor:'red'}} source={require('./../assets/Frame75.png')} /> */}
            </Text>
            <Image
              source={{
                uri: 'http://www.simpleimageresizer.com/_uploads/photos/97380950/Frame75_99.png',
              }}
              style={{width: 40, height: 30, marginLeft: 315, marginTop: -33}}
            />
          </View>
          <View>
            <Text
              style={{
                color: '#9B9B9B',
                fontFamily: 'SF Pro Rounded',
                fontWeight: '500',
                fontSize: 18,
                marginLeft: 25,
                marginTop: -15,
              }}>
              Welcome back
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <LinearGradient
                colors={[
                  'rgba(5, 99, 219, 1)',
                  'rgba(15, 140, 255, 1)',
                  'rgba(2, 82, 202, 1)',
                ]}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={{
                  // backgroundColor: '#ffad2f',
                  // marginLeft: 20,
                  margin: 30,
                  width: 327,
                  height: 87,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  // shadowOpacity: 0.32,
                  // shadowRadius: 5.46,
                  borderRadius: 10,

                  // elevation: 9,
                  marginTop: 18,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '700',
                    fontFamily: 'SF Pro Rounded',
                    fontSize: 18,
                    padding: 10,
                  }}>
                  Unlock Premium
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '700',
                    fontFamily: 'SF Pro Rounded',
                    fontSize: 12,
                    marginLeft: 10,
                  }}>
                  Create Unlimeted HD Scan & Picture to Text{'\n'}Scans Without
                  Watermarks
                </Text>
                <Image
                  source={{
                    uri: 'http://www.simpleimageresizer.com/_uploads/photos/bbe4d77c/Premium_Banner_99.png',
                  }}
                  style={{
                    width: 86,
                    height: 80,
                    marginTop: -74,
                    marginLeft: 241,
                  }}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View>
            <SearchBar
              height={38}
              fontSize={14}
              fontColor="#fdfdfd"
              iconColor="#9B9B9B"
              shadowColor="#282828"
              cancelIconColor="#fdfdfd"
              // backgroundColor="#ba312f"
              placeholder="Search through your scans"
              fontFamily="BurbankBigCondensed-Black"
              style={{borderRadius: 20}}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={{
                uri: 'http://www.simpleimageresizer.com/_uploads/photos/bbe4d77c/Vector_2_99.png',
              }}
              style={{width: 29, height: 29, marginLeft: 60, marginTop: 36}}
            />
            <Image
              source={{
                uri: 'http://www.simpleimageresizer.com/_uploads/photos/bbe4d77c/Frame_90_2_99.png',
              }}
              style={{width: 29, height: 29, marginLeft: 84, marginTop: 36}}
            />
            <Image
              source={{
                uri: 'http://www.simpleimageresizer.com/_uploads/photos/bbe4d77c/Frame_90_1_99.png',
              }}
              style={{width: 29, height: 29, marginLeft: 84, marginTop: 36}}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '700',
                margin: 10,
                marginLeft: 35,
                fontFamily: 'SF Pro Rounded',
              }}>
              Single Scan
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '700',
                margin: 10,
                marginLeft: 20,
                fontFamily: 'SF Pro Rounded',
              }}>
              Batch Scan
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '700',
                margin: 10,
                marginLeft: 20,
                fontFamily: 'SF Pro Rounded',
              }}>
              Scan to Text{' '}
            </Text>
          </View>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 24,
              fontFamily: 'SF Pro Rounded',
              marginLeft: 25,
              marginTop: 15,
            }}>
            Recent Scan
          </Text>
          <View>
            <Image
              source={{
                uri: 'http://www.simpleimageresizer.com/_uploads/photos/bbe4d77c/Library_1_99.png',
              }}
              style={{width: 375, height: 200, marginLeft: 20}}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                padding: 10,
                marginLeft: 10,
              }}>
              Folders
            </Text>
            <Image
              source={{
                uri: 'http://www.simpleimageresizer.com/_uploads/photos/bbe4d77c/Title_Row_1_99.png',
              }}
              style={{
                width: 17,
                height: 17,
                marginLeft: 240,
                padding: 10,
                marginTop: 20,
              }}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Carosuel_sc');
              }}
              style={styles.blueIcons}>
              {myIcon2}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Carosuel_sc');
              }}
              style={styles.settings}>
              {myIcon3}
            </TouchableOpacity>
            <Image
              source={{
                uri: 'http://www.simpleimageresizer.com/_uploads/photos/bbe4d77c/Vector_3_99.png',
              }}
              style={{
                width: 17,
                height: 17,
                marginLeft: 50,
                padding: 10,
                marginTop: -42,
              }}
            />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems:'center'
    marginTop: 20,
  },
  blueIcons: {
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: -25,
  },
  settings: {
    marginLeft: 310,
    marginTop: -25,
    marginBottom: 25,
  },
});
