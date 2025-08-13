import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import {TiMessages} from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { useSocketContext } from "../../context/SocketContext";
const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const { onlineUsers } = useSocketContext();
	
	const isUserOnline = (userId) => {
		return onlineUsers.includes(userId);
	};
	
	useEffect(() =>{
		// cleanup function // unmounts
		return () => setSelectedConversation(null);
	}, [setSelectedConversation])

	// const {selectedConversation, setSelectedConversation} = useConversation();
    return (

		<div className='w-full md:flex-1 flex flex-col'>
			{!selectedConversation ? (<NoChatSelected/>) : (
                <>
				{/* Header */}
				<div className='bg-slate-500 px-3 sm:px-6 py-3 mb-2 flex items-center sticky-header shadow-md'>
					<div className={`avatar ${isUserOnline(selectedConversation._id) ? "online" : ""} mr-2 sm:mr-3`}>
						<div className='w-8 sm:w-10 rounded-full'>
							<img src={selectedConversation.profilePic} alt="User avatar" />
						</div>
					</div>
					<div>
						<span className='text-gray-900 font-bold text-sm sm:text-base'>{selectedConversation.fullName}</span>
						<p className='text-xs text-gray-700'>{isUserOnline(selectedConversation._id) ? 'Online' : 'Offline'}</p>
					</div>
				</div>

				<Messages />
				<MessageInput />
				</>
            )}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-2 sm:px-4 text-center text-base sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-1 sm:gap-2'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-2xl sm:text-3xl md:text-6xl lg:text-7xl text-center mt-4' />
			</div>
		</div>
	);
};

// STARTER CODE SNIPPET
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
// 	return (
// 		<div className='md:min-w-[450px] flex flex-col'>
// 			<>
// 				{/* Header */}
// 				<div className='bg-slate-500 px-4 py-2 mb-2'>
// 					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
// 				</div>

// 				<Messages />
// 				<MessageInput />
// 			</>
// 		</div>
// 	);
// };
// export default MessageContainer;