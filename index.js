// const argv = require("yargs").argv;
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch(action) {
        case "list":
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
        case "get":
            const oneContact = await contacts.getContactById(id);
            return console.log(oneContact);
        case "add":
            const newContact = await contacts.addContact({name, email, phone});
            return console.log(newContact);
        case "remove":
            const removeContact = await contacts.removeContact(id);
            return console.log(removeContact);
        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

// invokeAction({action: "list"});
// invokeAction({action: "get", id:"qdggE76Jtbfd9eWJHrssH"});
// invokeAction({action: "add", name: "Adam Berg", email: "adam@gmail.com", phone: "(678) 387-9902"});
invokeAction({action: "remove", id: "CarfsK27Y6-ZS3xPc1Ggf"});



// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       // ...
//       break;

// //     case "get":
// //       // ... id
// //       break;

// //     case "add":
// //       // ... name email phone
// //       break;

// //     case "remove":
// //       // ... id
// //       break;

// //     default:
// //       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);