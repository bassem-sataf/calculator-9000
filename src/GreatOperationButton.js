function GreatOperationButton (props)  {

    const operator = ['-', '+', '*', '/'];
    const operatorButton = [];
    for(let i =0; i<operator.length; i++)
    {
        operatorButton.push(<button onClick={props.onClick} key = {operator[i]} value = {operator[i]}> {operator[i]} </button>)   
    }
    return operatorButton
    
}

export default GreatOperationButton;