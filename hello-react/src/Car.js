const Car = ({ name }) => {
    return (
      <div>
        {name && <h2>Hi..{name}</h2>}
      </div>
    );
  };
  
  export default Car;
  