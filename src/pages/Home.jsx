import Header from "../components/Header"

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Header
      title={
        <p>Explore flavorsome delights on Yum Hunt!</p>
      }  
      type='home'
      />
      </div>
  )
}

export default Home