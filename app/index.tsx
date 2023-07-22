import {type ReactElement} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styled, {css} from '@emotion/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, SwitchToggle, useDooboo} from 'dooboo-ui';
import {Stack, useRouter} from 'expo-router';

import {IC_DOG, IC_MASK} from '../src/icons';
import {t} from '../src/STRINGS';
import {AsyncStorageKey} from '../src/utils/constants';

const Container = styled.View`
  background-color: ${({theme}) => theme.bg.basic};

  flex: 1;
  align-self: stretch;
`;

const Content = styled.View`
  padding: 16px;

  justify-content: center;
  align-items: center;
`;

export default function Index(): ReactElement {
  const {themeType, changeThemeType} = useDooboo();
  const {push} = useRouter();

  return (
    <Container>
      <Stack.Screen
        options={{
          title: t('HOME'),
        }}
      />
      <ScrollView>
        <ScrollView horizontal={true}>
          <View
            style={css`
              background-color: gray;

              align-items: center;
              flex-direction: row;
              gap: 8px;
              padding: 16px;
            `}
          >
            <TouchableOpacity
              onPress={() => {
                console.log('Clicked!');
                push('/details');
              }}
            >
              <Image
                source={IC_DOG}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 16,
                }}
              />
            </TouchableOpacity>
            <Image source={IC_MASK} />
            <Image source={IC_MASK} />
            <Image source={IC_MASK} />
            <Image source={IC_MASK} />
          </View>
        </ScrollView>
        <View
          style={css`
            background-color: blue;
            flex: 1;

            gap: 16px;
            padding: 16px;
          `}
        >
          <Image
            source={IC_DOG}
            style={{
              width: 380,
              height: 240,
              borderRadius: 16,
            }}
          />
          <Image
            source={IC_DOG}
            style={{
              width: 380,
              height: 240,
              borderRadius: 16,
            }}
          />
          <Image
            source={IC_DOG}
            style={{
              width: 380,
              height: 240,
              borderRadius: 16,
            }}
          />
        </View>
      </ScrollView>
    </Container>
  );
}
