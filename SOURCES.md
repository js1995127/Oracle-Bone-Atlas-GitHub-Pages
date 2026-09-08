# 甲骨万象：数据口径与来源

本项目把“字头”与“字形”分开处理。公开图鉴层只展示镜原甲骨字库中可以由标准 CJK Unicode 字符直接寻址的 1,956 个映射；没有现代 Unicode 直接对照的专用码位字形不被强行标注为某个现代汉字。

## 学术与开放数据来源

- 中央研究院“小学堂甲骨文”：截至 2026 年 9 月，页面标示收录 2,548 个字头、24,701 个字形。https://xiaoxue.iis.sinica.edu.tw/jiaguwen
- Wang et al. (2024), *An open dataset for oracle bone character recognition and decipherment*, Scientific Data 11, 976：HUST-OBC 含 77,064 张、1,588 类已释读字图片，以及 62,989 张、9,411 类未释读字图片，总计 140,053 张。https://www.nature.com/articles/s41597-024-03807-x
- HUST-OBC 开放仓库与映射文件说明：https://github.com/Pengjie-W/HUST-OBC
- 镜原甲骨字库 v1.0.1：网页声明字体依据 SIL Open Font License 1.1 发布。https://oracular.azurewebsites.net/glyphs/download

## 实现说明

`scripts/build_catalog.py` 从字体的 Unicode cmap 提取 CJK 基本区与扩展区的直接映射，生成 `dist/assets/catalog.js`，并以同一清单生成网页字体子集。字体映射是检索与展示入口，不自动代表古文字学界对每一字的字义、用法或释读已达成完全共识。
