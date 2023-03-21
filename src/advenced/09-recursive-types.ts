type NestedNumbers = number | NestedNumbers[]

const numbers01: NestedNumbers[] = [1, 2, [1, 2, [1, 2, [1, 2, [1, 2]]]]]
numbers01.push([15, 652, [4242, 5125]]);


//JSON
type JSONPrimitive = string | number | boolean | null
type JSONObject = { [k: string]: JSONValue }
type JSONArray = JSONValue[]
type JSONValue = JSONPrimitive | JSONObject | JSONArray


function isJSON(arg: JSONValue) { }

isJSON('hi')
isJSON(1)
isJSON({ a: [123], v: { x: 1 } })
isJSON([1, { a: [123], v: { x: 1 } }])