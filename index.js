const menuIcon = document.getElementById('MenuIcon');
const menuList = document.getElementById('menuList');




menuIcon.addEventListener('click',()=>{
    
    menuList.classList.toggle('hidden');
} );




let Grid = document.getElementById('GridSection');


const AllProjects =[
    {
        name: 'WebDesigm',
        image: 'images/Webdesign.jpg',
        phragraph: 'A creative graphic design project'
        
    }, 
    {
        name: 'GraphicDesign',
        image: 'images/graphicdesign.jpg',
        phragraph: 'A creative graphic design project'
        
    },
    {
        name: 'FullStack',
        image: 'images/fullstack.jpg',
        phragraph: 'hello world',
        
    },
];

AllProjects.map((project)=>{
    const projectHtml =`<div class="px-2 py-6 shadow-lg my-8 text-gray-800 rounded-lg mx-8">
        <h1 class="text-center font-bold py-4 ">${project.name}</h1>
        <img src="${project.image}" alt="">
        <p class="py-4 px-4">${project.phragraph}</p>
        <button class="bg-[#0bb2ff] text-white ml-36 px-2 py-1 rounded">Open</button>
      </div>
      `
      Grid.innerHTML += projectHtml;
});















