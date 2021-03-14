import profileReducer from "./profileReducer";
import {addPostActionCreator} from './profileReducer'

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "Hi", likesCount: 11 },],

}
test('Length correct', () => {
  let action = addPostActionCreator("TestYo");
  let newState = profileReducer(state, action);
  expect (newState.posts.length).toBe(3)
});

test('message correct', () => {
  let action = addPostActionCreator("TestYo");
  let newState = profileReducer(state, action);
  expect (newState.posts[2].message).toBe("TestYo")
});



 


