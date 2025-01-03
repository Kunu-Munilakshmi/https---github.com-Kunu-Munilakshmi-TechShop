import { ImNotification } from 'react-icons/im'; // Ensure this is correctly imported

const Noresults = () => {
    return (
        <div
            className='d-flex justify-content-center align-items-center'
            style={{ width: '100%', height: '100vh' }} // Set explicit dimensions
        >
            <div className='mx-5'>
                <div className='text-danger'>
                    <ImNotification size={300} />
                </div>
                <p className='text-white fw-bold text-center fs-1'>No Results</p>
            </div>
        </div>
    );
};

export default Noresults;
