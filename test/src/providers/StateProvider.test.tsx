import type {ReactElement} from 'react';
import {Button, View} from 'react-native';
import type {RenderAPI} from '@testing-library/react-native';
import {act, fireEvent, render} from '@testing-library/react-native';

import {
  StateProvider,
  useStateContext,
} from '../../../src/providers/StateProvider';

const FakeChild = (): ReactElement => {
  const {setUser} = useStateContext();

  return (
    <View>
      <Button
        testID="BUTTON"
        onPress={(): void =>
          setUser({
            displayName: 'displayName',
            age: 12,
            job: 'dev',
          })
        }
        title="Button"
      />
    </View>
  );
};

describe('Rendering', () => {
  const component = (
    <StateProvider>
      <FakeChild />
    </StateProvider>
  );

  const testingLib: RenderAPI = render(component);

  it('renders component with provider', () => {
    const baseElement = testingLib.toJSON();

    expect(baseElement).toBeTruthy();
  });
});

describe('Interactions', () => {
  it('should setUser', async () => {
    const {getByTestId} = render(
      <StateProvider>
        <FakeChild />
      </StateProvider>,
    );

    act(() => {
      fireEvent.press(getByTestId('BUTTON'));
    });

    expect(1).toBeTruthy();
  });
});
