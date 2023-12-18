import * as contactsService from "./contacts.js";
import { program } from "commander";

const invokeAction = async ({ action, id, ...data }) => {
    switch (action) {
        case "list":
            const allContacts = await contactsService.listContacts();
            return console.log(allContacts);
        case "get":
            const oneContact = await contactsService.getContactById(id);
            return console.log(oneContact);
        case "add":
            const newContact = await contactsService.addContact(data);
            return console.log(newContact);
        case "remove":
            const deleteContacts = await contactsService.removeContact(id);
            return console.log(deleteContacts);
        default:
            console.warn('\x1B[31m Unknown action type!');
    }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

  program.parse();

const options = program.opts();
invokeAction(options);

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "e6ywwRe4jcqxXfCZOj_1e" });
// invokeAction({ action: "add", name: "Jane Test", email: "jtest@gmail.com", phone: "(123) 652-5674" });
//invokeAction({ action: "remove", id: "iQsC1dXU4gYbs1JRHeIJ2" });