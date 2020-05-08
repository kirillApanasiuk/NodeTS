import fs from 'fs';
interface TestObj {
  name: string;
  sex: string;
  nickname: string;
}

const changeData = (obj: TestObj) => {
  const copy = { ...obj };
  copy.name = 'Changed name';
  copy.sex = 'Changed sex(no)';
  return copy;
};

const dataJson: string = fs.readFileSync('1-json.json').toString();
const data: TestObj = JSON.parse(dataJson);

fs.writeFileSync('1-json.json', JSON.stringify(changeData(data)));
