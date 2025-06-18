import LikeButton from './like-button';

function Header({ title }) {
   return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
   const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

   return (
      <div>
         <Header title="Jhonatan Segura" />
         <p>Acerca De Mi</p>
         <a href='/proyectos'>Proyectos</a>
         <ul>
            {names.map((name) => (
               <li key={name}>{name}</li>
            ))}
         </ul>
         {/* <LikeButton /> */}
      </div>
   );
}