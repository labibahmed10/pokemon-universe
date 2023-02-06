type Type = {
   name: String;
   type: any;
};

const Button = ({ type }: { type: Type }) => {
   // console.log(type?.name);
   if (type?.name !== "flying") {
      return (
         <button className={`capitalize button bg-${type?.name} bg-bug`}>
            {type?.name}
         </button>
      );
   } else return <button className={`capitalize two-color button`}>{type?.name}</button>;
};

export default Button;
