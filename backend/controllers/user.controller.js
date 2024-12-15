import userModel from "../models/user.model.js";

export const create = async (req,res) =>{

    const {text} = req.body
    try {
        const addText = await new userModel({text})
        const savedData = addText.save()

        res.status(200).json({message:"text added"})
    } catch (error) {
        res.status(400).json({message:"error in adding test"})
    }
}
export const getData = async (req,res) =>{

    const {users} = req.body

    try {
        const listofdata = await userModel.find({users})
        
        res.status(200).json({message:"list of datas",listofdata})
    } catch (error) {
        res.status(400).json({message:"error in displaying data"})
        console.log(error);
        
    }
}

export const updateData = async (req,res) =>{

    const {id} = req.params
    const {text} = req.body

    try {
        let updateData = await userModel.findByIdAndUpdate({_id:id})

        res.status(200).json({message:"text updated"})
    } catch (error) {
        res.status(400).json({message:"error in updating test"})
        console.log(error);
    }
}
export const deleteData = async (req,res) =>{

    const {id} = req.params
    try {
        const deleteData = await userModel.findByIdAndDelete({_id:id})

        res.status(200).json({message:"text deleted"})
    } catch (error) {
        res.status(400).json({message:"error in deleting"})
    }
}
