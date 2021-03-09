import React from 'react';
import { Container, Form } from './styles';
import { GoSearch } from 'react-icons/go';
import { Slider } from '@material-ui/core';

const Filter = () => {

    function valuetext(value: number) {
        return `R$${value}`;
    }

    const [value, setValue] = React.useState<number[]>([0, 500]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <Container>
            <header> </header>
            <Form>
                <input type="text" placeholder="O que busca?" />
                <button type="submit"><GoSearch /></button>
                <p> </p>
                <select>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
                <p></p>
                <select>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
                <p></p>
                <select>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
                <p></p>
                <Slider
                    className='slider'
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                    min={0}
                    max={500}
                />
            </Form>
        </Container>
    )

}

export default Filter;
