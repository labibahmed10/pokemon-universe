type Type = {
   name: String;
   type: any;
};

const Button = ({ type }: { type: Type }) => {
   if (type?.name === "flying") {
      return <button className={`capitalize two-color button`}>{type?.name}</button>;
   }
   return (
      <button className={`capitalize button`} style={{ background: `${type?.name}` }}>
         {type?.name}
      </button>
   );
};

export default Button;
