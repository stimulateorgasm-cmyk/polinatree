# Полина Red — дерево ссылок

Линктри Полины Red. Работает на **https://links.polinared.ru** (VPS 85.198.101.35).

Стек: React 19 + Vite + TypeScript + Tailwind CSS v4. Чистый статический SPA — бэкенда нет.

## Структура

- `src/App.tsx` — вся страница (профиль, ссылки, кнопки «Сохранить контакт» / «Написать» / «QR» / «Поделиться», цитаты, модалки политики/оферты).
- `public/` — фото: `avatar.jpg`, `og.jpg`, `hero.jpg`.
- `index.html` — заголовки и Open Graph / Twitter-теги.
- `deploy.sh` — сборка и деплой на сервер.

## Как править (через Claude Code)

1. Скачай репозиторий: `git clone https://github.com/stimulateorgasm-cmyk/polinatree.git`
2. Установи зависимости: `npm install`
3. Правишь `src/App.tsx` (тексты, ссылки, фото — всё там).
4. Проверь локально: `npm run dev` → http://localhost:3000
5. Задеплой: `./deploy.sh`

## Деплой

```bash
./deploy.sh
```

Скрипт собирает `dist/` и копирует его на сервер в `/var/www/polinatree` через SSH.
Нужен SSH-доступ: твой ключ должен быть в `~/.ssh/authorized_keys` пользователя `root` на 85.198.101.35.

Если правишь прямо на сервере (Claude Code запущен в `/var/www/polinatree`), деплой — просто пересобрать и скопировать `dist/` туда же.

## Серверная часть (уже настроена, трогать не нужно)

- nginx: `/etc/nginx/sites-available/links-polinared` (HTTP-редирект + SSL-блок на `127.0.0.1:8444`)
- SNI-прокси: `/etc/nginx/stream.conf` (`links.polinared.ru → 127.0.0.1:8444`)
- SSL: Let's Encrypt (certbot, автопродление), сертификат в `/etc/letsencrypt/live/links.polinared.ru/`

Обычные правки контента эти файлы не затрагивают.
