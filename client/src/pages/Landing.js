import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className="container page">
            <div className="info">
                <h1>Job <span>Tracking</span></h1>
                <p>
                Meditation gentrify fam, yuccie kickstarter brunch vape. Pitchfork freegan biodiesel bicycle rights. Semiotics flexitarian four loko XOXO raw denim chartreuse. Cray ramps microdosing everyday carry bicycle rights vexillologist.
                </p>
                <Link
                    to='/register'
                    className='btn btn-hero'
                >
                    Login/Register
                </Link>
            </div>
            <img
                src={main}
                alt="job hunt"
                className='img main-img'
            />
        </div>
    </Wrapper>
  )
}

export default Landing