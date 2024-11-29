import React from 'react';

const Data = [
    {
        image: "/images/brand/brand-1.jpg"
    },
    {
        image: "/images/brand/brand-2.jpg"
    },
    {
        image: "/images/brand/brand-3.jpg"
    },
    {
        image: "/images/brand/brand-4.jpg"
    },
    {
        image: "/images/brand/brand-5.jpg"
    },
    {
        image: "/images/brand/brand-6.jpg"
    },
    {
        image: "/images/brand/brand-7.jpg"
    },
    {
        image: "/images/brand/brand-8.jpg"
    }
]


const BrandItem = () => {
    return (
        <>
            {Data.map((data, index) => (
                <div className="col-lg-3 col-6" key={index}>
                    <div className="brand-grid">
                        <img src={process.env.PUBLIC_URL + data.image} alt="Brand" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default BrandItem;