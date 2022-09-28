import React, {ChangeEvent, FormEventHandler, SyntheticEvent, useEffect, useState} from "react";
import {styled} from "@app/styling";
import Exchange from "@app/Components/Exchange";
import Flex from "@app/Components/Flex";
import Input from "@app/Components/Input";
import Button from "@app/Components/Button";
import Result from "@app/Components/Result";
import Text from "@app/Components/Text";
import Arrow from "@app/Components/Arrow";
import Select from "@app/Components/Select";
import {useCurrencyDispatch, useCurrencyStore} from "@app/Context/Currency/Provider";
import {createSelect} from "@app/Context/Currency/actions";
import {selectedExchangeRate} from "@app/Context/Currency/selectors";

const ICON = {
  color: '$gray400',
  height: 24,
  width: 24
};

const SmallArrow = styled(Arrow, {...ICON, margin: '0 $4'});
const SmallExchange = styled(Exchange, {...ICON, color: '$base'});
const InputWithGrow = styled(Input, {flexGrow: 1});
const SelectWithGrow = styled(Select, {flexGrow: 1});
const LineControls = styled(Flex, {width: '100%', marginBottom: '$5'});
const ButtonLabel = styled('span', {marginRight: '$2'});

const ExchangeForm = () => {
  const dispatch = useCurrencyDispatch();
  const store = useCurrencyStore();
  
  const {data, selected} = store;
  
  const [amount, setAmount] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  
  useEffect(() => setResult(0), [selected]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    
    const selected = selectedExchangeRate(store);
    if (!selected || !amount || amount <= 0) return;

    setResult(amount / selected.value);
    return false;
  };
  const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => dispatch(createSelect(e.target.value));
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => setAmount(parseFloat(e.target.value));
  
  return (
    <form onSubmit={handleSubmit}>
      <Flex column align="center">
        <LineControls justify="spaceEvenly" align="center">
          <InputWithGrow type="number" placeholder="0.00" currency="CZK" value={amount} onChange={handleAmountChange} />
          <SmallArrow />
          <SelectWithGrow value={selected} onChange={handleCurrencyChange}>
            <option value="">&nbsp;</option>
            {data && data.map(({code}) => (
              <option key={code} value={code}>{code}</option>
            ))}
          </SelectWithGrow>
        </LineControls>
        <Button type="submit">
          <ButtonLabel>Exchange</ButtonLabel>
          <SmallExchange />
        </Button>
        {selected && (
          <Result>{result.toFixed(3)} <Text color="muted" weight="bold">{selected}</Text></Result>
        )}
      </Flex>
    </form>
  );
};

export default ExchangeForm;