import React, {useState,useEffect} from 'react';
import {View} from 'react-native';
import styles from '../styles';
import ProgressBar from "./ProgressBar";

export default function ProgressScreen() {
  const [progress,setProgress] =useState(0);
  
  useEffect(() =>{
    
    function updateProgress(){
                    //aqui ya sabe que es progress
      setProgress((currentProgress) => {
        if(currentProgress < 1){
          setTimeout(updateProgress, 300)
        }
        if(currentProgress >= 1)
        {
          return 1;
        }
        return currentProgress + 0.1;
      })
    }
    updateProgress();
  }, [])
  
  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} label={true}/>
    </View>
  );
}