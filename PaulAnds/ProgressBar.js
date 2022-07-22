import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import {ProgressBarComponent, progressProps} from './ProgressBarComponent';

function ProgressLabel({show,progress}){
    return(
        show && (
            <Text style={styles.progressText}>{Math.round(progress*100)}%</Text>
        )
    )
}


function ProgressBar({ route, navigation, progress, label}) {
    const pages = navigation.getParams('screen')
    
    function isComplete (progress){
        if(progress >= 1){
            navigation.navigate(pages)
        }
    }
    return (
        <View style={styles.progress}>
            <ProgressLabel show={label} progress={progress}/>
            <ProgressBarComponent 
                {...progressProps} 
                style={styles.progress}
                progress={progress}
            />
            {
                isComplete( progress)
            }
        </View>
    );
}

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
    label: PropTypes.bool.isRequired,
}

ProgressBar.defaultProps = {
    progress: 0,
    label: false,
}
export default ProgressBar;