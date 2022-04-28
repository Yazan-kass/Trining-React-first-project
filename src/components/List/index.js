import ListIem from "../ListIem";
import "./style.css";
  
function List(props) {
  return (
    <section className={"list flex"}>
      {props.items.map((item, idx) => (
        <ListIem 
          title={item.title} 
          key={`${item.id}`}
          handleDelete = {props.handleDelete}
          id={item.id}
          items={props.items} />
      ))}
    </section>
  );
}

export default List;
