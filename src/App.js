import React,{useState} from 'react';
import Icon from './components/Icon';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {Card,CardBody,Container,Button,Col,Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
const itemArray = new Array(9).fill("empty")

const App = () => {
  
  const [isCross,setIsCross] = useState(false)
  const [winMessage,setWinMessage] = useState("")
  
  const reloadGame = () => {
    setIsCross(false)
    setWinMessage("")
    itemArray.fill("empty",0,9)
  }
  
  const checkIsWinner = () => {
    //row1
    if(itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2] && itemArray[0]!='empty'){
        setWinMessage(`${itemArray[0]} wins`)
    }
    //row2
    else if(itemArray[3] === itemArray[4] && itemArray[4] === itemArray[5] && itemArray[3]!='empty'){
      setWinMessage(`${itemArray[3]} wins`)
    }
    //row3
    else if(itemArray[6] === itemArray[7] && itemArray[7] === itemArray[8] && itemArray[6]!='empty'){
      setWinMessage(`${itemArray[6]} wins`)
  }
  //col1
    else if(itemArray[0] === itemArray[3] && itemArray[3] === itemArray[6] && itemArray[0]!='empty'){
      setWinMessage(`${itemArray[0]} wins`)
  }
  //col2
    else if(itemArray[1] === itemArray[4] && itemArray[4] === itemArray[7] && itemArray[1]!='empty'){
      setWinMessage(`${itemArray[1]} wins`)
  }
  //col3
    else if(itemArray[2] === itemArray[5] && itemArray[5] === itemArray[8] && itemArray[2]!='empty'){
      setWinMessage(`${itemArray[2]} wins`)
  }
  //diagonal1
    else if(itemArray[0] === itemArray[4] && itemArray[4] === itemArray[8] && itemArray[0]!='empty'){
      setWinMessage(`${itemArray[0]} wins`)
  }
  //diagonal2
    else if(itemArray[2] === itemArray[4] && itemArray[4] === itemArray[6] && itemArray[2]!='empty'){
      setWinMessage(`${itemArray[2]} wins`)
  }
  else if(itemArray[0] !=='empty' && itemArray[1] !=='empty' && itemArray[2] !=='empty' && itemArray[3] !=='empty' && itemArray[4] !=='empty' && itemArray[5] !=='empty' && itemArray[6] !=='empty' && itemArray[7] !=='empty' && itemArray[8] !=='empty' && itemArray[9] !=='empty'){
    setWinMessage("No One Won")
  }
  }

  const ChangeItem = itemNumber => {
      if(winMessage){
        return toast(winMessage,{type:'success'})
      }
      if(itemArray[itemNumber] === "empty"){
        itemArray[itemNumber] = isCross?"cross":"circle"
        setIsCross(!isCross)
      }else{
        return toast("already filled",{type:"error"})
      }

      checkIsWinner();
  }

  return (
   <Container className='p-5'>
     <h1 color='white'>Tic Tac Toe Game</h1>
     <ToastContainer position='bottom-center'/>
       <Row>
         <Col md={6} className="offset-md-3"> 
         {winMessage ?(
           <div className='mb-2 mt-2'>
              <h1 className='text-primary text-uppercase text-center'>
                {winMessage}
              </h1>
              <Button
                color='success'
                block
                onClick={reloadGame}>
                Reload The Game
                </Button>
           </div>
         ):(
           <h1 className='text-center text-warning'>{
             isCross?"Cross":"Circle"
           } truns</h1>
         )}
            <div className='grid'>
                {itemArray.map((item,index) => (
                  <Card key={index} onClick={ () => ChangeItem(index)} color='warning'>  
                    <CardBody className='box'>
                      <Icon name={item}/>
                    </CardBody>
                  </Card>
                ))}
            </div>     
         </Col>
       </Row>
     {/* </ToastContainer> */}
   </Container>
  );
}

export default App;
