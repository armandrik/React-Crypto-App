import React from 'react'
import { getDataAxios } from './../services/axiosGet';
import AliceCarousel from 'react-alice-carousel';

export const Slider = () => {

    const [data, setData] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        (async () => {
            setIsLoading(true)
            const result = await getDataAxios();
            setData(result);
            setIsLoading(false)
        })();
    }, [])

    const responsive = {
        0: {
            items: 2
        },
        512: {
            items: 4
        },
    }

    const slideItem = data.slice(0, 10);

    const card = slideItem.map((i) => {
        return (
            <div className='slider-info'>
                <img src={i.image} />
                <p>{i.name}</p>
                <p>{i.current_price.toLocaleString()}$</p>
            </div>
        )
    })

    return (
        <div className='slider-conatiner'>
            <div className='slider-title'>
                <h1>Crypto Tracker
                    <img src="https://img.icons8.com/external-soft-fill-juicy-fish/60/228BE6/external-bitcoin-banking-soft-fill-soft-fill-juicy-fish.png" className='header-icon' />
                </h1>
                <span>Get All The Info Regarding Your Favorite Crypto Currnecy</span>
            </div>
            <div className='slid-wrapper'>
                {isLoading ? <div class="loader"></div> :
                    <AliceCarousel
                        mouseTracking
                        infinite
                        autoPlayInterval={1000}
                        animationDuration={1500}
                        disableDotsControls
                        disableButtonsControls
                        responsive={responsive}
                        autoPlay
                        items={card}
                    />
                }
            </div>
        </div>
    )
}