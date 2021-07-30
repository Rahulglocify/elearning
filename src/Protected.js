import react,{useEffect} from 'react';
import { useHistory } from 'react-router-dom';

function Protected(props) {
    const history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem('user-token')) {
            history.push('/register');
        }
    },[]);
    const Cmp = props.cmp;
    return (
        <div>
            <Cmp />
        </div>
    )
}

export default Protected;