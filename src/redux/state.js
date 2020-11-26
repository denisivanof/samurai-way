let rerenderEntireTree = () =>{
  console.log( 'State change');
};
  

let state = {
      profilePage:{   
           posts:  [{id: 1, message: 'Hi, how are you?', likesCount: 12},
                    {id: 2, message: 'Hi', likesCount: 11}],
            newPostText:"It-kamasutra.com"
                  },
      dialogsPage:{ 
            dialogsData: [  {id: 1, name:'Dimych'},
                    {id: 2, name:'Andrey'},
                    {id: 3, name:'Sveta'},
                    {id: 4, name:'Sasha'},
                            {id: 5, name:'Valera'}],
              messagesData:[
                             {id: 1, message:'Hi'},
                            {id: 2, message:'How are You'},
                            {id: 3, message:'Yo'},
                            {id: 4, message:'Yo'},
                            {id: 5, message:'Yo'}]
            }
  };

 export let addPost = () => {

    let newPost = {
      id: 3,
      message: state.profilePage.newPostText,
      likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state);
  };

  export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
  };

export const subscribe = (observer) =>{
  rerenderEntireTree = observer;
}


  export default state;