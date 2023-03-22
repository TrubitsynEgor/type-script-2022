const x = 16;
const isXNegative = x >= 0 ? 'no' : 'yes';


interface StringRecord {
	[key: string]: string,
}
interface DateRecord {
	[rey: string]: Date,
}

type MyRecord<T> = T extends string ? StringRecord : DateRecord
// Условные типы имеют форму, которая немного похожа
// на условные выражения (condition ? trueExpression : falseExpression) в JavaScript:
//todo [SomeType extends OtherType ? TrueType : FalseType];
type Obj_1 = MyRecord<string>
type Obj_2 = MyRecord<Date>
const obj1: Obj_1 = {
	r: '123123',
	d: 'Trfgg'
}
const obj2: Obj_2 = {
	r: new Date(),
}

export { }