export function portfolios() {
  const portfolios = [
    {
      name: "Kwency Maye Dahilan",
      portfolioLink: "https://kwencydesigns.ca/",
    },
    { name: "Marianne Kaye Febra", portfolioLink: "https://mazzfebra.com/" },
    { name: "Sophia Westrop", portfolioLink: "https://sophiawestrop.com" },
    { name: "Harsh Patel", portfolioLink: "https://patelharsh.ca/" },
    { name: "Delilah Singer", portfolioLink: "https://delilahsinger.ca/" },
    { name: "Ezra Carriere", portfolioLink: "https://ezracarriere.ca" },
    { name: "Jonathan Yabes", portfolioLink: "https://jonathanyabes.ca" },
    {
      name: "Shih-Hsuan Huang",
      portfolioLink: "https://alexhuanginnovation.com/",
    },                    
    { name: "Jemima Ama Neizer", portfolioLink: "http://jemamaneizer.ca/" },
    {
      name: "Estefania Aguilar Velez",
      portfolioLink: "https://www.tfaaguilar.ca/",
    },
    { name: "Ha Anh Le", portfolioLink: "https://haanhle.com/" },
    { name: "Viktor Kim", portfolioLink: "https://viktorkim.ca" },
    {
      name: "Harsh Jaydevbhai Chaudhary",
      portfolioLink: "https://harsh-chaudhary.com",
    },
    {
      name: "Rodrigo Rocha De Freitas",
      portfolioLink: "https://rodfreitas.com/",
    },
    {
      name: "Spencer Dipierdomenico",
      portfolioLink: "https://dipidomain.com/",
    },
    { name: "Bhuvnish Arora", portfolioLink: "https://www.bhuvnisharora.com/" },
    { name: "Jesica Ohene", portfolioLink: "http://www.jesicaohene.com" },
    {
      name: "Deviano Dames",
      portfolioLink: "https://devianodamesporfolio.com/",
    },
    {
      name: "Maria Jose Linares Rico",
      portfolioLink: "https://mariajoselr.com/",
    },
    {
      name: "Valentina Perez Moreno",
      portfolioLink: "https://valentina-perez.com/",
    },
    { name: "Sen Ghirmay", portfolioLink: "https://senmay.ca" },
    {
      name: "Jintao Duan",
      portfolioLink: "https://main--jintaoportfolioca.netlify.app/",
    },
    { name: "Abdullh Sultan", portfolioLink: "https://asultan.ca/" },
    { name: "Mohamed Zarandah", portfolioLink: "https://www.mohzrn.ca/" },
    { name: "Loui Erick Hernandez", portfolioLink: "https://louihernandez.ca" },
    {
      name: "Brayan Hortua Rodriguez",
      portfolioLink: "https://brayanhortua.ca/",
    },
    {
      name: "Michelle Paola Duque De La Rosa",
      portfolioLink: "http://michelleduque.com/",
    },
    { name: "Tiago Da Silva Witt", portfolioLink: "https://tiagowitt.com/" },
    { name: "Suyog Ghimire", portfolioLink: "http://suyog.ca/" },
    { name: "Samaya Kafle", portfolioLink: "https://samayakafle.ca" },
    {
      name: "Omkumar Dipakbhai Patel",
      portfolioLink: "http://www.ompatell.com",
    },
    {
      name: "Sneh Manishkumar Patel",
      portfolioLink: "https://www.patelsneh.com",
    },
    { name: "Mirdan Assi", portfolioLink: "https://mirdanassi.ca/" },
    {
      name: "Juliette Thomson",
      portfolioLink: "https://juliettethomsonportfolio.ca",
    },
    {
      name: "Maria Camila Romero Contreras",
      portfolioLink: "https://camilaromero.ca",
    },
    { name: "Ethan Jutila", portfolioLink: "http://ethanjutila.ca/" },
    {
      name: "Patricia Da Silva Martins",
      portfolioLink: "https://www.patriciamartins.ca/",
    },
    {
      name: "Emanuel Kabongo",
      portfolioLink: "https://www.emmanuelkabongo.ca",
    },
    { name: "Junish Arora", portfolioLink: "http://arorajunish.ca" },
    {
      name: "Vasishth Sureshbhai Chaudhari",
      portfolioLink: "https://vasishth.ca",
    },
    { name: "Spencer Abbott", portfolioLink: "https://spencerabbott.ca/" },
    {
      name: "Kirk Caspe",
      portfolioLink: "https://thriving-marshmallow-12bb9e.netlify.app/",
    },
    { name: "Ekampreet Kaur", portfolioLink: "https://ekampreetkaur.com/" },
    { name: "Mykyta Buria", portfolioLink: "https://mburia.com" },
    { name: "Sumin Lee", portfolioLink: "https://suminlee.com" },
    { name: "Jie Yang", portfolioLink: "https://yangjieporfolio.netlify.app/" },
    {
      name: "Chao Chen",
      portfolioLink: "https://playful-bonbon-f5bf4c.netlify.app",
    },
    {
      name: "Haem Hariharan Rajeswari Sekar",
      portfolioLink: "https://haemhariharan.ca/",
    },
    {
      name: "Apple Grace Gesalan",
      portfolioLink: "https://gracegesalandesign.com/",
    },
    { name: "Sandra Neira Claros", portfolioLink: "https://www.sandesign.ca/" },
    {
      name: "Jason Marc Catamora Difuntorum",
      portfolioLink: "https://jvisuals.ca",
    },
    { name: "Jong Woog Yun", portfolioLink: "http://jonyun.ca/" },
    { name: "Jasmine Chicoine", portfolioLink: "https://jazzydesigns.ca" },
    {
      name: "Hit Dilipbhai Patel",
      portfolioLink: "https://www.hitpatelportfolio.com/",
    },
    { name: "Leila Akbari", portfolioLink: "https://www.itsleila.com" },
  ];

  // Fisher-Yates shuffle algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Shuffle the portfolios array
  const shuffledPortfolios = shuffleArray(portfolios);

  const portfolioContainer = document.querySelector("#portfolio-container");

  shuffledPortfolios.forEach(function (portfolio) {
    const portfolioDiv = document.createElement("div");
    portfolioDiv.classList.add(
      "portfolio-item",
      "col-span-2",
      "m-col-span-3",
      "box"
    );
    portfolioDiv.innerHTML = `<h4>${portfolio.name}</h4> <a href="${
      portfolio.portfolioLink
    }" target="_blank">${portfolio.name
      .split(" ")[0][0]
      .toLowerCase()}.${portfolio.name.split(" ")[1].toLowerCase()}.com</a>`;

    portfolioContainer.appendChild(portfolioDiv);
  });

  // Intersection Observer for Portfolios
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll(".portfolio-item").forEach((item) => {
    observer.observe(item);
  });
}
