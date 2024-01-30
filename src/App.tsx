import React, {useEffect, useMemo, useState} from 'react';
import NumberDisplay from "./components/NumberDisplay/"
import styles from './styles.module.scss'
import dayjs from "dayjs";

const getRandomNumber = ( min: number, max: number ) => {
    return Math.floor(Math.random() * ( max - min + 1 ) + min)
}


// 1, 做一个垂直的0-9 的div
// 2， 滚动搭到7 时，div 就要垂直移动到 7 * height 个单位
function App() {
    const [time, seTime] = useState<number>(Date.now().valueOf())
  const [numberString, setNumberString] = useState<string>('123');

    useEffect(() => {
        setInterval(() => {
            seTime(Date.now().valueOf())
        },1000)
    },[])
    const timestr = useMemo(function ()  {
        return dayjs(time).format('HH:mm:ss')
    },[time])

    useEffect(() => {
        setInterval(() => {
            setNumberString(getRandomNumber(100,999).toString())
        },2000)
    }, [])

  return (
    <div className={styles.app}>
      <NumberDisplay numberString={numberString} />
    </div>
  );
}

export default App;
