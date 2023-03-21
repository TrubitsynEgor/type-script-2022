

export function append<T>(el: T, list: T[]) {
	return list.concat(el)
}

append('14', [1, 4]);
// append(1, ['fafs', 'gagga']);