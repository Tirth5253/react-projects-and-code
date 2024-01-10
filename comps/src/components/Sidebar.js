import Link from "./Link";
function Sidebar(){

const links=[{
    label:'Dropdown',
    path:'/dropdown'
},
{
    label:'Accordion',
    path:'/accordion'
},
{
    label:'Buttons',
    path:'/buttons'
},
{
    label:'Modal',
    path:'/modal'
}
];

const renderedLinks=links.map((link)=>{
    return <Link key={link.label} to={link.path} className='mb-6' activeClassName='font-bold border-l-4 border-blue-500 pl-2'>{link.label}</Link>
})

  return (
    <div className=" sticky top-0 overflow-y-scroll flex flex-col bg-gradient-to-b  from-black via-slate-700 to-slate-900 border-solid  items-start">
        {renderedLinks}
    </div>
  )
}
export default Sidebar;