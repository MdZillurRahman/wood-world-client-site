import { useParams } from 'react-router-dom';
import useItemDetail from '../../../Hooks/UseItemDetail/UseItemDetail';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useItemDetail(serviceId);

    return (
        <div>
            <h2>Your Order {service.name} is booked.</h2>
        </div>
    );
};

export default CheckOut;