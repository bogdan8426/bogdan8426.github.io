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
    await new Promise(r => setTimeout(r, 7000));
    const currentText =  document.getElementById("code").innerHTML;
    document.getElementById("code").innerHTML = currentText.slice(0, currentText.length - txt.length);
    i = 0;
    return await writeCode();
}