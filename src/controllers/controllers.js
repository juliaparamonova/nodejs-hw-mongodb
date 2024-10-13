import * as contactServices from "../services/contacts.js";

export const getContactsController = async (req, res) => {
    try {
        const data = awaite contactServices.getContacts();

        res.json({
            status: 200,
            message: "Successfully get contacts",
            data,
        })
        
    }
}