import React, {useState, useMemo} from 'react';
import  List from './List';
import cards from '../cards';

function mapItems(items) {
    return items.map((value, i) => ({key:i.toString(), value}));
}


function filterAndSort(text) {
    cards.map( card => {
        const {description} = card;
        const array = new Array(100).fill(null).map((value, i) => {description});
        return array
        .filter((i) => text.length === 0 || i.includes(text));
    })
}


export default function ListContainer() {
    const [filter, setFilter] = useState('');

    const data = useMemo(() => {
        return filterAndSort(filter);
    }, [filter]);

    return (
        <List
            data = {mapItems(data)}
            onFilter = {(text) => {
                setFilter(text);
            }}
        />
    )
}