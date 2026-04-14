// import React from "react";
// import {View, Text, Image, StyleSheet, Dimensions} from 'react-native'
// import Swiper from 'react-native-swiper'

// const {width} = Dimensions.get('window');

// const slides = Array.from({length: 5}).map((_ , 1) => ({
//     id: i.toString(),
//     title:  `Slide ${i+ 1}`,
//     image: `https://picsum.photos/800/400?random=${1}`,

// }));

// const Slider = () => {
//     return (
//         <View style={styles,container}>
//             <Swiper autoplay loop showsPagination style={styles.swiper} >
                
//                      {slides.map((item) => (
//                         <View key={item.id} style={styles.slide}>
//                     <Image source={{uri:item.image}} style={{width: '100%', height: 200}} />
//                     <Text style={styles.text}>{item.title}</Text>
//                 </View>
//                         ))}

//             </Swiper>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff'
//     },
//     swiper:{
//         width: width,
//         height: 250,
//     },
//     slide:{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     text:{
//         color: '#fff',
//         fontSize: 30,
//         position: 'absolute'
//         bottom: 10,
//         backgroundColor: '#000',
//         paddingHorizontal: 10,
//         borderRadius: 5,
//     },
// })

// export default Example;