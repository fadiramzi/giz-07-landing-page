import part11 from './assisst/part11.png';
const BodyPart1 = () => {
    return (
        <div className={'BodyPart1Parent'}>
            <div className={'leftDiv'}>
                <p className={'topDisc'}>GET THE NEW IPHONE 12 PRO</p>
                <p className={'bottomDisc'}> A transformative triple‑camera system that adds tons of capability without complexity</p>
                    <br />
                <div className={'btn1Cls'}>
                    <div>
                    <button className ={'btnOrange'}>Buy Now</button>
                    </div>
                    <div>
                    <button className = {'btnAqua'}>With $599 with trade-in</button>
                    </div>
                </div>
            </div>
            <div>
                <img src={part11} alt="part11" height="596px" width="476px" />
            </div>
        </div>
)
}

export default BodyPart1
