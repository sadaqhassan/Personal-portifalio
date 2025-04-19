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
        phragraph: 'Skilled web designer with 2 years of experience creating visually stunning and user-friendly websites. Specializing in responsive design, UI/UX, and seamless digital experiences',
        
        
    }, 
    {
        name: 'GraphicDesign',
        image: 'images/Graphicdesign.jpg',
        phragraph: 'Creative graphic designer with  years of experience in branding, logo design, and digital media. Passionate about crafting visually impactful designs that elevate brands and engage audiences',
        
    },
    {
        name: 'FullStack',
        image: 'images/fullstack.jpg',
        phragraph: 'Versatile full-stack developer with 2 years of experience building dynamic, scalable web applications. Proficient in both front-end and back-end technologies, delivering seamless user experiences and robust solutions.',
        
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















