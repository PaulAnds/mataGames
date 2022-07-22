import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text } from 'react-native';
import styles from '../styles';
import ListControls from './ListControls';

function List({Controls, data, onFilter}) {
    return (
        <FlatList
            data={data}
            ListHeaderComponent={<Controls {...{onFilter}}/>}
            renderItem={({item}) => <Text style={styles.item}> {item.value}</Text>}
        />
    );
}

List.propTypes = {
    Controls: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    onFilter: PropTypes.func.isRequired,
}

List.defaultProps = {
    Controls: ListControls,
}


export default List;