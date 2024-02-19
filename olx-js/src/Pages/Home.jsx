import Banner from "../Components/Banner/Banner"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import Posts from '../Components/Posts/Posts'
const Home = () => {
  return (
    <div>
          <Header/>
          <Banner/>
          <Posts/>
          <Footer/>
    </div>
  )
}

export default Home