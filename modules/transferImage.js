const fs = require('fs');

function main() {
    const zdjlJSON = fs.readFileSync('./modules/jiyuan.json', 'utf8');
    const sc = JSON.parse(zdjlJSON);
    const { vars } = sc
    // console.log("vars", vars);
    for (let key in vars) {
        const name = vars[key].name
        const value = vars[key].value.imageData.data
        console.log("name", name);
        console.log("value", value);

        saveBase64Image(value, `./modules/images/${name}.png`)

    }

}
main()
function saveBase64Image(base64Data, filename) {

    var dataBuffer = Buffer.from(base64Data, 'base64');
    fs.writeFile(filename, dataBuffer, { encoding: 'base64' }, function (err) {
        if (err) {
            console.error('Error saving image:', err);
        } else {
            console.log('Image saved successfully:', filename);
        }
    });
}



