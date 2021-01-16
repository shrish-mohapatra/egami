import React, { useContext, useEffect, useState } from 'react';
import {Row, Col} from 'antd';
import GalleryImage from './GalleryImage';
import { CoreContext } from '../Provider';

const COLUMN_COUNT = 3

function Gallery() {
    const { fetchImages } = useContext(CoreContext)
    const [cols, setCols] = useState(null)   

    useEffect(() => {
        if(!cols) {
            loadImages()
        }
    }, [cols])

    const loadImages = async () => {
        const images = await fetchImages()

        let tempCols = []
        let colIndex = 0

        for(let i=0; i<COLUMN_COUNT; i++) {
            tempCols.push([])
        }

        images.map((image, index) => {
            tempCols[colIndex++].push(image)
            if(colIndex === COLUMN_COUNT) colIndex = 0;
            return
        })

        setCols(tempCols)
    }
    

    if(!cols) return <div/>
    
    return (
        <Row>
            {
                cols.map((col, colIndex) => (
                    <Col key={`col-${colIndex}`} span={8}>
                        {
                            col.map((image, index) => (
                                <GalleryImage key={"gal-img"+index} image={image} index={index}/>
                            ))
                        }
                    </Col>
                ))
            }
            
        </Row>
    );
}

export default Gallery;