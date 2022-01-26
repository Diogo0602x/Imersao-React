function Title() {
    return (
        <h1>Boas vindas de volta!</h1>
    );
}

//Componente React
function HomePage() {
    //JSX
    return (
        <div>
            <Title>Boas vindas de volta!</Title>
            <h2>Discord - Alura Matrix</h2>
            <style jsx>{`
            h1 {
                color:red;
            }
            `}</style>
        </div>
    )
  }
  
  export default HomePage