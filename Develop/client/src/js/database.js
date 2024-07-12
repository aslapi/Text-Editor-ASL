// import { openDB } from 'idb';

// const initdb = async () =>
//   openDB('jate', 1, {
//     upgrade(db) {
//       if (db.objectStoreNames.contains('jate')) {
//         console.log('jate database already exists');
//         return;
//       }
//       db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
//       console.log('jate database created');
//     },
//   });

// // TODO: Add logic to a method that accepts some content and adds it to the database
// export const putDb = async (content) => console.error('putDb not implemented');

// // TODO: Add logic for a method that gets all the content from the database
// export const getDb = async () => console.error('getDb not implemented');

// initdb();

import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method to add content to the database
export const putDb = async (content) => {
  console.log('PUT to the database');

  // Initialize the database
  const db = await openDB('jate', 1);

  // Create a transaction and specify the database and data privileges
  const tx = db.transaction('jate', 'readwrite');

  // Open the desired object store
  const store = tx.objectStore('jate');

  // Use the .put() method to update or insert the content
  const request = store.put({ id: 1, content: content });

  // Get confirmation of the request
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// Method to get all content from the database
export const getDb = async () => {
  console.log('GET from the database');

  // Initialize the database
  const db = await openDB('jate', 1);

  // Create a transaction and specify the database and data privileges
  const tx = db.transaction('jate', 'readonly');

  // Open the desired object store
  const store = tx.objectStore('jate');

  // Use the .getAll() method to get all data in the database
  const request = store.getAll();

  // Get confirmation of the request
  const result = await request;
  console.log('🚀 - data retrieved from the database', result);
  return result;
};

// Initialize the database
initdb();
