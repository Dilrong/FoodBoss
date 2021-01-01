import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Title, Paragraph, Subheading } from 'react-native-paper';
import { SCALE_16 } from '_styles/spacing';

const HelpScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.content}>
                <Title>1. 식품대장 소개</Title>
                <Paragraph>안녕하세요! 식품대장입니다.</Paragraph>
                <Paragraph>식품대장은 온가족의 안전한 식생활을 위해 식품의약품안전처에서 제공하는 데이터를 쉽고 편안하게 볼 수 있도록 변환하여 불량 식품 정보를 알려드리고 있습니다.</Paragraph>
                <Title/>
                <Title>2. 주요 정보 출처 및 요약설명</Title>
                <Subheading style={styles.bold}>허위·과대광고 정보</Subheading>
                <Paragraph>- 식품의약품안전처의 허위·과대광고 정보 서비스 API를 이용하고 있습니다.</Paragraph>
                <Subheading style={styles.bold}>회수·판매중지 정보</Subheading>
                <Paragraph>- 식품의약품안전처의 회수·판매중지 정보 서비스 API를 이용하고 있습니다.</Paragraph>
                <Title/>
                <Title>3. 제휴 및 문의 사항</Title>
                <Paragraph>제휴 및 문의 사항은 아래 연락처로 주시면 검토후 연락드리겠습니다.</Paragraph>
                <Subheading style={styles.bold}>이메일</Subheading>
                <Paragraph>dilrong@dilrong.com</Paragraph>
                <Subheading style={styles.bold}>블로그</Subheading>
                <Paragraph>https://blog.naver.com/dilrong</Paragraph>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        margin: SCALE_16
    },
    bold: {
        fontWeight: 'bold'
    }
})

export default HelpScreen;