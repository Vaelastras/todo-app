# Todos App 

Проект написан на React.js в формате SPA и представляет собой список записей в формате TODO, для контроля выполнения задач.
Проект доступен в режимах разработки и сборки.

[Ссылка на паблишинг проекта](https://todo-app-qinwtznid-vaelastras.vercel.app/). <br/>
[Ссылка на контейнер с образом в Docker](https://hub.docker.com/repository/docker/vaelastras/todoapp). 


## **Описание проекта и функциональность.**

**1.** Для добавления новой карточки введите в поле ввода текст и нажмите кнопку _*`Добавить`*_ (требуется минимум 4 символа), карточка создаётся автоматически и ей присваивается уникальный номер.  

**2.** Переключение статуса карточки (Выполнено/Не выполнено) происходит по клику в карточку. Выполненные карточки будут <span style="background: lightgreen; color: black">&nbsp;<strong>вот такого цвета</strong>&nbsp;</span>, а не выполненные - <span style="background: tomato; opacity: .75; color: black">&nbsp;<strong>вот такого</strong>&nbsp;</span>.

**3.** Удаление карточки происходит при нажатии на <span style=color:red><b>КРАСНУЮ КНОПКУ</b></span>. Нужно будет подтвердить свое решение в всплывающем окне<br/>

**4.** Реализован функционал переключения между статусом карточек. Их всего 3: 
- активные;
- выполненные; 
- все вместе.  

**5.** Пользователю доступен "живой" поиск по существующим карточкам - вводите в строке поиска название дела или его идентификатор - вам будут показаны только те карты, в названии которых есть искомые символы.  
   **`Важно!` Не забывайте про кнопки переключения статуса карточек!**

**6.** По клику в иконку с лупой, можно перейти в Яндекс и поискать информацию о задаче там;

**7.** Нумерация карточек сквозная. Это означает, что вы можете осуществлять поиск, в том числе, и по номеру карточки.

**8.** В шапке страницы ведется подсчет количества оставшихся дел и их общее количество. Также реализовано отображение локального времени

**9.** Ваш список дел всегда будет актуален благодаря сохранению данных в кэше вашего браузера (используется localStorage)

**10.** Доступен функционал динамической смены обоев. За обои - огромное спасибо Владу Герасимову и его проекту [Vlad.studio](https://vlad.studio/). Влад, ты крутой, пусть ты это и не прочитаешь 8)

**11.** Страница доступна в разрешениях не ниже 320 пикселей на дюйм - то есть на подавляющем большинстве современных мобильных устройств


<br/>

## Запуск проекта

### 1. Для запуска в режиме разработки.
**`NB.: Для работы проекта в этом режиме необходим установленный [Node.js](https://nodejs.org/) последней версии (он включает в себя Node Package Manager - обеспечивающий доступ к утилите npm )`**
1. Клонируйте репозиторий в терминале или CLI вашего IDE;
2. введите команду `npm install` (это установит все необходимые дев-зависимости);
3. Введите команду `npm run start` в вашем терминале (это запустит проект);
4. Введите  [https://localhost:3000](https://localhost:3000]) в адресной строке вашего браузера, или кликните в ссылку; 
5. Приятного кодинга;)  


### 2. Для запуска в режиме сборки.
1. Как будет готово - введите в терминале `npm build` (это соберет проект в папку `build` в корне проекта);
2. Если хотите заглянуть в нутро сборщика `CRA` - введите в терминале `npm eject` - отменить это действие нельзя, надеюсь вы знаете, что делаете 🙃


### 3. Для запуска контейнера Docker.

1. Зарегистрируйтесь на DockerHub, войдите в систему через CLI;
2. Введите `docker pull vaelastras/todoapp:latest` в терминале, чтобы скачать образ;
3. Введите `docker run -d -p 3000:4200 --rm --name todoapp vaelastras/todoapp`, где: 
   - `-d` - не переходить в консоль контейнера,
   - `-p` - открыть приложение на локальном 3000 порту и взять данные из 4200 порта контейнера,
   - `--rm` - удалить контейнер по окончании работы с ним;
   - `--name todoapp` - задает локальное имя контейнеру;
   - `vaelastras/todoapp` - построить контейнер на основании образа
4. Для остановки работы контейнера введите `docker stop todoapp`

____
## Использованный стек:

1. React 17 + Hooks;
2. MobX 6;
3. HTML5, CSS-modules, SCSS + postCSS(CRA);
4. JS ES7
5. Bootstrap components;
6. Eslint + airbnb preset
7. Docker

### Фиче-план:
1. Добавить счетчик отображения суммарного времени выполнения задачи (как в JIRA 😂);  
2. Реализовать компоненту WeatherApi для отображения инфо о погоде в регионе пользователя ⾬;  
3. Реализовать компоненту вывода информации о событиях текущего дня в прошлом настоящем и возможно будущем☔︎☀︎😂;  
4. Реализовать компоненту логирования выполнения задач;  
5. Переписать код SPA на TypeScript.


## ChangeLog
05.10.2021 - v 1.1.0 
--- 
1. Добавлен поиск в Яндексе
2. Добавлен функционал подтверждения удаления карты

