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

	// Types for stores
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
	bagActivate: '[BAGS] Activate/Desactivate a Bag',

	// Types for workingDays
	workingDayRegister: '[WORKINGDAY] New WorkingDay',
	workingDayGet: '[WORKINGDAY] Get all WorkingDays',
	workingDaySelect: '[WORKINGDAY] Select WorkingDay',
	workingDayEdit: '[WORKINGDAY] Edit WorkingDay',
	workingDayEditMode: '[WORKINGDAY] EditMode WorkingDay',
	workingDayActivate: '[WORKINGDAY] Activate WorkingDay',

	// Types for objetives
	ObjetiveCreate: '[OBJETIVE] Create',
	ObjetiveGet: '[OBJETIVE] Get All objetives',
	ObjetiveFamily: '[OBJETIVE] Get Families',
	ObjetiveFamilyCreate: '[OBJETIVE] Create Family',

	// Types for periods
	PeriodCreate: '[PERIOD] Create Period',
	PeriodsGet: '[PERIOD] Get Periods',
	PeriodSelect: '[PERIOD] Select',
	PeriodsActivate: '[PERIOD] Activate Periods',
	PeriodsUpdate: '[PERIOD] Update Period',

	// Types for products
	ProductsGet: '[PRODUCTS] Product Get',
	ProductCreate: '[PRODUCTS] Product Create',
	ProductUpdate: '[PRODUCTS] Product Update'
}
	
