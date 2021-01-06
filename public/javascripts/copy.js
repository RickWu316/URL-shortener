function copyText() {
    let copyArea = document.getElementById("copyArea");
    let range = document.createRange();
    range.selectNode(copyArea);
    // 選取裡面的文字
    window.getSelection().addRange(range);


    try {
        // 執行瀏覽器的複製指令，複製上面 copyArea 內選取到的文字
        var copyStatus = document.execCommand('copy');

    } catch (error) {
        console.log('Oops!, unable to copy');
    }
    // 移除選取
    window.getSelection().removeAllRanges();

    alert("複製成功")
}
