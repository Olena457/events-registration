import axios from 'axios'

const API_KEY = '$2a$10$G0xTCqlf0n.eU/u68dEKs.14a0dwsMLKMICywBgC6rUGwz/Jk5vFe';
const BIN_ID = '67235bc6e41b4d34e44bd6ab';

const jsonData = {


  "events": [
    {
      "idEvent": "1",
      "title": "Tech Conference 2024",
      "description": "A conference exploring the latest in technology and innovation.",
      "event_date": "2024-11-15",
      "organizer": "Tech World Inc.",
      "participants": [
        {
          "participantId": "1",
          "fullName": "Mary Martin",
          "email": "steven65@morales.com",
          "dateOfBirth": "1982-07-30",
          "source": "Social Media"
        },
        {
          "participantId": "1",
          "fullName": "Donald Anderson",
          "email": "cynthiaruiz@simmons-dunn.com",
          "dateOfBirth": "1976-09-22",
          "source": "Social Media"
        }
      ]
    },
    {
      "idEvent": "2",
      "title": "Health & Wellness Expo",
      "description": "Join health experts and enthusiasts for a day of wellness activities.",
      "event_date": "2024-12-01",
      "organizer": "Wellness Gurus",
      "participants": [
        {
          "participantId": "2",
          "fullName": "Rachel Morrow",
          "email": "phillipswilliam@gmail.com",
          "dateOfBirth": "1968-02-23",
          "source": "Social Media"
        },
        {
          "participantId": "2",
          "fullName": "Adam Bryant",
          "email": "sandraacosta@gmail.com",
          "dateOfBirth": "2000-01-23",
          "source": "Friends"
        }
      ]
    },
    {
      "idEvent": "3",
      "title": "Startup Pitch Night",
      "description": "Entrepreneurs pitch their ideas to investors and potential partners.",
      "event_date": "2025-01-22",
      "organizer": "Startup Hub",
      "participants": [
        {
          "participantId": "3",
          "fullName": "Amanda Lynch",
          "email": "william17@hotmail.com",
          "dateOfBirth": "1994-09-06",
          "source": "Social Media"
        },
        {
          "participantId": "3",
          "fullName": "Ryan Turner",
          "email": "brian65@yahoo.com",
          "dateOfBirth": "2004-05-02",
          "source": "Myself"
        }
      ]
    },
    {
      "idEvent": "4",
      "title": "Art & Design Workshop",
      "description": "A hands-on workshop for aspiring artists and designers.",
      "event_date": "2024-10-18",
      "organizer": "Creative Minds",
      "participants": [
        {
          "participantId": "4",
          "fullName": "Kathryn Romero",
          "email": "jordannelson@barron.net",
          "dateOfBirth": "2003-08-27",
          "source": "Friends"
        },
        {
          "participantId": "4",
          "fullName": "Michael Horne",
          "email": "llewis@acevedo.info",
          "dateOfBirth": "1966-05-22",
          "source": "Social Media"
        }
      ]
    },
    {
      "idEvent": "5",
      "title": "Business Networking Event",
      "description": "Expand your professional network with industry leaders.",
      "event_date": "2024-11-30",
      "organizer": "Global Entrepreneurs",
      "participants": [
        {
          "participantId": "5",
          "fullName": "Jennifer Hughes",
          "email": "hgarcia@hotmail.com",
          "dateOfBirth": "1998-06-03",
          "source": "Social Media"
        },
        {
          "participantId": "5",
          "fullName": "Anthony Andrews",
          "email": "thomas25@hotmail.com",
          "dateOfBirth": "1998-07-12",
          "source": "Friends"
        },
        {
          "participantId": "5",
          "fullName": "Susan Hale",
          "email": "vruiz@spence.com",
          "dateOfBirth": "1967-01-04",
          "source": "Friends"
        }
      ]
    },
    {
      "idEvent": "6",
      "title": "Environmental Summit",
      "description": "A summit discussing environmental issues and sustainable solutions.",
      "event_date": "2024-12-05",
      "organizer": "Green Earth Org.",
      "participants": [
        {
          "participantId": "6",
          "fullName": "Erin Tanner",
          "email": "michael49@jackson.org",
          "dateOfBirth": "2005-12-02",
          "source": "Friends"
        },
        {
          "participantId": "6",
          "fullName": "Edward Jordan",
          "email": "clydekent@yahoo.com",
          "dateOfBirth": "1997-09-06",
          "source": "Myself"
        }
      ]
    },
    {
      "idEvent": "7",
      "title": "Music Festival 2025",
      "description": "A weekend full of music from various genres and artists.",
      "event_date": "2025-03-15",
      "organizer": "Music Fest Productions",
      "participants": [
        {
          "participantId": "7",
          "fullName": "Anthony Andrews",
          "email": "thomas25@hotmail.com",
          "dateOfBirth": "1998-07-12",
          "source": "Friends"
        }
      ]
    },
    {
      "idEvent": "8",
      "title": "Coding Bootcamp",
      "description": "A two-week intensive bootcamp for aspiring software developers.",
      "event_date": "2024-11-07",
      "organizer": "Code Academy",
      "participants": [
        {
          "participantId": "8",
          "fullName": "Michael Horne",
          "email": "llewis@acevedo.info",
          "dateOfBirth": "1966-05-22",
          "source": "Social Media"
        }
      ]
    },
    {
      "idEvent": "9",
      "title": "Film Screening & Discussion",
      "description": "Watch an indie film followed by a panel discussion with the creators.",
      "event_date": "2024-12-12",
      "organizer": "Indie Film Collective",
      "participants": [
        {
          "participantId": "9",
          "fullName": "Julie Tyler",
          "email": "hvaldez@nicholson-chavez.com",
          "dateOfBirth": "1968-09-19",
          "source": "Social Media"
        }
      ]
    },
    {
      "idEvent": "10",
      "title": "Fitness Challenge",
      "description": "A community-driven fitness challenge with prizes for top performers.",
      "event_date": "2025-01-10",
      "organizer": "FitLife",
      "participants": [
        {
          "participantId": "10",
          "fullName": "Thomas Klein",
          "email": "mhernandez@yahoo.com",
          "dateOfBirth": "1986-07-22",
          "source": "Friends"
        },
        {
          "participantId": "10",
          "fullName": "Brenda Nelson",
          "email": "danieladams@clayton.net",
          "dateOfBirth": "1981-03-15",
          "source": "Myself"
        }
      ]
    },
    {
      "idEvent": "11",
      "title": "Blockchain Symposium",
      "description": "Experts discuss the future of blockchain technology and its applications.",
      "event_date": "2024-12-18",
      "organizer": "Crypto Innovators",
      "participants": [
        {
          "participantId": "11",
          "fullName": "Adam Bryant",
          "email": "sandraacosta@gmail.com",
          "dateOfBirth": "2000-01-23",
          "source": "Friends"
        },
        {
          "participantId": "11",
          "fullName": "Crystal Hawkins",
          "email": "michaelpollard@yahoo.com",
          "dateOfBirth": "1985-10-25",
          "source": "Myself"
        }
      ]
    },
    {
      "idEvent": "12",
      "title": "Culinary Arts Masterclass",
      "description": "Learn from top chefs in this immersive culinary experience.",
      "event_date": "2025-02-20",
      "organizer": "Master Chefs Association",
      "participants": [
        {
          "participantId": "12",
          "fullName": "Jessica Harrison",
          "email": "claykevin@watson-yang.com",
          "dateOfBirth": "1980-11-01",
          "source": "Friends"
        },
        {
          "participantId": "12",
          "fullName": "Donna Mann",
          "email": "jason13@gmail.com",
          "dateOfBirth": "1991-07-01",
          "source": "Social Media"
        }
      ]
    },
    {
      "idEvent": "13",
      "title": "Photography Exhibition",
      "description": "Showcase of works by local and international photographers.",
      "event_date": "2024-12-25",
      "organizer": "PhotoArt Gallery",
      "participants": [
        {
          "participantId": "13",
          "fullName": "Lindsay Walker",
          "email": "snyderalbert@yahoo.com",
          "dateOfBirth": "1988-12-07",
          "source": "Social Media"
        },
        {
          "participantId": "13",
          "fullName": "Joshua Knight",
          "email": "wrightlinda@mcdowell-chavez.com",
          "dateOfBirth": "1983-12-23",
          "source": "Myself"
        }
      ]
    },
    {
      "idEvent": "14",
      "title": "Robotics Competition",
      "description": "Teams compete in building and programming autonomous robots.",
      "event_date": "2025-03-01",
      "organizer": "Robotics Club",
      "participants": [
        {
          "participantId": "14",
          "fullName": "Philip Scott",
          "email": "frank35@coleman.com",
          "dateOfBirth": "1992-02-04",
          "source": "Friends"
        },
        {
          "participantId": "14",
          "fullName": "Stephanie George",
          "email": "matthew96@butler-hernandez.info",
          "dateOfBirth": "1975-08-21",
          "source": "Friends"
        }
      ]
    },
    {
      "idEvent": "15",
      "title": "Marketing Strategy Workshop",
      "description": "Learn modern marketing strategies to grow your business.",
      "event_date": "2025-02-15",
      "organizer": "Marketing Pros",
      "participants": [
        {
          "participantId": "15",
          "fullName": "Edward Jordan",
          "email": "clydekent@yahoo.com",
          "dateOfBirth": "1997-09-06",
          "source": "Myself"
        },
        {
          "participantId": "15",
          "fullName": "Tracey Greene",
          "email": "cassandra31@yahoo.com",
          "dateOfBirth": "1996-06-14",
          "source": "Myself"
        }
      ]
    },
    {
      "idEvent": "16",
      "title": "AI & Machine Learning Conference",
      "description": "Industry experts discuss the future of AI and machine learning.",
      "event_date": "2024-12-10",
      "organizer": "AI Research Group",
      "participants": [
        {
          "participantId": "16",
          "fullName": "Brenda Nelson",
          "email": "danieladams@clayton.net",
          "dateOfBirth": "1981-03-15",
          "source": "Myself"
        }
      ]
    },
    {
      "idEvent": "17",
      "title": "Craft Beer Festival",
      "description": "Sample craft beers from local and regional breweries.",
      "event_date": "2025-01-25",
      "organizer": "Brew Masters Association",
      "participants": [
        {
          "participantId": "17",
          "fullName": "Michael Johnson",
          "email": "nichole09@davis.com",
          "dateOfBirth": "1979-01-05",
          "source": "Social Media"
        }
      ]
    },
    {
      "idEvent": "18",
      "title": "Fashion Show",
      "description": "Showcasing the latest fashion trends from top designers.",
      "event_date": "2025-03-10",
      "organizer": "Fashion Forward",
      "participants": []
    },
    {
      "idEvent": "19",
      "title": "Non-Profit Fundraising Gala",
      "description": "An evening of philanthropy to support various non-profit organizations.",
      "event_date": "2024-11-28",
      "organizer": "Global Charity Network",
      "participants": [
        {
          "participantId": "19",
          "fullName": "Ryan Turner",
          "email": "brian65@yahoo.com",
          "dateOfBirth": "2004-05-02",
          "source": "Myself"
        }
      ]
    },
    {
      "idEvent": "20",
      "title": "Yoga Retreat",
      "description": "A relaxing weekend retreat focusing on yoga and mindfulness.",
      "event_date": "2025-02-05",
      "organizer": "Zen Wellness",
      "participants": []
    }
  ]
}

axios.put(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
  record: jsonData
}, {
  headers: {
    'X-Master-Key': API_KEY,
    'Content-Type': 'application/json'
  }
})
.then(response => {
  console.log('Data added successfully:', response.data);
})
.catch(error => {
  console.error('Error adding data:', error.response.data);
});