type Type = {
   name: String;
   type: any;
};

const Button = ({ type }: { type: Type }) => {
   const color = String(type?.name);
   if (type?.name !== "flying") {
      return <button className={`capitalize button bg-${color}`}>{type?.name}</button>;
   } else return <button className={`capitalize two-color button`}>{type?.name}</button>;
};

export default Button;
