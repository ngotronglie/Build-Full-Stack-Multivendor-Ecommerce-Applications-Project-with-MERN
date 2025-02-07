
import { useParams } from 'react-router-dom';
const AboutPage = () => {
    let { id, name } = useParams();
    return (
        <div>
            <h1>AboutPage Page</h1>
            <p>id: {id}</p>
            <p>name: {name}</p>
        </div>
    );
}

export default AboutPage;