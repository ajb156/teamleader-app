/** Types for reducers */

export const types = {
	// Types for auth
	userLogin: '[USERS] User Login',
	userLogout: '[USERS] User Logout',
	checkLogin: '[USERS] Check Login',
	renewToken: '[USERS] Renew Token',

	//Types for stores
	getStores: '[STORES] Get Stores',
	createStore: '[STORES] Create Store',
	selectEditStore: '[STORES] Select Edit Store',
	editStore: '[STORES] Edit Store',
	deactivateStore: '[STORES] Deactivate Store',
};
