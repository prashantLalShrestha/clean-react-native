import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { subplatform } from '@mobile/base';
import R from '@mobile/res';
import {
  SplashViewModelContextProvider,
  useSplashViewModel,
} from '../viewmodels';
import { observer } from 'mobx-react';

const SplashView = observer(() => {
  const viewModel = useSplashViewModel();
  const platformValue = subplatform
    ? `${Platform.OS} (${subplatform})`
    : Platform.OS;

  return (
    <SafeAreaView style={styles.root}>
      <Image
        style={styles.logo}
        source={R.images.logo as ImageSourcePropType}
      />
      <Text style={styles.text}>{viewModel.title}</Text>
      <View style={styles.platformRow}>
        <Text style={styles.text}>Platform: </Text>
        <TouchableOpacity
          onPress={() => {
            viewModel.login();
          }}
          style={styles.platformBackground}>
          <Text style={styles.platformValue}>
            {platformValue}: {viewModel.count}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  root: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
  },
  platformRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  platformValue: {
    fontSize: 28,
    fontWeight: '500',
  },
  platformBackground: {
    backgroundColor: '#ececec',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#d4d4d4',
    paddingHorizontal: 6,
    borderRadius: 6,
    alignItems: 'center',
  },
});

export default () => (
  <SplashViewModelContextProvider>
    <SplashView />
  </SplashViewModelContextProvider>
);
