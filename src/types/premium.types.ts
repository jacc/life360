export interface Life360Premium {
	owned: any[];
	packages: Life360PremiumPackage[];
	previous: any[];
}

export interface Life360PremiumPackage {
	skuId: string;
	priceMonthly: string;
	priceYearly: string;
	priceLocale: string;
	trialLengthDaysMonthly: number;
	trialLengthDaysYearly: number;
	productIdsMonthly: string[];
	productIdsYearly: string[];
	tier: string;
	features: string[];
}
