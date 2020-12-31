import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Platform, FlatList, ScrollView, View, Image, Share } from 'react-native';
import { Title, Paragraph, Subheading } from 'react-native-paper';
import { SCALE_16, SCALE_8 } from '_styles/spacing';

const HelpScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Title>식품대장</Title>
                <Paragraph>안녕하세요. 식품대장입니다.</Paragraph>
                <Paragraph>식품대장은 안전한 식생활을 위해 불량 식품 정보를 하는 서비스입니다.</Paragraph>
                <Title/>
                <Subheading style={styles.bold}>1. 주요 정보 출처 및 요약설명</Subheading>
                <Subheading>허위·과대광고 정보</Subheading>
                <Paragraph>- 식품의약품안전처의 허위·과대광고 정보 서비스 API를 이용하고 있습니다.</Paragraph>
                <Title/>
                <Subheading>회수·판매중지 정보</Subheading>
                <Paragraph>- 식품의약품안전처의 회수·판매중지 정보 서비스 API를 이용하고 있습니다.</Paragraph>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        margin: SCALE_8
    },
    bold: {
        fontWeight: 'bold'
    }
})

export default HelpScreen;