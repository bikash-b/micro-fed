import React from 'react';
import { Table, Alert } from 'react-bootstrap';

const style = {
  image: {
    width: '20px',
    marginRight: '5px'
  }, 
  tableContainer: {
    padding: '10px',
    border: '2px solid blue'
  }
};

const App = ({ props }) => {
  if(props){
    return <div style={style.tableContainer}>
      <Table striped bordered>
        <tbody>
          <tr>
            <td>Country</td>
            <td><img style={style.image} src={`https://upload.wikimedia.org/wikipedia/commons/${props.flag}`} />{props.name}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{props.area}</td>
          </tr>
          <tr>
            <td>Population</td>
            <td>{props.population}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  }else{
    return <Alert variant={'danger'}>
      You have not select any row.
    </Alert>
  }
}

  // <div>
  //   <h3>You clicked below {JSON.stringify(props)}</h3>
  //   <div>{props.name}</div>
  //   <div>{props.flag}</div>
  //   <div>{props.area}</div>
  //   <div>{props.population}</div>
  // </div>;

export default App;