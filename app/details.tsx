import {ScrollView, Text, View} from 'react-native';
import styled, {css} from '@emotion/native';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
`;

const CardContainer = styled.View`
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  align-self: stretch;
  gap: 24px;
  flex-direction: row;
`;

const Card = styled.View`
  border: 1px;
  border-radius: 16px;
  padding: 24px;
  flex: 1;
  background-color: white;
  align-self: stretch;

  gap: 12px;
`;

const data = [
  {
    number: 1,
    size: 10,
  },
  {
    number: 2,
    size: 20,
  },
  {
    number: 3,
    size: 30,
  },
  {
    number: 4,
    size: 40,
  },
  {
    number: 5,
    size: 50,
  },
  {
    number: 6,
    size: 60,
  },
];

export default function Details(): JSX.Element {
  return (
    <ScrollView>
      <Container>
        <CardContainer>
          <Card>
            <View
              style={css`
                border: 1px;
                border-radius: 8px;
                height: 120px;
              `}
            />
            <Text
              style={css`
                font-family: Pretendard-Bold;
                font-size: 20px;
              `}
            >
              title
            </Text>
            <Text
              style={css`
                font-family: Pretendard;
                font-size: 14px;
              `}
            >
              description
            </Text>
          </Card>
          <Card>
            <View
              style={css`
                border: 1px;
                border-radius: 8px;
                height: 120px;
              `}
            />
            <Text
              style={css`
                font-family: Pretendard-Bold;
                font-size: 20px;
              `}
            >
              title
            </Text>
            <Text
              style={css`
                font-family: Pretendard;
                font-size: 14px;
              `}
            >
              description
            </Text>
          </Card>
        </CardContainer>
        <CardContainer>
          <Card>
            <View
              style={css`
                border: 1px;
                border-radius: 8px;
                height: 120px;
              `}
            />
            <Text
              style={css`
                font-family: Pretendard-Bold;
                font-size: 20px;
              `}
            >
              title
            </Text>
            <Text
              style={css`
                font-family: Pretendard;
                font-size: 14px;
              `}
            >
              description
            </Text>
          </Card>
          <Card>
            <View
              style={css`
                border: 1px;
                border-radius: 8px;
                height: 120px;
              `}
            />
            <Text
              style={css`
                font-family: Pretendard-Bold;
                font-size: 20px;
              `}
            >
              title
            </Text>
            <Text
              style={css`
                font-family: Pretendard;
                font-size: 14px;
              `}
            >
              description
            </Text>
          </Card>
        </CardContainer>
        <CardContainer>
          <Card>
            <View
              style={css`
                border: 1px;
                border-radius: 8px;
                height: 120px;
              `}
            />
            <Text
              style={css`
                font-family: Pretendard-Bold;
                font-size: 20px;
              `}
            >
              title
            </Text>
            <Text
              style={css`
                font-family: Pretendard;
                font-size: 14px;
              `}
            >
              description
            </Text>
          </Card>
          <Card>
            <View
              style={css`
                border: 1px;
                border-radius: 8px;
                height: 120px;
              `}
            />
            <Text
              style={css`
                font-family: Pretendard-Bold;
                font-size: 20px;
              `}
            >
              title
            </Text>
            <Text
              style={css`
                font-family: Pretendard;
                font-size: 14px;
              `}
            >
              description
            </Text>
          </Card>
        </CardContainer>
        <CardContainer>
          <Card>
            <View
              style={css`
                border: 1px;
                border-radius: 8px;
                height: 120px;
              `}
            />
            <Text
              style={css`
                font-family: Pretendard-Bold;
                font-size: 20px;
              `}
            >
              title
            </Text>
            <Text
              style={css`
                font-family: Pretendard;
                font-size: 14px;
              `}
            >
              description
            </Text>
          </Card>
          <Card>
            <View
              style={css`
                border: 1px;
                border-radius: 8px;
                height: 120px;
              `}
            />
            <Text
              style={css`
                font-family: Pretendard-Bold;
                font-size: 20px;
              `}
            >
              title
            </Text>
            <Text
              style={css`
                font-family: Pretendard;
                font-size: 14px;
              `}
            >
              description
            </Text>
          </Card>
        </CardContainer>
      </Container>
    </ScrollView>
  );
}
