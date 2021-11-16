import pic2 from './assisst/Image2.png'
import pic3 from './assisst/Image3.png'
import pic1 from './assisst/Image1.png'
import pic4 from './assisst/Image4.png'
import pic5 from './assisst/Image5.png'

const BodyPart4 = () => {
    return (
        <>
        <h4 className={'center'}>Straight From Nike</h4>
        <h2 className={'center'}>New Collection</h2> 
        <table className={'padding center'}>
            <tbody>
                <tr>
                    <td style={{width:'255px', height:'301px'}}> 
                    <img src={pic2} alt="pic2" />
                    <br />
                    Nike Air Force 1 <button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>99$</button> 
                    <br />
                    <img src={pic4} alt="pic4" />
                    NikeSBZoom  <button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>99$</button>
                     </td>
                    <td style={{width:'255px', height:'301px'}}>
                         <img src={pic3} alt="pic3" />
                         <br />
                        NikeCourt Air <button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>99$</button>
                          <br />
                         <img src={pic5} alt="pic5" /> 
                         NikeSignal <button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>99$</button>
                         </td>
                    <td style={{rowSpan:"2", width:"540px",height:"680px"}}>
                    <button style={{borderRadius:'20px',color:'white',backgroundColor:'black',border:'none',textAlign:'right'}}>SALE -50%</button>......................................................................................................
                    <button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none',textAlign:'right'}}>99$</button>
                         <img src={pic1} alt="pic1" /> 
                         <h1>Nike Air Force 1 Shadow</h1>
                         Brand: Nike
                         </td>
                    </tr>
            </tbody>
        </table> 
        </>
    )
}

export default BodyPart4
