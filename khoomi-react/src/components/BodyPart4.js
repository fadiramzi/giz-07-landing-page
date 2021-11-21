import pic2 from './assisst/Image2.png'
import pic3 from './assisst/Image3.png'
import pic1 from './assisst/Image1.png'
import pic4 from './assisst/Image4.png'
import pic5 from './assisst/Image5.png'

const BodyPart4 = () => {
    return (
        <div className={'BodyPart4Parent'}>
            <div className={'bodyTop'}>
                <div style={{fontSize: '1em', marginBlock: '0em'}}>Straight From Nike</div>
                <div style={{fontSize: '2em',fontWeight: 'bold',marginBlock: '0em'}}>New Collection</div>
            </div>

            <div>
                <div className={'shoes2Div'}>
                    <div className={'columnDiv'}>
                            <div style={{backgroundColor: 'whitesmoke',padding: '15px'}}>
                            <div><img src={pic2} alt="pic2" height='214px' width='214px' /></div>
                            <div style={{display:'flex',justifyContent: 'space-between', width: '213px'}}>
                                <div style={{fontSize: '1.25em',fontWeight: 'bold',marginBlock: '0em'}}>Nike Air Force 1</div>
                                <div><button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>99$</button></div>
                            </div>
                            </div>
                            <div style={{backgroundColor: 'whitesmoke',padding: '15px'}}>
                            <div><img src={pic5} alt="pic5" height='214px' width='214px' /></div>
                            <div style={{display:'flex',justifyContent: 'space-between', width: '213px'}}>
                                <div style={{fontSize: '1.25em',fontWeight: 'bold',marginBlock: '0em'}}>Nike SB Zoom</div>
                                <div><button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>99$</button></div>
                            </div>
                            </div>
                    </div>

                    <div  className={'columnDiv'}>
                    <div style={{backgroundColor: 'whitesmoke',padding: '15px'}}>
                            <div><img src={pic3} alt="pic3" height='214px' width='214px' /></div>
                            <div style={{display:'flex',justifyContent: 'space-between', width: '213px'}}>
                                <div style={{fontSize: '1.25em',fontWeight: 'bold',marginBlock: '0em'}}>NikeCourt Air</div>
                                <div><button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>99$</button></div>
                            </div>
                            </div>                       
                            <div style={{backgroundColor: 'whitesmoke',padding: '15px'}}>
                            <div><img src={pic4} alt="pic4" height='214px' width='214px' /></div>
                            <div style={{display:'flex',justifyContent: 'space-between', width: '213px'}}>
                                <div style={{fontSize: '1.25em',fontWeight: 'bold',marginBlock: '0em'}}>Nike Signal</div>
                                <div><button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>99$</button></div>
                            </div>
                            </div>
                    </div>

                <div  style={{backgroundColor: 'whitesmoke',padding: '15px'}}>
                    <div style={{display:'flex', justifyContent: 'space-between'}}>
                        <div><button style={{borderRadius:'20px',color:'white',backgroundColor:'black',border:'none',textAlign:'right'}}>SALE -50%</button></div>
                        <div><button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none',textAlign:'right'}}>99$</button></div>
                    </div>
                    
                 <div><img src={pic1} alt="pic1" height='520px' width='531px' /></div>

                 <div>
                     <div style={{fontSize: '2em',fontWeight: 'bold',marginBlock: '0em'}}>Nike Air Force 1 Shadow</div>
                     <div style={{fontSize: '0.75em',marginBlock: '0em', color:'silver'}}>Brand: Nike</div>
                 </div>
                 
                    
                </div>

                </div>
            </div>

            <div><button className={'btn2'} >Explore Other Products</button></div>












        {/* <h4 className={'center'}>Straight From Nike</h4>
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
        </table>  */}
        </div>
    )
}

export default BodyPart4
