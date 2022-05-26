import { Outlet } from "react-router-dom"
import { BigSideBar,NavBar,SmallSideBar } from "../../Components"
import Wrapper from "../../assets/wrappers/SharedLayout"

const SharedLayOut = () => {
  return  <Wrapper>
    <main className="dashboard">
      <SmallSideBar/>
      <BigSideBar />
      <div>
        <NavBar/>
        <div className="dashboard-page">
          <Outlet/>
        </div>
      </div>
      </main>
    </Wrapper>
  
}

export default SharedLayOut
