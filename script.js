// 矿工按钮悬停效果
const minerBtn = document.querySelector('.miner-btn');
minerBtn.addEventListener('mouseenter', () => {
    minerBtn.style.boxShadow = '0 0 15px var(--gpu-gold)';
    // 模拟火花效果
    const spark = document.createElement('div');
    spark.style.position = 'absolute';
    spark.style.width = '10px';
    spark.style.height = '10px';
    spark.style.background = 'radial-gradient(circle, var(--gpu-gold), transparent)';
    spark.style.borderRadius = '50%';
    spark.style.animation = 'spark 0.5s forwards';
    minerBtn.appendChild(spark);
    
    setTimeout(() => {
        spark.remove();
    }, 500);
});

minerBtn.addEventListener('mouseleave', () => {
    minerBtn.style.boxShadow = 'none';
});

// 链接悬停效果
const links = document.querySelectorAll('.links a');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const gpuIcon = document.createElement('span');
        gpuIcon.innerHTML = '🖥️';
        gpuIcon.style.marginLeft = '5px';
        gpuIcon.style.transition = 'all 0.3s';
        link.appendChild(gpuIcon);
    });
    
    link.addEventListener('mouseleave', () => {
        const icon = link.querySelector('span');
        if (icon) icon.remove();
    });
});

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
@keyframes spark {
    0% { transform: scale(0.5); opacity: 0; }
    50% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(0); opacity: 0; }
}
`;
document.head.appendChild(style);
