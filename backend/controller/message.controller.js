import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    // console.log("message sent and it was sent by", req.params.id);

    try {
        const {message} = req.body;
        const {id: receiverId} = req.params; // destructured it we have 
        // alt 
        // const id = req.user.id; 
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all : [senderId, receiverId]},
        });

        // if users are sending message for the first time to another user
        // we would find no previous conversation
        // so we create a new one;
        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // SOCKET IO FUNCTIONALITY WILL GO HERE


        // await conversation.save();
        // await newMessage.save();
        // this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json({newMessage});


    } catch (error) {
        console.log("Error in sendMessage control ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
};

export const getMessages = async (req, res) => {
    try {
        const {id: userToChatWithId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId, userToChatWithId]},
        }).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES USING POPULATE METHOD OF MONGOOSE;
        
        if(!conversation){
            return res.status(200).json({});
        }

        const messages = conversation.messages;
        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getMessage control ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}