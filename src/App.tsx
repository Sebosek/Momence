import React from 'react';
import {styled} from '@app/styling';
import Centered from '@app/Components/Centered';
import Header from '@app/Components/Header';
import Content from '@app/Components/Content';
import CurrencyList from '@app/Components/CurrencyList';
import Stripped from '@app/Components/Stripped';
import Card from '@app/Components/Card';
import CardTitle from '@app/Components/CardTitle';
import ExchangeForm from '@app/Components/ExchangeForm';
import Grid from '@app/Components/Grid';
import Text from '@app/Components/Text';
import {useCurrencyStore} from "@app/Context/Currency/Provider";
import {isLoading} from "@app/Context/Currency/selectors";

const Fixed = styled('div', {
  position: 'relative',
  transform: 'translateX(0)',
});

const StickyCard = styled(Card, {
  position: 'sticky',
  width: '100%',
  top: '$5',
});

function App() {
  const store = useCurrencyStore();
  
  return (
    <Centered vertical>
      <Header>Currency <Stripped>Exchange</Stripped></Header>
      <Content>
        {isLoading(store) && (
          <Text>Loading...</Text>
        )}
        {!isLoading(store) && store.error && (
          <Text>{store.error}</Text>
        )}
        {!isLoading(store) && store.data && (
          <Grid>
            <CurrencyList />
            <Fixed>
              <StickyCard>
                <CardTitle>Exchange</CardTitle>
                <ExchangeForm />
              </StickyCard>
            </Fixed>
          </Grid>
        )}
      </Content>
    </Centered>
  );
}

export default App;
