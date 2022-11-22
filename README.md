# 短網址產生器
可以將使用者所提供的網址轉換為較短網址的產生器

![finish URL shortener](https://user-images.githubusercontent.com/116162205/203322975-114c4cd1-11ec-4380-a0e1-6d9fe15f4582.png)


## 功能
* 輸入想縮短的網址並點擊create按鈕後會得到縮短後的網址
* 已輸入過的網址會被記錄再次縮短時會得到相同的網址
* 可藉由Copy按鈕複製短網址
* 開啟伺服器期間可以經由短網址連結至原本網址

## 開始使用
1. 請先確認已安裝 node.js 與 npm (版本請見下方開發工具)
2. 經由終端機clone或下載本專案至本地資料夾
  ```
  https://github.com/chachagof/url-shortener
  ```
3. 於終端機進入存放本專案的資料夾
  ```
  cd url-shortener
  ```
4. 安裝 npm 套件
  ```
  npm install
  ```

5. 新增```.env```檔案，並設置資料庫連線字串
  ```
  MONGODB_URL=mongodb+srv://<account>:<password>@cluster0.<xxxxx>.mongodb.net/<table>?retryWrites=true&w=majority
  ```
6. 欲啟動專案，請繼續輸入
  ```
  npm run dev
  ```
7. 若在終端機看到下方訊息代表順利運行，於瀏覽器中輸入該網址([http://localhost:3000](http://localhost:3000))即可開始使用本網站
  ```
  Listening on http://localhost:3000
  ```
8. 如需暫停使用，請於終端機內按下ctrl + c，即可結束


## 開發工具
* Node.js 18.12.0
* Express 4.18.2
* Express-Handlebars 6.0.6
* Mongoose 6.7.2
* dotenv 16.0.3
* Bootstrap 5.1.3
