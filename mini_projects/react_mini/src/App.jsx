import React from 'react'
import Accordion from './components/accordion';
import QrCode from './components/qr_code';
import LoadMoreData from './components/load_more_data';
import ImageSlider from './components/image_slider/Index';

const App = () => {
  return (
    <div>

    {/*<Accordion/>*/}
    <QrCode/>
    <LoadMoreData/>
    <ImageSlider/>
    <RandomColor/>
    
    </div>
  )
}

export default App