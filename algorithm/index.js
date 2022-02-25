const optionRule =
  "{1069} AND ({1070} OR {1071} OR {1072}) AND {1244} AND ({1245} OR {1339})";

const output = {
  and: [1069, { or: [1070, 1071, 1072] }, 1244, { or: [1245, 1339] }],
};

// Output Example
