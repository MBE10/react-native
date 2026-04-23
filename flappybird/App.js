import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, Image} from "react-native";
import Bird from './src/components/bird'
import Obstacles from './src/components/Obstacle';

export default function App() {
  const screenWidth = Dimensions.get("screen").width
  const screenHeight = Dimensions.get("screen").height
  const birdLeft = screenWidth / 2
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
  const [obstacles , setObstaclesLeft] = useState(screenWidth)
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth  + screenWidth/2 +30)
  const [obstaclesNegHeight, setobstaclesNegHeight] = useState(0)
  const [obstaclesNegHeightTwo, setobstaclesNegHeightTwo] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const gravity = 3
  let obstacleWidth = 60
  let ObstacleHeight = 300
  let gap = 200
  let gameTimerId
  let obstaclesTimerId

  //Start Bird falling

  useEffect(() => {
    gameTimerId = setInteral(() => {
      setBirdBottom(birdBottom = > birdBottom - gravity)
    }, 30)
    return () => {
      clearInterval(gameTimerId)
    }
  }, [birdBottom])

  //start first obstacle

  useEffect(() => {
    if(obstaclesLeft > -60){
      obstaclesTimerId = setInterval(() => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft -5)
      }, 30)
      return () => {
        clearInterval(obstaclesTimerId)
      }
    }
      else{
        setScore(score => score +1)
        setObstaclesLeft(screenWidth)
        setobstaclesNegHeight( -Math.random() * 100)
      }

  }, [obstaclesLeft])

  //start secod obstacles

  useEffect(() => {
    if(obstaclesLeftTwo > -60){
      obstaclesTimerId = setInterval(() => {
        setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo -5)
      }, 30)
      return () => {
        clearInterval(obstaclesTimerId)
      }
    }else {
      setScore (score => score +1)
      setObstaclesLeftTwo(screenWidth)
      setobstaclesNegHeightTwo(- Math.random() * 100)
    }
  } , [obstaclesLeftTwo])
  
  // jump behaviour

  const jump = () => {
    if(!isGameOver && (birdBottom < screenHeight)){
      setBirdBottom(birdBottom => birdBottom +50)
      console.log('jumped')
    }
  }

  useEffect(() => {
    if(
      ((birdBottom < (obstaclesNegHeight + obstacleHeight + 30)||
    birdBottom > (obstaclesNegHeight + obstacleHeight + gap - 30)) &&
  (obstaclesLeft > screenWidth/2 - 30 && obstaclesLeftTwo < screenWidth/2 + 30))
    )
    {
      GameOver()
    }
  })

  const gameOver = () => {
    clearInterval(gameTimerId)
    clearInterval(obstaclesTiimerId)
    clearInterval(obstaclesTimerIdTwo)
  }

  return(
    <TouchableWithoutFeedback onPress={jump}>
      <View style={StyleSheet.container}>
        <Image source={require('./assets/background.png')} style={StyleSheet.backgroundImage} />
        <Text style = {StyleSheet.score}>Score: {score}</Text>
        <Bird
        birdBottom={birdBottom}
        birdLeft={birdLeft} />
        <Obstacle
        color={"green"}
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        randomBottom={obstaclesNegHeight}
        gap = {gap}
        obstaclesLeft={obstaclesLeft} />
        <Obstacle
        color={"Yellow"}
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        randomBottom={obstaclesNegHeightTwo}
        gap = {gap}
        obstaclesLeft={obstaclesLeftTwo} />

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  score:{
    fontSize: 32,
    top: 50,
    position: 'absolute',
    zIndex: 1,
    color: 'white'
  },
  backgroundImage:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0 ,
  }
});