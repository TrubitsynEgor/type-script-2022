function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;

function head(value: any) {
	return value[0]
}
const myFunc = head('fasfsaf');
myFunc + 1;

