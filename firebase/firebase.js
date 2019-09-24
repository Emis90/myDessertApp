import * as firebase from 'firebase';
import 'firebase/firestore';


export class FirebaseWrapper {
  constructor() {
    this.initialized = false;
    this._firebaseInstance = null; // instance of our npm package
    this._firebaseWrapperInstance = null; // instance of our wrapper
    this._firestore = null;
  }

  Initialize(config) {
    if (!this.initialized) {

      // initialize firebase
      this._firebaseInstance = firebase.initializeApp(config);
      this._firestore = firebase.firestore();
      this.initialized = true;
      console.log('You initialized! :D')
    }
    else {
      console.log('It was already initialized!')
    }
  }

  static GetInstance() {
    if (null == this._firebaseWrapperInstance) {
      this._firebaseWrapperInstance = new FirebaseWrapper()
    }
    else {
      // Already initialized, nothing more to do here
    }
    return this._firebaseWrapperInstance;
  }

  async CreateNewDocument(collectionPath, doc, userId) {//doc is an object
    try {
      const ref = this._firestore.collection(collectionPath).doc(userId)
      const timestamp = firebase.firestore.Timestamp.now().toDate()
      const res = await this._firestore
      .collection('post')
      .doc(userId)
      .get();
      if(!res.data()) {
        return await ref.set({post: [doc], added: timestamp, id: ref.id})
      } else {
        return await ref.set({post: [...res.data().post, doc], added: timestamp, id: ref.id})
      }

    } catch (error) {
      console.log('document not created :/ ', error)
    }
  }

  // async SetupCollectionListener(collectionPath, callback, userId) {
  //   try {
  //     console.log('calling SetupCollectionListener')
  //     await this._firestore.collection(collectionPath)
  //     .doc(userId)
  //     .orderBy('createdAt', 'desc')
  //     .onSnapshot(querySnapshot => {
  //       let container = []
  //       querySnapshot.forEach(doc => {
  //         container.push(doc.data())
  //       })
  //       console.log('return callback container')
  //       return callback(container)
  //     })
  //   } catch (error) {
  //     console.log('oh no! something went bad :( !', error)
  //   }
  // }
  // async SetUpCollectionListener(collectionPath, doc, userId) {
  //   try {
  //     console.log('setting up collection listeners worked');
  //     const res = await this._firestore
  //       .collection('post')
  //       .doc(userId)
  //       .get();
  //     console.log(res.data().post)
  //     return res.data().post;
  //   } catch (err) {
  //     console.log('setting up collection listener did not work >', err);
  //   }
  // }

  async SetUpCollectionListener(userId) {
    try {
      const res = await this._firestore
        .collection('post')
        .doc(userId)
        .get();
      console.log('res.data by user id from collection listener > ', res.data())
      return res.data();
    } catch (err) {
      console.log('OH no something did not work', err);
    }
  }


  async deleteFile(id) {
  try {
    await this._firestore.collection('post').doc(id).delete()
  } catch (error) {
    console.log('not deleted, try again >>', error)
  }
  }
}


//this connects app to firebase
