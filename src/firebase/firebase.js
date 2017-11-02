import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database()

export { firebase, database as default }

// old notes

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })


// const expenses = [
//   {
//   description: 'memes',
//   note: 'more',
//   amount: 25,
//   createdAt: 1000
// },
// {
//   description: 'memers',
//   note: 'yes',
//   amount: 251,
//   createdAt: 2000
// },
// {
//   description: 'flagg',
//   note: 'more',
//   amount: 1125,
//   createdAt: 5000
// },
// ]

// database.ref('expenses').push(expenses[0])

// database.ref('notes/-KxxKzvhfrhfd8Lzv5-1').update({
//   body: 'UPDATEDBODY'
// })

// database.ref('notes').push({
//   title: 'todo',
//   body: 'run'
// })

// const fireNotes = {
//   notes: {
//     asd: {
//       id: '12',
//       body: 'asd',
//     },
//     ahiosdhoias: {
//       id: '52',
//       body: 'azffzfsd',
//     }
//   }
// }

// const notes = [{
//   id: '12',
//   body: 'asd',
//   title: 'what'
// },
// {
//   id: '52',
//   body: 'azffzfsd',
//   title: 'w22hat'
// }
// ]

// database.ref('notes').set(notes)


// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('error with data fetching', e)
// });

// setTimeout(() => {
//   database.ref('age').set(25)
// }, 3000)

// setTimeout(() => {
//   database.ref().off('value', onValueChange)
// }, 5000)

// setTimeout(() => {
//   database.ref('age').set(15)
// }, 7000)

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('error catching data', e)
//   })

// database.ref().set({
//   name: 'test name',
//   age: 26,
//   location: {
//     city: 'harvard',
//     state: 'mass'
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log('Failed', e)
// })

// database.ref('attributes').set({
//   height: "tall",
//   weight: "a ton"
// }).then(() => {
//   console.log('it worked')
// }).catch((e) => {
//   console.log('error', e)
// })

// database.ref().update({
//   'location/city': 'memes'
// })