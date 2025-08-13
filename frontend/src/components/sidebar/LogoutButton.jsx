import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto flex justify-between items-center py-3 px-2 sm:px-4 border-t border-gray-700'>
			<div className="text-sm text-gray-300 font-medium">Logout</div>
			{!loading ? (            
				<button 
					onClick={logout}
					className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded-md transition-colors"
				>
					<BiLogOut className='w-5 h-5 sm:w-6 sm:h-6' />
					<span className="text-sm hidden sm:inline">Sign Out</span>
				</button>             
			) : (
				<span className='loading loading-spinner loading-xs sm:loading-sm'></span>
			)}
		</div>
	);
};
export default LogoutButton;