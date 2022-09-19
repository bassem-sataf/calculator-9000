function AmazingNumberButton (props)  {

    const numbers = [];

    for(let i=0; i<10; i++){
        numbers.push(<button onClick={props.onClick} key= {i} value = {i}>{i}</button>) 
    } 

    return numbers;
}

  export default AmazingNumberButton;