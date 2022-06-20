import React from 'react';
import { View, StyleSheet, Text, Platform, ScrollView, Pressable, Image, FlatList } from 'react-native';
import { styles } from './style';
import { CandySug, Types } from '../../assets/data/data'
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { LinearGradient } from 'expo-linear-gradient';

const TypesView = ({ type, active }) => (
    <View style={styles.candyType}>
        <Text style={{
            color: active ? '#03071e' : '#bcb8b1',
            marginRight: 10,
            fontSize: 16,
            fontWeight: '500',

        }}>{type}</Text>
    </View>
)

const Index = () => {
    const renderItem = ({ item }) => <TypesView type={item.type} active={item.active} />;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Best Deals for yous</Text>
                <Fontisto name='search' size={25} color={"#e76f51"} />

            </View>
            <FlatList style={{ padding: 0, margin: 0, }} data={Types} renderItem={renderItem} keyExtractor={item => item.id} horizontal />

            <ScrollView style={{ paddingLeft: 40, flexDirection: 'row', }} horizontal={true} showsHorizontalScrollIndicator={false}>

                {CandySug.map((item, key) => (
                    <View style={styles.candyContainer} key={key} backgroundColor={item.color} >
                        <Image style={styles.candyImages} source={{ uri: 'https://pngpress.com/wp-content/uploads/2020/09/uploads_jelly_candies_jelly_candies_PNG46.png' }} />
                        <Text style={styles.candyContainerTitle}>{item.titel}</Text>
                        <Text style={styles.candyContainerPrice}>{item.price}</Text>
                        <Pressable style={styles.addBtn} backgroundColor={item.BtnColor}>
                            <Fontisto name='plus-a' size={18} color={"#ffffff"} />
                        </Pressable>
                    </View>

                ))}

            </ScrollView>


            <View style={styles.TopmarketsWapper} >
                <Text style={styles.TopmarketsWapperTitle} >Top Markets</Text>
                <View>
                    <View style={styles.marketsWapper}>
                        <Image style={styles.images} source={{ uri: "https://cdn.shopify.com/s/files/1/0150/8992/6198/files/Collection-Box-3_d7300566-6a4e-416f-b18f-2f77d8f26241_900x.jpg?v=1654786779" }} />
                        <View>
                            <Text style={styles.marketsWapperTitle}>Dylan's candy Bar</Text>
                            <Text style={styles.marketsWapperLocation}>33 Union Squar W</Text>
                        </View>
                        <EvilIcons name='location' size={32} color={'#e36414'} />
                    </View>
                    <View style={styles.marketsWapper}>
                        <Image style={styles.images} source={{ uri: "https://cdn.shopify.com/s/files/1/0150/8992/6198/files/Collection-Box-3_d7300566-6a4e-416f-b18f-2f77d8f26241_900x.jpg?v=1654786779" }} />
                        <View>
                            <Text style={styles.marketsWapperTitle}>Dylan's candy Bar</Text>
                            <Text style={styles.marketsWapperLocation}>33 Union Squar W</Text>
                        </View>
                        <EvilIcons name='location' size={32} color={'#e36414'} />
                    </View>
                    <View style={styles.marketsWapper}>
                        <Image style={styles.images} source={{ uri: "https://cdn.shopify.com/s/files/1/0150/8992/6198/files/Collection-Box-3_d7300566-6a4e-416f-b18f-2f77d8f26241_900x.jpg?v=1654786779" }} />
                        <View>
                            <Text style={styles.marketsWapperTitle}>Dylan's candy Bar</Text>
                            <Text style={styles.marketsWapperLocation}>33 Union Squar W</Text>
                        </View>
                        <EvilIcons name='location' size={32} color={'#e36414'} />
                    </View>



                </View>
            </View>


            <LinearGradient colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.9)']} style={styles.moreBtnWapper}>
                <LinearGradient colors={['#fb8b24', '#e36414']} style={styles.moreBtn} >
                    <Text style={{ color: '#fff', fontWeight: '600' }}>$12.50</Text>
                    <AntDesign name='arrowright' size={25} color={"rgb(255,255,255)"} />

                </LinearGradient>
            </LinearGradient>



        </View>

    );
}



export default Index;
