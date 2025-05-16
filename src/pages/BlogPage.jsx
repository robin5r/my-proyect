import HeaderComponent from "../components/HeaderComponent"

function BlogPage() {
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("El Formulario se ha enviado")
  }
  return (
   <>
   <HeaderComponent></HeaderComponent>
   
   <div>BlogPage
    <center><h1>FORMULARIO</h1></center>
   <form onSubmit={handlesubmit}>
    <center>
    <fieldset>
      <label htmlFor="username">Nombre: </label>
      <input type="text" id="username"/>
    </fieldset>
    <br/>
    <fieldset>
      <label htmlFor="comentario">Comentario: </label>
      <input type="text" id="comentario" />
    </fieldset>
    </center>
    <center><button>Enviar</button></center>
   </form>
   </div>
   </>
    
  )
}

export default BlogPage