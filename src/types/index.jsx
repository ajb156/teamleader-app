/** Types for reducers */

export const types = {
	// Types for auth
	userLogin: '[USERS] User Login',
	userLogout: '[USERS] User Logout',
	checkLogin: '[USERS] Check Login',
	renewToken: '[USERS] Renew Token',

	// Types for users
	employeesGet: '[EMPLOYEES] Get Employees',
	selectEmployeeEdit: '[EMPLOYEES] Select Employee Edit',
	employeeRegister: '[EMPLOYEES] Employee Register',
	employeeEdit: '[EMPLOYEES] Employee Edit',
	employeeActivate: '[EMPLOYEES] Employee Activate',

	//Types for stores
	getStores: '[STORES] Get Stores',
	createStore: '[STORES] Create Store',
	selectEditStore: '[STORES] Select Edit Store',
	editStore: '[STORES] Edit Store',
	deactivateStore: '[STORES] Deactivate Store',

	//Types for bags
	getBags: '[BAGS] Get Bags',
	newBag: '[BAGS] Create a Bag',
	selectBag: '[BAGS] Select a Bag',
	bagEdit: '[BAGS] Edit a Bag',
};
