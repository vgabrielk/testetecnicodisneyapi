
import './Card.css'
import DetailsBtn from './DetailsBtn';

const Card = ({ person, searchTerm }) => {


    return (
        <>
            
                <div className="box-card" id='persons' >
                    {person.filter(val =>  {
                        if(val.searchTerm === ""){
                            return val;
                        }
                        return val.name.toLowerCase().includes(searchTerm.toLowerCase()) 
                    }).map(disney => (
                        <div className='card' key={disney._id}>
                            <p>{disney.name}</p>
                            <img className='card-image' src={disney.imageUrl} alt={disney.name} />
                            <DetailsBtn person={person} disney={disney} />
                        </div>

                    ))}


                </div>

            
        </>
    )
}

export default Card;