import axios from 'axios';

const API_KEY = '$2a$10$G0xTCqlf0n.eU/u68dEKs.14a0dwsMLKMICywBgC6rUGwz/Jk5vFe';
const MY_BIN_ID = '67235bc6e41b4d34e44bd6ab';

axios
  .put(
    `https://api.jsonbin.io/v3/b/${MY_BIN_ID}`,
    {
      private: false,
    },
    {
      headers: {
        'X-Master-Key': API_KEY,
        'Content-Type': 'application/json',
      },
    }
  )
  .then(response => {
    console.log('Bin visibility updated successfully:', response.data);
  })
  .catch(error => {
    console.error('Error updating bin visibility:', error.response.data);
  });
