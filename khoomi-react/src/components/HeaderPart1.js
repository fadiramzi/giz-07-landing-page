import logo from './assisst/logo.png'
import cc1 from './assisst/cc1.svg'
import cc2 from './assisst/cc2.svg'
import cc3 from './assisst/cc3.svg'
import InputBox from "./InputBox"

const HeaderPart1 = () => {
    return (
        <>
        <div className = {'Divparent'}>
            {/* Logo */}
              <div>
          <div className = {'top'}>
            <img src={logo} alt = "logo" className ={'imgDiv'} width='90px'/>    
            <InputBox discription = ' Search For Products, Brands &amp; Categories' classes = {'searchInput'} />
          <div>
             <img src={cc1} width='20px' alt = "cc1" className = {'noti'} />   
            <img src={cc2} alt = "cc2" width='20px' className = {'noti'}/>   
            <img src={cc3} alt = "cc3" width='20px' className = {'noti'}/>
            </div>
          </div>
        </div>
        </div>
          <hr />
        </>
    )
}

export default HeaderPart1
