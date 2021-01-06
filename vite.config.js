import vue from '@vitejs/plugin-vue'

/**
 * 条件配置
 * @type {import('vite').UserConfig}
 * @param command 如：serve、build
 * @param mode 如：development、production
 * @returns {{plugins: [Plugin]}}
 */
export default ({command, mode}) => {
    const result = { // 公共部分
        plugins: [vue()]
    }

    if (command === 'serve') {
        console.log('开发配置')
        Object.assign(result, { // 开发配置

        });
    } else {
        console.log('生产配置')
        Object.assign(result, { // 生产配置

        });
    }

    return result
}