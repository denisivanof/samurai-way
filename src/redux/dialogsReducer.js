const SEND_MASSEGE = "SEND_MASSEGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Valera" },],
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are You" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },],
   };

const dialogsReducer = (state = initialState, action) =>{
     switch(action.type) {
         case "SEND_MASSEGE": {
           return {
            ...state,
            messagesData: [...state.messagesData,{id: 6, message: action.newMassegeBody}],
          };
        }
        default:
        return state;
     }
};

export const sendMassegeCreator = (newMassegeBody) => ({ type: SEND_MASSEGE, newMassegeBody });

export default dialogsReducer;