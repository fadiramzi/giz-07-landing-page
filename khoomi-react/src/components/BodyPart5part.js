import pic2 from './assisst/Image2.png'
import pic3 from './assisst/Image3.png'
import pic4 from './assisst/Image4.png'
import pic5 from './assisst/Image5.png'

const BodyPart5part = () => {
    return (
        <div style={{display:'flex',minWidth: '1130px', justifyContent: 'space-between'}}>
            <div>
                <div><img src={pic3} alt="pic3" height='214px' width='214px' /></div>
                <div style={{display:'flex',justifyContent: 'space-between', width: '213px'}}>
                    <div style={{fontSize: '1.25em',fontWeight: 'bold',marginBlock: '0em'}}>Nike Court Air</div>
                    <div><button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>99$</button></div>
                 </div>
            </div>
            <div>
                <div><img src={pic2} alt="pic2" height='214px' width='214px' /></div>
                <div style={{display:'flex',justifyContent: 'space-between', width: '213px'}}>
                    <div style={{fontSize: '1.25em',fontWeight: 'bold',marginBlock: '0em'}}>Nike Air Force 1</div>
                    <div><button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>99$</button></div>
                 </div>
            </div>
            <div>
                <div><img src={pic5} alt="pic5" height='214px' width='214px' /></div>
                <div style={{display:'flex',justifyContent: 'space-between', width: '213px'}}>
                    <div style={{fontSize: '1.25em',fontWeight: 'bold',marginBlock: '0em'}}>Nike SB Zoom</div>
                    <div><button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>99$</button></div>
                 </div>
            </div>
            <div>
                <div><img src={pic4} alt="pic4" height='214px' width='214px' /></div>
                <div style={{display:'flex',justifyContent: 'space-between', width: '213px'}}>
                    <div style={{fontSize: '1.25em',fontWeight: 'bold',marginBlock: '0em'}}>Nike Signal</div>
                    <div><button style={{borderRadius:'20px',color:'orange',backgroundColor:'beige',border:'none'}}>99$</button></div>
                 </div>
            </div>
        </div>
    )
}

export default BodyPart5part
