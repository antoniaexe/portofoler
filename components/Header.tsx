const navBarLinks = [
  {
    name: 'Home',
    url: '/home'
  },
  {
    name: 'About',
    url: '/about'
  }
];
  
export const Header = () => {
  return (
    <div className="flex flex-row w-full justify-between p-8">
      <div>
        <span className="font-sans text-xs" >
          <span className="font-bold">MORE </span><span>DESIGN STUDIO</span>
        </span>
      </div>
      <div >
        <div >
          <ul className="flex space-x-4">
            {navBarLinks.map((link)=>{
              return <li>
                <a href={link.url}>{link.name}</a>
              </li>
              ;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
