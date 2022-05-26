import main from '../assets/images/main.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {Logo} from '../Components'
const Landing = () => {
    return <Wrapper>
        <nav>
           <Logo/>
        </nav>
        <div className='container page'>
            {/* info */}
            <div className='info'>
                <h1>Job <span>tracking</span> app</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eligendi, quo nemo maxime aspernatur, nam ex praesentium neque optio magni veritatis eaque magnam quas aut nisi laudantium id. Impedit deserunt alias tenetur mollitia nesciunt inventore laborum minima eius iste, numquam possimus quidem nobis, dicta nulla? Iure quas necessitatibus iusto similique.</p>
                <Link to='/register'className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={main} alt="job hunt" className='img main-img' />
        </div>
  </Wrapper>
}

const Wrapper = styled.main`
nav{
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;

}
.page{
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
}
h1{
    font-weight: 700;
    span{
        color: var(--primary-500);
    }
}
p{
    color: var(--grey-600);
}
.main-img{
    display: none;
}
@media (min-width:992px){
    .page{
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
    }
    .main-img{
        display: block;
    }
}
` 

export default Landing;
