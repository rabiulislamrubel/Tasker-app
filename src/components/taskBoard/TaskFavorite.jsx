
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


export default function TaskFavorite({isFavorite, taskId, onFav}) {
  return (
    <button onClick={()=> onFav(taskId)}>
      {isFavorite ? <FaStar color='yellow' /> : <FaRegStar />}
    </button>
  );
}
