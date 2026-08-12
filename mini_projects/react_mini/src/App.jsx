import React from 'react'
import Accordion from './components/accordion';
import QrCode from './components/qr_code';
import LoadMoreData from './components/load_more_data';
import ImageSlider from './components/image_slider/Index';
import RandomColor from './components/random_color';
import Acc from './components/accordion2/Index';
import UseWindowResizeTest from './components/window_resize/test';
import useWindowResize from './components/window_resize/Index';

const App = () => {
  return (
    <div>

    {/*<Accordion/>*/}
    {/* <QrCode/> */}
    {/* <LoadMoreData/> */}
    {/* <ImageSlider/> */}
    {/* <RandomColor/> */}
    <Acc/>
    <useWindowResize/>
    
    </div>
  )
}

export default App