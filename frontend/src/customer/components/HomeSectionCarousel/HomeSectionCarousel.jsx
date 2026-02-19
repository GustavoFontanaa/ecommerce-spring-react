import React, { useRef, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import Button from '@mui/material/Button'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_kurta } from '../../../Data/mens_kurta';

const HomeSectionCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [itemsInSlide, setItemsInSlide] = useState(1);
    const carouselRef = useRef(null);

    const responsive = {
        0: { items: 1 },
        720: { items: 2 },
        900: { items: 2 },
        1024: { items: 3 },
        1280: { items: 3 },
        1375: { items: 4 },
        1700: { items: 5 }
    };

    const items = mens_kurta.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

    const slidePrev = () => carouselRef.current?.slidePrev();
    const slideNext = () => carouselRef.current?.slideNext();

    const syncActiveIndex = ({ item, itemsInSlide }) => {
        setActiveIndex(item);
        if (itemsInSlide) setItemsInSlide(itemsInSlide);
    };

    const lastIndex = Math.max(items.length - itemsInSlide, 0);

    return (
        <div className='px-4 lg:px-8 border'>
            <div className='relative p-5'>
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    mouseTracking
                    onSlideChanged={syncActiveIndex}
                    controlsStrategy="responsive"
                />

                {
                    activeIndex < lastIndex && <Button
                        variant='contained'
                        className='z-50 bg-white'
                        onClick={slideNext}
                        sx={{ position: 'absolute', top: '8rem', right: '0rem', transform: 'translateX(50%) rotate(90deg)' }}
                        color='white'
                        aria-label='next'>
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)' }} />
                    </Button>
                }

                {
                    activeIndex > 0 && <Button
                        variant='contained'
                        className='z-50 bg-white'
                        onClick={slidePrev}
                        sx={{ position: 'absolute', top: '8rem', left: '0rem', transform: 'translateX(-50%) rotate(-90deg)' }}
                        color='white'
                        aria-label='next'>
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)' }} />
                    </Button>
                }
            </div>
        </div>
    )
}

export default HomeSectionCarousel;
