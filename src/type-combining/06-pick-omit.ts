export { }

//todo Record<Keys, Type>: По  сути гибкий способ за типизировать объект
type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'microsoft' | 'huawei';

type Names = Record<string, number>;// Т.е мы говорим что в нашем объекте (которому мы присвоим тип Names) 
// будут ключи с типом string и значения с типом numbers
//Во втором случае мы передаем динамически конкретный alias из union'ов и тем самым говорим
// что мои ключи в моем объекте  будут  типа WellKnownBrands
type BrandNames = Record<WellKnownBrands, string>;
// Если мы создадим obj и присвоим ему тип BrandNames:
const obj43: BrandNames = {
	//* Мы  по подсказке тут получим 'apple' | 'lenovo' | 'hp' | 'microsoft' | 'huawei'
	// Ключи в нашем объекте могут быть только вышеописанные в WellKnownBrands
}
//========================================================================

//todo Конструирует тип, выбирая набор свойств Keys (строковый литерал или union строковых литералов) из Type.
interface Todo {
	id: string
	title: string
	description: string
	completed: boolean
	createAt: number
} // Имеем большой интерфейс и хотим на основе него создать нечто по проще
// И тогда мы говорим создай мне type TodoPreview и для него мы решаем что нам достаточно
// id, title, completed. Т.е используем Pick и говорим возми в interface Todo, такие то типы, и верни их мне в 
// type TodoPreview 
type TodoPreview = Pick<Todo, 'id' | "title" | "completed">;
// Теперь мы можем спокойно задать указанные значения в obj todo, и нам не обязательно перечислять все типы interface Todo
const todo: TodoPreview = {// или же создавать новый interface 
	id: '1',
	title: "Clean room",
	completed: false,
};

//todo Omit<Type, Keys> Конструирует тип, выбирая все свойства из Type, а затем удаляя Keys (строковый литерал или union строковых литералов).
type TodoPreview2 = Omit<Todo, 'id' | "title" | "completed">; // Здесть же у нас обратное действие
// То есть дай мне все типы из interface Todo, кроме!  'id' | "title" | "completed"
/* type TodoPreview2 = {
	description: string;
	createAt: number;
} */