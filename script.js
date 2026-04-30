// ------------------------------------------------------->  nav animation and logic
const options = document.querySelectorAll("nav ul li");
let selected = options[0];

function select() {
  // Desktop default animation
  if (window.innerWidth > 768) {
    selected.style.marginLeft = "100px";
  } else {
    // Mobile default animation
    selected.classList.add("active");
  }

  options.forEach((el) => {
    el.addEventListener("click", (e) => {
      // Remove previous selected style
      if (window.innerWidth > 768) {
        selected.style.marginLeft = "50px";
      } else {
        selected.classList.remove("active");
      }

      // Update selected item
      selected = e.currentTarget;

      // Apply new selected style
      if (window.innerWidth > 768) {
        selected.style.marginLeft = "100px";
      } else {
        selected.classList.add("active");
      }
    });
  });
}

select();

// ------------------------------------> about me
let showAboutme = false;
const aboutBtn = document.querySelector(".info");
const popup = document.querySelector(".about_me");
const popupCut = document.querySelector(".about_me .cut");
const sense = document.querySelector(".sense");

sense.addEventListener("click", () => {
  popup.style.scale = 0.3;
  popup.style.opacity = 0.0;
  sense.style.display = "none";
  showAboutme = false;
});
popupCut.addEventListener("click", () => {
  showAboutme = false;
  popup.style.scale = 0.3;
  popup.style.opacity = 0.0;
  sense.style.display = "none";
});
aboutBtn.addEventListener("click", () => {
  showAboutme = !showAboutme;
  if (showAboutme) {
    sense.style.display = "unset";
    popup.style.scale = 1;
    popup.style.opacity = 1;
  } else {
    popup.style.scale = 0.3;
    popup.style.opacity = 0.0;
  }
});

// filter logic
// All projects like 
const projects = [
  {
    name: "Instagram Brand Post Design for Coffee Shop",
    link: "https://behance.net/demo-coffee-brand-post",
    img: "./src/images/coffee-brand-post.avif",
    category: "Social Media Design"
  },
  {
    name: "Modern Restaurant Menu Flyer",
    link: "https://behance.net/demo-restaurant-menu",
    img: "./src/images/restaurant-menu-flyer.webp",
    category: "Flyer Design"
  },
  {
    name: "Real Estate Promotional Banner",
    link: "https://behance.net/demo-real-estate-banner",
    img: "./src/images/real-estate-banner.avif",
    category: "Banner Design"
  },
  {
    name: "YouTube Thumbnail Pack for Tech Channel",
    link: "https://behance.net/demo-youtube-thumbnail",
    img: "./src/images/youtube-thumbnail-pack.webp",
    category: "Thumbnail Design"
  },
  {
    name: "Fashion Sale Poster for Clothing Brand",
    link: "https://behance.net/demo-fashion-sale-poster",
    img: "./src/images/fashion-sale-poster.webp",
    category: "Poster Design"
  },
  {
    name: "Startup Logo + Brand Identity Kit",
    link: "https://behance.net/demo-startup-branding",
    img: "./src/images/startup-logo-branding.avif",
    category: "Brand Identity"
  },
  {
    name: "Gym Membership Promotional Flyer",
    link: "https://behance.net/demo-gym-flyer",
    img: "./src/images/gym-membership-flyer.avif",
    category: "Marketing Design"
  },
  {
    name: "Wedding Invitation Card Design",
    link: "https://behance.net/demo-wedding-invitation",
    img: "./src/images/wedding-invitation-card.avif",
    category: "Invitation Design"
  },
  {
    name: "E-commerce Product Ad Creative",
    link: "https://behance.net/demo-product-ad-creative",
    img: "./src/images/ecommerce-product-ad.webp",
    category: "Ad Creative Design"
  },
  {
    name: "Corporate Business Profile Brochure",
    link: "https://behance.net/demo-business-brochure",
    img: "./src/images/corporate-brochure.webp",
    category: "Brochure Design"
  },
   {
    name: "UI/UX",
    link: './designs/uiux.html',
    img: "./src/images/uiux.avif",
    category: "UI UX Design"
  }
];

// render project inside ( designs )
const projectsParent = document.querySelector(".designs");  // parent element
projects.forEach(el=>{
   const div = document.createElement("div");

  div.className = "card";

  div.style.backgroundImage = `url(${el.img})`;

  div.innerHTML = `
    <h2>${el.name}</h2>
    <p>${el.category}</p>
    <a href="${el.link}" target="_blank">
    <svg width='25' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4b2e2b"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z"></path></svg>
    </a>
  `;
  
  projectsParent.appendChild(div);
})

projectsParent.childNodes.forEach((el)=>{
  if(el.className == "card"){
    el.addEventListener("mouseenter",()=>{
      el.childNodes[1].style.opacity = 1;
      console.log(el.childNodes[1])
    })
     el.addEventListener("mouseleave",()=>{
      el.childNodes[1].style.opacity = 0;
      console.log(el.childNodes[1])
    })
  }
})



