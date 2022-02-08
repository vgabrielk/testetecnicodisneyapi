import './Home.css'

const Home = ({Bg, toPersons}) => {
    return ( 
        <>
         <div className="background">
          <video src={Bg} autoPlay muted loop>
          </video>
          <div className="background-texts">

            <h1>Seja bem vindo <br /> ao fantástico mundo da <div className="gradient"><b>disney</b></div> </h1>
            <button onClick={toPersons} className='btn-ancor'>Ver personagens</button>
          </div>
        </div>
        </>
     );
}
 
export default Home;