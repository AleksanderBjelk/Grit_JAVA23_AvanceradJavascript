function Greeting({ isFirst }) {
    const getGreetingMessage = () => {
      return isFirst ? 'Välkommen som ny användare!' : 'Välkommen tillbaka!';
    };

   
  
    return (
      <h1>{getGreetingMessage()}</h1>
    );
  }
  
  export default Greeting;
  
  