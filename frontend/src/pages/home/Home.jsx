import React from 'react'

import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex flex-col md:flex-row h-[90vh] md:h-screen w-full md:w-full mx-auto 
		rounded-lg md:rounded-none overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 shadow-xl md:shadow-none'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
