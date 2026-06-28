// 应用状态
const state = {
    question: '',
    currentThrow: 0,
    lines: [],
    isAnimating: false
};

// DOM 元素
const elements = {
    inputSection: document.getElementById('input-section'),
    throwSection: document.getElementById('throw-section'),
    resultSection: document.getElementById('result-section'),
    questionInput: document.getElementById('question'),
    startBtn: document.getElementById('start-btn'),
    throwBtn: document.getElementById('throw-btn'),
    restartBtn: document.getElementById('restart-btn'),
    currentThrow: document.getElementById('current-throw'),
    coinContainer: document.getElementById('coin-container'),
    guaName: document.getElementById('gua-name'),
    guaCiText: document.getElementById('gua-ci-text'),
    interpretationText: document.getElementById('interpretation-text'),
    adviceText: document.getElementById('advice-text')
};

// 初始化
function init() {
    elements.startBtn.addEventListener('click', startDivination);
    elements.throwBtn.addEventListener('click', throwCoins);
    elements.restartBtn.addEventListener('click', restart);

    // 初始化铜钱
    initCoins();
}

// 初始化铜钱显示
function initCoins() {
    const coins = elements.coinContainer.querySelectorAll('.coin');
    coins.forEach((coin, index) => {
        coin.textContent = '?';
    });
}

// 开始占卜
function startDivination() {
    state.question = elements.questionInput.value.trim();
    state.currentThrow = 0;
    state.lines = [];

    // 切换到投掷界面
    elements.inputSection.classList.add('hidden');
    elements.throwSection.classList.remove('hidden');
    elements.currentThrow.textContent = '1';

    // 重新初始化铜钱
    initCoins();
}

// 投掷铜钱
function throwCoins() {
    if (state.isAnimating) return;
    state.isAnimating = true;

    const coins = elements.coinContainer.querySelectorAll('.coin');

    // 添加动画
    coins.forEach(coin => {
        coin.classList.add('flipping');
        coin.textContent = '';
    });

    // 禁用按钮
    elements.throwBtn.disabled = true;

    // 动画结束后显示结果
    setTimeout(() => {
        const result = window.throwCoinsResult();

        // 更新铜钱显示
        coins.forEach((coin, index) => {
            coin.classList.remove('flipping');
            coin.textContent = result.results[index] === 1 ? '字' : '花';
        });

        // 保存爻值
        state.lines.push(result.lineValue);
        state.currentThrow++;

        // 更新进度
        if (state.currentThrow < 6) {
            elements.currentThrow.textContent = state.currentThrow + 1;
            elements.throwBtn.disabled = false;
        } else {
            // 完成投掷，显示结果（按钮保持禁用状态）
            setTimeout(showResult, 500);
        }

        state.isAnimating = false;
    }, 600);
}

// 显示结果
function showResult() {
    // 切换到结果界面
    elements.throwSection.classList.add('hidden');
    elements.resultSection.classList.remove('hidden');

    // 计算卦象
    const guaIndex = calculateGua(state.lines);
    const guaData = getGuaData(guaIndex);

    // 渲染卦象符号
    renderGuaLines(state.lines);

    // 显示卦象信息
    elements.guaName.textContent = guaData.name;
    elements.guaCiText.textContent = guaData.guaci;
    elements.interpretationText.textContent = guaData.interpretation;
    elements.adviceText.textContent = guaData.advice;

    // 添加问题信息（如果有）
    if (state.question) {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'user-question';
        questionDiv.innerHTML = `<h3>你的问题</h3><p>${state.question}</p>`;
        elements.guaName.parentNode.insertBefore(questionDiv, elements.guaName.parentNode.firstChild);
    }
}

// 重新开始
function restart() {
    // 重置状态
    state.question = '';
    state.currentThrow = 0;
    state.lines = [];

    // 清空输入
    elements.questionInput.value = '';

    // 切换到输入界面
    elements.resultSection.classList.add('hidden');
    elements.inputSection.classList.remove('hidden');

    // 移除问题显示
    const questionDiv = elements.resultSection.querySelector('.user-question');
    if (questionDiv) {
        questionDiv.remove();
    }

    // 重置铜钱
    initCoins();
    elements.throwBtn.disabled = false;
}

// 启动应用
document.addEventListener('DOMContentLoaded', init);
