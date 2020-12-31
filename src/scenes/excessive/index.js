import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList, ScrollView, StatusBar, Platform } from 'react-native';
import { SCALE_16, SCALE_8 } from '_styles/spacing';
import { List, Divider, Modal, Title, Paragraph, Searchbar, ActivityIndicator } from 'react-native-paper';
import { ServiceKey } from '_utils/env'
import { useDebouncedEffect } from '../../utils/hooks/useDebouncedEffect'
import axios from 'axios';
const parser = require('fast-xml-parser');

const ExcessiveScreen = ({navigation}) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [rows, setRows] = useState([]);
    const [page, setPage]= useState(1);
    const [reason, setReason]= useState('');
    const [result, setResult]= useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20, margin: 20};

    const ListItem = ({ item }) => (
        <ScrollView>
            <List.Item
                title={item.PRDUCT}
                description={item.ENTRPS}
                onPress={() => {
                    setReason(item.FOUND_CN)
                    setResult(item.DSPS_CMMND)
                    showModal()
                }}
            />
            <Divider/>
        </ScrollView>
    )
    
    const renderItem = ({ item }) => <ListItem item={item} />;

    const getData = async() => {
        await axios.get(`http://apis.data.go.kr/1470000/FoodFlshdErtsInfoService/getFoodFlshdErtsItem?serviceKey=${ServiceKey}&Prduct=${encodeURI(searchQuery)}&pageNo=${page}&numOfRows=20`)
        .then((response) => {
            const result = parser.parse(response.data);
            setRows(result.response.body.items.item)
        })
        .catch((err) => {
            console.log(err)
        })
        setLoading(false)
    }

    const addData = async() => {
        await axios.get(`http://apis.data.go.kr/1470000/FoodFlshdErtsInfoService/getFoodFlshdErtsItem?serviceKey=${ServiceKey}&Prduct=${encodeURI(searchQuery)}&pageNo=${page}&numOfRows=20`)
        .then((response) => {
            const result = parser.parse(response.data);
            setRows(rows.concat(result.response.body.items.item))
        })
        .catch((err) => {
            console.log(err)
        })
        setLoading(false)
    }

    useEffect(() => {
        getData();
    }, [useDebouncedEffect, searchQuery])

    useEffect(() => {
        addData();
    }, [useDebouncedEffect, searchQuery, page])

    return (
        <SafeAreaView style={styles.container}>
            <Searchbar
                style={styles.searchBar}
                placeholder="제품 이름을 입력해주세요."
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            {loading===true?
            <ActivityIndicator style={{ paddingTop: SCALE_16 }}/>:
            <FlatList data={rows} renderItem={renderItem} keyExtractor={item => item.id} onEndReachedThreshold={0.2} onEndReached={() => {setPage(page + 1)}}/>
            }
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <Title>사유</Title>
                {reason.length===0?<Paragraph>알수없음</Paragraph>:<Paragraph>{reason}</Paragraph>}
                <Title/>
                <Title>결과</Title>
                {result.length===0?<Paragraph>알수없음</Paragraph>:<Paragraph>{result}</Paragraph>}
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    searchBar: {
        marginTop: SCALE_8,
        marginBottom: SCALE_8,
    },
    menu: {
        paddingLeft: SCALE_8
    },
    detail: {
        marginLeft: SCALE_16,
    }
})

export default ExcessiveScreen;