import { Edit } from "../schema/edit.js";

export const editCreate = async (req, res) => {
    try {
        // 1. Fixed: Changed req.data to req.body
        const { firstname, middlename, lastname, gender, dateofbirth, emailaddress, address } = req.body;

        // 2. Validation check
        if (!firstname || !middlename || !lastname || !gender || !dateofbirth || !emailaddress || !address) {
            return res.status(400).json({ // Changed status to 400 (Bad Request)
                message: "Data missing"
            });
        }

        // 3. Fixed: Moved database creation OUTSIDE the error conditional and passed correct variables
        const newEdit = await Edit.create({
            firstname,
            middlename,
            lastname,
            gender,
            dateofbirth,
            emailaddress,
            address
        });

        // 4. Send successful response
        return res.status(200).json({
            message: "Data Changed Successfully",
            data: newEdit
        });

    } catch (error) {
        console.error("Error in editCreate:", error);
        return res.status(500).json({
            message: "Server Error"
        });
    }
};

export const getEdit = async (req, res) => {
    try {
        const editData = await Edit.find();
        return res.status(200).json({
            message: "Data retrieved successfully",
            data: editData
        });
    } catch (error) {
        console.error("Error in getEdit:", error);
        return res.status(500).json({
            message: "Server Error"
        });
    }
};

export const getEditbyId = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Edit.findById(id);
        
        if (!data) {
            return res.status(404).json({ 
                message: "Record not found" });
        }

        return res.status(200).json({
            message: "Edit data of id fetched",
            data: data
        });
    } catch (error) {
        console.error("Error in getEditbyId:", error);
        return res.status(500).json({
            message: "Server Error"
        });
    }
};

export const updateEdit = async(req,res)=>{
    try {
        const {id} = req.params
        const data = await Table.findByIdAndUpdate(id,req.body,{new:true})

        res.status(200).json({
            message:"Edit Single DAta",
            data:data
        })
    } catch (error) {
        res.status(500).json({
            message:'Server ERror'
        })
        
    }
}