const Content = require("../model/contentModel");

require("dotenv").config();

const User = require("../model/userModel");
const Admin = require("../model/adminModel");


//CREATE CONTENTS
exports.contents = async (req, res) => {
    try {
      console.log(req.body);
      const { content, editorData } = req.body;
  
      const existingContent = await Content.find({
        content: { $eq: content.toLowerCase() },
      });
  
      if (existingContent.length > 0) {
        res.status(400).json({ message: "Content already exists!" });
        return;
      }
  
      const newContent = new Content({
        content,
        editorData,
      });
  
      await newContent.save();
  
      res.status(200).json({ message: "Content Added Successfully!" });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Something went wrong", error: error.message });
    }
  };
  

  //GET ALL CONTENTS
  exports.getcontents = async (req, res) => {
    try {
      await Content.find({})
        .then((data) => res.json({ data }))
        .catch((err) => res.json(err));
    } catch (error) {
      res
        .status(400)
        .json({ message: "Something went wrong", error: error.message });
    }
  };
  

  //GET CONTENT BY ID
  exports.getcontent = async (req, res) => {
    try {
      const ID = req.params.id;
  
      await Content.findOne({ _id: ID })
        .then((data) => res.json({ data }))
        .catch((err) => res.json(err));
    } catch (error) {
      res
        .status(400)
        .json({ message: "Something went wrong", error: error.message });
    }
  };

  
//UPDATE CONTENT
exports.updatecontent = async (req, res) => {

    try {
      const contentId = req.params.id;
      console.log(contentId);
  
      const updatedContent = req.body.updatedData;
      console.log(updatedContent);
  
      await Content.findOneAndUpdate(
        { _id: contentId },
        {
          $set: {
           editorData: updatedContent
          },
        },
        { new: true }
      );
  
      res.status(200).json({ message: "Content updated successfully" });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Something went wrong", error: error.message });
    }
  };
  