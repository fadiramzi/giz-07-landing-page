import InputBox from "./InputBox"
import './HeaderStyle.css'
import logo from './assisst/logo.png'
import TableHeader from "./TableHeader"

const Header = () => {
    return (
        <header className={'headercls'}>
            <div className={'divBackground'}>
            <div className={'searchDiv'}>
            <InputBox discription = ' Search For Products, Brands &amp; Categories' classes = {'searchInput'} />
            </div>
            <img src={logo} alt = "logo" className ={'imgDiv'} />
            <hr />
            <TableHeader classes={'table'} />
            </div>

        </header>
    )
}

export default Header
