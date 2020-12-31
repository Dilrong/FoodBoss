import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { SCALE_16, SCALE_8 } from '_styles/spacing';
import { List, Divider, Modal, Title, Paragraph, Searchbar, ActivityIndicator } from 'react-native-paper';
import { ServiceKey } from '_utils/env'
import axios from 'axios';
const parser = require('fast-xml-parser');

const ExcessiveScreen = ({navigation}) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [rows, setRows] = useState([]);
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
        await axios.get(`http://apis.data.go.kr/1470000/FoodFlshdErtsInfoService/getFoodFlshdErtsItem?serviceKey=${ServiceKey}&Prduct=${String(searchQuery)}&pageNo=1&numOfRows=10`)
        .then((response) => {
            const result = parser.parse(response.data);
            setRows(result.response.body.items.item)
        })
        .catch((err) => {
            console.log(err)
        })
        setLoading(false)
    }

    useEffect(() => {
        getData();
    }, [onChangeSearch])

    return (
        <SafeAreaView style={styles.container}>
            <Searchbar
                placeholder="제품 이름을 입력해주세요."
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            {loading===true?
            <ActivityIndicator style={{ paddingTop: SCALE_16 }}/>:
            <FlatList data={rows} renderItem={renderItem} keyExtractor={item => item.id}/>
            }
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <Title>이유</Title>
                <Paragraph>{reason}</Paragraph>
                <Title/>
                <Title>결과</Title>
                <Paragraph>{result}</Paragraph>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchBar: {
        margin: SCALE_8,
    },
    menu: {
        paddingLeft: SCALE_8
    },
    detail: {
        marginLeft: SCALE_16,
    }
})

export default ExcessiveScreen;