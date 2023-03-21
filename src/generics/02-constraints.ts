function len<T extends { length: number }>(arg: T): number {
	return arg.length
}
len('Avb')
len(['Avb'])
len({ length: 12 })
// len(123)
// len(true)
// len({ a: 1 })

// object 