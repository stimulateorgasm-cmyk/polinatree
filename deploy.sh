#!/usr/bin/env bash
# Деплой линктри Полины Red на https://links.polinared.ru
# Копирует собранный dist/ на сервер по SSH.
#
# Использование:
#   ./deploy.sh                # деплой на VPS Полины (85.198.101.35)
#   POLINA_HOST=user@host ./deploy.sh   # другой SSH-хост
set -euo pipefail

HOST="${POLINA_HOST:-root@85.198.101.35}"
REMOTE_DIR="/var/www/polinatree"

echo "▶️  Сборка (npm run build)…"
npm run build

echo "▶️  Деплой на ${HOST}:${REMOTE_DIR}…"
tar czf - -C dist . | ssh "$HOST" \
  "tar xzf - -C ${REMOTE_DIR} && find ${REMOTE_DIR} -name '._*' -delete && chown -R root:root ${REMOTE_DIR}"

echo "✅ Готово: https://links.polinared.ru"
