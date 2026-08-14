import React from 'react'
import Accordion from './components/accordion';
import QrCode from './components/qr_code';
import LoadMoreData from './components/load_more_data';
import ImageSlider from './components/image_slider/Index';
import RandomColor from './components/random_color';
import Acc from './components/accordion2/Index';
import UseWindowResizeTest from './components/window_resize/test';
import useWindowResize from './components/window_resize/Index';
import useOutsideClick from './components/use_outside_click/Index';
import StarRating from './components/star_rating/Index';
import TicTacToe from './components/tic_tac_toe/Index';
import useFetch from './components/use_fetch/Index';
import SearchAutocomplete from './components/search_auto_withapis';
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
const App = () => {
  return (
    <div>

    {/*<Accordion/>*/}
    {/* <QrCode/> */}
    {/* <LoadMoreData/> */}
    {/* <ImageSlider/> */}
    {/* <RandomColor/> */}
    {/* <Acc/> */}
    {/* <useWindowResize/> */}
    {/* <useOutsideClick/> */}
    {/* <StarRating/> */}
    {/* <TicTacToe/> */}
    {/* <useFetch/> */}
    {/* <SearchAutocomplete/> */}
    <TreeView menus={menus} /> 
    
    
    </div>
  )
}

export default App