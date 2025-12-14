// LED显示屏产品数据库
const ledDatabase = {
    'indoor-fixed': {
        cabinetSize: { width: 0.64, height: 0.48 },
        TW11: [
            { model: 'TW11-3216-P1.2', pixelPitch: 1.25, pricePerSqm: 864.29, cabinetSetPrice: 265.51 },
            { model: 'TW11-3216-P1.5', pixelPitch: 1.53, pricePerSqm: 557.86, cabinetSetPrice: 171.37 },
            { model: 'TW11-3216-P1.6', pixelPitch: 1.667, pricePerSqm: 581.43, cabinetSetPrice: 178.62 },
            { model: 'TW11-3216-P1.8', pixelPitch: 1.86, pricePerSqm: 392.86, cabinetSetPrice: 120.69 },
            { model: 'TW11-3216-P2.0', pixelPitch: 2.0, pricePerSqm: 361.43, cabinetSetPrice: 111.03 },
            { model: 'TW11-3216-P2.5', pixelPitch: 2.5, pricePerSqm: 284.74, cabinetSetPrice: 87.47 },
            { model: 'TW11-3216-P3.0', pixelPitch: 3.076, pricePerSqm: 253.00, cabinetSetPrice: 77.72 },
            { model: 'TW11-3216-P4.0', pixelPitch: 4.0, pricePerSqm: 215.86, cabinetSetPrice: 66.51 }
        ],
        TW21: [
            { model: 'TW21-3216-P1.2', pixelPitch: 1.25, pricePerSqm: 1363.00, cabinetSetPrice: 418.71 },
            { model: 'TW21-3216-P1.5', pixelPitch: 1.53, pricePerSqm: 970.00, cabinetSetPrice: 297.98 },
            { model: 'TW21-3216-P1.6', pixelPitch: 1.667, pricePerSqm: 925.00, cabinetSetPrice: 284.26 },
            { model: 'TW21-3216-P1.8', pixelPitch: 1.86, pricePerSqm: 756.00, cabinetSetPrice: 232.14 },
            { model: 'TW21-3216-P2.0', pixelPitch: 2.0, pricePerSqm: 668.00, cabinetSetPrice: 205.21 },
            { model: 'TW21-3216-P2.5', pixelPitch: 2.5, pricePerSqm: 548.00, cabinetSetPrice: 168.35 },
            { model: 'TW21-3216-P3.0', pixelPitch: 3.076, pricePerSqm: 480.00, cabinetSetPrice: 147.46 },
            { model: 'TW21-3216-P4.0', pixelPitch: 4.0, pricePerSqm: 385.00, cabinetSetPrice: 118.27 }
        ],
        TW31: [
            { model: 'TW31-COB-P0.7H', pixelPitch: 0.78, pricePerSqm: 6850, cabinetSetPrice: 1387.13 },
            { model: 'TW31-COB-P0.9H', pixelPitch: 0.9375, pricePerSqm: 3750, cabinetSetPrice: 759.38 },
            { model: 'TW31-COB-P1.2H', pixelPitch: 1.25, pricePerSqm: 1900, cabinetSetPrice: 384.75 },
            { model: 'TW31-COB-P1.5H', pixelPitch: 1.5625, pricePerSqm: 1750, cabinetSetPrice: 354.38 }
        ]
    },
    'indoor-rental': {
        cabinetSize: { width: 0.5, height: 1.0 },
        TW11: [
            { model: 'TW11-R-P1.95(GOB)', pixelPitch: 1.95, pricePerSqm: 728, cabinetPrice500x1000: -70, cabinetSetPrice: 329.00 },
            { model: 'TW11-R-P2.6', pixelPitch: 2.6, pricePerSqm: 531, cabinetPrice500x1000: -70, cabinetSetPrice: 230.50 },
            { model: 'TW11-R-P2.9', pixelPitch: 2.976, pricePerSqm: 518, cabinetPrice500x1000: -60, cabinetSetPrice: 229.00 },
            { model: 'TW11-R-P3.9', pixelPitch: 3.91, pricePerSqm: 438, cabinetPrice500x1000: -60, cabinetSetPrice: 189.00 },
            { model: 'TW11-R-P4.8', pixelPitch: 4.81, pricePerSqm: 422, cabinetPrice500x1000: -60, cabinetSetPrice: 181.00 }
        ],
        TW21: [
            { model: 'TW21-RHD-P2.6H', pixelPitch: 2.6, pricePerSqm: 663, cabinetPrice500x1000: -75, cabinetSetPrice: 294.00 },
            { model: 'TW21-RHD-P2.9H', pixelPitch: 2.976, pricePerSqm: 613, cabinetPrice500x1000: -75, cabinetSetPrice: 269.00 },
            { model: 'TW21-RHD-P3.9H', pixelPitch: 3.91, pricePerSqm: 536, cabinetPrice500x1000: -75, cabinetSetPrice: 230.50 }
        ],
        TW31: [
            { model: 'TW31-RHD-P2.6', pixelPitch: 2.6, pricePerSqm: 828, cabinetSetPrice: 207.00 },
            { model: 'TW31-RHD-P2.9', pixelPitch: 2.976, pricePerSqm: 777, cabinetSetPrice: 194.25 },
            { model: 'TW31-RHD-P3.9', pixelPitch: 3.91, pricePerSqm: 707, cabinetSetPrice: 176.75 }
        ]
    },
    'outdoor-fixed': {
        cabinetSize: { width: 0.96, height: 0.96 },
        TW11: [
            { model: 'TW11-OD-P2.5', pixelPitch: 2.5, pricePerSqm: 600.00, cabinetSetPrice: 552.96 },
            { model: 'TW11-OD-P3', pixelPitch: 3.076, pricePerSqm: 488.00, cabinetSetPrice: 449.74 },
            { model: 'TW11-OD-P4', pixelPitch: 4.0, pricePerSqm: 372.80, cabinetSetPrice: 343.57 },
            { model: 'TW11-OD-P5', pixelPitch: 5.0, pricePerSqm: 328.00, cabinetSetPrice: 302.28 },
            { model: 'TW11-OD-P6', pixelPitch: 6.67, pricePerSqm: 372.80, cabinetSetPrice: 343.57 },
            { model: 'TW11-OD-P8', pixelPitch: 8.0, pricePerSqm: 335.00, cabinetSetPrice: 308.74 },
            { model: 'TW11-OD-P10', pixelPitch: 10.0, pricePerSqm: 296.00, cabinetSetPrice: 272.79 }
        ],
        TW21: [
            { model: 'TW21-OD-P2.5', pixelPitch: 2.5, pricePerSqm: 784.00, cabinetSetPrice: 722.53 },
            { model: 'TW21-OD-P3', pixelPitch: 3.076, pricePerSqm: 577.00, cabinetSetPrice: 531.76 },
            { model: 'TW21-OD-P4', pixelPitch: 4.0, pricePerSqm: 444.00, cabinetSetPrice: 409.19 },
            { model: 'TW21-OD-P5', pixelPitch: 5.0, pricePerSqm: 372.00, cabinetSetPrice: 342.84 },
            { model: 'TW21-OD-P6', pixelPitch: 6.67, pricePerSqm: 395.00, cabinetSetPrice: 364.03 },
            { model: 'TW21-OD-P8', pixelPitch: 8.0, pricePerSqm: 345.00, cabinetSetPrice: 317.95 },
            { model: 'TW21-OD-P10', pixelPitch: 10.0, pricePerSqm: 328.00, cabinetSetPrice: 302.28 }
        ],
        TW31: [
            { model: 'TW31-HOD-P5.7E', pixelPitch: 5.7, pricePerSqm: 696, cabinetSetPrice: 641.43 },
            { model: 'TW31-HOD-P6.67E', pixelPitch: 6.67, pricePerSqm: 856, cabinetSetPrice: 788.89 },
            { model: 'TW31-HOD-P8E', pixelPitch: 8.0, pricePerSqm: 758, cabinetSetPrice: 698.57 },
            { model: 'TW31-HOD-P10E', pixelPitch: 10.0, pricePerSqm: 658, cabinetSetPrice: 606.41 }
        ]
    },
    'outdoor-rental': {
        cabinetSize: { width: 0.5, height: 1.0 },
        TW11: [
            { model: 'TW11-OR-P2.9', pixelPitch: 2.976, pricePerSqm: 601.00, cabinetPrice500x1000: -58, cabinetSetPrice: 271.50 },
            { model: 'TW11-OR-P3.9', pixelPitch: 3.91, pricePerSqm: 465.00, cabinetPrice500x1000: -58, cabinetSetPrice: 203.50 },
            { model: 'TW11-OR-P4.8', pixelPitch: 4.81, pricePerSqm: 437.00, cabinetPrice500x1000: -58, cabinetSetPrice: 189.50 }
        ],
        TW21: [
            { model: 'TW21-ORD-P2.9H', pixelPitch: 2.976, pricePerSqm: 726.00, cabinetPrice500x1000: -70, cabinetSetPrice: 328.00 },
            { model: 'TW21-ORD-P3.9H', pixelPitch: 3.91, pricePerSqm: 583.00, cabinetPrice500x1000: -70, cabinetSetPrice: 256.50 }
        ],
        TW31: [
            { model: 'TW31-ORD-P2.9', pixelPitch: 2.976, pricePerSqm: 915.00, cabinetSetPrice: 228.75 },
            { model: 'TW31-ORD-P3.9', pixelPitch: 3.91, pricePerSqm: 769.00, cabinetSetPrice: 192.25 }
        ]
    }
};

// 全局变量
let formData = {
    environment: '',
    preference: '',
    distance: '',
    screenWidth: 0,
    screenHeight: 0
};

// DOM元素
const quoteForm = document.getElementById('quoteForm');
const quoteResult = document.getElementById('quoteResult');
const contactModal = document.getElementById('contactModal');
const contactForm = document.getElementById('contactForm');
const thankYouMessage = document.getElementById('thankYouMessage');
const closeModal = document.querySelector('.close');
const contactBtn = document.getElementById('contactBtn');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const modelSelector = document.getElementById('model-selector');

// 全局变量保存所有可用型号
let availableModels = [];

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 事件监听器
    quoteForm.addEventListener('submit', handleFormSubmit);
    contactForm.addEventListener('submit', handleContactSubmit);
    closeModal.addEventListener('click', closeContactModal);
    contactBtn.addEventListener('click', openContactModal);
    newQuoteBtn.addEventListener('click', resetCalculator);
    modelSelector.addEventListener('change', handleModelSelection);

    // 监听环境选择变化
    const environmentInputs = document.querySelectorAll('input[name="environment"]');
    environmentInputs.forEach(input => {
        input.addEventListener('change', updateDistanceOptions);
    });
});

// 更新距离选项
function updateDistanceOptions() {
    const environment = document.querySelector('input[name="environment"]:checked').value;
    const indoorDistances = document.getElementById('indoor-distances');
    const outdoorDistances = document.getElementById('outdoor-distances');

    if (environment.includes('indoor')) {
        indoorDistances.style.display = 'grid';
        outdoorDistances.style.display = 'none';

        // 清除户外距离选择
        const outdoorInputs = outdoorDistances.querySelectorAll('input[type="radio"]');
        outdoorInputs.forEach(input => input.checked = false);
    } else {
        indoorDistances.style.display = 'none';
        outdoorDistances.style.display = 'grid';

        // 清除室内距离选择
        const indoorInputs = indoorDistances.querySelectorAll('input[type="radio"]');
        indoorInputs.forEach(input => input.checked = false);
    }
}

// 更新表单数据
function updateFormData() {
    const environmentInput = document.querySelector('input[name="environment"]:checked');
    const preferenceInput = document.querySelector('input[name="preference"]:checked');
    const distanceInput = document.querySelector('input[name="distance"]:checked');
    const widthInput = document.getElementById('screen-width');
    const heightInput = document.getElementById('screen-height');

    if (environmentInput) formData.environment = environmentInput.value;
    if (preferenceInput) formData.preference = preferenceInput.value;
    if (distanceInput) formData.distance = distanceInput.value;
    if (widthInput) formData.screenWidth = parseFloat(widthInput.value);
    if (heightInput) formData.screenHeight = parseFloat(heightInput.value);
}

// 验证表单
function validateForm() {
    const environmentInput = document.querySelector('input[name="environment"]:checked');
    const preferenceInput = document.querySelector('input[name="preference"]:checked');
    const distanceInput = document.querySelector('input[name="distance"]:checked');
    const widthInput = document.getElementById('screen-width');
    const heightInput = document.getElementById('screen-height');

    if (!environmentInput) {
        alert('请选择使用环境');
        return false;
    }
    if (!preferenceInput) {
        alert('请选择偏好');
        return false;
    }
    if (!distanceInput) {
        alert('请选择观看距离');
        return false;
    }
    if (!widthInput.value || parseFloat(widthInput.value) <= 0) {
        alert('请输入有效的屏幕宽度');
        return false;
    }
    if (!heightInput.value || parseFloat(heightInput.value) <= 0) {
        alert('请输入有效的屏幕高度');
        return false;
    }

    return true;
}

// 解析距离档并计算目标像素间距
function calculateTargetPixelPitch(distance) {
    // 解析距离档为 D_low, D_high
    let D_low, D_high;

    if (distance.includes('+')) {
        D_low = parseFloat(distance.replace('+', ''));
        D_high = Infinity;
    } else {
        const range = distance.split('-').map(d => parseFloat(d));
        D_low = range[0];
        D_high = range[1];
    }

    // Step A: 用最近观看距离算目标 Pitch
    // P_target(mm) = K / D_low
    // K=2 是一个合理的系数，可以根据需要调整
    const K = 2;
    const P_target = K / D_low;

    return {
        D_low: D_low,
        D_high: D_high,
        P_target: P_target,
        distance: distance,
        K: K
    };
}

// 推荐最佳型号（新算法）
function recommendModel(environment, preference, distance) {
    const products = ledDatabase[environment][preference];
    const pitchInfo = calculateTargetPixelPitch(distance);

    // 保存所有可用型号到全局变量
    availableModels = [...products];

    // Step B: 在候选表里选"最接近 P_target 的 pitch"
    const productAnalysis = products.map(product => ({
        product: product,
        diff: Math.abs(product.pixelPitch - pitchInfo.P_target)
    }));

    // 按 diff 排序，选择最小 diff 的产品
    productAnalysis.sort((a, b) => a.diff - b.diff);

    let selectedProduct = productAnalysis[0].product;
    let alternatives = {
        finer: null,
        coarser: null
    };

    // Step C: 同差值/同 pitch 的 tie-break
    const minDiff = productAnalysis[0].diff;
    const candidates = productAnalysis.filter(item => Math.abs(item.diff - minDiff) < 0.001);

    if (candidates.length > 1) {
        // 优先价格更低
        candidates.sort((a, b) => {
            if (Math.abs(a.product.pricePerSqm - b.product.pricePerSqm) > 0.01) {
                return a.product.pricePerSqm - b.product.pricePerSqm;
            }
            return 0; // 如果价格相同，保持原顺序
        });
        selectedProduct = candidates[0].product;
    }

    // Step D: 给 1~2 个备选
    // Alt-更细一档：找比主推更小的最近 pitch
    const finerOptions = productAnalysis.filter(item =>
        item.product.pixelPitch < selectedProduct.pixelPitch
    );
    if (finerOptions.length > 0) {
        alternatives.finer = finerOptions[0].product;
    }

    // Alt-更粗一档：找比主推更大的最近 pitch
    const coarserOptions = productAnalysis.filter(item =>
        item.product.pixelPitch > selectedProduct.pixelPitch
    );
    if (coarserOptions.length > 0) {
        alternatives.coarser = coarserOptions[0].product;
    }

    // 返回推荐结果
    return {
        product: selectedProduct,
        alternatives: alternatives,
        reasoning: {
            environment: environment,
            preference: preference,
            distance: distance,
            pitchInfo: pitchInfo,
            diff: productAnalysis[0].diff,
            candidates: candidates.length,
            totalProducts: products.length
        }
    };
}

// 计算箱体数量
function calculateCabinetCount(screenWidth, screenHeight, cabinetWidth, cabinetHeight) {
    const cabinetsX = Math.floor(screenWidth / cabinetWidth);
    const cabinetsY = Math.floor(screenHeight / cabinetHeight);
    return cabinetsX * cabinetsY;
}

// 计算价格
function calculatePrice(environment, preference, screenWidth, screenHeight, recommendedModel) {
    const cabinetSize = ledDatabase[environment].cabinetSize;

    // 按照要求计算箱体数量：箱体数量 = ⌊屏幕宽度 ÷ 箱体宽度⌋ × ⌊屏幕高度 ÷ 箱体高度⌋
    const cabinetsX = Math.floor(screenWidth / cabinetSize.width);
    const cabinetsY = Math.floor(screenHeight / cabinetSize.height);
    const cabinetCount = cabinetsX * cabinetsY;

    // 确保至少有1个箱体
    if (cabinetCount === 0) {
        return {
            cabinetCount: 1,
            priceRange: "请联系销售人员",
            estimatedPrice: 0,
            calculationDetails: null
        };
    }

    // 判断是否为租赁场景
    const isRental = environment.includes('rental');
    // 判断是否为租赁类型的高性能场景（TW31）
    const isRentalHighPerformance = isRental && preference === 'TW31';
    let cabinetPrice;

    if (isRentalHighPerformance) {
        // 租赁类型的高性能场景：直接使用 cabinetSetPrice
        cabinetPrice = recommendedModel.cabinetSetPrice;
    } else if (isRental) {
        // 其他租赁场景专用公式：(USD/sqm - CabinetPrice500x1000) × 箱体面积
        // 注意：cabinetPrice500x1000是负值，所以实际上是减去一个负数
        const basePrice = recommendedModel.pricePerSqm + recommendedModel.cabinetPrice500x1000;
        cabinetPrice = basePrice * cabinetSize.width * cabinetSize.height;
    } else {
        // 非租赁场景：直接使用 cabinetSetPrice
        cabinetPrice = recommendedModel.cabinetSetPrice;
    }

    const totalPrice = cabinetPrice * cabinetCount;

    // 价格范围计算（±15%浮动）
    const variance = totalPrice * 0.15;
    const minPrice = Math.round(totalPrice - variance);
    const maxPrice = Math.round(totalPrice + variance);

    // 计算过程详情
    const calculationDetails = {
        screenWidth: screenWidth,
        screenHeight: screenHeight,
        cabinetWidth: cabinetSize.width,
        cabinetHeight: cabinetSize.height,
        cabinetsX: cabinetsX,
        cabinetsY: cabinetsY,
        cabinetCount: cabinetCount,
        cabinetArea: cabinetSize.width * cabinetSize.height,
        basePricePerSqm: recommendedModel.pricePerSqm,
        cabinetPrice500x1000: isRental ? recommendedModel.cabinetPrice500x1000 : null,
        cabinetSetPrice: recommendedModel.cabinetSetPrice,
        cabinetPrice: cabinetPrice,
        totalPrice: totalPrice,
        isRental: isRental,
        isRentalHighPerformance: isRentalHighPerformance,
        rentalPriceFormula: isRentalHighPerformance ? `使用Cabinet Set Price: ${recommendedModel.cabinetSetPrice}` : (isRental ? `(${recommendedModel.pricePerSqm} ${recommendedModel.cabinetPrice500x1000 > 0 ? '+' : ''}${recommendedModel.cabinetPrice500x1000}) × ${cabinetSize.width} × ${cabinetSize.height}` : `使用Cabinet Set Price: ${recommendedModel.cabinetSetPrice}`)
    };

    return {
        cabinetCount: cabinetCount,
        priceRange: `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`,
        estimatedPrice: Math.round(totalPrice),
        calculationDetails: calculationDetails
    };
}

// 处理表单提交
function handleFormSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    updateFormData();

    // 推荐型号
    const recommendation = recommendModel(
        formData.environment,
        formData.preference,
        formData.distance
    );
    const recommendedModel = recommendation.product;

    // 计算价格
    const priceInfo = calculatePrice(
        formData.environment,
        formData.preference,
        formData.screenWidth,
        formData.screenHeight,
        recommendedModel
    );

    // 显示结果
    updateModelDisplay(recommendedModel, recommendation);
    updatePriceAndCabinetDisplay(priceInfo);

    // 显示型号推荐计算过程
    displayModelCalculation(recommendation.reasoning, recommendation.alternatives);

    // 显示简化的箱体计算过程
    displaySimplifiedCalculation(priceInfo.calculationDetails);

    // 填充型号选择下拉框
    populateModelSelector(availableModels, recommendedModel.model);

    // 保存结果到全局变量
    window.quotationResult = {
        environment: formData.environment,
        preference: formData.preference,
        distance: formData.distance,
        screenWidth: formData.screenWidth,
        screenHeight: formData.screenHeight,
        recommendation: recommendation,
        priceInfo: priceInfo
    };

    // 显示报价结果
    quoteResult.classList.remove('hidden');
}


// 打开联系信息弹窗
function openContactModal() {
    contactModal.style.display = 'block';
}

// 关闭联系信息弹窗
function closeContactModal() {
    contactModal.style.display = 'none';
}

// 处理联系表单提交
function handleContactSubmit(e) {
    e.preventDefault();

    const contactData = {
        name: document.getElementById('name').value,
        company: document.getElementById('company').value,
        email: document.getElementById('email').value,
        country: document.getElementById('country').value
    };

    // 在控制台打印结果
    console.log('=== LED显示屏报价申请 ===');
    console.log('客户信息:', contactData);
    console.log('需求信息:', {
        使用环境: getEnvironmentText(window.quotationResult.environment),
        偏好选择: getPreferenceText(window.quotationResult.preference),
        观看距离: window.quotationResult.distance + '米',
        屏幕尺寸: `${window.quotationResult.screenWidth}m × ${window.quotationResult.screenHeight}m`
    });
    console.log('推荐型号:', window.quotationResult.recommendation.product.model);
    console.log('像素间距:', window.quotationResult.recommendation.product.pixelPitch + 'mm');
    console.log('所需箱体:', window.quotationResult.priceInfo.cabinetCount + '个');
    console.log('预估价格:', window.quotationResult.priceInfo.priceRange);
    console.log('推荐产品详情:', window.quotationResult.recommendation.product);
    console.log('价格计算详情:', window.quotationResult.priceInfo.calculationDetails);
    console.log('==========================');

    // 显示订单摘要
    const orderSummary = document.getElementById('orderSummary');
    const result = window.quotationResult;

    orderSummary.innerHTML = `
        <h3>客户信息</h3>
        <div class="order-summary-item">
            <strong>姓名:</strong> ${contactData.name}
        </div>
        <div class="order-summary-item">
            <strong>公司:</strong> ${contactData.company || '未填写'}
        </div>
        <div class="order-summary-item">
            <strong>邮箱:</strong> ${contactData.email}
        </div>
        <div class="order-summary-item">
            <strong>国家:</strong> ${contactData.country}
        </div>
        <h3 style="margin-top: 20px;">需求信息</h3>
        <div class="order-summary-item">
            <strong>使用环境:</strong> ${getEnvironmentText(result.environment)}
        </div>
        <div class="order-summary-item">
            <strong>偏好选择:</strong> ${getPreferenceText(result.preference)}
        </div>
        <div class="order-summary-item">
            <strong>观看距离:</strong> ${result.distance}米
        </div>
        <div class="order-summary-item">
            <strong>屏幕尺寸:</strong> ${result.screenWidth}m × ${result.screenHeight}m
        </div>
        <h3 style="margin-top: 20px;">报价结果</h3>
        <div class="order-summary-item">
            <strong>推荐型号:</strong> ${result.recommendation.product.model}
        </div>
        <div class="order-summary-item">
            <strong>像素间距:</strong> ${result.recommendation.product.pixelPitch}mm
        </div>
        <div class="order-summary-item">
            <strong>所需箱体:</strong> ${result.priceInfo.cabinetCount}个
        </div>
        <div class="order-summary-item">
            <strong>预估价格范围:</strong> ${result.priceInfo.priceRange}
        </div>
    `;

    // 显示感谢信息
    contactModal.style.display = 'none';
    quoteResult.classList.add('hidden');
    thankYouMessage.classList.remove('hidden');
}


// 重置计算器
function resetCalculator() {
    formData = {
        environment: '',
        preference: '',
        distance: '',
        screenWidth: 0,
        screenHeight: 0
    };

    // 重置表单
    quoteForm.reset();

    // 显示表单区域
    document.querySelector('.form-section').classList.remove('hidden');

    // 隐藏其他元素
    quoteResult.classList.add('hidden');
    thankYouMessage.classList.add('hidden');

    // 重置距离选项显示
    updateDistanceOptions();

    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 辅助函数：获取环境文本
function getEnvironmentText(environment) {
    const texts = {
        'indoor-fixed': '室内固定',
        'indoor-rental': '室内租赁',
        'outdoor-fixed': '户外固定',
        'outdoor-rental': '户外租赁'
    };
    return texts[environment] || environment;
}

// 辅助函数：获取偏好文本
function getPreferenceText(preference) {
    const texts = {
        'TW11': '优先低价',
        'TW21': '高性价比',
        'TW31': '高性能'
    };
    return texts[preference] || preference;
}

// 显示型号推荐计算过程（新算法）
function displayModelCalculation(reasoning, alternatives) {
    const modelCalculation = document.getElementById('model-calculation');

    if (!reasoning) {
        modelCalculation.innerHTML = '<div class="calculation-item">推荐计算出现错误</div>';
        return;
    }

    let html = '';

    // 新算法计算过程
    html += `<div class="calculation-item">观看距离档：${reasoning.distance}米</div>`;
    html += `<div class="calculation-item">最近距离：${reasoning.pitchInfo.D_low}米</div>`;
    html += `<div class="calculation-item">目标像素间距：${reasoning.pitchInfo.P_target.toFixed(2)}mm</div>`;
    html += `<div class="calculation-item">匹配偏差：${reasoning.diff.toFixed(2)}mm</div>`;

    if (reasoning.candidates > 1) {
        html += `<div class="calculation-item">存在 ${reasoning.candidates} 个同偏差型号，优先选择价格更低</div>`;
    }

    // 显示备选方案
    if (alternatives.finer || alternatives.coarser) {
        html += `<div class="calculation-item">备选方案：`;
        if (alternatives.finer) {
            html += `<span style="color: #67e8f9;">更清晰(${alternatives.finer.pixelPitch}mm)</span>`;
        }
        if (alternatives.finer && alternatives.coarser) {
            html += ` / `;
        }
        if (alternatives.coarser) {
            html += `<span style="color: #fbbf24;">更经济(${alternatives.coarser.pixelPitch}mm)</span>`;
        }
        html += `</div>`;
    }

    html += `<div class="calculation-item total">从 ${reasoning.totalProducts} 个型号中选出最优匹配</div>`;

    modelCalculation.innerHTML = html;
}

// 显示箱体数量计算过程
function displayCabinetCalculation(details) {
    const cabinetCalculation = document.getElementById('cabinet-calculation');

    if (!details) {
        cabinetCalculation.innerHTML = '<div class="calculation-item">屏幕尺寸过小，请联系销售人员获取详细报价</div>';
        document.getElementById('price-calculation').innerHTML = '';
        return;
    }

    let html = '';

    // 箱体数量计算过程
    html += `<div class="calculation-item">屏幕尺寸：${details.screenWidth}m × ${details.screenHeight}m</div>`;
    html += `<div class="calculation-item">单箱体尺寸：${details.cabinetWidth}m × ${details.cabinetHeight}m</div>`;
    html += `<div class="calculation-item">宽度方向需要：${details.cabinetsX} 个箱体</div>`;
    html += `<div class="calculation-item">高度方向需要：${details.cabinetsY} 个箱体</div>`;
    html += `<div class="calculation-item total">总计：${details.cabinetCount} 个箱体</div>`;

    cabinetCalculation.innerHTML = html;
}

// 显示价格计算过程
function displayPriceCalculation(details) {
    const priceCalculation = document.getElementById('price-calculation');

    if (!details) {
        priceCalculation.innerHTML = '';
        return;
    }

    let html = '';

    // 价格计算公式
    if (details.isRentalHighPerformance) {
        // 租赁高性能场景：使用 cabinetSetPrice
        html += `<div class="calculation-item">高性能租赁单箱体价：${details.cabinetSetPrice}</div>`;
    } else if (details.isRental) {
        // 其他租赁场景：(USD/sqm + cabinetPrice500x1000) × 箱体面积
        const sign = details.cabinetPrice500x1000 > 0 ? '+' : '';
        html += `<div class="calculation-item">租赁单箱体价：(${details.basePricePerSqm} ${sign}${details.cabinetPrice500x1000}) × ${details.cabinetWidth} × ${details.cabinetHeight}</div>`;
        html += `<div class="calculation-item">单箱体价格：$${details.cabinetPrice.toFixed(2)}</div>`;
    } else {
        // 固定场景：使用 cabinetSetPrice
        html += `<div class="calculation-item">固定场景单箱体价：${details.cabinetSetPrice}</div>`;
    }

    html += `<div class="calculation-item total">总计：${details.cabinetCount} × $${details.cabinetPrice.toFixed(2)} = $${details.totalPrice.toLocaleString()}</div>`;

    priceCalculation.innerHTML = html;
}

// 兼容性函数，同时调用两个显示函数
function displaySimplifiedCalculation(details) {
    displayCabinetCalculation(details);
    displayPriceCalculation(details);
}

// 填充型号选择下拉框
function populateModelSelector(models, currentModel) {
    modelSelector.innerHTML = '<option value="">选择其他型号</option>';

    models.forEach(model => {
        const option = document.createElement('option');
        option.value = model.model;
        option.textContent = `${model.model} (${model.pixelPitch}mm)`;
        if (model.model === currentModel) {
            option.selected = true;
        }
        modelSelector.appendChild(option);
    });
}

// 处理型号选择
function handleModelSelection(event) {
    const selectedModelName = event.target.value;

    if (!selectedModelName) {
        // 如果选择"选择其他型号"，恢复到推荐的型号
        if (window.quotationResult) {
            const recommendedModel = window.quotationResult.recommendation.product;
            updateModelDisplay(recommendedModel, window.quotationResult.recommendation);
            updatePriceAndCabinetDisplay(window.quotationResult.priceInfo);
        }
        return;
    }

    // 找到选中的型号
    const selectedModel = availableModels.find(model => model.model === selectedModelName);

    if (!selectedModel) return;

    // 重新计算价格和箱体数量
    const newPriceInfo = calculatePrice(
        formData.environment,
        formData.preference,
        formData.screenWidth,
        formData.screenHeight,
        selectedModel
    );

    // 更新显示
    document.getElementById('recommended-model').textContent = selectedModel.model;
    document.getElementById('pixel-pitch').textContent = `${selectedModel.pixelPitch}mm`;

    updatePriceAndCabinetDisplay(newPriceInfo);

    // 更新箱体计算过程
    displaySimplifiedCalculation(newPriceInfo.calculationDetails);
}

// 更新型号显示
function updateModelDisplay(model, recommendation) {
    document.getElementById('recommended-model').textContent = model.model;
    document.getElementById('pixel-pitch').textContent = `${model.pixelPitch}mm`;
}

// 更新价格和箱体数量显示
function updatePriceAndCabinetDisplay(priceInfo) {
    document.getElementById('cabinet-count').textContent = `${priceInfo.cabinetCount} 个`;
    document.getElementById('price-range').textContent = priceInfo.priceRange;
}

// 点击弹窗外部关闭
window.addEventListener('click', function(event) {
    if (event.target === contactModal) {
        closeContactModal();
    }
});