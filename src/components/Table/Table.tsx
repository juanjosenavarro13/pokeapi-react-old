import { useValidateTable } from "./hooks/validateTable";
import type { TableProps } from "./models/table.model";



const Table = (props:TableProps) => {

  const validate = useValidateTable(props.headers, props.data);

  return (
    <>
      {validate && 
      <>
      <h1 className="display-5">{props.title}</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            {props.headers.map((header, index) => (
              <th key={index}>{header.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {props.data.map((data, index) => (
              <td key={index}>{data}</td>
            ))}
          </tr>
        </tbody>
      </table>
      </>
      }
    </>
  );

};

export default Table;