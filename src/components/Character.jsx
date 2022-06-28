export const Character = ({ character }) => {
   return (
      <div className="text-center p-5">
         <h3>{character.name}</h3>
         <img
            className="img-fluid rounded-pill"
            src={character.image}
            alt={character.name}
         />
         <hr />
         <p>{character.origin.name}</p>
      </div>
   );
};
