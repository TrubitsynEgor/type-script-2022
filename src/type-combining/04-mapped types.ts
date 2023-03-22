type PcBrand = {
	name: string,
	country: string,
	createdAt: Date,
}

type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'microsoft' | 'huawei';

type MyPcRecord = {
	[BrandKey in WellKnownBrands]?: PcBrand
}
const BrandRecord: MyPcRecord = {
	apple: {
		country: 'USA',
		createdAt: new Date(),
		name: 'Apple'
	}
}

function printPcCatalog(pcCatalog: MyPcRecord) {
	console.log(pcCatalog.huawei?.country);
}

type PartOfWindow = {
	[Key in 'document' | 'screen' | 'navigator']?: Window[Key]
}
const p: PartOfWindow = {
	screen: window.screen
}


export { }