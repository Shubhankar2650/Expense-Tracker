import {Link} from 'react-router-dom';

const Navigation = () => {
    return(
        <>
            <nav className='container mx-auto flex items-center justify-between py-5'>
                <Link to ="/"></Link>
                <ul className='flex item-center'>
                    <li className='ml-6'><Link to="/">Memories</Link> </li>
                    <li className='ml-6'><Link to="/Expenseses">Expenseses</Link> </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;