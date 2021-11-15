import pic1 from './assisst/1.png'
import pic2 from './assisst/2.png'
import pic3 from './assisst/3.png'
import pic4 from './assisst/4.png'
const BodyPart2 = () => {
    return (
        <>
        <h4 className={'center'}>Explore Awesome Products</h4>
        <h2 className={'center'}>Recommended For You</h2>
            <table  className={'padding center'}>
                <tbody>
                    <tr>
                        <td> <img src={pic1} alt="pic1" /> </td>
                        <td> <img src={pic2} alt="pic2" /> </td>
                        <td> <img src={pic3} alt="pic3" /> </td>
                        <td> <img src={pic4} alt="pic4" /> </td>
                    </tr>
                    <tr>
                        <td>Single Tour</td>
                        <td>Single Tour</td>
                        <td>Single Tour</td>
                        <td>Single Tour</td>
                    </tr>
                    <tr >
                        <td><button style={{backgroundColor:'pink', width:'45px',borderRadius:'20px'}}>990$</button></td>
                        <td><button style={{backgroundColor:'pink', width:'45px',borderRadius:'20px'}}>990$</button></td>
                        <td><button style={{backgroundColor:'pink', width:'45px',borderRadius:'20px'}}>990$</button></td>
                        <td><button style={{backgroundColor:'pink', width:'45px',borderRadius:'20px'}}>990$</button></td>
                    </tr>
                </tbody>
            </table>
            <br />
            <button className={'btn2'} >Explore Other Products</button>



        </>
    )
}

export default BodyPart2
