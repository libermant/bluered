import {Numbers,classNunber} from "./Numbers";

const number=num();
function num(){
  let arr=[]
  for(let i=0;i<32;i++){
    arr.push(i)
  }
  console.log(arr);
  return arr;  
}
/*const number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]*/

function is(number){
  if(number==1||number==0){
    return false
  }
  for(let i=2;i<number;i++)
  if(number%i===0){
    return false
  }
  return true
}



function App() {
  return (
    <div className="App">
      {number.map((n,index)=>
                <Numbers key={index} num={n} color={classNunber(n)+" n"} />          
      )}      
    </div>
  );
}

export default App;
