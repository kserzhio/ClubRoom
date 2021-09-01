Установка
1. npm install - устанавливаем все зависимости
2. Для создания настроек приложения, необходимо скопировать файл .env.example и сохранить его в env в папке server
3. Указать GITHUB_CLIENT_ID И GITHUB_CLIENT_SECRET, которые можно вытащить из созданого OAuth-приложения в Github'e.

Запуск
Необходимо запустить сервер и NextJs. Перед запуском сделать npm run migrate
1. npm run server - запускаем Express-сервер
2. npm run dev - запускаем NextJs  приложение
