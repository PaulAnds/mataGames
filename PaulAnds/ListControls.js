import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import ListFilter from './ListFilter';

import styles from '../styles';


function ListControls({onFilter}) {
    return (
        <View style={styles.controls}>
            <ListFilter onFilter={onFilter}/>
        </View>
    );
}

ListControls.propTypes = {
    onFilter: PropTypes.func.isRequired,
}

export default ListControls;