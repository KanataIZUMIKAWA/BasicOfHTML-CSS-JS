// Sample 2-1
function showDialog() {
    alert('Hello');
}

// Sample 2-2
var count = 0;

function countClick() {
    count++;
    var element = document.getElementById('count');
    element.textContent = String(count);
}
// Sample 2-3
// テキストボックスの値を取得する
function sample2_3_1() {
    var element = document.getElementById('textbox');
    var value = element.value;
    console.log(value);
}

// チェックボックスの状態を取得する
function sample2_3_2() {
    var element = document.getElementById('checkbox');
    var checked = element.checked;
    console.log(checked);
}

// チェックボックスが操作可能かを取得する
function sample2_3_3() {
    var element = document.getElementById('checkbox');
    var disabled = element.disabled;
    console.log(disabled);
}

// Sample 2-4
// IDがcontentである要素に、テキストエリアの内容をHTMLとして設定する
function sample2_4_1() {
    var textarea = document.getElementById('textarea');
    var content = document.getElementById('content');
    var value = textarea.value;
    content.innerHTML = value;
}

// IDがcontentである要素に、テキストエリアの内容をテキストとして設定する
function sample2_4_2() {
    var textarea = document.getElementById('textarea');
    var content = document.getElementById('content');
    var value = textarea.value;
    content.textContent = value;
}
// Sample 2-6
// テキストボックスの値を設定する
function sample2_6_1() {
    var element = document.getElementById('textbox2');
    element.value = 'hello';
}

// チェックボックスの状態を設定する
function sample2_6_2() {
    var element = document.getElementById('checkbox2');
    element.checked = true;
}

// チェックボックスの操作の可否を設定する
function sample2_6_3() {
    var element = document.getElementById('checkbox2');
    element.disabled = true;
}

// Sample 4-1
function showDialogTimeout() {
      alert('Hello');
    }
    
    var timeoutId;
    function startTimeout() {
      timeoutId = setTimeout(showDialogTimeout, 5000);
    }
    
    function stopTimeout() {
      clearTimeout(timeoutId);
    }
    
    // Sample 4-2
    var cnt;
    function updateContentInterval() {
      cnt++;
      var element = document.getElementById('count2');
      element.textContent = String(cnt);
    }
    
    var intervalId;
    function startInterval() {
      cnt = 0;
      intervalId = setInterval(updateContentInterval, 1000);
    }
    
    function stopInterval() {
      clearInterval(intervalId);
    }