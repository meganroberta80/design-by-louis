import design1 from '../img/design1.jpeg'
import design2 from '../img/design2.jpeg'
import design3 from '../img/design3.jpeg'

function HomePage() {
    return (
        <div>
            <div>
                <h1>Welcome to Design by Louis</h1>
            </div>
            <div>
                <img src={design1} className="design" alt="Interior design"></img>
                <img src={design2} className="design" alt="Interior design"></img>
                <img src={design3} className="design" alt="Interior design"></img>
            </div>
        </div>
    )
}

export default HomePage;
