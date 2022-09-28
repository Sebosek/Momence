import React, {FunctionComponent} from 'react';
import {styled} from '@app/styling';
import RoundButton from '@app/Components/RoundButton';
import Flex from '@app/Components/Flex';
import Text from '@app/Components/Text';
import Amount from '@app/Components/Amount';
import CurrencyCard from '@app/Components/CurrencyCard';
import Arrow from '@app/Components/Arrow';
import Close from '@app/Components/Close';
import {useCurrencyDispatch, useCurrencyStore} from "@app/Context/Currency/Provider";
import {createSelect} from "@app/Context/Currency/actions";

const ICON = {
  color: '$gray400',
  height: 24,
  width: 24
};

const SmallArrow = styled(Arrow, ICON);
const SmallClose = styled(Close, { ...ICON, color: '$base'});

const CurrencyList: FunctionComponent = () => {
  const {data, selected} = useCurrencyStore();
  const dispatch = useCurrencyDispatch();
  
  const handleSelect = (code: string) => () => dispatch(createSelect(code));
  const handleDeselect = () => dispatch(createSelect(undefined));
  
  if (!data) {
    return null;
  }
  
  return (
    <Flex column>
      {data.map(({country, code, value}) => (
        <CurrencyCard key={country} active={code === selected}>
          <Flex column>
            <Flex justify='spaceBetween'>
              <Flex column>
                <Text>{country}</Text>
                <Text variant='caption' color='muted'>{code}</Text>
              </Flex>
              <Flex align='center'>
                <Amount css={{marginRight: '$4'}}>{value.toFixed(3)}</Amount>
                  {code !== selected && (
                    <RoundButton active={code === selected} onClick={handleSelect(code)}>
                      <SmallArrow />
                    </RoundButton>
                  )}
                  {code === selected && (
                    <RoundButton active={code === selected} onClick={handleDeselect}>
                      <SmallClose />
                    </RoundButton>
                  )}
              </Flex>
            </Flex>
          </Flex>
        </CurrencyCard>
      ))}
    </Flex>
  )
};

export default CurrencyList;