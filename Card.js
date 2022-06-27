import React from 'react'
import { Button, Text, View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
const Card = ({ children }) => {
  return (
    <View style={styles.box}>
      {children}
    </View>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired
};


export default Card