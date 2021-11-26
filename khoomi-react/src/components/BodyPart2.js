import pic1 from './assisst/1.png'
import pic2 from './assisst/2.png'
import pic3 from './assisst/3.png'
import pic4 from './assisst/4.png'

const BodyPart2 = () => {
    return (
        <div className={'BodyPart2Parent'}>
            <div className={'bodyTop'}>
                <div style={{fontSize: '1em', marginBlock: '0em'}}>Explore Awesome Products</div>
                <div style={{fontSize: '2em',fontWeight: 'bold',marginBlock: '0em'}}>Recommended For You</div>
            </div>

            <div className={'wtchDiv'}>
                <div>
                    <img src={pic1} alt="pic1" height="270px" width="270px" />
                    <p>Single Tour</p>
                    <button className={'wtchBtn'}>990$</button>
                </div>
                <div>
                    <img src={pic2} alt="pic2" height="270px" width="270px" />
                    <p>Single Tour</p>
                    <button className={'wtchBtn'}>990$</button>
                </div>
                <div>
                    <img src={pic3} alt="pic3" height="270px" width="270px" />
                    <p>Single Tour</p>
                    <button className={'wtchBtn'}>990$</button>
                </div>
                <div>
                    <img src={pic4} alt="pic4" height="270px" width="270px" />
                    <p>Single Tour</p>
                    <button className={'wtchBtn'}>990$</button>
                </div>
            </div>

            <div>
            <button className={'btn2'} >Explore Other Products</button>
            </div>

        </div>
    )
}

export default BodyPart2