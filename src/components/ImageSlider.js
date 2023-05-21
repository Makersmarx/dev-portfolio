import { useState } from 'react';
import Button from './Button';

function ImageSlider(){
    const [currentImgIndx, setCurrentImgIndx] = useState(0);

    const images = [
        ''
    ]
    
    const prev = () => {
        const newIndx = 
        (currentImgIndx - 1 + images.length) % images.length;
        setCurrentImgIndx(newIndx);
    };

    const next = () => {
        const newIndx = (currentImgIndx + 1) % images.length;
        setCurrentImgIndx(newIndx);
    };

    return (
        <div className='relative'>
            <img 
            src= {images[currentImgIndx]}
            alt= 'Slider Image'
            className = 'object-cover w-full h-full' />
            <div className='flex flex-row'>
                <Button onClick={prev}>PREV</Button>
                <Button onClick={next}>NEXT</Button>
            </div> 
        </div>
    );
};
export default ImageSlider;