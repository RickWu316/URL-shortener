# 短網址產生器

此專案會將使用者填入的網址轉換為短網址



## 環境建置
* Node.js v10.15.0
* Express v4.17.1
* Express-handlebars v5.2.0
* body-parser: 1.19.0
* mongoose: 5.11.8

專案安裝流程

## 專案安裝流程

1. 打開你的 terminal，Clone 此專案至本機電腦

```
git clone https://github.com/RickWu316/rstaurant_list.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```shell
cd URL-Shortener
```

3. 安裝 npm 套件

```shell
npm install
```

4. 安裝 nodemon 套件

```shell
npm install -g nodemon 
# 若先前在本地開發環境中指令安裝過可跳至下步驟
```


5. 載入 seede
```shell
 npm run seed
```

6. 啟動伺服器，執行 app.js 檔案

```shell
nodemon app.js
```

7. 當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
The Express server is running on http://localhost:3000

```

現在，你可開啟任一瀏覽器瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 開始進入網頁