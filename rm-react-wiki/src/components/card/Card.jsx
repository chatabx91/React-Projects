// CSS import
import '../../Card.css'

// Card Component (child)
const Card = (props) =>{
    // Destructure results from props object
    const {results} = props;
    
    // variable used for assigning character cards or no character string
    let display;

    // If results from API fetch exists then iterate through it to get character data
    if(results){
        display = results.map((character) =>{
            // Destructure keys from character
            const {id, image, name, status, location} = character;

            // Function changes styling based on status of character
            const charStatus = (status) => {
                return (status === 'Dead') ? 'badge position-absolute bg-danger' : 
                        (status === 'Alive') ? 'badge position-absolute bg-success' : 'badge position-absolute bg-secondary'
            }

            return (
                // Character card displays image, name, last location
                <div
                    key={id}
                    className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
                >
                    <div className="card d-flex flex-column justify-content-center">
                        <img className="img" src={image} alt="" />
                        <div className="content">
                            <div className="fs-5 fw-bold mb-4">{name}</div>
                            <div>
                                <div className="fs-6 fw-normal">Last Location</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                    </div>
                    {/* Character's status, calls function, passes status to it, determines status background color */}
                    <div className={charStatus(status)}>
                        {status}
                    </div>
                </div>
                
                

            )
        })
    }else{ {/*else if results does not exist assign string to display*/}
        display = "No Character Found!"
    }

    // Component return: return either character cards or no data string
    return (
        <>
            {display}
        </>
    )

}

// export component
export default Card;