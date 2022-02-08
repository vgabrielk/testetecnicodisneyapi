import { useState } from 'react';
import './Card.css'
import CardDetails from './CardDetails/CardDetails';

const DetailsBtn = ({ disney }) => {

    const [modal, setModal] = useState(false)


    const toogleModal = () => {
        setModal(!modal)
    }



    return (
        <>
            <button className='details' onClick={toogleModal}> Ver detalhes </button>

            {modal &&
                <CardDetails disney={disney} modal={modal} setModal={setModal} />
            }
        </>
    )
}

export default DetailsBtn;