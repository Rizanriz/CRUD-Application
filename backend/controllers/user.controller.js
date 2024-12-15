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

    try {
        const listofdata = await userModel.find()
        
        res.status(200).json({message:"list of datas",listofdata})
    } catch (error) {
        res.status(400).json({message:"error in displaying data"})
        console.log(error);
        
    }
}

export const getOneNote = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await userModel.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note found", note });
  } catch (error) {
    res.status(400).json({ message: "Error fetching note" });
    console.error(error);
  }
};  

export const updateData = async (req,res) =>{

    const {id} = req.params
    const {text} = req.body

    try {
        const updatedData = await userModel.findByIdAndUpdate(id,{ text },
            { new: true } 
        )
        res.status(200).json({message:"text updated"})
    } catch (error) {
        res.status(400).json({message:"error in updating test"})
        console.log(error);
    }
}
export const deleteData = async (req,res) =>{

    const {id} = req.params

    try {
        const deleteData = await userModel.findByIdAndDelete(id)

        res.status(200).json({message:"text deleted"})
    } catch (error) {
        res.status(400).json({message:"error in deleting"})
    }
}
