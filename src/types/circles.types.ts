export interface Life360Circle {
	id: string;
	name: string;
	color: string;
	type: string;
	createdAt: string;
	memberCount: string;
	unreadMessages: string;
	unreadNotifications: string;
	features: Life360CircleFeatures;
	members: Life360CircleMember[];
}

export interface Life360CircleFeatures {
	ownerId: any;
	skuId: any;
	premium: string;
	locationUpdatesLeft: number;
	priceMonth: string;
	priceYear: string;
	skuTier: any;
}

export interface Life360CircleMember {
	features: any[];
	issues: any[];
	location?: any[];
	communications: any[];
	medical: any;
	relation: any;
	createdAt: string;
	activity: any;
	id: string;
	firstName: string;
	lastName: string;
	isAdmin: string;
	avatar?: string;
	pinNumber: any;
	loginEmail: string;
	loginPhone: string;
}
