type Type = {
   name: string;
   type: any;
};

const Button = ({ type }: { type: Type }) => {
   if (type?.name !== "flying") {
      return (
         <button className={`capitalize button bg-${type?.name}`}>{type?.name}</button>
      );
   } else return <button className={`capitalize two-color button`}>{type?.name}</button>;
};

export default Button;
