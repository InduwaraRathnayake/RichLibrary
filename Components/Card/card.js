document.addEventListener('DOMContentLoaded', () => {
    const books = [
        // Fiction
        { 
          category: "Fiction", 
          title: "Gone Girl", 
          description: "Crime thriller exploring Nick Dunne's role in his wife Amy's mysterious disappearance, becoming a New York Times Best Seller.",
          img: { src: "assets/subCategories/Fiction/GoneGirl.jpeg", alt: "Cover of Gone Girl" } 
        },
        { 
          category: "Fiction", 
          title: "The Kite Runner", 
          description: "Khaled Hosseini's debut novel about Amir, a young boy from Kabul, published in 2003 by Riverhead Books.",
          img: { src: "assets/subCategories/Fiction/TheKiteRunner.jpeg", alt: "Cover of The Kite Runner" } 
        },
        { 
          category: "Fiction", 
          title: "A Little Life", 
          description: "Hanya Yanagihara's 2015 critically acclaimed novel, shortlisted for major awards, explores intense and challenging themes.",
          img: { src: "assets/subCategories/Fiction/TheLittleLife.jpeg", alt: "Cover of A Little Life" } 
        },
        { 
          category: "Fiction", 
          title: "Life After Life", 
          description: "Kate Atkinson's 2013 novel about the Todd family garnered critical acclaim and inspired a sequel, 'A God in Ruins'.",
          img: { src: "assets/subCategories/Fiction/LifeAfterLife.jpeg", alt: "Cover of Life After Life" } 
        },
        { 
          category: "Fiction", 
          title: "Ready Player One", 
          description: "Ernest Cline's 2011 debut science fiction novel set in a dystopian virtual reality world.",
          img: { src: "assets/subCategories/Fiction/ReadyPlayerOne.jpeg", alt: "Cover of Ready Player One" } 
        },
      
        // Non-Fiction
        { 
          category: "NonFiction", 
          title: "Sapiens", 
          description: "Yuval Noah Harari's 2011 book explores human history, based on lectures taught at Hebrew University, later translated to English in 2014.",
          img: { src: "assets/subCategories/NonFiction/Sapiens.jpeg", alt: "Cover of Sapiens" } 
        },
        { 
          category: "NonFiction", 
          title: "Between the World and Me", 
          description: "Ta-Nehisi Coates' 2015 book, written as a letter to his son, examines the Black experience in the United States.",
          img: { src: "assets/subCategories/NonFiction/BetweenTheWorldAndMe.jpeg", alt: "Cover of Between the World and Me" } 
        },
        { 
          category: "NonFiction", 
          title: "Patriot", 
          description: "Alexei Navalny's posthumous 2024 memoir explores his life and political career as a Russian opposition leader.",
          img: { src: "assets/subCategories/NonFiction/Patriot.jpeg", alt: "Cover of Patriot" } 
        },
        { 
          category: "NonFiction", 
          title: "Peacemakers", 
          description: "Margaret MacMillan's book analyzes the 1919 Versailles meeting, pivotal for shaping 20th-century global geopolitics.",
          img: { src: "assets/subCategories/NonFiction/Peacemakers.jpg", alt: "Cover of Peacemakers" } 
        },
      
        // Children's Books
        { 
          category: "Children's Books", 
          title: "Rock-a-bye Baby", 
          description: "Jane Cabrera's illustrated reimagining of the classic nursery rhyme, perfect for bedtime with baby animals.",
          img: { src: "assets/subCategories/ChildernsBooks/RockAByeBaby.jpeg", alt: "Cover of Rock-a-bye Baby" } 
        },
        { 
          category: "Children's Books", 
          title: "Old MacDonald Had a Farm", 
          description: "Jane Cabrera's musical book retells the classic song with vibrant illustrations and interactive storytelling.",
          img: { src: "assets/subCategories/ChildernsBooks/OldMacdonaldHadAFarm.jpeg", alt: "Cover of Old MacDonald Had a Farm" } 
        },
        { 
          category: "Children's Books", 
          title: "Mommy, Carry Me Please!", 
          description: "Jane Cabrera's tale celebrates how animal mothers care for babies, emphasizing love and diverse parenting styles.",
          img: { src: "assets/subCategories/ChildernsBooks/MommyCarryMePlease.jpeg", alt: "Cover of Mommy, Carry Me Please!" } 
        },
        { 
          category: "Children's Books", 
          title: "The Itsy Bitsy Spider", 
          description: "Jane Cabrera reimagines the rhyme, taking Itsy Bitsy Spider to a water park adventure with colorful illustrations.",
          img: { src: "assets/subCategories/ChildernsBooks/TheItsyBitsySpider.jpeg", alt: "Cover of The Itsy Bitsy Spider" } 
        },
      
        // Educational & Reference
        { 
          category: "Educational & Reference", 
          title: "History Year by Year", 
          description: "DK's visual timeline spans 7 million years, covering world history's key events and influential figures.",
          img: { src: "assets/subCategories/EducationalAndReference/HistoryYearbyYear.jpg", alt: "Cover of History Year by Year" } 
        },
        { 
          category: "Educational & Reference", 
          title: "Timeline of World History", 
          description: "Matt Baker's visual reference includes foldout charts and timelines, capturing significant global events and civilizations.",
          img: { src: "assets/subCategories/EducationalAndReference/TimelineofWorldHistory.jpg", alt: "Cover of Timeline of World History" } 
        },
        { 
          category: "Educational & Reference", 
          title: "The Emotional Craft of Fiction", 
          description: "Donald Maass' guide teaches writers to evoke emotional responses and engage readers through storytelling techniques.",
          img: { src: "assets/subCategories/EducationalAndReference/TheEmotionalCraftofFiction.jpg", alt: "Cover of The Emotional Craft of Fiction" } 
        },
        { 
          category: "Educational & Reference", 
          title: "A Manual for Writers", 
          description: "Kate Turabian's essential guide provides timeless principles for crafting research papers with evidence-based arguments and proper citations.",
          img: { src: "assets/subCategories/EducationalAndReference/AManualforWriters.jpg", alt: "Cover of A Manual for Writers" } 
        },
      
        // Novels & Comics
        { 
          category: "Novels & Comics", 
          title: "Dog Man: Big Jim Begins", 
          description: "Dav Pilkey's adventure sees beloved characters unite to stop Space Cuties from destroying the city.",
          img: { src: "assets/subCategories/NovelsAndComics/DogManBigJimBegins.jpg", alt: "Cover of Dog Man: Big Jim Begins" } 
        },
        { 
          category: "Novels & Comics", 
          title: "Ultimate Universe", 
          description: "Christopher Camp's 2024 comic delves into the Maker's Council, setting the stage for future Ultimate storylines.",
          img: { src: "assets/subCategories/NovelsAndComics/UltimateUniverse.jpg", alt: "Cover of Ultimate Universe" } 
        },
        { 
          category: "Novels & Comics", 
          title: "Transformers", 
          description: "Daniel Warren Johnson's story arc pits Soundwave against the Autobots, with Optimus Prime uncovering game-changing mysteries.",
          img: { src: "assets/subCategories/NovelsAndComics/Transformers.jpg", alt: "Cover of Transformers" } 
        },
        { 
          category: "Novels & Comics", 
          title: "Sonic The Hedgehog", 
          description: "Ian Flynn's 2018 comic follows Sonic and friends tracking Clutch the Opossum in a thrilling adventure.",
          img: { src: "assets/subCategories/NovelsAndComics/SonicTheHedgehog.jpg", alt: "Cover of Sonic The Hedgehog" } 
        },
        { 
          category: "Novels & Comics", 
          title: "Wolverine", 
          description: "Erica Schultz's 2024 comic features Laura Kinney, battling mutant oppression as the new Wolverine.",
          img: { src: "assets/subCategories/NovelsAndComics/Wolverine.jpg", alt: "Cover of Wolverine" } 
        },
        { 
          category: "Novels & Comics", 
          title: "Phoenix", 
          description: "Stephanie Phillips' 2024 comic has Jean Grey, as Phoenix, face Thanos with help from new allies.",
          img: { src: "assets/subCategories/NovelsAndComics/Phoenix.jpg", alt: "Cover of Phoenix" } 
        },
      
        // Poetry
        { 
          category: "Poetry", 
          title: "Devotions", 
          description: "Mary Oliver's collection of beloved poems, a New York Times Bestseller and Oprah's Book Club pick.",
          img: { src: "assets/subCategories/Poetry/Devotions.jpeg", alt: "Cover of Devotions" } 
        },
        { 
          category: "Poetry", 
          title: "The Sun and Her Flowers", 
          description: "Rupi Kaur's 2017 poetry book with five illustrated chapters, showcasing themes of love and resilience.",
          img: { src: "assets/subCategories/Poetry/thesunandherflowers.jpeg", alt: "Cover of The Sun and Her Flowers" } 
        }
    ];

    const categories = [...new Set(books.map(book => book.category))];

    const container = document.getElementById('cardContainer');

    categories.forEach(category => {
        const categoryBooks = books.filter(book => book.category === category);

        const categorySection = document.createElement('div');
        categorySection.classList.add('category-section');

        const categoryTitle = document.createElement('h1');
        categoryTitle.textContent = category;
        categoryTitle.classList.add('category-title'); // Add class for styling
        categoryTitle.id = category; // Add id for anchor links
        categorySection.appendChild(categoryTitle);

        const cardRow = document.createElement('div');
        cardRow.classList.add('card-row');

        categoryBooks.forEach(book => {
            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.src = book.img.src;
            img.alt = book.img.alt;
            card.appendChild(img);

            const title = document.createElement('h3');
            title.textContent = book.title;
            card.appendChild(title);

            const description = document.createElement('p');
            description.textContent = book.description;
            card.appendChild(description);

            cardRow.appendChild(card);
        });

        categorySection.appendChild(cardRow);
        container.appendChild(categorySection);

        const hr = document.createElement('hr');
        container.appendChild(hr);
    });
});