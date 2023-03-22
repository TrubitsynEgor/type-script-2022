//Todo  - infer:
// Позваляет нам объявить переменную в пределах нашего ограничения типов на которую можно ссылаться или return
// использ может только в условных типах после ключ слова extends
function fromPair(pair: [string, string]) {
	const [key, value] = pair
	return {
		[key]: value
	}
}

type FirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never

const myPair: FirstArg<typeof fromPair> = ['myKey', 'myValue']

fromPair(myPair);

export { }