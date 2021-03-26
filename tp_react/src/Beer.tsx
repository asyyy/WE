import * as React from 'react';

interface Props {
    id: number;
    name: string
  }
  
const Beer: React.FunctionComponent<Props> = (props) => {
    return <span>ID : {props.id} | Name : {props.name}</span>;
};

export default Beer;