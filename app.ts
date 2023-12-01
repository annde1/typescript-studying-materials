//Union allows us to be more flexibe regarding the types that we pass in
function combine(
  inp1: number | string,
  inp2: number | string,
  resultConversion: "as-number" | "as-text" // Literal type represents specific values rather than types
) {
  // console.log(typeof n1);
  let result;
  //Sometimes you need to do runtime check as well (but not always). In this case inp1 + inp2 resulted in error that + cannot be used on type stringwhich is technically not true, but ts complains anyways
  if (typeof inp1 === "number" && typeof inp2 === "number") {
    result = inp1 + inp2;
  } else {
    result = inp1.toString() + inp2.toString();
  }

  return result;
}

const combinedAges = combine(1, 2);
const combinedNames = combine("Anna", "Kitzy");
console.log(combinedAges);
console.log(combinedNames);
