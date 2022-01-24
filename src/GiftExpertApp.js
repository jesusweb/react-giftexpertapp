import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = (props) => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    return (
        <>
            <h2>GiftExpertApp</h2>
            <hr />

            <AddCategory setCategories={setCategories} />


            <ol>
                {
                    categories.map(category => {
                        return <GifGrid
                            category={category}
                            key={category}
                        />
                    })
                }
            </ol>
        </>
    );
}

export default GiftExpertApp;
