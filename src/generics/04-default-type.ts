interface AnyObj {
	[key: string]: unknown,
}

export async function request<T = AnyObj>(url: string): Promise<T> {
	const response = await fetch(url) // прям как арг в функ по умолч так же можем написать что
	return response.json(); // некий наш дженерик T будет по умолчанию равен описанному нами интерфейсу (то есть объекту)
} // Тогда на выходе мы получим Promise<AnyObj>
interface Todo {
	id: string,
	completed: boolean,
	title: string
}
const data = request<Todo[]>('') // Так же при запросе мы можем указать какой тип мы ожидаем получить
// В нашем случае мы описали Todo и ожидаем получить массив этих Todo ну и на выходе получим Promise<Todo[]>