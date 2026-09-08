# 甲骨万象 / Oracle Bone Atlas

一个可直接部署到 GitHub Pages 的纯静态双语甲骨文字形图鉴。无需 Node.js、数据库、API Key 或构建命令。

A bilingual, fully static oracle-bone glyph atlas ready for GitHub Pages. No Node.js, database, API key, or build step is required.

## 功能 / Features

- 中文 / English 一键切换，并记住访客的语言偏好
- 1,956 个可检索的现代 Unicode 字符映射
- 可按现代汉字、Unicode 编码或字符区段检索
- 基本区、扩展区、精选筛选
- 随机浏览、骨白 / 拓片显示模式、字形详情
- 手机与桌面端响应式布局

## 部署到 GitHub Pages

1. 在 GitHub 新建一个 **Public** repository。
2. 解压 ZIP，把其中的所有文件上传到 repository 根目录。请确认 **index.html** 直接位于根目录，而不是套在另一层文件夹中。
3. 打开 repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择：
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
5. 点击 **Save**。通常等待几分钟后即可访问：

   https://你的用户名.github.io/repository名称/

如果 repository 名称正好是 **你的用户名.github.io**，网址就是：

https://你的用户名.github.io/

## Deploy to GitHub Pages

1. Create a new **public** GitHub repository.
2. Extract the ZIP and upload every file to the repository root. Make sure **index.html** is at the root, not inside an extra folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, then choose **main** and **/(root)**.
5. Save. Your site will normally appear within a few minutes at:

   https://your-username.github.io/repository-name/

## 数据边界 / Data scope

主图鉴收录的是开放字体中具有现代 CJK Unicode 直接映射的代表字形，不等同于“所有已发现甲骨刻辞”或“所有甲骨文字形”。字头、异体、合文与未释读字的统计口径并不相同。详细出处见 **SOURCES.md** 和网页内的“数据说明 / About the data”。

The main catalogue contains representative forms with direct modern CJK Unicode mappings in the bundled open font. It is not a claim to contain every excavated inscription or every attested oracle-bone form. See **SOURCES.md** and the in-site data notes for methodology.

## 字体许可 / Font license

**assets/Oracular-Catalog.woff** 依 SIL Open Font License 1.1 使用；完整许可文本位于 **assets/OFL.txt**。

**assets/Oracular-Catalog.woff** is used under the SIL Open Font License 1.1. The complete license is included at **assets/OFL.txt**.
