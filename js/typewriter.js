var i = 0;
var txt = 'coming soon...';
var sleepTime = 100;
async function writeCode() {
    await new Promise(r => setTimeout(r, 1000));
    while (i < txt.length) {
        document.getElementById("code").innerHTML += txt.charAt(i);
        i++;
        await new Promise(r => setTimeout(r, sleepTime));
    }
}