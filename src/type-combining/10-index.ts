export { }

interface DataModels {
	id: string
	title: string
	elements: {
		headers: {
			title: string
			description: string
			links: string[]
		}
		footer: {
			description: string
			links: string[]
		}
		body: {
			title: string
			content: {}
		}
	}
}


type T0 = DataModels['elements']['footer']
/* type T0 = {
		description: string;
		links: string[];
} */

type someTuple = [number, string, boolean, ...string[]]
const arr: someTuple = [1, 'asd', true, '', '', '']

type T1 = someTuple[2]

const sizes = ['small', 'medium', 'large'] as const;
type T2 = typeof sizes[number]