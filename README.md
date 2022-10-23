              #contacts CLI



# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list

https://monosnap.com/file/cX6pilsLKYo1MtkfUyTmWlplwMEJ1p

# Получаем контакт по id
node index.js --action get --id 5

https://monosnap.com/file/LIzIIvORLTQQ8g6cnvxihTdYtemaFi

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

https://monosnap.com/file/WYcHuGXAVA1GTU4RhsfFM9RE6PkvgX

# Удаляем контакт
node index.js --action remove --id=3

https://monosnap.com/file/5BnZCXsMhfzRHSU9OCJsEyzxOGA8JK
