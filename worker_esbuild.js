// build.js
const esbuild = require('esbuild');

esbuild
    .build({
        entryPoints: ['src/_worker.js'], // 入口文件
        bundle: true, // 启用打包
        // outdir: 'dist', // 输出文件夹
        outfile: 'dist/_worker.js', // 输出文件名
        sourcemap: true, // 生成 Source Map
        minify: true, // 压缩代码
        target: ['es2020'], // 目标环境
        format: 'esm', // 输出格式为 ES 模块
        platform: 'browser', // 目标平台为浏览器
    })
    .catch(() => process.exit(1));
