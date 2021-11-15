import part11 from './assisst/part11.png';
import './BodyStyle.css'
const BodyPart1 = () => {
    return (
        <div className={'part1Div'}>
            <table className={'tableBody'}>
                <tbody>
                    <tr>
                        <td style={{width: "700px", height: "100px" }}>
                            <h1 style = {{color : "white"}}>GET THE NEW IPHONE 12 PRO</h1>
                            <br />
                            <h4 style = {{color : "white"}}>A transformative triple‑camera system that adds tons of capability without complexity</h4>
                            <br />
                            <div>
                                <button className ={'btnOrange'}>Buy Now</button>
                                <button className = {'btnAqua'}>With $599 with trade-in</button>
                            </div>
                            </td>
                        <td style={{width: "700px", height: "100px"}}>
                        <img  src={part11} alt='part11' className={'part11img'} />
                        </td>
                    </tr>
                    </tbody>
            </table>
            
        </div>
    )
}

export default BodyPart1
