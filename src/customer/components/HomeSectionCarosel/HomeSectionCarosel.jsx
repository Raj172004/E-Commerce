import React, { useState, useRef } from 'react';
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from '../HomeSessionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from '@mui/material';

// Correctly destructure props from the single argument object
const HomeSectionCarosel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrec = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };

    const slideNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    // Now 'data' is correctly available to be used
    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

    return (
        <div className="border">
            <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
            <div className="relative p-4 border">
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />

                {activeIndex !== items.length - 5 && (
                    <Button
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slideNext}
                        sx={{ position: 'absolute', top: '8rem', right: '0rem', transform: 'translateX(50%)', bgcolor: 'white' }}
                        aria-label="next"
                    >
                        <KeyboardArrowRightIcon sx={{ color: 'black' }} />
                    </Button>
                )}

                {activeIndex !== 0 && (
                    <Button
                        onClick={slidePrec}
                        variant="contained"
                        className="z-50 bg-white"
                        sx={{ position: 'absolute', top: '8rem', left: '0rem', transform: 'translateX(-50%)', bgcolor: 'white' }}
                        aria-label="prev"
                    >
                        <KeyboardArrowLeftIcon sx={{ color: 'black' }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarosel;