const fs = require('fs').promises;

const arrayStrings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt'
]

const arrayToFile = async () => {
    const prmises = arrayStrings.map((string, index) => {
        return fs.writeFile(`./file${index + 1}.txt`, string);
    });

    await Promise.all(prmises);

    const readFilesPromises = fileNames.map((file) => {
        return fs.readFile(file, 'utf-8');
    });

    const fileContents = await Promise.all(readFilesPromises);
    const arrayToString = fileContents.join(' ');
    return fs.writeFile('./fileAll.txt', arrayToString);
}

arrayToFile();
