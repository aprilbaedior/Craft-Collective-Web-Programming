//events data
const events = [
  //ART CLASSES & WORKSHOPS
  {
    id: 1,
    name: "Glowing Sunset Palms",
    category: "hands-on",
    image: "images/glowing_sunset_palms.jpg",
    description: "Paint a tropical sunset with glowing palm trees.",
    date: "May 6, 2025",
    time: "7:00 PM - 9:00 PM",
    cost: "$40-$49",
    location: "Painting with a Twist - San Marco",
    address: "1525 San Marco Blvd, Jacksonville, FL 32207"
  },
  {
    id: 2,
    name: "Electric Dragon",
    category: "hand-on",
    image: "images/electric_dragon.jpg",
    description: "Bring a pre-sketched electric dragon to life with vibrant colors.",
    date: "May 8, 2025",
    time: "7:00 PM - 9:00 PM",
    cost: "$45",
    location: "Painting with a Twist - San Marco",
    address: "1525 San Marco Blvd, Jacksonville, FL 32207"
  },
  {
    id: 3,
    name: "Poppy Moon",
    category: "hands-on",
    image: "images/poppy_moon.jpg",
    description: "Create a mesmerizing scene featuring poppies under a moonlit sky.",
    date: "May 9, 2025",
    time: "9:00 PM - 11:30 PM",
    cost: "$45-$54",
    location: "Painting with a Twist - San Marco",
    address: "1525 San Marco Blvd, Jacksonville, FL 32207"
  },
  {
    id: 4,
    name: "Flowers for Mom",
    category: "hands-on",
    image: "images/flowers_for_mom.jpg",
    description: "Celebrate Mother's Day by painting a beautiful bouquet.",
    date: "May 11, 2025",
    time: "4:00 PM - 6:00 PM",
    cost: "$35-$49",
    location: "Painting with a Twist - San Marco",
    address: "1525 San Marco Blvd, Jacksonville, FL 32207"
  },
  {
    id: 6,
    name: "Wool Painting",
    category: "hands-on",
    image: "images/wool_painting.jpg",
    description: "Explore a unique art form by creating beautiful landscapes using dyed wool fibers instead of paint. Materials included.",
    date: "May 15, 2025",
    time: "5:30 PM - 7:30 PM",
    cost: "$40",
    location: "Riverfront Art Studio",
    address: "1025 Museum Cir, Jacksonville, FL 32207"
  },
  {
    id: 7,
    name: "Watercolor Painting Workshop with Bonnie Williams",
    category: "hands-on",
    image: "images/watercolor_bonnie.jpg",
    description: "Join local artist Bonnie Williams for a hands-on watercolor workshop perfect for beginners and art lovers of all levels.",
    date: "May 25, 2025",
    time: "10:00 AM - 12:00 PM",
    cost: "$30",
    location: "Mandarin Art Center",
    address: "11924 San Jose Blvd, Jacksonville, FL 32223"
  },
  {
    id: 7,
    name: "Intro to the Pottery Wheel",
    category: "hands-on",
    image: "images/pottery_wheel_intro.jpg",
    description: "Begin your pottery journey by learning the basics of wheel throwing. Perfect for beginners looking to try their hands at clay.",
    date: "April 23, 2025",
    time: "6:00 PM - 8:30 PM",
    cost: "$65",
    location: "Jacksonville Pottery Studio",
    address: "2726 College St, Jacksonville, FL 32205"
  },
  {
    id: 8,
    name: "R&B and Clay",
    category: "hands-on",
    image: "images/rnb_clay.jpg",
    description: "Relax, vibe to R&B, and get creative with clay in this chill workshop.",
    date: "April 27, 2025",
    time: "6:00 PM - 9:00 PM",
    cost: "$45",
    location: "Bella’s Art House",
    address: "5616 San Juan Ave, Jacksonville, FL 32210"
  },
  {
    id: 9,
    name: "Sculpting with Clay: Handbuilding Basics",
    category: "hands-on",
    image: "images/handbuilding_basics.jpg",
    description: "Learn traditional handbuilding techniques including pinching, coiling, and slab construction in a fun, supportive environment.",
    date: "May 2, 2025",
    time: "6:00 PM - 8:30 PM",
    cost: "$60",
    location: "Jacksonville Pottery Studio",
    address: "2726 College St, Jacksonville, FL 32205"
  },
  {
    id: 10,
    name: "Kids Night Out: Mother's Day Edition",
    category: "kids",
    image: "images/kids_night_out.jpg",
    description: "Drop off the kiddos for an evening of pottery painting, snacks, and fun while you enjoy a little grown-up time. Perfect pre-Mother’s Day treat!",
    date: "May 10, 2025",
    time: "6:00 PM - 8:30 PM",
    cost: "$30 per child",
    location: "Doing Dishes Pottery Studio",
    address: "5619 San Jose Blvd, Jacksonville, FL 32207"
  },
  {
    id: 11,
    name: "Couples Night Clay Date",
    category: "hands-on",
    image: "images/couples_clay_date.jpg",
    description: "Grab your partner and enjoy a romantic night of clay, creativity, and connection. BYOB welcome!",
    date: "May 10, 2025",
    time: "7:00 PM - 9:30 PM",
    cost: "$130 per couple",
    location: "Jacksonville Pottery Studio",
    address: "2726 College St, Jacksonville, FL 32205"
  },
  {
    id: 12,
    name: "Mother’s Day Pottery Painting",
    category: "kids",
    image: "images/mothers_day_dishes.jpg",
    description: "Celebrate Mother’s Day with a pottery painting workshop perfect for kids and adults alike. Choose from a variety of ceramic pieces to paint and personalize.",
    date: "May 12, 2025",
    time: "1:00 PM - 3:00 PM",
    cost: "$15-$40 depending on piece",
    location: "Doing Dishes Pottery Studio",
    address: "5619 San Jose Blvd, Jacksonville, FL 32207"
  },
  // MINDFULNESS & WELLNESS EVENTS
  {
    id: 13,
    name: "Art Therapy for Stress Relief",
    category: "mindfulness",
    image: "images/art_therapy.jpg",
    description: "A mindful art workshop exploring how life’s course, the load, and the impact influence our mental health. Includes materials and guided journaling.",
    date: "May 3, 2025",
    time: "12:00 PM - 2:30 PM",
    cost: "$25",
    location: "Love and Healing Center",
    address: "9000 Regency Square Blvd, Jacksonville, FL 32211"
  },
  {
    id: 14,
    name: "Self-Care Sunday: A Creative Date with Your Soul",
    category: "mindfulness",
    image: "images/self_care_sunday.jpg",
    description: "Tap into your soul through journaling, sketching, painting, and reflective conversations in a peaceful, affirming space.",
    date: "May 5, 2025",
    time: "1:00 PM - 3:30 PM",
    cost: "$35",
    location: "Peace of Mind Studio",
    address: "2110 University Blvd N, Jacksonville, FL 32211"
  },
  {
    id: 15,
    name: "Intro to Accelerated Resolution Therapy (ART)",
    category: "mindfulness",
    image: "images/art_therapy_intro.jpg",
    description: "Learn how ART uses rapid-eye movement and visualization techniques to ease stress, trauma, and emotional discomfort through guided practice.",
    date: "May 10, 2025",
    time: "10:00 AM - 1:00 PM",
    cost: "Free (RSVP Required)",
    location: "Baptist Wellness Institute",
    address: "841 Prudential Dr, Jacksonville, FL 32207"
  },
  // FESTIVALS & MARKETS
  {
    id: 16,
    name: "Mandarin Art Festival",
    category: "festival",
    image: "images/mandarin_art_festival.jpg",
    description: "A long-standing Jacksonville tradition celebrating fine art, local crafts, food vendors, and live entertainment on Easter weekend.",
    date: "April 20, 2025",
    time: "10:00 AM - 5:00 PM",
    cost: "$5 Admission",
    location: "Mandarin Community Club",
    address: "12447 Mandarin Rd, Jacksonville, FL 32223"
  },
  {
    id: 17,
    name: "2025 Spring Mural Jam",
    category: "festival",
    image: "images/spring_mural_jam.jpg",
    description: "Watch local artists bring walls to life during this community mural painting celebration with music, vendors, and family-friendly fun.",
    date: "April 26, 2025",
    time: "11:00 AM - 4:00 PM",
    cost: "Free Entry",
    location: "Riverside Arts District",
    address: "2625 Gilmore St, Jacksonville, FL 32204"
  },
  {
    id: 18,
    name: "The Underground Farmers & Arts Market",
    category: "festival",
    image: "images/underground_market.jpg",
    description: "An underground-style market showcasing fresh produce, handmade crafts, live entertainment, and holistic vendors in an eclectic atmosphere.",
    date: "May 4, 2025",
    time: "12:00 PM - 5:00 PM",
    cost: "Free with RSVP",
    location: "The Justice Pub",
    address: "315 E Bay St, Jacksonville, FL 32202"
  },
  {
    id: 19,
    name: "Riverside Arts Market (RAM)",
    category: "festival",
    image: "images/riverside_arts_market.jpg",
    description: "A weekly arts-and-crafts market under the Fuller Warren Bridge featuring local makers, live music, food trucks, and community vibes.",
    date: "Every Saturday",
    time: "10:00 AM - 3:00 PM",
    cost: "Free Entry",
    location: "Riverside Arts Market",
    address: "715 Riverside Ave, Jacksonville, FL 32204"
  },
  {
    id: 13,
    name: "North Beaches Art Walk",
    category: "festival",
    image: "images/north_beaches_art_walk.jpg",
    date: "Third Thursday Monthly",
    time: "5:00 PM - 9:00 PM",
    cost: "Free Entry",
    location: "Beaches Town Center",
    address: "200 First St, Neptune Beach, FL 32266",
    image: "images/north_beaches_art_walk.jpg",
    description: "A monthly open-air art walk featuring local artists, vendors, music, and food throughout the streets of Atlantic and Neptune Beach."
  },
  {
    id: 20,
    name: "First Wednesday Art Walk",
    category: "festival",
    image: "images/artwalk_downtown.jpg",
    description: "Downtown Jacksonville comes alive with local art, live music, food vendors, and community celebration every first Wednesday of the month.",
    date: "First Wednesday Monthly",
    time: "5:00 PM - 9:00 PM",
    cost: "Free Entry",
    location: "Downtown Jacksonville (Main Street)",
    address: "100 N Laura St, Jacksonville, FL 32202"
  },
  //KIDS EVENTS
  {
    id: 22,
    name: "Mini Makers: Clay Animals Workshop",
    category: "kids",
    image: "images/mini_makers.jpg",
    description: "Kids will sculpt fun animal figurines from colorful clay. All materials provided and perfect for ages 5–10.",
    date: "May 16, 2025",
    time: "11:00 AM - 12:30 PM",
    cost: "$20",
    location: "Creative Kids Studio",
    address: "4422 Art Street, Jacksonville, FL 32277"
  },
  {
    id: 23,
    name: "Color Splash! Watercolor Painting for Kids",
    category: "kids",
    image: "images/color_splash.jpg",
    description: "A playful painting session using watercolor and salt textures. Ideal for beginners ages 6–12.",
    date: "May 19, 2025",
    time: "2:00 PM - 3:30 PM",
    cost: "$18",
    location: "River City Youth Center",
    address: "1201 Rainbow Dr, Jacksonville, FL 32218"
  },
  {
    id: 24,
    name: "Story & Sketch Time",
    category: "kids",
    image: "images/story_sketch.jpg",
    description: "We read a fun story together, then kids create a drawing inspired by the characters and theme. Ages 4–8.",
    date: "May 21, 2025",
    time: "10:00 AM - 11:15 AM",
    cost: "Free with RSVP",
    location: "Sunshine Library",
    address: "3905 Reading Ln, Jacksonville, FL 32206"
  },
  {
    id: 25,
    name: "Slime Science Party",
    category: "kids",
    image: "images/slime_science.jpg",
    description: "Kids will mix, stretch, and decorate their own slime while learning about textures and chemistry! Ages 5–12.",
    date: "May 24, 2025",
    time: "1:30 PM - 3:00 PM",
    cost: "$25",
    location: "Messy Minds Lab",
    address: "844 Play Ave, Jacksonville, FL 32256"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  //get the elements that contain the event details
  const details = document.getElementById('event-details');
  const closeBtn = document.getElementById('close-details');

  //create categories for the events
  const categories = ['hands-on', 'kids', 'mindfulness', 'festival'];

  //loop through each category separately
  categories.forEach(category => {
    const section = document.getElementById(`${category}-events`);
    let tr = document.createElement('tr');
    let count = 0;

    //loop through each event and create a card for it
    events.forEach(event => 
      {
      //check if the event belongs to the current category
      //if so, create a card for it
      if (event.category === category) 
        {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `<img src="${event.image}" alt="${event.name}"> 
                          <h3>${event.name}</h3>`;

        //add event listener to each card to show details when clicked
        card.addEventListener('click', () => 
        {
          document.getElementById('event-name').textContent = event.name;
          document.getElementById('event-description').textContent = event.description;
          document.getElementById('event-date').textContent = event.date;
          document.getElementById('event-time').textContent = event.time;
          document.getElementById('event-cost').textContent = event.cost;
          document.getElementById('event-location').textContent = event.location;
          document.getElementById('event-directions').href = `https://www.google.com/maps/search/?api=1&query=${event.address}`;
          details.classList.remove('hidden');
          details.classList.add('show');
          document.body.style.overflow = 'hidden';
        });

        //create a table cell and append the card to it
        //then append the cell to the row
        const td = document.createElement('td');
        td.appendChild(card);
        tr.appendChild(td);
        count++;

        //when cards are added, check if 3 cards are in the row
        //if so, append the row to the section and create a new row
        if (count === 3) 
        {
          section.appendChild(tr);
          tr = document.createElement('tr');
          count = 0;
        }
      }
    });

    if (count > 0) {
      section.appendChild(tr);
    }
  });

  //close button functionality
  closeBtn.addEventListener('click', () => 
  {
    details.classList.add('hidden');
    details.classList.remove('show');
    document.body.style.overflow = '';
  });

  //close pop up on outside click
  document.addEventListener('click', (e) => 
    {
    if (!details.contains(e.target) && !e.target.closest('.event-card') && !details.classList.contains('hidden')) {
      details.classList.add('hidden');
      details.classList.remove('show');
      document.body.style.overflow = '';
    }
  });
});


  //resources: 
  //jaxpottery.com
  //paintingwithatwist.com
  //https://www.eventbrite.com/e/rb-and-clay-tickets-1270975073659?aff=ebdssbdestsearch
  //https://www.eventbrite.com/e/art-therapy-for-stress-relief-life-s-course-the-load-the-impact-tickets-1310941985769?aff=ebdssbdestsearch
  //https://www.eventbrite.com/e/self-care-sunday-a-creative-date-with-your-soul-tickets-1315232809739?aff=ebdssbdestsearch
  //https://www.eventbrite.com/e/introduction-to-accelerated-resolution-therapy-art-tickets-1321180720099?aff=ebdssbdestsearch
  //https://www.eventbrite.com/e/wool-painting-tickets-1279916698299?aff=ebdssbdestsearch
  //https://www.eventbrite.com/e/watercolor-painting-workshop-with-bonnie-williams-tickets-1305545675259?aff=ebdssbdestsearch
  //https://www.eventbrite.com/e/the-underground-farmers-and-arts-market-tickets-1029186864617?aff=ebdssbdestsearch
  //https://www.visitjacksonville.com/directory/riverside-arts-market-ram/
  //https://www.eventbrite.com/e/vitalize-show-a-showcase-of-the-arts-tickets-1298103605829?aff=ebdssbdestsearch
  //https://dtjax.com/artwalk/
  //https://www.visitjacksonville.com/events/2025-spring-mural-jam/
  //https://www.visitjacksonville.com/events/mandarin-art-festival/
  //https://jaxpottery.com/new-page-56
  //https://www.doingdishes.com/holiday-workshops
  //https://www.eventbrite.com/e/kids-art-lab-tickets-398923981367?aff=ebdsoporgprofile
  //https://www.eventbrite.com/e/the-art-of-the-figure-workshop-tickets-399054291127
  //https://www.eventbrite.com/e/studio-practice-oil-pastel-for-beginners-with-kasha-fahy-tickets-1330905015729?aff=odcleoeventsincollection
  //https://www.eventbrite.com/e/the-art-of-the-figure-workshop-tickets-399054291127
  //https://www.eventbrite.com/e/studio-practice-oil-pastel-for-beginners-with-kasha-fahy-tickets-1330905015729?aff=odcleoeventsincollection
  //https://www.nbaw.org/
  //https://www.google.com/url?sa=i&url=https%3A%2F%2Fkidsdiscover.com%2Fteacherresources%2Fslime-and-other-simple-science-activities-for-kids%2F&psig=AOvVaw1vqMjpgTuJNWq6dFwheQ3e&ust=1745287653629000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCCiauF6IwDFQAAAAAdAAAAABAE
  //https://www.google.com/url?sa=i&url=https%3A%2F%2Fartfulparent.com%2Fhow-to-encourage-drawing-skills-confidence-creativity-in-young-children%2F&psig=AOvVaw0wVz0iXDSD5X_9y0LK3CBQ&ust=1745287775778000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjTmfaF6IwDFQAAAAAdAAAAABAE
  //https://www.google.com/imgres?q=kids%20water%20color&imgurl=https%3A%2F%2Fwww.artbarblog.com%2F%2Fwp-content%2Fuploads%2F2012%2F04%2Fwatercolor51.jpg&imgrefurl=https%3A%2F%2Fwww.artbarblog.com%2Fwatercolor-painting-with-nate%2F&docid=SK6LdD7YXWehZM&tbnid=jNXLM533ydsSyM&vet=12ahUKEwiY9qOUhuiMAxVw8MkDHTgeE_0QM3oECE8QAA..i&w=750&h=500&hcb=2&ved=2ahUKEwiY9qOUhuiMAxVw8MkDHTgeE_0QM3oECE8QAA
  //https://www.google.com/imgres?q=kids%20clay%20projects&imgurl=https%3A%2F%2Fi.etsystatic.com%2F5761653%2Fr%2Fil%2F3b30a9%2F379293299%2Fil_570xN.379293299_tmbu.jpg&imgrefurl=https%3A%2F%2Fwww.etsy.com%2Flisting%2F104014814%2Fpolymer-clay-projects-for-kids-birthday&docid=__C1KG96TIJoIM&tbnid=dq5XGWRI4kymsM&vet=12ahUKEwibjK-1huiMAxXxMdAFHZNoBGQQM3oECFYQAA..i&w=570&h=570&hcb=2&ved=2ahUKEwibjK-1huiMAxXxMdAFHZNoBGQQM3oECFYQAA
  //https://www.mandarinartfestival.org/uploads/2/3/7/9/23793731/maf-no-year-art-fest-1_orig.jpg
  //https://static.wixstatic.com/media/a0f047_6182bccd4a47407085a807b964ade252.jpg/v1/crop/x_0,y_424,w_2000,h_562/fill/w_1298,h_285,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a0f047_6182bccd4a47407085a807b964ade252.jpg
  //https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.visitjacksonville.com%2Fevents%2F2025-spring-mural-jam%2F&psig=AOvVaw3r5AnSop2FGbSTcCbgDTao&ust=1745288480366000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOin58qI6IwDFQAAAAAdAAAAABAE
  //https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fsgiardina%2Fmothers-day-pottery%2F&psig=AOvVaw2dMPSGRyBw-Tr1cYeXvOkU&ust=1745288681168000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNiN1JCJ6IwDFQAAAAAdAAAAABAE
  //https://images.squarespace-cdn.com/content/v1/5b634b95c3c16a4808b571fa/ad617954-dfe2-4e8f-86a8-2360fba69758/christinakarstphotography_jacksonvillebrandingphotographer_-16.jpeg?format=500w
  //https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.etsy.com%2Flisting%2F1265746125%2Fhappy-mothers-day-flowers-for-mom-baby&psig=AOvVaw2B747q6dt1uMJWTlGOjc5p&ust=1745289506224000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCZnJuM6IwDFQAAAAAdAAAAABAE
  //https://www.google.com/imgres?q=art%20therapy&imgurl=https%3A%2F%2Fnews.hofstra.edu%2Fwp-content%2Fuploads%2F2020%2F06%2FAdobeStock_202004621_art-therapy.jpeg&imgrefurl=https%3A%2F%2Fnews.hofstra.edu%2F2020%2F06%2F18%2Fcreative-art-therapy-a-career-that-combines-art-with-helping-others%2F&docid=2Swd48MWJoogUM&tbnid=t9UrsIi4cIllVM&vet=12ahUKEwibzazzjOiMAxV4STABHTQoPUEQM3oFCIgBEAA..i&w=1024&h=684&hcb=2&ved=2ahUKEwibzazzjOiMAxV4STABHTQoPUEQM3oFCIgBEAA
  //https://www.google.com/url?sa=i&url=https%3A%2F%2Fpottery-boston.com%2Fromantic-dates-in-boston&psig=AOvVaw1HBWsXy-HG4OVqMk1otVZC&ust=1745289744210000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPit95SN6IwDFQAAAAAdAAAAABAJ
  //https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eventbrite.com%2Fe%2Fclay-play-beginners-wheel-throwing-ocisly-ruka-firing-not-included-tickets-1302290529029&psig=AOvVaw1iG0jP57a0rIey6kyrOI5b&ust=1745290192102000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNiL8OeO6IwDFQAAAAAdAAAAABAE
  //https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fpottery-making&psig=AOvVaw0g6foRqHiBEhro7Qq_ncUm&ust=1745290366631000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiNgLuP6IwDFQAAAAAdAAAAABAJ