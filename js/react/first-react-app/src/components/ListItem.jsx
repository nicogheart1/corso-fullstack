import { useParams } from "react-router-dom";

const ListItem = () => {
    const { itemId } = useParams();
    return (<div><h2>List Item {itemId}</h2></div>);
};

export default ListItem;