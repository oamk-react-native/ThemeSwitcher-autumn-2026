import { Appbar } from 'react-native-paper';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';


function MainAppBar(props: NativeStackHeaderProps) {
  const { navigation, route, options } = props as NativeStackHeaderProps;
  const title = (options?.title) || route?.name || 'Title';
  const canGoBack = navigation.canGoBack ? navigation.canGoBack() : false;
  return (
    <Appbar.Header
      mode="center-aligned">
      {canGoBack ? (
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
      ) : null}
      <Appbar.Content title={title} />
      {canGoBack ? null : (
        <Appbar.Action
          icon="cog"
          onPress={() => {
            navigation.navigate('Settings');
          }}
        />
      )}
    </Appbar.Header>
  );
}
export default MainAppBar;