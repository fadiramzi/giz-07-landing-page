import logo from './assisst/logo.png'
import './Footerstyle.css'
const Footer = () => {
    return (
        <div className={'footerDivParent'}>

            <div style={{display:'flex',flexDirection: 'column',    justifyContent: 'space-between', height: '290px'}}>
                <div><img src={logo} alt = "logo" className ={'imgDiv'} width='90px'/></div>
                <div style={{width:'255px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div>

            <div className={'footerDiv2'}>
                <div className={'footerDiv'}>
                    <div className={'optDiv'}>Products</div>
                    <div>Trending</div>
                    <div>My Account</div>
                    <div>Vendors</div>
                    <div>Brands</div>
                    <div>Storefront</div>
                </div>

                <div className={'footerDiv'}>
                    <div className={'optDiv'}>Legals</div>
                    <div>License</div>
                    <div>Refund Policy</div>
                    <div>About Us</div>
                    <div>Contacts</div>
    
                </div>
                <div className={'footerDiv'}>
                    <div className={'optDiv'}>Contacts</div>
                    <div style={{width:' 351px'}}>Fell free get in touch with us via phone or send us a message</div>
                    <div>+1 234 567 89 10</div>
                    <div>support@khoomi.com</div>
                </div>

            </div>

        </div>
    )
}

export default Footer
