import './CardDetails.css'

const CardDetails = ({ disney, modal, setModal, }) => {

    const closeModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <div className="card-details">

                <button onClick={closeModal} className="card-close">
                    &times;
                </button>
                <div className="card-details__data">
                    {disney.tvShows.length > 0 ? (
                        <>
                            <h4> Programas de TV </h4>
                            {disney.tvShows.map(tv => (
                                <p key={tv}>{tv}</p>
                            ))}
                        </>
                    )
                        :
                        <>

                            <span>Nenhum programa de TV... </span> <br />
                        </>
                    }
                    {disney.videoGames.length > 0 ? (
                        <>
                            <h4> Video Games </h4>
                            {disney.videoGames.map(game => (
                                <p key={game}>{game}</p>
                            ))}
                        </>
                    )
                        :
                        <>

                            <span>Nenhum video Game... </span> <br />
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default CardDetails;