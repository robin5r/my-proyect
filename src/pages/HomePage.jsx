import HeaderComponent from "../components/HeaderComponent"


function HomePage() {
  const saySomething = () =>{
    console.log("Di Algo");
    alert("Ahora");
  }
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <br/>
      <div>HomePage</div>
      <hr/>
      <button onClick={saySomething}>Pulsa Click</button>
    </>
    
  )
} 

export default HomePage