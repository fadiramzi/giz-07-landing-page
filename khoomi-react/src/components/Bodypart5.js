import pic2 from './assisst/Image2.png'
import pic3 from './assisst/Image3.png'
import pic4 from './assisst/Image4.png'
import pic5 from './assisst/Image5.png'
const Bodypart5 = () => {
    return (
        <>

          <h4 className={'center'}>TOP PRODUCTS</h4>
          <h1 className={'center'}>Trending This Week</h1>
          <table className={'padding center'}>
            <tbody>
                <tr>
                    <td style={{width:'255px', height:'301px'}}> 
                    <img src={pic2} alt="pic2" />
                    <br />
                    Nike Air Force 1 <button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>58$</button> 
                    </td>
                    <td>
                    <img src={pic4} alt="pic4" />
                    <br />
                    NikeSBZoom  <button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>58$</button>
                    </td>
                    <td style={{width:'255px', height:'301px'}}>
                         <img src={pic3} alt="pic3" />
                         <br />
                        Nike Court Air <button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>58$</button>
                          </td>
                          <td>
                         <img src={pic5} alt="pic5" /> 
                         <br />
                         Nike Signal <button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>58$</button>
                         </td>
                    </tr>
                <tr>
                    <td style={{width:'255px', height:'301px'}}> 
                    <img src={pic2} alt="pic2" />
                    <br />
                    Nike Air Force 1 <button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>58$</button> 
                    </td>
                    <td>
                    <img src={pic4} alt="pic4" />
                    <br />
                    NikeSBZoom  <button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>58$</button>
                    </td>
                    <td style={{width:'255px', height:'301px'}}>
                         <img src={pic3} alt="pic3" />
                         <br />
                        Nike Court Air <button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>58$</button>
                          </td>
                          <td>
                         <img src={pic5} alt="pic5" /> 
                         <br />
                         Nike Signal <button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>58$</button>
                         </td>
                    </tr>
            </tbody>
        </table> 

        </>
    )
}

export default Bodypart5
