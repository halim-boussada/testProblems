function replaceString(optionrule, indexStart, indexEnd) {
  let replacementArr = [];
  let theReplacement = optionrule.slice(indexStart + 1, indexEnd);
  if (theReplacement.includes("AND")) {
    theReplacement.split(" AND ").forEach((element) => {
      replacementArr.push(JSON.parse(element));
    });
    let a = optionrule.replace(
      optionrule.slice(indexStart, indexEnd + 1),
      JSON.stringify({ and: replacementArr })
    );
    return a;
  } else {
    theReplacement.split(" OR ").forEach((element) => {
      replacementArr.push(JSON.parse(element));
    });
    let a = optionrule.replace(
      optionrule.slice(indexStart, indexEnd + 1),
      JSON.stringify({ or: replacementArr })
    );
    return a;
  }
}
function stringToObject(input) {
  input = input.replace(/[{}]/g, "");
  let lastClosingIndex;
  let i = input.split("").length - 1;
  while (input.includes("(")) {
    if (input[i] == ")") {
      lastClosingIndex = i;
      i--;
    } else if (input[i] == "(") {
      input = replaceString(input, i, lastClosingIndex);
      i = input.split("").length - 1;
    } else {
      i--;
    }
  }
  let arr = [];
  if (input.includes("AND")) {
    input.split(" AND ").forEach((element) => {
      arr.push(JSON.parse(element));
    });
    return {
      and: arr,
    };
  } else {
    input.split(" OR ").forEach((element) => {
      arr.push(JSON.parse(element));
    });
    return {
      or: arr,
    };
  }
}

const optionRule =
  "{1069} AND ({1070} OR {1071} OR {1072}) AND {1244} AND ({1245} OR {1339})";

let result = stringToObject(optionRule);

console.log("result:", result);
