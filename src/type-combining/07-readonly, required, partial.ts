export { }


interface Todo {
	readonly id: string
	title: string
	description?: string
	completed: boolean
	createAt?: number
}

//todo Readonly<Type>: Конструирует тип, у которого все свойства Type установлены в readonly,
// что означает, что свойства сконструированного типа не могут быть переназначены.
type ReadOnlyTodo = Readonly<Todo>//переназначить все поля interface Todo в readonly!


//todo Partial<Type> Создает тип, у которого все свойства Type установлены в опциональное значение.
// Эта утилита возвращает тип, который представляет все подмножества данного типа.
type PartialTodo = Partial<Todo> // Все поля interface Todo стали необязательными! '?'
function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo) {
	return { ...todo, ...fieldsToUpdate }
}

//todo Required<Type> Создает тип, состоящий из всех свойств Type, установленных в required. Противоположность Partial.
type RequiredTodo = Required<Todo> // делает все поля ОБЯЗАТЕЛЬНЫМИ в interface Todo