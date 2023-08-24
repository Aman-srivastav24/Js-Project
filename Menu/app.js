
   
const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "Breakfast",
    price: 15.99,
    img: "https://media.istockphoto.com/photos/pancakes-with-berries-and-maple-syrup-picture-id161170090?k=20&m=161170090&s=612x612&w=0&h=N7F_NbQsuWCyoPkoIb927mPRsyyiPxlUS0aokAhhtRM=",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Diner Double",
    category: "Lunch",
    price: 13.99,
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/high-protein-dinners-slow-cooker-meatballs-image-5a04d02.jpg?quality=90&resize=500,454",
    desc: `Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "Shakes",
    price: 6.99,
    img: "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "Country Delight",
    category: "Breakfast",
    price: 20.99,
    img: "https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "Lunch",
    price: 22.99,
    img: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "Shakes",
    price: 18.99,
    img: "https://images.pexels.com/photos/4323459/pexels-photo-4323459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Bacon Overflow",
    category: "Breakfast",
    price: 8.99,
    img: "https://images.pexels.com/photos/139746/pexels-photo-139746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "American Classic",
    category: "Lunch",
    price: 12.99,
    img: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Quarantine Buddy",
    category: "Shakes",
    price: 16.99,
    img: "https://images.pexels.com/photos/2045362/pexels-photo-2045362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Bison Steak",
    category: "Dinner",
    price: 22.99,
    img: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Bison Steak",
    category: "Starter",
    price: 22.99,
    img: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "Bison Steak",
    category: "food",
    price: 22.99,
    img: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".menuitems");
const allbtn = document.querySelector(".btn");

window.addEventListener("DOMContentLoaded",function(){
  displayitems(menu);
  displaybtn();
});

function displayitems(menu){
  let allitem=  menu.map(function(f){
    return`
    <div class="con">
    <div class="img1">
    <img src="${f.img}" alt="" srcset="">
    </div>
    <div class="detail">
    <div class="name-price">
    <h3 class="item_name">${f.title}</h3> 
    <h3 class="item_price">$${f.price}</h3>
  
    </div>
    <span>.................................................................................................</span>
    <p class="item_detail">${f.desc}</p>
    </div>
    </div>
    `;
  });
  allitem = allitem.join("");
  sectionCenter.innerHTML=allitem;
}
function displaybtn(){
  const categories = menu.reduce(
    function (values , item){
      if(!values.includes(item.category)){
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  const categoryBtns = categories.map(function(category){
    return`
    <button class="b1" data-id=${category}>${category}</button>`;
  })
  .join("");
 allbtn.innerHTML=categoryBtns;
 
 const filterBtns = allbtn.querySelectorAll(".b1");

 filterBtns.forEach(function (btn){
   btn.addEventListener("click",function(e){
     const category = e.currentTarget.dataset.id;
     const menuCategory = menu.filter(function (menuItem){
       if(menuItem.category===category){
         return menuItem;
       }
     });
     if(category==="All"){
       displayitems(menu);
           } else{
             displayitems(menuCategory);
           }
   });
 });
}